// The map view: one 3D scene that is a flat-looking map when you look straight down and a 3D
// model when you tilt it. Navigation works like a web map (drag to pan, scroll or pinch to zoom at
// the cursor, right-drag or Ctrl/Shift-drag to rotate and tilt); editing works the same at any
// angle: click to place, drag things to move them, and drag the handles that appear on the
// selection (corners, height, rotation, camera aim, field of view, range).
//
// Plan (x, y) is world (x, z) with Y up; plan units are usually feet.
import * as THREE from "three";
import CameraControls from "camera-controls";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { DEFAULT_BUILDING, DEFAULT_CAMERA_HEIGHT_FT, DEFAULT_CAMERA_PITCH, DEFAULT_IR_RANGE_FT, OBJECT_ELEVATION_OFFSET, clamp, mountHeightForBuilding } from "../constants";
import { getCameraAspectValue, getCameraHFov, lensBarrel, suggestPitchForDistance } from "../lib/camera";
import { boundsOfPoints, type Bounds } from "../lib/view";
import {
  buildingBaseHeight,
  buildingLocalPoints,
  buildingWorldPoints,
  cameraMountHeight,
  cameraPlanPosition,
  cameraUnderRoof,
  heightAt,
  nearestWall,
  rotatePoint,
  toBuildingLocal,
  wallSnapDistance
} from "../lib/planGeom";
import { getEdgeOutwardNormal, pointInPolygonXY } from "../lib/geometry";
import { isOwnBuilding } from "../lib/items";
import { isDoor, openingPlace, snapToWall, wallPieces } from "../lib/openings";
import { hasRailing, insetParts, movePartEdge, nearestEdge, nearestSide, openPartEdges, openPartsOf, partEntries, partFromCorners, partRoof, partSides } from "../lib/openParts";
import { create3dCar, create3dTree, getCarSignature, getTreeSignature } from "../three/models";
import { buildingRoofKind, createBuildingModel, isGableWall } from "../three/buildingMesh";
import { doorsOnWalls } from "../three/buildings";
import { createCameraModel } from "../three/cameraModel";
import { createPaving } from "../three/paving";
import { disposeObjectDeep } from "../three/dispose";
import type { BuildingItem, CameraItem, CanvasItem, Opening, ImageItem, LabelItem, ParkingItem, PavingItem, RecorderItem, TargetItem, TreeItem } from "../types";
import { Ground } from "./ground";
import { buildCoverageFan, buildFrustumLines } from "./coverage";
import type { P, ViewCallbacks, ViewDoc, ViewInfo, ViewTool } from "./types";

CameraControls.install({ THREE });
const { ACTION } = CameraControls;

const DEG = Math.PI / 180;
const SUN_INTENSITY = 2.4;
const HEMI_INTENSITY = 0.9;
const CLICK_PX = 4;
const TILT_TOP = 8 * DEG;
const DEFAULT_TILT = 52 * DEG;
const MAX_TILT = 74 * DEG;
const SELECT = 0x10b981;
const SKY_HAZE = "#d6e2ea";

type Drag = { move: (e: PointerEvent) => void; end: (e: PointerEvent) => void };
type Handle = {
  el: HTMLDivElement;
  kind: string;
  index?: number;
  world: () => THREE.Vector3 | null;
  start: (e: PointerEvent) => Drag | null;
  /** Hidden when it would crowd the others (e.g. edge dots on a building that is small on screen). */
  visible?: () => boolean;
};
type Overlay = { el: HTMLDivElement; anchor: THREE.Vector3; dy: number; sig: string; w?: number; h?: number };

const STYLE = `
.scp-layer{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.scp-ov{position:absolute;left:0;top:0;will-change:transform;white-space:nowrap}
.scp-cam{pointer-events:auto;cursor:move;display:flex;align-items:center;gap:4px;padding:2px 7px 2px 5px;border-radius:999px;background:rgba(255,255,255,.94);color:#1e293b;font:700 11px system-ui,sans-serif;box-shadow:0 1px 4px rgba(0,0,0,.35);border:1.5px solid var(--c)}
.scp-cam i{min-width:15px;height:15px;padding:0 3px;border-radius:999px;background:var(--c);color:#fff;font:800 10px/15px system-ui,sans-serif;font-style:normal;text-align:center;display:block}
.scp-cam.sel{outline:2px solid #10b981;outline-offset:1px}
.scp-measure{pointer-events:none;padding:1px 6px;border-radius:6px;background:#facc15;color:#1c1917;font:700 11px system-ui,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,.4);white-space:nowrap}
.scp-measure.total{background:#1c1917;color:#facc15}
.scp-pin{pointer-events:auto;cursor:move;display:flex;flex-direction:column;align-items:center}
.scp-pin b{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font:800 12px system-ui,sans-serif;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.45)}
.scp-pin span{margin-top:2px;font:700 11px system-ui,sans-serif;color:#fff;text-shadow:0 0 3px #000,0 0 2px #000}
.scp-pin.sel b{outline:3px solid rgba(16,185,129,.9)}
.scp-rec b{width:auto;padding:0 6px;border-radius:6px;background:#f59e0b;color:#1c1917;font-size:10px;letter-spacing:.04em}
.scp-bld{font:700 12px system-ui,sans-serif;color:#fff;text-shadow:0 0 4px rgba(0,0,0,.9),0 0 2px #000}
.scp-text{pointer-events:auto;cursor:move;font-weight:700;font-family:system-ui,sans-serif;text-shadow:0 0 3px #fff,0 0 2px #fff}
.scp-text.sel{color:#059669 !important}
.scp-h{position:absolute;left:0;top:0;pointer-events:auto;will-change:translate;box-sizing:border-box;touch-action:none}
.scp-h[data-handle=corner]{width:14px;height:14px;border-radius:50%;background:#fff;border:2.5px solid #059669;cursor:grab;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.scp-h[data-handle=mid]{width:11px;height:11px;border-radius:50%;background:rgba(255,255,255,.65);border:2px solid #059669;cursor:copy}
.scp-h[data-handle=height],.scp-h[data-handle=cam-height]{width:22px;height:30px;cursor:ns-resize;display:flex;align-items:center;justify-content:center}
.scp-h[data-handle=height]::before,.scp-h[data-handle=cam-height]::before{content:"";width:12px;height:26px;border-radius:6px;background:#fff;border:2.5px solid #2563eb;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.scp-h[data-handle=rotate]{width:24px;height:24px;border-radius:50%;background:#fff;border:2.5px solid #2563eb;cursor:grab;box-shadow:0 1px 3px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;color:#2563eb;font:900 14px system-ui}
.scp-h[data-handle=aim]{width:20px;height:20px;border-radius:50%;background:#3b82f6;border:3px solid #fff;cursor:crosshair;box-shadow:0 1px 4px rgba(0,0,0,.55)}
.scp-h[data-handle=fov-l],.scp-h[data-handle=fov-r],.scp-h[data-handle=range],.scp-h[data-handle=radius]{width:15px;height:15px;border-radius:50%;background:var(--c,#3b82f6);border:2.5px solid #fff;cursor:ew-resize;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.scp-h[data-handle=range]{cursor:ns-resize}
.scp-h[data-handle=opening-size]{width:11px;height:11px;border-radius:2px;background:#fff;border:2px solid #0ea5e9;cursor:ew-resize;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.scp-h[data-handle=opening-size][data-index="2"],.scp-h[data-handle=opening-size][data-index="3"]{cursor:ns-resize}
.scp-h[data-handle=opening]{width:10px;height:10px;border-radius:50%;background:#0ea5e9;border:2px solid #fff;cursor:move;box-shadow:0 1px 3px rgba(0,0,0,.5);opacity:.55;transition:opacity .15s,scale .15s}
/* Handles are placed with the translate property, so scale grows them where they are */
.scp-h[data-handle=opening]:hover,.scp-h[data-handle=opening][data-picked="1"]{opacity:1;scale:1.25}
.scp-h[data-handle=gable]{width:22px;height:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;filter:drop-shadow(0 1px 2px rgba(0,0,0,.6))}
.scp-h[data-handle=gable]::before{content:"";width:20px;height:14px;background:#fff;clip-path:polygon(0 100%,100% 100%,100% 45%,50% 0,0 45%);border:0}
.scp-h[data-handle=gable][data-gable="1"]::before{background:#a855f7;clip-path:polygon(0 100%,100% 100%,50% 0)}
.scp-h[data-handle=part-steps]{width:18px;height:12px;border-radius:2px;background:repeating-linear-gradient(180deg,#fff 0 3px,#f59e0b 3px 4px);border:2px solid #f59e0b;cursor:move;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.scp-h[data-handle=part-edge]{width:13px;height:13px;border-radius:3px;background:#fff;border:2.5px solid #f59e0b;cursor:move;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.scp-h[data-handle=part-floor]{width:22px;height:22px;cursor:ns-resize;display:flex;align-items:center;justify-content:center}
.scp-h[data-handle=part-floor]::before{content:"";width:18px;height:10px;border-radius:4px;background:#fff;border:2.5px solid #f59e0b;box-shadow:0 1px 3px rgba(0,0,0,.5)}
@media (pointer:coarse){.scp-h{transform-origin:center}.scp-h[data-handle]{scale:1.5}}
`;

const itemPoint = (item: CanvasItem, items: CanvasItem[]) => (item.type === "camera" ? cameraPlanPosition(item as CameraItem, items) : { x: item.x, y: item.y });

export class SiteView {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: CameraControls;
  private sun = new THREE.DirectionalLight(0xfff6e5, SUN_INTENSITY);
  private ground: Ground;
  private itemsGroup = new THREE.Group();
  private coverageGroup = new THREE.Group();
  private fx = new THREE.Group();
  private labelsLayer: HTMLDivElement;
  private handlesLayer: HTMLDivElement;
  private objects = new Map<string, { obj: THREE.Object3D; sig: string }>();
  private fans = new Map<string, { obj: THREE.Object3D | null; sig: string }>();
  private overlays = new Map<string, Overlay>();
  private handles: Handle[] = [];
  private handleKey = "";
  private frustum: THREE.Object3D | null = null;
  private selectionFx: THREE.Object3D | null = null;
  private hoverFx: THREE.Object3D | null = null;
  private ghost: THREE.Object3D | null = null;
  private ghostFan: THREE.Object3D | null = null;
  private ghostKey = "";
  private lastCorner: { id: string; index: number; time: number } | null = null;
  private brush: THREE.LineLoop;
  private blind: THREE.Object3D | null = null;
  private cables: THREE.Object3D | null = null;
  private cablesKey: [unknown, number] = [null, -1];
  private blindRef: unknown = null;
  private doc: ViewDoc | null = null;
  private heightsVersion = 0;
  private heightsRef: unknown = null;
  private selectedId: string | null = null;
  private hoverId: string | null = null;
  private tool: ViewTool = { mode: "select", terrain: false, terrainTool: "sculpt", brushRadius: 40, aimingCameraId: null, vertexInsert: false, mapMove: false, preview: null, opening: null };
  private raycaster = new THREE.Raycaster();
  private dirty = true;
  private shadowsDirty = true;
  private raf = 0;
  private clock = new THREE.Clock();
  private size = { width: 1, height: 1 };
  private pose: "top" | "tilt" = "top";
  private posePinned = false;
  private dragging = false;
  private spaceDown = false;
  private restoreLeft: (() => void) | null = null;
  private viewListeners = new Set<(info: ViewInfo) => void>();
  private lastViewKey = "";
  private fitted = false;
  private ro: ResizeObserver;
  private env: THREE.Texture;
  private hoverFrame = 0;
  private lastPointer: { x: number; y: number } | null = null;
  private disposers: (() => void)[] = [];
  // Camera views: what a security camera sees, rendered from this same scene.
  private povCam = new THREE.PerspectiveCamera(60, 16 / 9, 0.3, 20000);
  private povId: string | null = null;
  private skyDome: THREE.Mesh;
  private horizon: THREE.Mesh;
  private povRect = { x: 0, y: 0, width: 1, height: 1 };
  private povInset = 0;
  private povNight = false;
  private hemi = new THREE.HemisphereLight(0xeef4ff, 0x6b6250, HEMI_INTENSITY);
  private irLight = new THREE.SpotLight(0xffffff, 0, 0, 0.6, 0.5, 2);
  private groundTone: { src: unknown; color: THREE.Color } | null = null;

  constructor(private container: HTMLDivElement, private cb: ViewCallbacks) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;
    const canvas = this.renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.display = "block";
    container.appendChild(canvas);

    if (!document.getElementById("scp-view-style")) {
      const style = document.createElement("style");
      style.id = "scp-view-style";
      style.textContent = STYLE;
      document.head.appendChild(style);
    }
    this.labelsLayer = document.createElement("div");
    this.labelsLayer.className = "scp-layer";
    this.handlesLayer = document.createElement("div");
    this.handlesLayer.className = "scp-layer";
    container.appendChild(this.labelsLayer);
    container.appendChild(this.handlesLayer);

    // A dusky horizon behind the ground when tilted (darker overhead), in the app's dark palette.
    {
      const c = document.createElement("canvas");
      c.width = 2;
      c.height = 256;
      const g = c.getContext("2d")!;
      const grad = g.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0, "#131418");
      grad.addColorStop(0.6, "#22262e");
      grad.addColorStop(1, "#343a44");
      g.fillStyle = grad;
      g.fillRect(0, 0, 2, 256);
      const sky = new THREE.CanvasTexture(c);
      sky.colorSpace = THREE.SRGBColorSpace;
      this.scene.background = sky;
    }
    // Daylight sky for camera views: a dome, deep blue overhead fading to the haze color at the
    // horizon (which the distance fog also uses, so far ground melts into the sky).
    {
      const geo = new THREE.SphereGeometry(1, 32, 16);
      const pos = geo.getAttribute("position");
      const colors = new Float32Array(pos.count * 3);
      const zenith = new THREE.Color("#4f86c6");
      const haze = new THREE.Color(SKY_HAZE);
      const c = new THREE.Color();
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        c.copy(haze).lerp(zenith, y > 0 ? Math.pow(y, 0.55) : 0);
        colors.set([c.r, c.g, c.b], i * 3);
      }
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      this.skyDome = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false, toneMapped: false }));
      this.skyDome.renderOrder = -10;
      this.skyDome.visible = false;
      this.skyDome.frustumCulled = false;
      this.skyDome.userData.noPick = true;
    }
    // Ground beyond the site, out to the horizon (only in camera views), so the site doesn't end in a cliff.
    {
      const geo = new THREE.CircleGeometry(1, 64);
      geo.rotateX(-Math.PI / 2);
      this.horizon = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0x7d8a6c }));
      this.horizon.receiveShadow = true;
      this.horizon.visible = false;
      this.horizon.userData.noPick = true;
    }
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.env = pmrem.fromScene(new RoomEnvironment()).texture;
    pmrem.dispose();
    this.scene.environment = this.env;
    this.scene.add(this.hemi);
    // The infrared lamp for night views: always in the scene (off by day), so switching to night
    // doesn't change the light setup the shaders were built for.
    this.irLight.intensity = 0;
    this.scene.add(this.irLight, this.irLight.target);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.6;
    this.scene.add(this.sun, this.sun.target);

    this.camera = new THREE.PerspectiveCamera(30, 1, 0.5, 20000);
    this.controls = new CameraControls(this.camera, canvas);
    const c = this.controls;
    // Start looking straight down, north up.
    void c.setLookAt(500, 1500, 350, 500, 0, 350, false);
    c.mouseButtons.left = ACTION.NONE;
    c.mouseButtons.middle = ACTION.NONE;
    c.mouseButtons.right = ACTION.ROTATE;
    c.mouseButtons.wheel = ACTION.NONE;
    c.touches.one = ACTION.TOUCH_TRUCK;
    c.touches.two = ACTION.TOUCH_DOLLY_ROTATE;
    c.touches.three = ACTION.TOUCH_TRUCK;
    c.minPolarAngle = 0;
    c.maxPolarAngle = MAX_TILT;
    c.smoothTime = 0.16;
    c.draggingSmoothTime = 0.06;
    c.azimuthRotateSpeed = 0.7;
    c.polarRotateSpeed = 0.7;
    c.dollyToCursor = true;
    c.addEventListener("controlend", () => this.snapNorth());
    c.addEventListener("controlstart", () => { this.posePinned = false; });
    c.addEventListener("rest", () => { this.posePinned = false; });

    this.ground = new Ground(this.renderer, () => this.invalidate(true));
    this.scene.add(this.ground.group, this.itemsGroup, this.coverageGroup, this.fx, this.horizon, this.skyDome);

    const brushGeo = new THREE.BufferGeometry();
    brushGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(72 * 3), 3));
    this.brush = new THREE.LineLoop(brushGeo, new THREE.LineBasicMaterial({ color: 0xf59e0b, depthTest: false, transparent: true }));
    this.brush.renderOrder = 20;
    this.brush.frustumCulled = false;
    this.brush.visible = false;
    this.fx.add(this.brush);

    const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement | Window, type: K, fn: (e: HTMLElementEventMap[K]) => void, opts?: AddEventListenerOptions) => {
      el.addEventListener(type, fn as EventListener, opts);
      this.disposers.push(() => el.removeEventListener(type, fn as EventListener, opts));
    };
    on(container, "pointerdown", e => this.onPointerDown(e), { capture: true });
    on(container, "wheel", e => this.onWheel(e), { capture: true, passive: false });
    on(container, "pointermove", e => this.onHoverMove(e));
    on(container, "pointerleave", () => { this.lastPointer = null; this.cb.onHover(null); this.setHover(null); this.brush.visible = false; this.updateGhost(null); this.invalidate(); });
    on(container, "dblclick", e => this.onDoubleClick(e));
    on(container, "contextmenu", e => e.preventDefault());
    on(window, "keydown", e => { if (e.key === " " && !(e.target as HTMLElement)?.closest?.("input,textarea,select")) this.spaceDown = true; });
    on(window, "keyup", e => { if (e.key === " ") this.spaceDown = false; });

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.resize();
    this.loop();
  }

  // ------------------------------------------------------------------ public API

  setDoc(doc: ViewDoc) {
    const prev = this.doc;
    this.doc = doc;
    if (doc.heights !== this.heightsRef) {
      this.heightsRef = doc.heights;
      this.heightsVersion++;
    }
    const groundChanged = this.ground.update(doc);
    this.syncItems(prev);
    this.syncCoverage();
    this.syncBlindSpots();
    this.syncCables();
    this.syncSelection();
    this.syncOverlays();
    this.syncHandles();
    this.updateLimits();
    this.placeSun();
    if (groundChanged || !prev || prev.items !== doc.items || prev.sun !== doc.sun) this.shadowsDirty = true;
    if (!this.fitted && this.size.width > 1) {
      this.fitted = true;
      this.fitSite(false);
    }
    this.invalidate();
  }

  setSelection(id: string | null) {
    if (id === this.selectedId) return;
    this.selectedId = id;
    this.syncSelection();
    this.syncCoverage();
    this.syncOverlays();
    this.syncHandles();
    this.invalidate();
  }

  setTool(tool: ViewTool) {
    if (tool.mode !== "measure" && this.tool.mode === "measure") this.clearMeasure();
    this.tool = tool;
    this.brush.visible = tool.terrain && this.brush.visible;
    if (tool.mode === "select" || !tool.preview) this.updateGhost(null);
    this.updateCursor();
    this.syncHandles();
    this.invalidate();
  }

  onView(fn: (info: ViewInfo) => void) {
    this.viewListeners.add(fn);
    fn(this.viewInfo());
    return () => this.viewListeners.delete(fn);
  }

  invalidate(shadows = false) {
    this.dirty = true;
    if (shadows) this.shadowsDirty = true;
  }

  /** Look straight down (2D) or tilt into 3D, animated. */
  setPose(pose: "top" | "tilt", animate = true, fromUser = false) {
    const polar = this.controls.polarAngle;
    // The tabs follow the pose asked for; a passing overshoot of the animation must not flip them.
    this.pose = pose;
    this.posePinned = true;
    if (fromUser) this.cb.onPose(pose);
    if (pose === "top") {
      // The 2D view is a north-up plan.
      if (polar < 1e-3 && Math.abs(this.wrappedAzimuth()) < 1e-3) return;
      void this.controls.rotateTo(this.northAzimuth(), 0, animate);
    } else if (polar <= TILT_TOP) {
      void this.controls.rotatePolarTo(DEFAULT_TILT, animate);
    }
    this.invalidate();
  }

  toggleTilt() {
    this.setPose(this.controls.polarAngle > TILT_TOP ? "top" : "tilt", true, true);
  }

  resetNorth() {
    void this.controls.rotateAzimuthTo(this.northAzimuth(), true);
  }

  /** The azimuth nearest the current one that has north up. */
  private northAzimuth() {
    return this.controls.azimuthAngle - this.wrappedAzimuth();
  }

  /** Turn the view; positive turns the heading clockwise (the map turns the other way). */
  rotateBy(deg: number) {
    void this.controls.rotate(-deg * DEG, 0, true);
  }

  tiltBy(deg: number) {
    void this.controls.rotate(0, -deg * DEG, true);
  }

  zoomBy(factor: number) {
    const d = this.controls.distance / factor;
    void this.controls.dollyTo(clamp(d, this.controls.minDistance, this.controls.maxDistance), true);
  }

  /** Fit plan bounds in view, keeping the current rotation and tilt. */
  fitBounds(b: Bounds, opts: { minSpan?: number; margin?: number; animate?: boolean } = {}) {
    const doc = this.doc;
    if (!doc) return;
    const margin = opts.margin ?? 1.2;
    const minSpan = opts.minSpan ?? 0;
    const w = Math.max(b.maxX - b.minX, minSpan, 1) * margin;
    const d = Math.max(b.maxY - b.minY, minSpan * 0.6, 1) * margin;
    const aspect = this.size.width / Math.max(1, this.size.height);
    const t = Math.tan((this.camera.fov * DEG) / 2);
    const dist = clamp(Math.max(d / (2 * t), w / (2 * t * aspect)), this.controls.minDistance, this.controls.maxDistance);
    const cx = (b.minX + b.maxX) / 2;
    const cy = (b.minY + b.maxY) / 2;
    const animate = opts.animate ?? true;
    void this.controls.moveTo(cx, heightAt(doc.heights, doc.gridSize, cx, cy), cy, animate);
    void this.controls.dollyTo(dist, animate);
    this.invalidate();
  }

  /** Brings an item into view if it is off screen (or under the panel on the right): pans to it,
   * and zooms out only if it is too big to fit. */
  reveal(id: string, rightInset = 0) {
    const doc = this.doc;
    const b = this.itemBounds(id);
    if (!doc || !b) return;
    const box = this.screenBox(id);
    const m = 24;
    const visibleW = this.size.width - rightInset;
    if (box && box.x >= m && box.y >= m && box.x + box.width <= visibleW - m && box.y + box.height <= this.size.height - m) return;
    if (box && (box.width > visibleW - 2 * m || box.height > this.size.height - 2 * m)) {
      this.fitBounds(b, { margin: 1.3 });
      return;
    }
    const cx = (b.minX + b.maxX) / 2;
    const cy = (b.minY + b.maxY) / 2;
    void this.controls.moveTo(cx, heightAt(doc.heights, doc.gridSize, cx, cy), cy, true);
    this.invalidate();
  }

  fitSite(animate = true) {
    const doc = this.doc;
    if (!doc) return;
    this.fitBounds({ minX: 0, minY: 0, maxX: doc.canvas.width, maxY: doc.canvas.height }, { margin: 1, animate });
  }

  /** Bounds of an item on the plan. */
  itemBounds(id: string): Bounds | null {
    const doc = this.doc;
    const item = doc?.items.find(i => i.id === id);
    if (!doc || !item) return null;
    if (item.type === "building") return boundsOfPoints(buildingWorldPoints(item as BuildingItem));
    const p = itemPoint(item, doc.items);
    const r = item.type === "tree" ? (item as TreeItem).radius : Math.max((item as any).width ?? 0, (item as any).height ?? 0) / 2;
    return { minX: p.x - r, minY: p.y - r, maxX: p.x + r, maxY: p.y + r };
  }

  /** Plan point (on the ground) -> client (page) coordinates. */
  toClient(x: number, y: number, lift = 0) {
    const doc = this.doc;
    const h = doc ? heightAt(doc.heights, doc.gridSize, x, y) : 0;
    const s = this.project(new THREE.Vector3(x, h + lift, y));
    const r = this.container.getBoundingClientRect();
    return s ? { x: r.left + s.x, y: r.top + s.y } : null;
  }

  /** Client point -> plan point on the ground (null if it misses the ground). */
  toPlan(clientX: number, clientY: number) {
    const g = this.groundAt(clientX, clientY);
    return g ? { x: g.x, y: g.z } : null;
  }

  /** Screen rectangle of an item (container pixels). */
  screenBox(id: string) {
    const doc = this.doc;
    const item = doc?.items.find(i => i.id === id);
    if (!doc || !item) return null;
    const pts: THREE.Vector3[] = [];
    if (item.type === "building") {
      const b = item as BuildingItem;
      const base = buildingBaseHeight(b, doc.heights, doc.gridSize);
      const wall = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * this.upf();
      // Its real outline: the walls, the roof's own corners (not the ridge height everywhere) and
      // any porch or carport sticking out of it
      buildingWorldPoints(b).forEach(p => pts.push(new THREE.Vector3(p.x, base, p.y), new THREE.Vector3(p.x, base + wall, p.y)));
      openPartsOf(b).forEach(part => part.pts.forEach(q => {
        const r = rotatePoint(q, b.rotation);
        pts.push(new THREE.Vector3(b.x + r.x, base, b.y + r.y), new THREE.Vector3(b.x + r.x, base + wall, b.y + r.y));
      }));
      const roof = this.objects.get(b.id)?.obj.getObjectByName("building-roof") as THREE.Mesh | undefined;
      const rp = roof?.geometry.getAttribute("position");
      if (roof && rp) {
        roof.updateWorldMatrix(true, false);
        const v = new THREE.Vector3();
        const step = Math.max(1, Math.floor(rp.count / 400));
        for (let i = 0; i < rp.count; i += step) pts.push(v.fromBufferAttribute(rp, i).applyMatrix4(roof.matrixWorld).clone());
      }
    } else {
      const b = this.itemBounds(id)!;
      const h = this.itemAnchor(item).y;
      [[b.minX, b.minY], [b.maxX, b.minY], [b.maxX, b.maxY], [b.minX, b.maxY]].forEach(([x, y]) => pts.push(new THREE.Vector3(x, h, y)));
    }
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of pts) {
      const s = this.project(p);
      if (!s) continue;
      minX = Math.min(minX, s.x); maxX = Math.max(maxX, s.x);
      minY = Math.min(minY, s.y); maxY = Math.max(maxY, s.y);
    }
    return Number.isFinite(minX) ? { x: minX, y: minY, width: maxX - minX, height: maxY - minY } : null;
  }

  viewInfo(): ViewInfo {
    const az = this.wrappedAzimuth();
    const dist = this.controls.distance;
    const pxPerUnit = this.size.height / (2 * dist * Math.tan((this.camera.fov * DEG) / 2));
    return { heading: ((-az / DEG) % 360 + 360) % 360, tiltDeg: this.controls.polarAngle / DEG, pxPerUnit, width: this.size.width, height: this.size.height };
  }

  /** The current view as a PNG data URL. */
  // ------------------------------------------------------------------ camera views

  /** Look through a camera in the main view (drag aims it, scroll zooms the lens); null for the map. */
  setPov(id: string | null, rightInset = this.povInset) {
    if (rightInset !== this.povInset) {
      this.povInset = rightInset;
      this.invalidate();
    }
    if (id === this.povId) return;
    this.povId = id;
    this.controls.enabled = !id;
    this.labelsLayer.style.display = id ? "none" : "";
    this.renderer.domElement.style.filter = id && this.povNight ? "grayscale(1) contrast(1.15) brightness(1.1)" : "";
    this.handlesLayer.style.display = id ? "none" : "";
    this.updateCursor();
    this.invalidate();
  }

  /** Night: the scene is dark and only the camera's own infrared light shows things (black and white). */
  setPovNight(on: boolean) {
    if (on === this.povNight) return;
    this.povNight = on;
    this.renderer.domElement.style.filter = on && this.povId ? "grayscale(1) contrast(1.15) brightness(1.1)" : "";
    this.invalidate();
  }

  /** Where the camera picture sits in the view while looking through a camera (CSS px). */
  povFrame() {
    return { ...this.povRect };
  }

  /** What a camera sees, as a canvas of the given size (rendered from this scene); night = infrared. */
  renderCameraView(id: string, width: number, height: number, night = false): HTMLCanvasElement | null {
    const cam = this.item(id) as CameraItem | null;
    if (!cam || !this.doc) return null;
    width = Math.max(16, Math.round(width));
    height = Math.max(16, Math.round(height));
    const out = document.createElement("canvas");
    out.width = width;
    out.height = height;
    const ratio = this.renderer.getPixelRatio();
    const canvas = this.renderer.domElement;
    const ctx2d = out.getContext("2d");
    if (ctx2d && night) ctx2d.filter = "grayscale(1) contrast(1.15) brightness(1.1)";
    if (width <= canvas.width && height <= canvas.height) {
      // Small enough: draw it in a corner of the view's own canvas (no resizing, which is slow),
      // copy it out, then redraw the view.
      const w = width / ratio, h = height / ratio;
      this.drawCameraView(cam, { x: 0, y: this.size.height - h, width: w, height: h }, night);
      ctx2d?.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
    } else {
      this.renderer.setPixelRatio(1);
      this.renderer.setSize(width, height, false);
      this.drawCameraView(cam, { x: 0, y: 0, width, height }, night);
      ctx2d?.drawImage(canvas, 0, 0);
      this.renderer.setPixelRatio(ratio);
      this.renderer.setSize(this.size.width, this.size.height, false);
    }
    this.render();
    return out;
  }

  private lens: { target: THREE.WebGLRenderTarget; scene: THREE.Scene; cam: THREE.OrthographicCamera; mat: THREE.ShaderMaterial } | null = null;
  /** Off-screen picture and the full-frame pass that bends it like a wide lens. */
  private lensPass() {
    if (this.lens) return this.lens;
    const target = new THREE.WebGLRenderTarget(1, 1, { samples: 4, type: THREE.HalfFloatType });
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: target.texture }, k: { value: 0 }, aspect: { value: 16 / 9 } },
      vertexShader: "varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
      // Barrel model: a point at radius r (1 at the frame's corners) shows what the straight lens
      // shows at r * (1 + k r^2) / (1 + k). Corners stay put (same field of view); the middle is
      // a little larger and the edges squeezed, so straight lines bow outward.
      fragmentShader: `
        uniform sampler2D map; uniform float k; uniform float aspect; varying vec2 vUv;
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r2 = (p.x * p.x * aspect * aspect + p.y * p.y) / (aspect * aspect + 1.0);
          vec2 s = p * (1.0 + k * r2) / (1.0 + k);
          gl_FragColor = texture2D(map, s * 0.5 + 0.5);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      depthTest: false,
      depthWrite: false
    });
    const scene = new THREE.Scene();
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
    this.lens = { target, scene, cam: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), mat };
    return this.lens;
  }

  // ------------------------------------------------------------------ trees in the way

  /** Trees fading: how see-through each is now and where it's heading (1 = solid). */
  private treeFade = new Map<THREE.Object3D, { cur: number; target: number }>();

  /** Show a tree at an opacity: solid materials at 1, faded copies (see-through, no depth) below. */
  private applyTreeOpacity(obj: THREE.Object3D, opacity: number) {
    obj.traverse(o => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      if (opacity >= 0.999) {
        if (mesh.userData.solidMat) mesh.material = mesh.userData.solidMat;
        return;
      }
      if (!mesh.userData.solidMat) {
        mesh.userData.solidMat = mesh.material;
        const fade = (m: THREE.Material) => {
          const c = m.clone();
          c.transparent = true;
          c.depthWrite = false;
          return c;
        };
        mesh.userData.fadeMat = Array.isArray(mesh.material) ? mesh.material.map(fade) : fade(mesh.material);
      }
      const mats = (Array.isArray(mesh.userData.fadeMat) ? mesh.userData.fadeMat : [mesh.userData.fadeMat]) as THREE.Material[];
      mats.forEach(m => { m.opacity = opacity; });
      mesh.material = mesh.userData.fadeMat;
    });
  }

  /** Ease every tree toward its target opacity (about a quarter second); true while any is moving. */
  private stepTreeFades(dt: number) {
    let moving = false;
    const k = 1 - Math.exp(-Math.min(dt, 0.1) * 12);
    for (const [obj, f] of this.treeFade) {
      if (!obj.parent) { this.treeFade.delete(obj); continue; }
      if (Math.abs(f.cur - f.target) < 0.01) {
        if (f.cur !== f.target) { f.cur = f.target; this.applyTreeOpacity(obj, f.cur); }
        if (f.target >= 0.999) this.treeFade.delete(obj);
        continue;
      }
      f.cur += (f.target - f.cur) * k;
      this.applyTreeOpacity(obj, f.cur);
      moving = true;
    }
    return moving;
  }

  private fadeKey = "";
  private fadeTreesInTheWay() {
    const doc = this.doc;
    if (!doc) return;
    const eye = this.camera.position;
    const key = `${eye.x.toFixed(1)},${eye.y.toFixed(1)},${eye.z.toFixed(1)}|${this.selectedId}|${this.objects.size}`;
    if (key === this.fadeKey && this.fadeItems === doc.items) return;
    this.fadeKey = key;
    this.fadeItems = doc.items;
    // What should stay visible: points over your buildings' walls and roofs (fade fully), a ring
    // just outside them (fade partway, so a tree eases out as it comes over the house), and what's
    // selected
    const targets: THREE.Vector3[] = [];
    const halo: THREE.Vector3[] = [];
    const sel = this.item(this.selectedId);
    for (const it of doc.items) {
      if (it.type !== "building" || !(isOwnBuilding(it as BuildingItem) || it.id === this.selectedId)) continue;
      const b = it as BuildingItem;
      const base = buildingBaseHeight(b, doc.heights, doc.gridSize);
      const wall = b.wallHeight ?? DEFAULT_BUILDING.wallHeight;
      const pts = buildingWorldPoints(b);
      pts.forEach((p, i) => {
        const q = pts[(i + 1) % pts.length];
        for (const t of [0.1, 0.5, 0.9]) for (const hy of [0.2, 0.6, 1]) targets.push(new THREE.Vector3(p.x + (q.x - p.x) * t, base + wall * hy, p.y + (q.y - p.y) * t));
        // and across the roof, toward the middle
        targets.push(new THREE.Vector3(p.x + (b.x - p.x) * 0.5, base + wall * 1.2, p.y + (b.y - p.y) * 0.5));
        // the ring: 8 ft out from the walls, and over the eaves
        const out = 8 * this.upf();
        const dx = p.x - b.x, dy = p.y - b.y, dl = Math.hypot(dx, dy) || 1;
        for (const hy of [0.3, 1.1]) halo.push(new THREE.Vector3(p.x + (dx / dl) * out, base + wall * hy, p.y + (dy / dl) * out));
        const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2, ml = Math.hypot(mx - b.x, my - b.y) || 1;
        for (const hy of [0.3, 1.1]) halo.push(new THREE.Vector3(mx + ((mx - b.x) / ml) * out, base + wall * hy, my + ((my - b.y) / ml) * out));
      });
      targets.push(new THREE.Vector3(b.x, base + wall * 1.3, b.y));
    }
    if (sel && sel.type !== "building") {
      const p = itemPoint(sel, doc.items);
      targets.push(new THREE.Vector3(p.x, this.h(p.x, p.y) + 3 * this.upf(), p.y));
    }
    const trees: THREE.Object3D[] = [];
    for (const it of doc.items) if (it.type === "tree") { const e = this.objects.get(it.id); if (e) trees.push(e.obj); }
    // Each tree's target opacity: 0.15 over the house, 0.55 just next to it, else solid
    const want = new Map<THREE.Object3D, number>();
    if (targets.length && trees.length) {
      // The trees each sight line from the view to those points passes through (before the point)
      const ray = new THREE.Raycaster();
      const dir = new THREE.Vector3();
      const treeOf = (o: THREE.Object3D | null) => { while (o && !trees.includes(o)) o = o.parent; return o; };
      const cast = (points: THREE.Vector3[], opacity: number) => {
        for (const p of points) {
          dir.subVectors(p, eye);
          const far = dir.length() - 0.5 * this.upf();
          if (far <= 0) continue;
          ray.set(eye, dir.normalize());
          ray.far = far;
          for (const hit of ray.intersectObjects(trees.filter(t => (want.get(t) ?? 1) > opacity), true)) {
            const tree = treeOf(hit.object);
            if (tree) want.set(tree, Math.min(want.get(tree) ?? 1, opacity));
          }
        }
      };
      cast(targets, 0.15);
      cast(halo, 0.55);
    }
    // Set where each tree is heading; the frame loop eases them there
    for (const [obj, f] of this.treeFade) if (!want.has(obj)) f.target = 1;
    for (const [obj, target] of want) {
      const f = this.treeFade.get(obj);
      if (f) f.target = target;
      else this.treeFade.set(obj, { cur: 1, target });
    }
  }
  private fadeItems: CanvasItem[] | null = null;

  /** Renders a camera's view into a rectangle of the canvas (CSS px), in camera-view dress. */
  private drawCameraView(cam: CameraItem, rect: { x: number; y: number; width: number; height: number }, night = this.povNight) {
    // A camera's picture shows the trees as they are (faded trees are only for editing)
    const faded = [...this.treeFade].filter(([, f]) => f.cur < 0.999);
    faded.forEach(([obj]) => this.applyTreeOpacity(obj, 1));
    try {
      this.drawCameraViewInner(cam, rect, night);
    } finally {
      faded.forEach(([obj, f]) => this.applyTreeOpacity(obj, f.cur));
    }
  }

  private drawCameraViewInner(cam: CameraItem, rect: { x: number; y: number; width: number; height: number }, night: boolean) {
    const doc = this.doc!;
    const upf = this.upf();
    const aspect = rect.width / rect.height;
    const hFov = getCameraHFov(cam);
    const pitch = (cam.pitch ?? DEFAULT_CAMERA_PITCH) * DEG;
    const rot = cam.rotation * DEG;
    const dir = new THREE.Vector3(Math.cos(rot) * Math.cos(pitch), Math.sin(pitch), Math.sin(rot) * Math.cos(pitch));
    const eye = this.cameraWorld(cam).addScaledVector(dir, 0.6 * upf);
    const span = this.siteSpan();
    const c = this.povCam;
    c.fov = (2 * Math.atan(Math.tan((hFov * DEG) / 2) / aspect)) / DEG;
    c.aspect = aspect;
    c.near = 0.25 * upf;
    c.far = Math.max(cam.range * 6, span * 6);
    c.position.copy(eye);
    c.up.set(0, 1, 0);
    c.lookAt(eye.clone().add(dir));
    c.updateProjectionMatrix();
    c.updateMatrixWorld();
    // Ground to the horizon around the site, at its lowest point.
    const cx = doc.canvas.width / 2;
    const cz = doc.canvas.height / 2;
    // A disc under the whole site (the site's ground covers its middle) out to the horizon.
    this.horizon.scale.setScalar(span * 12);
    this.horizon.position.set(cx, this.minGround() - 0.3 * upf, cz);
    (this.horizon.material as THREE.MeshLambertMaterial).color.copy(this.photoTone());
    // Hide map-only things; daylight sky with haze in the distance.
    const own = this.objects.get(cam.id)?.obj;
    const hidden = [this.coverageGroup, this.fx, this.ground.extras, own].filter((o): o is THREE.Object3D => !!o && o.visible);
    hidden.forEach(o => (o.visible = false));
    const bg = this.scene.background;
    const env = this.scene.environment;
    const sunI = this.sun.intensity, hemiI = this.hemi.intensity;
    if (night) {
      // Dark night; the camera's infrared lamp lights what is in front of it, fading with distance.
      const reach = (cam.irRangeFt ?? DEFAULT_IR_RANGE_FT) * upf;
      this.scene.background = new THREE.Color(0x050608);
      this.scene.fog = new THREE.Fog(0x050608, reach * 0.9, reach * 1.6);
      this.scene.environment = null;
      this.sun.intensity = 0;
      this.hemi.intensity = 0.04;
      this.irLight.position.copy(eye);
      this.irLight.target.position.copy(eye.clone().add(dir));
      this.irLight.angle = Math.min(1.3, ((hFov * DEG) / 2) * 1.25);
      // Bright up close, fading out toward its rated reach (ground near the camera is lit at a
      // grazing angle, so it needs a strong lamp).
      this.irLight.distance = reach * 1.5;
      this.irLight.decay = 1;
      this.irLight.intensity = 2.2 * reach;
    } else {
      this.scene.background = new THREE.Color(SKY_HAZE);
      this.scene.fog = new THREE.Fog(SKY_HAZE, Math.max(cam.range * 1.5, span * 0.8), Math.max(cam.range * 6, span * 5));
      this.skyDome.visible = true;
    }
    this.horizon.visible = true;
    this.skyDome.position.copy(eye);
    this.skyDome.scale.setScalar(c.far * 0.9);
    if (this.shadowsDirty) {
      this.placeSun();
      this.renderer.shadowMap.needsUpdate = true;
      this.shadowsDirty = false;
    }
    const k = lensBarrel(hFov);
    if (k > 0.005) {
      // Wide lenses bend straight lines (barrel distortion): draw the picture off screen, then bend it.
      const lens = this.lensPass();
      const ratio = this.renderer.getPixelRatio();
      const tw = Math.max(1, Math.round(rect.width * ratio)), th = Math.max(1, Math.round(rect.height * ratio));
      if (lens.target.width !== tw || lens.target.height !== th) lens.target.setSize(tw, th);
      this.renderer.setRenderTarget(lens.target);
      this.renderer.setClearColor(0x000000, 1);
      this.renderer.clear();
      this.renderer.render(this.scene, c);
      this.renderer.setRenderTarget(null);
      lens.mat.uniforms.k.value = k;
      lens.mat.uniforms.aspect.value = aspect;
      this.renderer.setViewport(rect.x, rect.y, rect.width, rect.height);
      this.renderer.setScissor(rect.x, rect.y, rect.width, rect.height);
      this.renderer.setScissorTest(true);
      this.renderer.render(lens.scene, lens.cam);
    } else {
      this.renderer.setViewport(rect.x, rect.y, rect.width, rect.height);
      this.renderer.setScissor(rect.x, rect.y, rect.width, rect.height);
      this.renderer.setScissorTest(true);
      this.renderer.render(this.scene, c);
    }
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, this.size.width, this.size.height);
    this.horizon.visible = false;
    this.skyDome.visible = false;
    this.scene.fog = null;
    if (night) {
      this.irLight.intensity = 0;
      this.scene.environment = env;
      this.sun.intensity = sunI;
      this.hemi.intensity = hemiI;
    }
    this.scene.background = bg;
    hidden.forEach(o => (o.visible = true));
  }

  /** The photo's average color (the ground beyond the site takes it on), or grass. */
  private photoTone() {
    const img = this.ground.photo?.image as CanvasImageSource | undefined;
    if (!img) return new THREE.Color(0x7d8a6c);
    if (this.groundTone?.src !== img) {
      const c = document.createElement("canvas");
      c.width = c.height = 16;
      const g = c.getContext("2d", { willReadFrequently: true });
      let color = new THREE.Color(0x7d8a6c);
      try {
        g!.drawImage(img, 0, 0, 16, 16);
        const d = g!.getImageData(0, 0, 16, 16).data;
        let r = 0, gg = 0, b = 0;
        for (let i = 0; i < d.length; i += 4) { r += d[i]; gg += d[i + 1]; b += d[i + 2]; }
        const n = d.length / 4;
        // A little darker than the average: roofs and roads brighten it, the grass beyond is darker.
        color = new THREE.Color().setRGB((r / n / 255) * 0.88, (gg / n / 255) * 0.9, (b / n / 255) * 0.85, THREE.SRGBColorSpace);
      } catch { /* keep grass */ }
      this.groundTone = { src: img, color };
    }
    return this.groundTone.color;
  }

  private minGround() {
    const doc = this.doc;
    if (!doc) return 0;
    let min = 0;
    for (const v of Object.values(doc.heights)) if (v < min) min = v;
    return min;
  }

  capture() {
    this.render();
    return this.renderer.domElement.toDataURL("image/png");
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.ro.disconnect();
    this.disposers.forEach(d => d());
    this.endDragListeners?.();
    this.controls.dispose();
    this.ground.dispose();
    disposeObjectDeep(this.scene);
    this.env.dispose();
    if (this.lens) { this.lens.target.dispose(); this.lens.mat.dispose(); }
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.container.innerHTML = "";
  }

  // ------------------------------------------------------------------ frame loop

  private loop = () => {
    this.raf = requestAnimationFrame(this.loop);
    const dt = this.clock.getDelta();
    if (this.controls.update(dt)) this.dirty = true;
    if (this.treeFade.size && !this.povId && this.stepTreeFades(dt)) this.dirty = true;
    if (!this.dirty || this.size.width <= 1) return;
    this.dirty = false;
    this.render();
  };

  private render() {
    const pov = this.povId ? (this.item(this.povId) as CameraItem | null) : null;
    if (this.povId && !pov) this.setPov(null);
    if (pov) {
      // The camera's picture, as large as fits, centered on black.
      const aspect = getCameraAspectValue(pov);
      const { height: H } = this.size;
      const W = Math.max(1, this.size.width - this.povInset);
      const w = Math.min(W, H * aspect);
      const h = w / aspect;
      this.povRect = { x: Math.round((W - w) / 2), y: Math.round((H - h) / 2), width: Math.round(w), height: Math.round(h) };
      this.renderer.setClearColor(0x000000, 1);
      this.renderer.clear();
      // WebGL viewports count from the bottom.
      this.drawCameraView(pov, { ...this.povRect, y: H - this.povRect.y - this.povRect.height });
      this.renderer.setViewport(0, 0, this.size.width, this.size.height);
      return;
    }
    const dist = this.controls.distance;
    const near = clamp(dist * 0.01, 0.05, 20);
    const far = dist * 6 + this.siteSpan() * 4;
    if (Math.abs(this.camera.near - near) > near * 0.2 || Math.abs(this.camera.far - far) > far * 0.2) {
      this.camera.near = near;
      this.camera.far = far;
      this.camera.updateProjectionMatrix();
    }
    if (this.shadowsDirty) {
      this.placeSun();
      this.renderer.shadowMap.needsUpdate = true;
      this.shadowsDirty = false;
    }
    this.camera.updateMatrixWorld();
    this.fadeTreesInTheWay();
    this.renderer.render(this.scene, this.camera);
    this.layout();
    const info = this.viewInfo();
    const key = `${info.heading.toFixed(2)}|${info.tiltDeg.toFixed(2)}|${info.pxPerUnit.toFixed(5)}|${info.width}|${info.height}|${this.camera.position.x.toFixed(2)}|${this.camera.position.z.toFixed(2)}`;
    if (key !== this.lastViewKey) {
      this.lastViewKey = key;
      this.viewListeners.forEach(fn => fn(info));
      const pose = this.controls.polarAngle > TILT_TOP ? "tilt" : "top";
      if (pose !== this.pose && !this.posePinned) {
        this.pose = pose;
        this.cb.onPose(pose);
      }
    }
  }

  private resize() {
    const r = this.container.getBoundingClientRect();
    const width = Math.max(1, Math.round(r.width));
    const height = Math.max(1, Math.round(r.height));
    if (width === this.size.width && height === this.size.height) return;
    this.size = { width, height };
    this.renderer.setSize(width, height, false);
    this.renderer.domElement.style.width = `${width}px`;
    this.renderer.domElement.style.height = `${height}px`;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    if (!this.fitted && this.doc && width > 1) {
      this.fitted = true;
      this.fitSite(false);
    }
    this.invalidate();
  }

  private siteSpan() {
    return this.doc ? Math.max(this.doc.canvas.width, this.doc.canvas.height) : 1000;
  }

  private placeSun() {
    const doc = this.doc;
    if (!doc) return;
    const span = this.siteSpan();
    const center = new THREE.Vector3(doc.canvas.width / 2, 0, doc.canvas.height / 2);
    // The real sun for the chosen time (north is up the plan, -y), else a soft afternoon light.
    // Below the horizon it stays low and dim (dusk), never lighting from underground.
    let dir = new THREE.Vector3(-0.45, 1, 0.55).normalize();
    let strength = 1;
    if (doc.sun) {
      const az = doc.sun.azimuth * DEG, alt = Math.max(4, doc.sun.altitude) * DEG;
      dir = new THREE.Vector3(Math.sin(az) * Math.cos(alt), Math.sin(alt), -Math.cos(az) * Math.cos(alt));
      strength = doc.sun.altitude <= 0 ? 0.08 : Math.min(1, 0.35 + doc.sun.altitude / 25);
    }
    this.sun.intensity = SUN_INTENSITY * strength;
    this.hemi.intensity = HEMI_INTENSITY * (0.45 + 0.55 * Math.min(1, strength * 1.2));
    this.sun.position.copy(center).add(dir.multiplyScalar(span * 1.5));
    this.sun.target.position.copy(center);
    const cam = this.sun.shadow.camera;
    cam.left = -span * 0.8;
    cam.right = span * 0.8;
    cam.top = span * 0.8;
    cam.bottom = -span * 0.8;
    cam.near = 1;
    cam.far = span * 4;
    cam.updateProjectionMatrix();
    // Offset surfaces by a couple of shadow-map texels, so sloped roofs don't shadow themselves in stripes.
    const texel = (span * 1.6) / this.sun.shadow.mapSize.x;
    this.sun.shadow.normalBias = Math.max(0.6, texel * 2.5);
    this.sun.shadow.bias = -0.001;
  }

  private updateLimits() {
    const doc = this.doc;
    if (!doc) return;
    const span = this.siteSpan();
    this.controls.minDistance = 6 * doc.unitsPerFoot;
    this.controls.maxDistance = span * 3;
    const pad = span * 0.25;
    this.controls.setBoundary(new THREE.Box3(new THREE.Vector3(-pad, -1e4, -pad), new THREE.Vector3(doc.canvas.width + pad, 1e4, doc.canvas.height + pad)));
  }

  private wrappedAzimuth() {
    const a = this.controls.azimuthAngle % (Math.PI * 2);
    return a > Math.PI ? a - Math.PI * 2 : a < -Math.PI ? a + Math.PI * 2 : a;
  }

  private snapNorth() {
    const a = this.wrappedAzimuth();
    if (Math.abs(a) > 1e-4 && Math.abs(a) < 7 * DEG) void this.controls.rotateAzimuthTo(this.northAzimuth(), true);
  }

  // ------------------------------------------------------------------ geometry helpers

  private project(v: THREE.Vector3) {
    const p = v.clone().project(this.camera);
    if (p.z > 1 || p.z < -1) return null;
    return { x: ((p.x + 1) / 2) * this.size.width, y: ((1 - p.y) / 2) * this.size.height };
  }

  /** World units per screen pixel at a point. */
  private upp(v: THREE.Vector3) {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    const depth = Math.max(0.01, v.clone().sub(this.camera.position).dot(dir));
    return (2 * depth * Math.tan((this.camera.fov * DEG) / 2)) / this.size.height;
  }

  private ray(clientX: number, clientY: number) {
    const r = this.container.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.camera.updateMatrixWorld();
    this.raycaster.setFromCamera(ndc, this.camera);
    return this.raycaster.ray;
  }

  private groundAt(clientX: number, clientY: number): THREE.Vector3 | null {
    const ray = this.ray(clientX, clientY);
    const terrain = this.ground.terrain;
    if (terrain) {
      const hit = this.raycaster.intersectObject(terrain, false)[0];
      if (hit) return hit.point.clone();
    }
    const out = new THREE.Vector3();
    return ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), out) ? out : null;
  }

  private planeAt(clientX: number, clientY: number, y: number): THREE.Vector3 | null {
    const out = new THREE.Vector3();
    return this.ray(clientX, clientY).intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), -y), out) ? out : null;
  }

  private h(x: number, y: number) {
    return this.doc ? heightAt(this.doc.heights, this.doc.gridSize, x, y) : 0;
  }

  private item(id: string | null) {
    return id ? this.doc?.items.find(i => i.id === id) ?? null : null;
  }

  private upf() {
    return this.doc?.unitsPerFoot ?? 1;
  }

  private cameraWorld(cam: CameraItem) {
    const doc = this.doc!;
    const p = cameraPlanPosition(cam, doc.items);
    const base = cam.mount?.type === "building" && cam.mount.buildingId
      ? (() => { const b = this.item(cam.mount!.buildingId!) as BuildingItem | null; return b ? buildingBaseHeight(b, doc.heights, doc.gridSize) : this.h(p.x, p.y); })()
      : this.h(p.x, p.y) + OBJECT_ELEVATION_OFFSET;
    return new THREE.Vector3(p.x, base + cameraMountHeight(cam) * this.upf(), p.y);
  }

  private itemAnchor(item: CanvasItem) {
    const doc = this.doc!;
    if (item.type === "camera") return this.cameraWorld(item as CameraItem);
    if (item.type === "building") {
      const b = item as BuildingItem;
      return new THREE.Vector3(b.x, buildingBaseHeight(b, doc.heights, doc.gridSize) + (b.wallHeight ?? DEFAULT_BUILDING.wallHeight) / 2, b.y);
    }
    const g = this.h(item.x, item.y);
    if (item.type === "tree") return new THREE.Vector3(item.x, g + ((item as TreeItem).height ?? 30) * 0.55, item.y);
    if (item.type === "parking") return new THREE.Vector3(item.x, g + ((item as ParkingItem).vehicleHeight ?? (item as ParkingItem).width * 0.8) * 0.5, item.y);
    return new THREE.Vector3(item.x, g, item.y);
  }

  // ------------------------------------------------------------------ scene sync

  /** Doors drawn on a building: wherever a "door" spot is marked next to one of its walls. */
  private doorsFor(b: BuildingItem) {
    const doors = this.doc!.items.filter(i => i.type === "target" && (i as TargetItem).kind === "door" && !(i as TargetItem).link).map(t => toBuildingLocal(b, t));
    return doors.length ? doorsOnWalls(buildingLocalPoints(b), doors, this.upf()) : [];
  }

  private signature(item: CanvasItem) {
    const doc = this.doc!;
    switch (item.type) {
      case "building": {
        const b = item as BuildingItem;
        const doors = this.doorsFor(b).map(d => [Math.round(d.x * 10), Math.round(d.y * 10)]);
        return JSON.stringify([b.points, b.width, b.height, b.wallHeight, b.roofType, b.color, !!b.openSides, b.openParts ?? null, b.openings ?? null, b.gableWalls ?? null, b.roofPitch ?? null, b.floorHeight ?? null, doc.roofPhoto && !!this.ground.photo, doc.roofPhoto ? [b.x, b.y, b.rotation, doc.background.rect] : 0, doc.unitsPerFoot, doors]);
      }
      case "tree": return getTreeSignature(item as TreeItem) + item.id;
      case "parking": return getCarSignature(item as ParkingItem);
      case "paving": {
        const pv = item as PavingItem;
        return JSON.stringify([pv.x, pv.y, pv.rotation, pv.points, pv.width, pv.height, pv.surface, this.heightsVersion, doc.gridSize, doc.unitsPerFoot]);
      }
      case "camera": return `${(item as CameraItem).color}|${doc.unitsPerFoot}`;
      case "image": return `${(item as ImageItem).src.length}|${(item as ImageItem).src.slice(-32)}|${(item as ImageItem).width}|${(item as ImageItem).height}`;
      default: return "";
    }
  }

  private buildObject(item: CanvasItem): THREE.Object3D | null {
    const doc = this.doc!;
    switch (item.type) {
      case "building": {
        const photo = doc.roofPhoto && this.ground.photo ? { texture: this.ground.photo, rect: doc.background.rect } : null;
        return createBuildingModel(item as BuildingItem, 0, { unitsPerFoot: doc.unitsPerFoot, photo, doors: this.doorsFor(item as BuildingItem) });
      }
      case "tree": return create3dTree(item as TreeItem);
      case "parking": return create3dCar(item as ParkingItem);
      case "paving": return createPaving(item as PavingItem, (x, y) => this.h(x, y), doc.gridSize, doc.unitsPerFoot);
      case "camera": return createCameraModel((item as CameraItem).color, doc.unitsPerFoot);
      case "image": {
        const img = item as ImageItem;
        const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, transparent: true });
        new THREE.TextureLoader().load(img.src, t => { t.colorSpace = THREE.SRGBColorSpace; mat.map = t; mat.needsUpdate = true; this.invalidate(); });
        const geo = new THREE.PlaneGeometry(img.width, img.height);
        geo.rotateX(-Math.PI / 2);
        return new THREE.Mesh(geo, mat);
      }
      default: return null;
    }
  }

  private place(obj: THREE.Object3D, item: CanvasItem) {
    const doc = this.doc!;
    if (item.type === "building") {
      const b = item as BuildingItem;
      obj.position.set(b.x, buildingBaseHeight(b, doc.heights, doc.gridSize), b.y);
      obj.rotation.set(0, -item.rotation * DEG, 0);
    } else if (item.type === "camera") {
      const cam = item as CameraItem;
      obj.position.copy(this.cameraWorld(cam));
      obj.rotation.order = "YZX";
      obj.rotation.set(0, -cam.rotation * DEG, (cam.pitch ?? DEFAULT_CAMERA_PITCH) * DEG);
    } else if (item.type === "paving") {
      // Built where it lies (its corners follow the ground)
      obj.position.set(0, 0, 0);
      obj.rotation.set(0, 0, 0);
    } else if (item.type === "image") {
      obj.position.set(item.x, this.h(item.x, item.y) + 0.25 * doc.unitsPerFoot, item.y);
      obj.rotation.set(0, -item.rotation * DEG, 0);
    } else {
      obj.position.set(item.x, this.h(item.x, item.y) + OBJECT_ELEVATION_OFFSET, item.y);
      obj.rotation.set(0, -item.rotation * DEG, 0);
    }
  }

  private tagObject(obj: THREE.Object3D, id: string) {
    obj.userData.itemId = id;
    obj.traverse(o => {
      o.userData.itemId = id;
      if ((o as THREE.Mesh).isMesh && !(o as THREE.Mesh).castShadow && o.parent === obj) (o as THREE.Mesh).castShadow = true;
    });
  }

  private syncItems(prev: ViewDoc | null) {
    const doc = this.doc!;
    const seen = new Set<string>();
    for (const item of doc.items) {
      if (item.type === "label" || item.type === "target" || item.type === "recorder") continue;
      seen.add(item.id);
      const sig = this.signature(item);
      let entry = this.objects.get(item.id);
      if (!entry || entry.sig !== sig) {
        if (entry) {
          this.itemsGroup.remove(entry.obj);
          disposeObjectDeep(entry.obj, this.ground.photo ? new Set([this.ground.photo]) : undefined);
        }
        const obj = this.buildObject(item);
        if (!obj) continue;
        this.tagObject(obj, item.id);
        entry = { obj, sig };
        this.objects.set(item.id, entry);
        this.itemsGroup.add(obj);
        this.shadowsDirty = true;
      }
      this.place(entry.obj, item);
    }
    for (const [id, entry] of this.objects) {
      if (seen.has(id)) continue;
      this.itemsGroup.remove(entry.obj);
      disposeObjectDeep(entry.obj, this.ground.photo ? new Set([this.ground.photo]) : undefined);
      this.objects.delete(id);
      this.shadowsDirty = true;
    }
    if (prev && prev.roofPhoto !== doc.roofPhoto) this.shadowsDirty = true;
  }

  private syncCoverage() {
    const doc = this.doc;
    if (!doc) return;
    const obstacles = doc.items.filter(i => i.type === "building" || i.type === "tree") as (BuildingItem | TreeItem)[];
    const obstacleSig = JSON.stringify(obstacles.map(o => (o.type === "building" ? [o.x, o.y, o.rotation, (o as BuildingItem).points, o.width, o.height] : [o.x, o.y, (o as TreeItem).radius, (o as TreeItem).width])));
    const cones = doc.cones;
    const seen = new Set<string>();
    for (const item of doc.items) {
      if (item.type !== "camera") continue;
      const cam = item as CameraItem;
      seen.add(cam.id);
      const show = cones.visible && (cones.showAll || cam.id === this.selectedId);
      const pos = cameraPlanPosition(cam, doc.items);
      const sig = show ? JSON.stringify([cam.rotation, cam.pitch, cam.hFov, cam.fov, cam.vFov, cam.aspect, cam.range, cam.resolutionWidth, cam.mount?.height, cam.height, cam.color, pos, obstacleSig, this.heightsVersion, cones, doc.unitsPerFoot]) : "hidden";
      const entry = this.fans.get(cam.id);
      if (entry && entry.sig === sig) continue;
      if (entry?.obj) {
        this.coverageGroup.remove(entry.obj);
        disposeObjectDeep(entry.obj);
      }
      const obj = show ? buildCoverageFan(doc, cam, pos, cameraMountHeight(cam), obstacles) : null;
      if (obj) this.coverageGroup.add(obj);
      this.fans.set(cam.id, { obj, sig });
    }
    for (const [id, entry] of this.fans) {
      if (seen.has(id)) continue;
      if (entry.obj) {
        this.coverageGroup.remove(entry.obj);
        disposeObjectDeep(entry.obj);
      }
      this.fans.delete(id);
    }
    // The selected camera's view pyramid (helps in 3D; hidden when looking straight down).
    if (this.frustum) {
      this.fx.remove(this.frustum);
      disposeObjectDeep(this.frustum);
      this.frustum = null;
    }
    const sel = this.item(this.selectedId);
    if (sel?.type === "camera" && cones.visible) {
      const cam = sel as CameraItem;
      const obj = this.objects.get(cam.id)?.obj;
      const lens = this.cameraWorld(cam);
      if (obj) {
        const yaw = cam.rotation * DEG;
        const pitch = (cam.pitch ?? DEFAULT_CAMERA_PITCH) * DEG;
        const off = obj.userData.lensOffset ?? 0;
        lens.add(new THREE.Vector3(Math.cos(yaw) * Math.cos(pitch), Math.sin(pitch), Math.sin(yaw) * Math.cos(pitch)).multiplyScalar(off));
      }
      this.frustum = buildFrustumLines(cam, lens, cones.color ?? cam.color);
      this.fx.add(this.frustum);
    }
  }

  private syncBlindSpots() {
    const doc = this.doc!;
    if (doc.blindSpots === this.blindRef) return;
    this.blindRef = doc.blindSpots;
    if (this.blind) {
      this.fx.remove(this.blind);
      disposeObjectDeep(this.blind);
      this.blind = null;
    }
    const bs = doc.blindSpots;
    if (!bs) return;
    const pos: number[] = [];
    const lift = 0.4 * doc.unitsPerFoot;
    for (const r of bs.runs) {
      const c = [[r.x, r.y], [r.x + r.width, r.y], [r.x + r.width, r.y + r.height], [r.x, r.y + r.height]].map(([x, y]) => [x, this.h(x, y) + lift, y]);
      pos.push(...c[0], ...c[2], ...c[1], ...c[0], ...c[3], ...c[2]);
    }
    const group = new THREE.Group();
    if (pos.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.32, depthWrite: false, side: THREE.DoubleSide }));
      m.renderOrder = 4;
      m.name = "blind-spots";
      group.add(m);
    }
    const a = bs.area;
    const outline = [[a.x, a.y], [a.x + a.width, a.y], [a.x + a.width, a.y + a.height], [a.x, a.y + a.height]].map(([x, y]) => new THREE.Vector3(x, this.h(x, y) + lift, y));
    const loop = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(outline), new THREE.LineDashedMaterial({ color: 0xef4444, dashSize: 6 * doc.unitsPerFoot, gapSize: 4 * doc.unitsPerFoot }));
    loop.computeLineDistances();
    group.add(loop);
    group.traverse(o => { o.raycast = () => {}; });
    this.blind = group;
    this.fx.add(group);
  }

  /** Each camera's cable back to the recorder: along the ground at right angles, then up to the camera. */
  private syncCables() {
    const doc = this.doc!;
    if (doc.items === this.cablesKey[0] && this.heightsVersion === this.cablesKey[1]) return;
    this.cablesKey = [doc.items, this.heightsVersion];
    if (this.cables) {
      this.fx.remove(this.cables);
      disposeObjectDeep(this.cables);
      this.cables = null;
    }
    const rec = doc.items.find(i => i.type === "recorder");
    const cams = doc.items.filter(i => i.type === "camera") as CameraItem[];
    if (!rec || !cams.length) return;
    const lift = 0.3 * doc.unitsPerFoot;
    const at = (x: number, y: number) => new THREE.Vector3(x, this.h(x, y) + lift, y);
    const pos: THREE.Vector3[] = [];
    for (const cam of cams) {
      const p = cameraPlanPosition(cam, doc.items);
      const path = [at(rec.x, rec.y), at(p.x, rec.y), at(p.x, p.y), this.cameraWorld(cam)];
      for (let i = 0; i < path.length - 1; i++) pos.push(path[i], path[i + 1]);
    }
    const lines = new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints(pos),
      new THREE.LineDashedMaterial({ color: 0xf59e0b, dashSize: 3 * doc.unitsPerFoot, gapSize: 2 * doc.unitsPerFoot, depthTest: false, transparent: true, opacity: 0.9 })
    );
    lines.computeLineDistances();
    lines.renderOrder = 5;
    lines.name = "cable-runs";
    lines.raycast = () => {};
    this.cables = lines;
    this.fx.add(lines);
  }

  /** Selected building turns see-through (so the photo shows for lining it up) and gets an outline. */
  private syncSelection() {
    const doc = this.doc;
    if (!doc) return;
    for (const [id, { obj }] of this.objects) {
      const item = this.item(id);
      if (item?.type !== "building") continue;
      const see = id === this.selectedId;
      if (!!obj.userData.seeThrough === see) continue;
      obj.userData.seeThrough = see;
      obj.traverse(o => {
        const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
        if (!m || !(o as THREE.Mesh).isMesh) return;
        if (m.userData.baseTransparent === undefined) m.userData.baseTransparent = m.transparent;
        m.transparent = see || m.userData.baseTransparent;
        m.opacity = see ? 0.5 : 1;
        m.depthWrite = !see;
        m.needsUpdate = true;
      });
    }
    if (this.selectionFx) {
      this.fx.remove(this.selectionFx);
      disposeObjectDeep(this.selectionFx);
      this.selectionFx = null;
    }
    const sel = this.item(this.selectedId);
    if (sel) {
      this.selectionFx = this.outlineFor(sel, SELECT, 1);
      if (this.selectionFx) this.fx.add(this.selectionFx);
    }
  }

  private outlineFor(item: CanvasItem, color: number, opacity: number): THREE.Object3D | null {
    const doc = this.doc!;
    const mat = new THREE.LineBasicMaterial({ color, depthTest: false, transparent: true, opacity });
    const group = new THREE.Group();
    group.renderOrder = 12;
    if (item.type === "building") {
      const b = item as BuildingItem;
      const base = buildingBaseHeight(b, doc.heights, doc.gridSize);
      const wall = b.wallHeight ?? DEFAULT_BUILDING.wallHeight;
      const pts = buildingWorldPoints(b);
      [base + 0.15, base + wall].forEach(y => {
        const loop = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(p.x, y, p.y))), mat);
        loop.renderOrder = 12;
        group.add(loop);
      });
      const verts: THREE.Vector3[] = [];
      pts.forEach(p => verts.push(new THREE.Vector3(p.x, base, p.y), new THREE.Vector3(p.x, base + wall, p.y)));
      const v = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(verts), mat);
      v.renderOrder = 12;
      group.add(v);
      // Porch, carport and patio parts: dashed amber, at their floor and under the eaves
      const partList = openPartsOf(b);
      if (partList.length) {
        const local = buildingLocalPoints(b);
        const world = (p: { x: number; y: number }) => { const r = rotatePoint(p, b.rotation); return { x: b.x + r.x, y: b.y + r.y }; };
        const seg: THREE.Vector3[] = [];
        for (const part of partList) {
          const edges = partRoof(local, part) === "main" ? openPartEdges(local, [part.pts]) : part.pts.map((a, i) => ({ a, b: part.pts[(i + 1) % part.pts.length] }));
          for (const e of edges) {
            const a = world(e.a), c = world(e.b);
            for (const y of [base + Math.max(part.floor, 0) + 0.2, base + wall]) seg.push(new THREE.Vector3(a.x, y, a.y), new THREE.Vector3(c.x, y, c.y));
          }
        }
        const parts = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(seg), new THREE.LineDashedMaterial({ color: 0xf59e0b, dashSize: 1.5 * this.upf(), gapSize: 1 * this.upf(), depthTest: false, transparent: true, opacity }));
        parts.computeLineDistances();
        parts.renderOrder = 13;
        parts.name = "open-part-outline";
        group.add(parts);
      }
    } else if (item.type === "paving") {
      // Its outline on the ground, following the slope
      const pts = buildingWorldPoints(item as unknown as BuildingItem);
      const line: THREE.Vector3[] = [];
      pts.forEach((p, i) => {
        const q = pts[(i + 1) % pts.length];
        const steps = Math.max(1, Math.ceil(Math.hypot(q.x - p.x, q.y - p.y) / (doc.gridSize || 20) * 2));
        for (let k = 0; k < steps; k++) {
          const x = p.x + ((q.x - p.x) * k) / steps, y = p.y + ((q.y - p.y) * k) / steps;
          line.push(new THREE.Vector3(x, this.h(x, y) + 0.2, y));
        }
      });
      const loop = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(line), mat);
      loop.renderOrder = 12;
      group.add(loop);
    } else if (item.type !== "label") {
      const p = itemPoint(item, doc.items);
      const r = item.type === "tree" ? (item as TreeItem).radius * ((item as TreeItem).width ?? 1)
        : item.type === "parking" ? Math.hypot((item as ParkingItem).width, (item as ParkingItem).height) / 2
        : item.type === "image" ? Math.hypot((item as ImageItem).width, (item as ImageItem).height) / 2
        : 2.5 * doc.unitsPerFoot;
      const ring: THREE.Vector3[] = [];
      for (let i = 0; i < 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        const x = p.x + Math.cos(a) * r * 1.08;
        const y = p.y + Math.sin(a) * r * 1.08;
        ring.push(new THREE.Vector3(x, this.h(x, y) + 0.2, y));
      }
      const loop = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(ring), mat);
      loop.renderOrder = 12;
      group.add(loop);
    } else return null;
    group.traverse(o => { o.raycast = () => {}; });
    return group;
  }

  private setHover(id: string | null) {
    if (id === this.hoverId) return;
    this.hoverId = id;
    if (this.hoverFx) {
      this.fx.remove(this.hoverFx);
      disposeObjectDeep(this.hoverFx);
      this.hoverFx = null;
    }
    const item = id && id !== this.selectedId ? this.item(id) : null;
    if (item) {
      this.hoverFx = this.outlineFor(item, 0xffffff, 0.55);
      if (this.hoverFx) this.fx.add(this.hoverFx);
    }
    this.updateCursor();
    this.invalidate();
  }

  // ------------------------------------------------------------------ labels and pins (DOM)

  private syncOverlays() {
    const doc = this.doc;
    if (!doc) return;
    const seen = new Set<string>();
    const put = (key: string, sig: string, make: () => HTMLDivElement, anchor: THREE.Vector3, dy: number) => {
      seen.add(key);
      let o = this.overlays.get(key);
      if (!o || o.sig !== sig) {
        o?.el.remove();
        const el = make();
        el.classList.add("scp-ov");
        this.labelsLayer.appendChild(el);
        o = { el, anchor, dy, sig };
        this.overlays.set(key, o);
      }
      o.anchor = anchor;
      o.dy = dy;
    };
    let camNumber = 0;
    for (const item of doc.items) {
      const sel = item.id === this.selectedId;
      if (item.type === "camera") {
        const cam = item as CameraItem;
        // Numbered like the camera list and the report
        const num = ++camNumber;
        put(`cam:${cam.id}`, `${cam.label}|${cam.color}|${sel}|${num}`, () => {
          const el = document.createElement("div");
          el.className = `scp-cam${sel ? " sel" : ""}`;
          el.dataset.itemId = cam.id;
          el.dataset.testid = "camera-badge";
          el.setAttribute("data-testid", "camera-badge");
          el.style.setProperty("--c", cam.color);
          el.title = `${cam.label}: drag to move`;
          const dot = document.createElement("i");
          dot.textContent = String(num);
          el.append(dot, document.createTextNode(cam.label));
          return el;
        }, this.cameraWorld(cam), -16);
      } else if (item.type === "target") {
        const t = item as TargetItem;
        const status = doc.targetStatus[t.id] ?? "none";
        const color = status === "met" ? "#16a34a" : status === "partial" ? "#f59e0b" : "#ef4444";
        put(`pin:${t.id}`, `${t.label}|${status}|${sel}`, () => {
          const el = document.createElement("div");
          el.className = `scp-pin${sel ? " sel" : ""}`;
          el.dataset.itemId = t.id;
          el.setAttribute("data-testid", "target-pin");
          el.setAttribute("data-status", status);
          el.title = `${t.label}: drag to move`;
          const b = document.createElement("b");
          b.style.background = color;
          b.textContent = status === "met" ? "✓" : status === "partial" ? "!" : "✕";
          const s = document.createElement("span");
          s.textContent = t.label;
          el.append(b, s);
          return el;
        }, new THREE.Vector3(t.x, this.h(t.x, t.y), t.y), 11);
      } else if (item.type === "recorder") {
        const r = item as RecorderItem;
        put(`rec:${r.id}`, `${r.label}|${sel}`, () => {
          const el = document.createElement("div");
          el.className = `scp-pin scp-rec${sel ? " sel" : ""}`;
          el.dataset.itemId = r.id;
          el.setAttribute("data-testid", "recorder-pin");
          el.title = `${r.label}: drag to move`;
          // The badge says what it is; no caption to collide with building numbers.
          const b = document.createElement("b");
          b.textContent = "REC";
          el.append(b);
          return el;
        }, new THREE.Vector3(r.x, this.h(r.x, r.y), r.y), 11);
      } else if (item.type === "building") {
        const b = item as BuildingItem;
        const text = b.label?.trim();
        if (!text) continue;
        const top = (this.objects.get(b.id)?.obj.userData.top ?? b.wallHeight ?? 14) + 1;
        const off = b.labelOffset ?? { x: 0, y: 0 };
        const w = rotatePoint(off, b.rotation);
        put(`bld:${b.id}`, text, () => {
          const el = document.createElement("div");
          el.className = "scp-bld";
          el.textContent = text;
          return el;
        }, new THREE.Vector3(b.x + w.x, buildingBaseHeight(b, doc.heights, doc.gridSize) + top, b.y + w.y), 0);
      } else if (item.type === "label") {
        const l = item as LabelItem;
        put(`txt:${l.id}`, `${l.text}|${l.color}|${l.fontSize}|${sel}`, () => {
          const el = document.createElement("div");
          el.className = `scp-text${sel ? " sel" : ""}`;
          el.dataset.itemId = l.id;
          el.style.color = l.color;
          el.style.fontSize = `${clamp(l.fontSize, 10, 28)}px`;
          el.textContent = l.text;
          return el;
        }, new THREE.Vector3(l.x, this.h(l.x, l.y) + 0.5, l.y), 0);
      }
    }
    for (const [key, o] of this.overlays) {
      if (!seen.has(key)) {
        o.el.remove();
        this.overlays.delete(key);
      }
    }
  }

  // ------------------------------------------------------------------ handles

  private syncHandles() {
    const doc = this.doc;
    if (!doc) return;
    const picked = this.tool.mode === "select" && !this.tool.terrain ? this.item(this.selectedId) : null;
    // A locked item keeps its place and outline: no corner, edge, rotate or mount-height handles,
    // but its windows, doors, porches, roof ends and a camera's aim stay editable
    const sel = picked;
    const locked = !!sel?.locked;
    const key = sel ? `${sel.id}|${sel.type}|${locked}|${sel.type === "building" ? `${buildingLocalPoints(sel as BuildingItem).length}|${openPartsOf(sel as BuildingItem).map(p => `${p.kind}${p.floor > 0}${p.railing}${p.entries?.length ?? -1}`).join(",")}|${(sel as BuildingItem).openings?.length ?? -1}|${this.tool.opening ?? -1}` : sel.type === "paving" ? buildingLocalPoints(sel as unknown as BuildingItem).length : ""}` : "";
    if (key === this.handleKey) return;
    this.handleKey = key;
    this.handles.forEach(h => h.el.remove());
    this.handles = [];
    if (!sel) return;
    const add = (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts: { index?: number; title?: string; color?: string; text?: string; picked?: boolean; visible?: () => boolean } = {}) => {
      const el = document.createElement("div");
      el.className = "scp-h";
      el.dataset.handle = kind;
      el.setAttribute("data-testid", `handle-${kind}`);
      if (opts.index !== undefined) el.dataset.index = String(opts.index);
      if (opts.title) el.title = opts.title;
      if (opts.color) el.style.setProperty("--c", opts.color);
      if (opts.text) el.textContent = opts.text;
      if (opts.picked) el.dataset.picked = "1";
      this.handlesLayer.appendChild(el);
      this.handles.push({ el, kind, index: opts.index, world, start, visible: opts.visible });
    };
    const id = sel.id;
    if (sel.type === "paving" && !locked) this.buildingHandles(id, add);
    if (sel.type === "building") {
      this.buildingHandles(id, add, locked);
      this.openPartHandles(id, add);
      this.openingHandles(id, add);
      this.gableHandles(id, add);
    }
    else if (sel.type === "camera") this.cameraHandles(id, add, locked);
    else if (sel.type === "tree") {
      add("radius", () => {
        const t = this.item(id) as TreeItem | null;
        if (!t) return null;
        const r = t.radius * (t.width ?? 1);
        return new THREE.Vector3(t.x + r, this.h(t.x + r, t.y) + 0.2, t.y);
      }, e => this.planeDrag(e, id, (p, t: TreeItem) => ({ radius: Math.max(1 * this.upf(), Math.hypot(p.x - t.x, p.y - t.y) / (t.width ?? 1)) })), { title: "Drag to resize the crown", color: "#16a34a" });
    }
    if (!locked && (sel.type === "building" || sel.type === "parking" || sel.type === "image" || sel.type === "paving")) this.rotateHandle(id, add);
  }

  private planeDrag<T extends CanvasItem>(e: PointerEvent, id: string, patch: (p: P, item: T, ev: PointerEvent) => Partial<CanvasItem> | null, y?: number): Drag | null {
    const item = this.item(id) as T | null;
    if (!item) return null;
    const p0 = itemPoint(item, this.doc!.items);
    const planeY = y ?? this.h(p0.x, p0.y);
    return {
      move: ev => {
        const cur = this.item(id) as T | null;
        const hit = this.planeAt(ev.clientX, ev.clientY, planeY);
        if (!cur || !hit) return;
        const next = patch({ x: hit.x, y: hit.z }, cur, ev);
        if (next) this.cb.onChange(id, next);
      },
      end: () => this.cb.onCommit()
    };
  }

  private rotateHandle(id: string, add: (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts?: any) => void) {
    const reach = (item: CanvasItem) => {
      if (item.type === "building") return Math.max(...buildingLocalPoints(item as BuildingItem).map(p => Math.hypot(p.x, p.y)));
      return Math.hypot((item as ParkingItem).width ?? 0, (item as ParkingItem).height ?? 0) / 2;
    };
    add("rotate", () => {
      const it = this.item(id);
      if (!it) return null;
      const g = this.h(it.x, it.y);
      const center = new THREE.Vector3(it.x, g, it.y);
      const r = reach(it) + 30 * this.upp(center);
      // Below the item (the action bar sits above it)
      const a = (it.rotation + 90) * DEG;
      return new THREE.Vector3(it.x + Math.cos(a) * r, g + 0.2, it.y + Math.sin(a) * r);
    }, e => {
      const it = this.item(id);
      if (!it) return null;
      const g = this.h(it.x, it.y);
      const startHit = this.planeAt(e.clientX, e.clientY, g);
      if (!startHit) return null;
      const a0 = Math.atan2(startHit.z - it.y, startHit.x - it.x) / DEG;
      const r0 = it.rotation;
      return {
        move: ev => {
          const cur = this.item(id);
          const hit = this.planeAt(ev.clientX, ev.clientY, g);
          if (!cur || !hit) return;
          let rot = r0 + Math.atan2(hit.z - cur.y, hit.x - cur.x) / DEG - a0;
          if (ev.shiftKey) rot = Math.round(rot / 15) * 15;
          this.cb.onChange(id, { rotation: ((rot % 360) + 360) % 360 });
        },
        end: () => this.cb.onCommit()
      };
    }, { title: "Drag to rotate (Shift snaps to 15°)", text: "↻" });
  }

  /** Corners and edge middles of an outline: a building's, or a driveway's or patio's (flat on the ground). */
  private buildingHandles(id: string, add: (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts?: any) => void, locked = false) {
    const b0 = this.item(id) as BuildingItem;
    const flat = b0.type !== "building";
    const n = buildingLocalPoints(b0).length;
    const base = () => {
      const b = this.item(id) as BuildingItem | null;
      if (!b) return 0;
      return flat ? this.h(b.x, b.y) : buildingBaseHeight(b, this.doc!.heights, this.doc!.gridSize);
    };
    // Handles sit on the ground under each corner for flat things (a sloping driveway)
    const at = (p: { x: number; y: number }) => new THREE.Vector3(p.x, flat ? this.h(p.x, p.y) : base(), p.y);
    // Works on its own copy of the outline, so a corner added at the start of the drag can't be
    // lost while the app catches up.
    const cornerDrag = (index: number, start: { x: number; y: number }[]): Drag | null => {
      const y = base();
      const b0 = this.item(id) as BuildingItem | null;
      if (!b0) return null;
      const pose = { x: b0.x, y: b0.y, rotation: b0.rotation };
      const pts = start.map(p => ({ ...p }));
      return {
        move: ev => {
          const hit = this.planeAt(ev.clientX, ev.clientY, y);
          if (!hit) return;
          let local = toBuildingLocal(pose, { x: hit.x, y: hit.z });
          if (this.doc!.snapToGrid && !ev.altKey) {
            const g = this.doc!.gridSize;
            local = { x: Math.round(local.x / g) * g, y: Math.round(local.y / g) * g };
          }
          pts[index] = local;
          this.cb.onChange(id, { points: pts.map(p => ({ ...p })) });
        },
        end: () => this.cb.onCommit()
      };
    };
    for (let i = 0; i < (locked ? 0 : n); i++) {
      add("corner", () => {
        const b = this.item(id) as BuildingItem | null;
        if (!b) return null;
        const p = buildingWorldPoints(b)[i];
        return p ? at(p) : null;
      }, e => {
        const b = this.item(id) as BuildingItem | null;
        if (!b) return null;
        const pts = buildingLocalPoints(b);
        const now = performance.now();
        const last = this.lastCorner;
        this.lastCorner = { id, index: i, time: now };
        if (e.altKey || (last && last.id === id && last.index === i && now - last.time < 400)) {
          // Double-click (or Alt+click) a corner removes it
          this.lastCorner = null;
          if (pts.length > 3) {
            this.cb.onChange(id, { points: pts.filter((_, k) => k !== i) });
            this.cb.onCommit();
          }
          return null;
        }
        return cornerDrag(i, pts);
      }, { index: i, title: "Drag to reshape · double-click to remove the corner" });
      add("mid", () => {
        const b = this.item(id) as BuildingItem | null;
        if (!b) return null;
        const pts = buildingWorldPoints(b);
        const p = pts[i];
        const q = pts[(i + 1) % pts.length];
        return p && q ? at({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 }) : null;
      }, e => {
        // Pulling an edge's middle adds a corner there and drags it.
        const b = this.item(id) as BuildingItem | null;
        if (!b) return null;
        const pts = buildingLocalPoints(b);
        const mid = { x: (pts[i].x + pts[(i + 1) % pts.length].x) / 2, y: (pts[i].y + pts[(i + 1) % pts.length].y) / 2 };
        const next = [...pts.slice(0, i + 1), mid, ...pts.slice(i + 1)];
        this.cb.onChange(id, { points: next });
        return cornerDrag(i + 1, next);
      }, {
        index: i,
        title: "Drag to add a corner",
        visible: () => {
          const b = this.item(id) as BuildingItem | null;
          if (!b) return false;
          const pts = buildingWorldPoints(b);
          const y = base();
          const p = this.project(new THREE.Vector3(pts[i].x, y, pts[i].y));
          const q = this.project(new THREE.Vector3(pts[(i + 1) % pts.length].x, y, pts[(i + 1) % pts.length].y));
          return !!p && !!q && Math.hypot(p.x - q.x, p.y - q.y) > 48;
        }
      });
    }
    if (flat) return;
    add("height", () => {
      const b = this.item(id) as BuildingItem | null;
      if (!b) return null;
      const top = (this.objects.get(id)?.obj.userData.top ?? b.wallHeight ?? 14);
      return new THREE.Vector3(b.x, base() + top, b.y);
    }, e => this.heightDrag(e, () => {
      const b = this.item(id) as BuildingItem | null;
      return b ? new THREE.Vector3(b.x, base() + (b.wallHeight ?? 14), b.y) : null;
    }, () => (this.item(id) as BuildingItem | null)?.wallHeight ?? 14, h => this.cb.onChange(id, { wallHeight: Math.round(clamp(h, 6 * this.upf(), 400 * this.upf()) * 2) / 2 })), {
      title: "Drag up or down to change the height",
      // Height is a 3D thing: shown once the view is tilted (the inspector has it too).
      visible: () => this.controls.polarAngle > 15 * DEG
    });
  }

  /** On each wall, above its middle: a toggle between a gable end and a hip end (pitched roofs). */
  private gableHandles(id: string, add: (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts?: any) => void) {
    const b0 = this.item(id) as BuildingItem;
    const n = buildingLocalPoints(b0).length;
    for (let i = 0; i < n; i++) {
      add("gable", () => {
        const b = this.item(id) as BuildingItem | null;
        if (!b || b.openSides || buildingRoofKind(b, this.upf()) === "flat") return null;
        const pts = buildingLocalPoints(b);
        const a = pts[i], c = pts[(i + 1) % pts.length];
        if (!a || !c) return null;
        const nrm = getEdgeOutwardNormal(pts, i);
        const off = 4 * this.upf();
        const r = rotatePoint({ x: (a.x + c.x) / 2 + nrm.x * off, y: (a.y + c.y) / 2 + nrm.y * off }, b.rotation);
        return new THREE.Vector3(b.x + r.x, buildingBaseHeight(b, this.doc!.heights, this.doc!.gridSize) + (b.wallHeight ?? DEFAULT_BUILDING.wallHeight), b.y + r.y);
      }, () => {
        this.cb.onToggleGable(id, i);
        return null;
      }, {
        index: i,
        title: "Click to switch this end of the roof between a gable (a peaked wall) and a hip (a sloped end)",
        text: "",
        visible: () => {
          const b = this.item(id) as BuildingItem | null;
          const el = this.handles.find(h => h.kind === "gable" && h.index === i)?.el;
          // Shows ▲ for a gable end, ◣ for a hip end
          if (el && b) el.dataset.gable = isGableWall(b, i, this.upf()) ? "1" : "0";
          // Never over the height handle (that one wins)
          const hh = this.handles.find(h => h.kind === "height");
          const hw = hh?.world(), mw = this.handles.find(h => h.kind === "gable" && h.index === i)?.world();
          if (hw && mw && (!hh!.visible || hh!.visible())) {
            const a = this.project(hw), c = this.project(mw);
            if (a && c && Math.hypot(a.x - c.x, a.y - c.y) < 40) return false;
          }
          return true;
        }
      });
    }
  }

  /** A handle on each window and door: drag it along the walls (onto another wall too); picking it
   * shows it in the inspector. */
  private openingHandles(id: string, add: (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts?: any) => void) {
    const b0 = this.item(id) as BuildingItem;
    (b0.openings ?? []).forEach((_, k) => {
      const where = () => {
        const b = this.item(id) as BuildingItem | null;
        const o = b?.openings?.[k];
        if (!b || !o) return null;
        const outline = buildingLocalPoints(b);
        const place = openingPlace(outline, o, wallPieces(outline, insetParts(outline, openPartsOf(b))));
        if (!place) return null;
        const r = rotatePoint({ x: place.x + place.normal.x * 0.5 * this.upf(), y: place.y + place.normal.y * 0.5 * this.upf() }, b.rotation);
        return { b, o, world: new THREE.Vector3(b.x + r.x, buildingBaseHeight(b, this.doc!.heights, this.doc!.gridSize) + o.sill + o.height / 2, b.y + r.y) };
      };
      add("opening", () => where()?.world ?? null, e => {
        const w = where();
        if (!w) return null;
        this.cb.onSelectOpening(id, k);
        const y = w.world.y;
        const pose = { x: w.b.x, y: w.b.y, rotation: w.b.rotation };
        const outline = buildingLocalPoints(w.b);
        const pieces = wallPieces(outline, insetParts(outline, openPartsOf(w.b)));
        const upf = this.upf();
        // In a tilted view a window moves on its wall: along it and up or down (doors stay on the
        // floor; their bottom square sets how high they sit). From above, along the walls only.
        const place0 = openingPlace(outline, w.o, pieces);
        const n = place0 ? rotatePoint(place0.normal, w.b.rotation) : null;
        const wallPlane = n && this.controls.polarAngle > 22 * DEG && !isDoor(w.o.kind)
          ? new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(n.x, 0, n.y), w.world)
          : null;
        const grab = new THREE.Vector3();
        const grabbed = !!wallPlane && !!this.ray(e.clientX, e.clientY).intersectPlane(wallPlane, grab);
        const sill0 = w.o.sill;
        let moved = false;
        return {
          move: ev => {
            const b = this.item(id) as BuildingItem | null;
            const o = b?.openings?.[k];
            if (!b || !o) return;
            let hit: THREE.Vector3 | null = null;
            let sill = o.sill;
            if (grabbed) {
              const h = new THREE.Vector3();
              if (this.ray(ev.clientX, ev.clientY).intersectPlane(wallPlane!, h)) {
                hit = h;
                const wall = b.wallHeight ?? DEFAULT_BUILDING.wallHeight * upf;
                sill = Math.round(clamp(sill0 + (h.y - grab.y), 0, Math.max(0, wall - o.height - 0.25 * upf)) / (0.25 * upf)) * 0.25 * upf;
              }
            } else hit = this.planeAt(ev.clientX, ev.clientY, y);
            if (!hit) return;
            const at = snapToWall(pieces, toBuildingLocal(pose, { x: hit.x, y: hit.z }), o.width);
            if (!at) return;
            moved = true;
            const next = b.openings!.map((q, j) => (j === k ? { ...q, x: at.x, y: at.y, sill, edge: undefined, at: undefined } : q));
            this.cb.onChange(id, { openings: next } as Partial<CanvasItem>);
          },
          end: () => { if (moved) this.cb.onCommit(); }
        };
      }, { index: k, picked: k === this.tool.opening, title: "Drag to move it along the wall (and up or down) · click to edit it" });
      if (k !== this.tool.opening) return;
      // The picked one: drag its sides to make it wider or narrower, its top for its height, its
      // bottom for how high it sits (the sill)
      const edgePoint = (side: number, top = false, bottom = false) => {
        const w = where();
        if (!w) return null;
        const outline = buildingLocalPoints(w.b);
        const place = openingPlace(outline, w.o, wallPieces(outline, insetParts(outline, openPartsOf(w.b))));
        if (!place) return null;
        const off = 0.4 * this.upf();
        const lx = place.x + place.dir.x * (top || bottom ? 0 : side * w.o.width / 2) + place.normal.x * off;
        const ly = place.y + place.dir.y * (top || bottom ? 0 : side * w.o.width / 2) + place.normal.y * off;
        const r = rotatePoint({ x: lx, y: ly }, w.b.rotation);
        const base = buildingBaseHeight(w.b, this.doc!.heights, this.doc!.gridSize);
        return new THREE.Vector3(w.b.x + r.x, base + (top ? w.o.sill + w.o.height : bottom ? w.o.sill : w.o.sill + w.o.height / 2), w.b.y + r.y);
      };
      const setOpening = (patch: Partial<Opening>) => {
        const b = this.item(id) as BuildingItem | null;
        if (!b?.openings) return;
        this.cb.onChange(id, { openings: b.openings.map((q, j) => (j === k ? { ...q, ...patch } : q)) } as Partial<CanvasItem>);
      };
      [-1, 1].forEach(side => add("opening-size", () => edgePoint(side), () => {
        const w = where();
        if (!w) return null;
        const y = w.world.y;
        const pose = { x: w.b.x, y: w.b.y, rotation: w.b.rotation };
        const outline = buildingLocalPoints(w.b);
        const place = openingPlace(outline, w.o, wallPieces(outline, insetParts(outline, openPartsOf(w.b))));
        if (!place) return null;
        return {
          move: ev => {
            const hit = this.planeAt(ev.clientX, ev.clientY, y);
            if (!hit) return;
            const l = toBuildingLocal(pose, { x: hit.x, y: hit.z });
            // Symmetric about its middle, in half-foot steps
            const half = Math.abs((l.x - place.x) * place.dir.x + (l.y - place.y) * place.dir.y);
            const width = Math.max(1 * this.upf(), Math.min(place.len - 0.5 * this.upf(), Math.round((half * 2) / (0.5 * this.upf())) * 0.5 * this.upf()));
            setOpening({ width });
          },
          end: () => this.cb.onCommit()
        };
      }, { index: side, title: "Drag to make it wider or narrower" }));
      add("opening-size", () => edgePoint(0, true), e => {
        const w = where();
        if (!w) return null;
        const o = w.o;
        return this.heightDrag(e, () => edgePoint(0, true), () => o.height, h => {
          const b = this.item(id) as BuildingItem | null;
          const wall = b?.wallHeight ?? DEFAULT_BUILDING.wallHeight;
          setOpening({ height: Math.round(clamp(h, 1 * this.upf(), wall - o.sill) / (0.25 * this.upf())) * 0.25 * this.upf() });
        });
      }, { index: 2, title: "Drag up or down to make it taller or shorter" });
      add("opening-size", () => edgePoint(0, false, true), e => {
        const w = where();
        if (!w) return null;
        const top = w.o.sill + w.o.height;
        // The top stays put: lowering the bottom makes it taller
        return this.heightDrag(e, () => edgePoint(0, false, true), () => w.o.sill, v => {
          const sill = Math.round(clamp(v, 0, top - 1 * this.upf()) / (0.25 * this.upf())) * 0.25 * this.upf();
          setOpening({ sill, height: top - sill });
        });
      }, { index: 3, title: "Drag up or down to move its bottom (how high it sits)" });
    });
  }

  /** Handles on each porch/carport part: drag a side in or out (it snaps to the walls), and lift the floor. */
  private openPartHandles(id: string, add: (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts?: any) => void) {
    const b0 = this.item(id) as BuildingItem;
    const parts0 = openPartsOf(b0);
    const toWorld = (b: BuildingItem, p: P) => { const r = rotatePoint(p, b.rotation); return { x: b.x + r.x, y: b.y + r.y }; };
    const part = (k: number) => { const b = this.item(id) as BuildingItem | null; return b ? { b, part: openPartsOf(b)[k] } : null; };
    const setPart = (b: BuildingItem, k: number, patch: Partial<(typeof parts0)[number]>) =>
      this.cb.onChange(id, { openParts: openPartsOf(b).map((p, j) => (j === k ? { ...p, ...patch } : p)) } as Partial<CanvasItem>);
    parts0.forEach((_, k) => {
      for (let i = 0; i < 4; i++) {
        add("part-edge", () => {
          const cur = part(k);
          if (!cur?.part || cur.part.pts.length !== 4) return null;
          const a = cur.part.pts[i], c = cur.part.pts[(i + 1) % 4];
          const w = toWorld(cur.b, { x: (a.x + c.x) / 2, y: (a.y + c.y) / 2 });
          return new THREE.Vector3(w.x, this.eaveY(cur.b), w.y);
        }, () => {
          const cur = part(k);
          if (!cur?.part) return null;
          const y = this.eaveY(cur.b);
          const pose = { x: cur.b.x, y: cur.b.y, rotation: cur.b.rotation };
          const outline = buildingLocalPoints(cur.b);
          const start = cur.part.pts.map(p => ({ ...p }));
          return {
            move: ev => {
              const hit = this.planeAt(ev.clientX, ev.clientY, y);
              const b = this.item(id) as BuildingItem | null;
              if (!hit || !b) return;
              const next = movePartEdge(start, i, toBuildingLocal(pose, { x: hit.x, y: hit.z }), outline, 1.5 * this.upf());
              if (next) setPart(b, k, { pts: next });
            },
            end: () => this.cb.onCommit()
          };
        }, { index: k * 4 + i, title: "Drag to resize the porch or carport (snaps to the walls)" });
      }
      add("part-floor", () => {
        const cur = part(k);
        if (!cur?.part) return null;
        const c = cur.part.pts.reduce((m, p) => ({ x: m.x + p.x / cur.part.pts.length, y: m.y + p.y / cur.part.pts.length }), { x: 0, y: 0 });
        const w = toWorld(cur.b, c);
        return new THREE.Vector3(w.x, buildingBaseHeight(cur.b, this.doc!.heights, this.doc!.gridSize) + cur.part.floor, w.y);
      }, e => {
        const cur = part(k);
        if (!cur?.part) return null;
        const base = buildingBaseHeight(cur.b, this.doc!.heights, this.doc!.gridSize);
        const c = cur.part.pts.reduce((m, p) => ({ x: m.x + p.x / cur.part.pts.length, y: m.y + p.y / cur.part.pts.length }), { x: 0, y: 0 });
        const w = toWorld(cur.b, c);
        return this.heightDrag(e, () => new THREE.Vector3(w.x, base + cur.part.floor, w.y), () => cur.part.floor, h => {
          const b = this.item(id) as BuildingItem | null;
          if (!b) return;
          const max = (b.wallHeight ?? DEFAULT_BUILDING.wallHeight) - 6 * this.upf();
          setPart(b, k, { floor: Math.round(clamp(h, 0, max) / (0.5 * this.upf())) * 0.5 * this.upf() });
        });
      }, { index: k, title: "Drag up or down to raise or lower the floor", visible: () => this.controls.polarAngle > 15 * DEG });
      // Each entry (steps down): drag it along the open sides
      if (hasRailing(parts0[k], this.upf()) && parts0[k].floor > 0.2 * this.upf()) {
        partEntries(buildingLocalPoints(b0), parts0[k]).forEach((_, e) => {
          const spot = () => {
            const cur = part(k);
            if (!cur?.part) return null;
            const outline = buildingLocalPoints(cur.b);
            const en = partEntries(outline, cur.part)[e];
            const side = en && partSides(outline, cur.part)[en.side];
            if (!side) return null;
            const w = toWorld(cur.b, { x: side.a.x + (side.b.x - side.a.x) * en.at, y: side.a.y + (side.b.y - side.a.y) * en.at });
            return { cur, outline, y: buildingBaseHeight(cur.b, this.doc!.heights, this.doc!.gridSize) + cur.part.floor, w };
          };
          add("part-steps", () => { const s = spot(); return s ? new THREE.Vector3(s.w.x, s.y, s.w.y) : null; }, () => {
            const s = spot();
            if (!s) return null;
            const pose = { x: s.cur.b.x, y: s.cur.b.y, rotation: s.cur.b.rotation };
            const list = partEntries(s.outline, s.cur.part).map(x => ({ ...x }));
            let moved = false;
            return {
              move: ev => {
                const hit = this.planeAt(ev.clientX, ev.clientY, s.y);
                const b = this.item(id) as BuildingItem | null;
                if (!hit || !b) return;
                const near = nearestSide(s.outline, s.cur.part, toBuildingLocal(pose, { x: hit.x, y: hit.z }));
                if (near.side < 0) return;
                list[e] = { side: near.side, at: near.at };
                moved = true;
                setPart(b, k, { entries: list.map(x => ({ ...x })) });
              },
              end: () => { if (moved) this.cb.onCommit(); }
            };
          }, { index: k * 100 + e, title: "Steps: drag along the railing to move them · right-click for more" });
        });
      }
    });
  }

  /** Vertical drag: along a vertical plane facing the camera, or screen distance when looking down. */
  private heightDrag(e: PointerEvent, anchor: () => THREE.Vector3 | null, value: () => number, apply: (v: number) => void): Drag | null {
    const a = anchor();
    if (!a) return null;
    const start = value();
    const tilted = this.controls.polarAngle > 22 * DEG;
    const normal = new THREE.Vector3();
    this.camera.getWorldDirection(normal);
    normal.y = 0;
    normal.normalize();
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(normal, a);
    const hit0 = new THREE.Vector3();
    const ok = tilted && this.ray(e.clientX, e.clientY).intersectPlane(plane, hit0);
    const y0 = e.clientY;
    const upp = this.upp(a);
    return {
      move: ev => {
        if (ok) {
          const hit = new THREE.Vector3();
          if (this.ray(ev.clientX, ev.clientY).intersectPlane(plane, hit)) apply(start + (hit.y - hit0.y));
        } else {
          apply(start + (y0 - ev.clientY) * upp * 0.6);
        }
      },
      end: () => this.cb.onCommit()
    };
  }

  private cameraHandles(id: string, add: (kind: string, world: () => THREE.Vector3 | null, start: Handle["start"], opts?: any) => void, locked = false) {
    const upf = this.upf();
    const cam = () => this.item(id) as CameraItem | null;
    const pos = (c: CameraItem) => cameraPlanPosition(c, this.doc!.items);
    // Distance (plan units) at which the view's center is at head height: where the aim dot sits.
    const aimDist = (c: CameraItem) => {
      const hFt = cameraMountHeight(c);
      const pitch = c.pitch ?? DEFAULT_CAMERA_PITCH;
      const d = pitch < -0.5 && hFt > 5.5 ? ((hFt - 5.5) / Math.tan(-pitch * DEG)) * upf : c.range * 0.6;
      return clamp(d, 3 * upf, c.range);
    };
    const groundPt = (c: CameraItem, angleDeg: number, dist: number) => {
      const p = pos(c);
      const x = p.x + Math.cos(angleDeg * DEG) * dist;
      const y = p.y + Math.sin(angleDeg * DEG) * dist;
      return new THREE.Vector3(x, this.h(x, y) + 0.3, y);
    };
    const angleTo = (c: CameraItem, hit: THREE.Vector3) => {
      const p = pos(c);
      return { angle: Math.atan2(hit.z - p.y, hit.x - p.x) / DEG, dist: Math.hypot(hit.x - p.x, hit.z - p.y) };
    };
    const groundDrag = (fn: (c: CameraItem, hit: THREE.Vector3, ev: PointerEvent) => Partial<CameraItem> | null): Handle["start"] => () => ({
      move: ev => {
        const c = cam();
        const hit = this.groundAt(ev.clientX, ev.clientY);
        if (!c || !hit) return;
        const patch = fn(c, hit, ev);
        if (patch) this.cb.onChange(id, patch);
      },
      end: () => this.cb.onCommit()
    });
    add("aim", () => { const c = cam(); return c ? groundPt(c, c.rotation, aimDist(c)) : null; }, groundDrag((c, hit, ev) => {
      const { angle, dist } = angleTo(c, hit);
      const rotation = ((angle % 360) + 360) % 360;
      if (ev.shiftKey) return { rotation };
      return { rotation, pitch: suggestPitchForDistance(cameraMountHeight(c), dist / upf) };
    }), { title: "Drag to aim: the camera looks here (Shift: turn only)" });
    const fovHandle = (side: -1 | 1) => add(side < 0 ? "fov-l" : "fov-r", () => {
      const c = cam();
      return c ? groundPt(c, c.rotation + (side * getCameraHFov(c)) / 2, Math.min(aimDist(c) * 1.25, c.range * 0.85)) : null;
    }, groundDrag((c, hit) => {
      const { angle } = angleTo(c, hit);
      let diff = ((angle - c.rotation) % 360 + 540) % 360 - 180;
      diff *= side;
      if (diff <= 0) return null;
      const hFov = Math.round(clamp(diff * 2, 10, 180));
      return { hFov, fov: hFov };
    }), { title: "Drag to widen or narrow the view", color: cam()?.color });
    fovHandle(-1);
    fovHandle(1);
    add("range", () => { const c = cam(); return c ? groundPt(c, c.rotation, c.range) : null; }, groundDrag((c, hit) => {
      const { dist } = angleTo(c, hit);
      return { range: Math.round(Math.max(5 * upf, dist)) };
    }), { title: "Drag to change how far the view is drawn", color: cam()?.color });
    if (locked) return;
    add("cam-height", () => {
      const c = cam();
      return c ? this.cameraWorld(c) : null;
    }, e => this.heightDrag(e, () => { const c = cam(); return c ? this.cameraWorld(c) : null; }, () => cameraMountHeight(cam()!) * upf, v => {
      const c = cam();
      if (!c) return;
      const ft = Math.round(clamp(v / upf, 1, 80) * 2) / 2;
      this.cb.onChange(id, { height: ft, mount: { ...(c.mount ?? { type: "free" as const }), height: ft } });
    }), { title: "Drag up or down to change the mounting height", visible: () => this.controls.polarAngle > 15 * DEG });
  }

  // ------------------------------------------------------------------ per-frame layout of DOM bits

  // Camera badges, spot pins and the recorder are moved apart (down, then up) so none sits on
  // another; a building's name that would be covered is hidden until there is room for it.
  private layoutOverlays() {
    const rank = (key: string) => (key.startsWith("cam:") ? 0 : key.startsWith("bld:") ? 3 : key.startsWith("txt:") ? 2 : 1);
    const list = [...this.overlays.entries()].sort((a, b) => rank(a[0]) - rank(b[0]));
    const taken: { x0: number; y0: number; x1: number; y1: number }[] = [];
    const hits = (r: { x0: number; y0: number; x1: number; y1: number }) => taken.some(t => r.x0 < t.x1 && r.x1 > t.x0 && r.y0 < t.y1 && r.y1 > t.y0);
    for (const [key, o] of list) {
      const s = this.project(o.anchor);
      if (!s || s.x < -60 || s.y < -60 || s.x > this.size.width + 60 || s.y > this.size.height + 60) {
        o.el.style.display = "none";
        continue;
      }
      o.el.style.display = "";
      if (!o.w || !o.h) { o.w = o.el.offsetWidth; o.h = o.el.offsetHeight; }
      const w = o.w, h = o.h;
      const x = s.x - w / 2, y = s.y - h / 2 + o.dy;
      const box = (dy: number) => ({ x0: x, y0: y + dy, x1: x + w, y1: y + dy + h });
      let dy = 0;
      if (rank(key) === 3) {
        // Least important: hide it rather than move it off its building.
        const covered = hits(box(0));
        o.el.style.visibility = covered ? "hidden" : "";
        if (covered) continue;
      } else {
        const step = h + 2;
        dy = [0, step, -step, 2 * step, -2 * step].find(d => !hits(box(d))) ?? 0;
      }
      taken.push(box(dy));
      o.el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y + dy)}px)`;
    }
  }

  private layout() {
    const place = (el: HTMLElement, world: THREE.Vector3 | null, dy = 0, center = true) => {
      const s = world ? this.project(world) : null;
      if (!s || s.x < -60 || s.y < -60 || s.x > this.size.width + 60 || s.y > this.size.height + 60) {
        el.style.display = "none";
        return;
      }
      el.style.display = "";
      const w = center ? el.offsetWidth / 2 : 0;
      const hgt = center ? el.offsetHeight / 2 : 0;
      el.style.translate = `${Math.round(s.x - w)}px ${Math.round(s.y - hgt + dy)}px`;
    };
    this.layoutOverlays();
    for (const m of this.measureLabels) place(m.el, m.at, -12);
    for (const h of this.handles) {
      let w: THREE.Vector3 | null = null;
      try { w = h.visible && !h.visible() ? null : h.world(); } catch { w = null; }
      if (!w) {
        h.el.style.display = "none";
        continue;
      }
      if (h.kind === "cam-height" && w) {
        // Sits above the camera's name badge
        const s = this.project(w);
        if (s) {
          h.el.style.display = "";
          h.el.style.translate = `${Math.round(s.x - 11)}px ${Math.round(s.y - 62)}px`;
          continue;
        }
      }
      if (h.kind === "height" && w) {
        const s = this.project(w);
        if (s) {
          h.el.style.display = "";
          h.el.style.translate = `${Math.round(s.x - 11)}px ${Math.round(s.y - 34)}px`;
          continue;
        }
      }
      place(h.el, w);
    }
  }

  // ------------------------------------------------------------------ picking

  /** Item under a client point: small things (by screen distance) first, then meshes. */
  private pick(clientX: number, clientY: number): string | null {
    const doc = this.doc;
    if (!doc) return null;
    const r = this.container.getBoundingClientRect();
    const sx = clientX - r.left;
    const sy = clientY - r.top;
    let best: { id: string; score: number } | null = null;
    for (const item of doc.items) {
      if (item.type === "building" || item.type === "label" || item.type === "image" || item.type === "paving") continue;
      // A see-through tree (in front of the house): only its trunk at the ground picks it
      const faded = item.type === "tree" && this.isTreeFaded(item.id);
      const a = faded ? new THREE.Vector3(item.x, this.h(item.x, item.y) + 1.5 * this.upf(), item.y) : this.itemAnchor(item);
      const s = this.project(a);
      if (!s) continue;
      const upp = this.upp(a);
      const real = item.type === "tree" ? (faded ? 1.5 * this.upf() : (item as TreeItem).radius * ((item as TreeItem).width ?? 1))
        : item.type === "parking" ? Math.max((item as ParkingItem).width, (item as ParkingItem).height) / 2
        : 0;
      const radius = Math.max(item.type === "camera" ? 16 : 13, real / upp);
      const d = Math.hypot(s.x - sx, s.y - sy);
      if (d <= radius) {
        const score = d / radius + (item.type === "tree" ? 0.3 : 0);
        if (!best || score < best.score) best = { id: item.id, score };
      }
    }
    if (best) return best.id;
    this.ray(clientX, clientY);
    const hits = this.raycaster.intersectObjects(this.itemsGroup.children, true);
    for (const hit of hits) {
      let o: THREE.Object3D | null = hit.object;
      while (o && !o.userData.itemId) o = o.parent;
      // Clicks go through see-through trees to what's behind them
      if (o?.userData.itemId && this.isTreeFaded(o.userData.itemId)) continue;
      if (o?.userData.itemId) return o.userData.itemId;
    }
    return null;
  }

  /** Whether a tree is (or is turning) see-through because it's in front of the house. */
  private isTreeFaded(id: string) {
    const obj = this.objects.get(id)?.obj;
    const f = obj && this.treeFade.get(obj);
    return !!f && f.target < 0.999;
  }

  // ------------------------------------------------------------------ pointer input

  private endDragListeners: (() => void) | null = null;

  /** Press that becomes a click (no movement) or a drag. */
  private gesture(e: PointerEvent, h: { click?: (ev: PointerEvent) => void; drag?: (start: PointerEvent) => Drag | null }) {
    const sx = e.clientX;
    const sy = e.clientY;
    const id = e.pointerId;
    let drag: Drag | null = null;
    let moved = false;
    const move = (ev: PointerEvent) => {
      if (ev.pointerId !== id) return;
      if (!moved && Math.hypot(ev.clientX - sx, ev.clientY - sy) > CLICK_PX) {
        moved = true;
        drag = h.drag?.(e) ?? null;
        if (drag) this.setDragging(true);
      }
      if (drag) {
        drag.move(ev);
        this.invalidate();
      }
    };
    const up = (ev: PointerEvent) => {
      if (ev.pointerId !== id) return;
      cleanup();
      if (drag) {
        drag.end(ev);
        this.setDragging(false);
      } else if (!moved) h.click?.(ev);
      this.invalidate();
    };
    const cleanup = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      this.endDragListeners = null;
    };
    this.endDragListeners?.();
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    this.endDragListeners = cleanup;
  }

  private setDragging(on: boolean) {
    if (this.dragging === on) return;
    this.dragging = on;
    this.cb.onInteraction(on);
    if (!on) {
      // Handles may need rebuilding (a corner was added) now that the pointer is free.
      this.handleKey = "";
      this.syncHandles();
    }
    this.updateCursor();
  }

  /** Map-style pan: the ground point under the cursor stays under the cursor. */
  private panDrag(e: PointerEvent): Drag | null {
    const g0 = this.groundAt(e.clientX, e.clientY);
    if (!g0) return null;
    this.container.style.cursor = "grabbing";
    return {
      move: ev => {
        const g1 = this.planeAt(ev.clientX, ev.clientY, g0.y);
        if (!g1) return;
        this.shift(g0.x - g1.x, g0.z - g1.z);
      },
      end: () => this.updateCursor()
    };
  }

  private shift(dx: number, dz: number) {
    const t = this.controls.getTarget(new THREE.Vector3(), false);
    void this.controls.moveTo(t.x + dx, t.y, t.z + dz, false);
    this.controls.update(0);
    this.camera.updateMatrixWorld();
    this.invalidate();
  }

  private itemDrag(e: PointerEvent, id: string): Drag | null {
    const doc = this.doc!;
    const item = this.item(id);
    if (!item) return null;
    const p0 = itemPoint(item, doc.items);
    const planeY = item.type === "building" ? buildingBaseHeight(item as BuildingItem, doc.heights, doc.gridSize) : this.h(p0.x, p0.y);
    const hit0 = this.planeAt(e.clientX, e.clientY, planeY);
    if (!hit0) return null;
    const off = { x: p0.x - hit0.x, y: p0.y - hit0.z };
    const upf = this.upf();
    return {
      move: ev => {
        const cur = this.item(id);
        const hit = this.planeAt(ev.clientX, ev.clientY, planeY);
        if (!cur || !hit) return;
        let x = hit.x + off.x;
        let y = hit.z + off.y;
        if (this.doc!.snapToGrid && !ev.altKey) {
          const g = this.doc!.gridSize;
          x = Math.round(x / g) * g;
          y = Math.round(y / g) * g;
        }
        if (cur.type === "camera") {
          const cam = cur as CameraItem;
          const items = this.doc!.items;
          // Under a porch or carport roof: on the wall at its back, or hung under the roof
          const under = ev.altKey ? null : cameraUnderRoof({ x, y }, items, upf, cam.mount?.height ?? cameraMountHeight(cam));
          if (under) {
            this.cb.onChange(id, { x: under.x, y: under.y, rotation: cam.mount?.type === "building" && under.mount.type === "building" ? cam.rotation : under.rotation, mount: under.mount, height: under.heightFt } as Partial<CameraItem>);
            return;
          }
          const wall = ev.altKey ? null : nearestWall({ x, y }, items.filter(i => i.type === "building"));
          if (wall && wall.distance < wallSnapDistance(upf)) {
            const b = items.find(i => i.id === wall.buildingId) as BuildingItem | undefined;
            const sameWall = cam.mount?.type === "building" && cam.mount.buildingId === wall.buildingId;
            const height = sameWall ? cam.mount?.height ?? mountHeightForBuilding(b) : mountHeightForBuilding(b);
            this.cb.onChange(id, {
              x: wall.point.x,
              y: wall.point.y,
              rotation: sameWall && cam.mount?.edgeIndex === wall.edgeIndex ? cam.rotation : wall.rotation,
              mount: { type: "building", buildingId: wall.buildingId, edgeIndex: wall.edgeIndex, edgeT: wall.edgeT, at: wall.at, height },
              height
            } as Partial<CameraItem>);
          } else {
            const height = cam.mount?.type === "building" ? DEFAULT_CAMERA_HEIGHT_FT : cameraMountHeight(cam);
            this.cb.onChange(id, { x, y, mount: { type: "free", edgeT: 0.5, height }, height } as Partial<CameraItem>);
          }
          return;
        }
        this.cb.onChange(id, { x, y });
      },
      end: () => this.cb.onCommit()
    };
  }

  private contextAt(ev: PointerEvent, target: HTMLElement) {
    const handleEl = target.closest?.("[data-handle]") as HTMLElement | null;
    const h = handleEl ? this.handles.find(x => x.el === handleEl) : null;
    const domItem = (target.closest?.("[data-item-id]") as HTMLElement | null)?.dataset.itemId ?? null;
    const itemId = h ? this.selectedId : domItem ?? this.pick(ev.clientX, ev.clientY);
    const g = this.groundAt(ev.clientX, ev.clientY);
    let local: P | null = null, height: number | null = null, surface: P | null = null;
    const item = this.item(itemId);
    if (item?.type === "building") {
      const b = item as BuildingItem;
      const base = buildingBaseHeight(b, this.doc!.heights, this.doc!.gridSize);
      const obj = this.objects.get(b.id)?.obj;
      this.ray(ev.clientX, ev.clientY);
      const hits = obj ? this.raycaster.intersectObject(obj, true) : [];
      const hit = hits.find(x => x.object.name === "building-walls");
      // What was clicked on the house itself (a railing, a porch floor, a post), on the plan
      if (hits[0]) surface = { x: hits[0].point.x, y: hits[0].point.z };
      const p = hit?.point ?? this.planeAt(ev.clientX, ev.clientY, base + (b.wallHeight ?? DEFAULT_BUILDING.wallHeight) / 2);
      if (p) local = toBuildingLocal(b, { x: p.x, y: p.z });
      if (hit) height = hit.point.y - base;
    }
    this.cb.onContextMenu({ clientX: ev.clientX, clientY: ev.clientY, itemId, handle: h ? { kind: h.kind, index: h.index } : null, ground: g ? { x: g.x, y: g.z } : null, local, height, surface });
  }

  private onPointerDown(e: PointerEvent) {
    const target = e.target as HTMLElement;
    if (!this.doc) return;
    if (this.povId) {
      if (e.button !== 0 || target.closest?.("button,input,select,[data-pov-ui]")) return;
      e.preventDefault();
      e.stopPropagation();
      this.povAim(e);
      return;
    }
    // Rotate / tilt: right-drag (camera-controls), or Ctrl/Alt/Shift + left-drag. A right-click
    // that doesn't drag opens a menu of actions for what's under it.
    if (e.button === 2) {
      const x0 = e.clientX, y0 = e.clientY, id = e.pointerId;
      const up = (ev: PointerEvent) => {
        if (ev.pointerId !== id) return;
        window.removeEventListener("pointerup", up, true);
        if (Math.hypot(ev.clientX - x0, ev.clientY - y0) < 5) this.contextAt(ev, target);
      };
      window.addEventListener("pointerup", up, true);
      return;
    }
    const handleEl = target.closest?.("[data-handle]") as HTMLElement | null;
    if (handleEl && e.button === 0) {
      e.stopPropagation();
      e.preventDefault();
      const h = this.handles.find(x => x.el === handleEl);
      if (!h) return;
      const drag = h.start(e);
      if (!drag) { this.invalidate(); return; }
      // Handles drag straight away (no click threshold) so small adjustments are possible.
      const id = e.pointerId;
      this.setDragging(true);
      const move = (ev: PointerEvent) => { if (ev.pointerId === id) { drag.move(ev); this.invalidate(); } };
      const up = (ev: PointerEvent) => {
        if (ev.pointerId !== id) return;
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", up);
        drag.end(ev);
        this.setDragging(false);
        this.invalidate();
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
      return;
    }
    const touch = e.pointerType === "touch";
    if (e.button === 1 || (this.spaceDown && e.button === 0)) {
      e.stopPropagation();
      this.gesture(e, { drag: s => this.panDrag(s) });
      return;
    }
    if (e.button !== 0) return;
    // (Shift belongs to the brush while shaping terrain, and chains points while measuring.)
    const modifierRotate = e.ctrlKey || e.metaKey || e.altKey || (e.shiftKey && !this.tool.terrain && this.tool.mode !== "measure");
    const domItem = (target.closest?.("[data-item-id]") as HTMLElement | null)?.dataset.itemId ?? null;
    // (Alt-dragging an item moves it without snapping, so items keep their modifier drags.)
    if (modifierRotate && !domItem && !(this.tool.mode === "select" && !this.tool.terrain && this.pick(e.clientX, e.clientY))) {
      // Let camera-controls rotate with the left button for this press only.
      this.controls.mouseButtons.left = ACTION.ROTATE;
      const restore = () => {
        this.controls.mouseButtons.left = ACTION.NONE;
        window.removeEventListener("pointerup", restore);
        this.restoreLeft = null;
      };
      this.restoreLeft?.();
      this.restoreLeft = restore;
      window.addEventListener("pointerup", restore);
      return;
    }
    const stop = () => { if (!touch) e.stopPropagation(); };
    const panOrNothing = (s: PointerEvent) => (touch ? null : this.panDrag(s));
    const tool = this.tool;
    const groundClick = (fn: (p: P, ev: PointerEvent) => void) => (ev: PointerEvent) => {
      const g = this.groundAt(ev.clientX, ev.clientY);
      if (g) fn({ x: g.x, y: g.z }, ev);
    };

    if (tool.mapMove) {
      stop();
      const g0 = this.groundAt(e.clientX, e.clientY);
      if (!g0) return;
      let last = g0;
      this.gesture(e, {
        drag: () => ({
          move: ev => {
            const g = this.planeAt(ev.clientX, ev.clientY, g0.y);
            if (!g) return;
            this.cb.onBackgroundDrag(g.x - last.x, g.z - last.z, "move");
            last = g;
          },
          end: () => this.cb.onBackgroundDrag(0, 0, "end")
        })
      });
      return;
    }
    if (tool.terrain) {
      e.stopPropagation();
      this.terrainStroke(e);
      return;
    }
    if (tool.aimingCameraId) {
      stop();
      this.gesture(e, { click: groundClick(p => this.cb.onAim(p)), drag: panOrNothing });
      return;
    }
    if (tool.mode === "trace-building") {
      stop();
      this.gesture(e, { click: groundClick(p => this.cb.onTrace(p)), drag: panOrNothing });
      return;
    }
    if (tool.mode === "add-wing") {
      stop();
      const b = this.item(this.selectedId);
      if (b?.type === "building") this.gesture(e, {
        click: ev => {
          const bb = b as BuildingItem;
          const hit = this.planeAt(ev.clientX, ev.clientY, buildingBaseHeight(bb, this.doc!.heights, this.doc!.gridSize));
          if (!hit) return;
          const local = toBuildingLocal(bb, { x: hit.x, y: hit.z });
          const near = nearestEdge(buildingLocalPoints(bb), local);
          if (near.dist < 30 * this.upf()) this.cb.onWing(bb.id, near.index, local);
        },
        drag: panOrNothing
      });
      return;
    }
    if (tool.mode === "add-opening") {
      stop();
      const b = this.item(this.selectedId);
      if (b?.type === "building") this.gesture(e, {
        click: ev => {
          const bb = b as BuildingItem;
          const base = buildingBaseHeight(bb, this.doc!.heights, this.doc!.gridSize);
          // On the wall where it was clicked (in 3D), else on the wall nearest the click
          const obj = this.objects.get(bb.id)?.obj;
          this.ray(ev.clientX, ev.clientY);
          const hit = obj ? this.raycaster.intersectObject(obj, true).find(h => h.object.name === "building-walls") : undefined;
          const p = hit?.point ?? this.planeAt(ev.clientX, ev.clientY, base + (bb.wallHeight ?? DEFAULT_BUILDING.wallHeight) / 2);
          if (!p) return;
          this.cb.onOpening(bb.id, toBuildingLocal(bb, { x: p.x, y: p.z }), hit ? hit.point.y - base : null);
        },
        drag: panOrNothing
      });
      return;
    }
    if (tool.mode === "add-open-part") {
      stop();
      const b = this.item(this.selectedId);
      if (b?.type === "building") this.gesture(e, {
        drag: start => this.openPartDrag(start, b as BuildingItem),
        // A click on (or near) a wall: a part along that whole wall
        click: ev => {
          const bb = b as BuildingItem;
          const hit = this.planeAt(ev.clientX, ev.clientY, this.eaveY(bb));
          if (!hit) return;
          const local = toBuildingLocal(bb, { x: hit.x, y: hit.z });
          const outline = buildingLocalPoints(bb);
          const near = nearestEdge(outline, local);
          // Inside the roof's edge: a part set into the house; outside it: one attached to that wall
          if (near.dist < 20 * this.upf()) this.cb.onOpenPart(bb.id, { edge: near.index, outside: !pointInPolygonXY(local, outline) });
        }
      });
      return;
    }
    if (tool.mode === "measure") {
      stop();
      this.gesture(e, {
        click: ev => {
          const g = this.groundAt(ev.clientX, ev.clientY);
          if (g) this.addMeasurePoint(g, ev.shiftKey);
        },
        drag: panOrNothing
      });
      return;
    }
    if (tool.mode !== "select") {
      stop();
      this.gesture(e, {
        click: groundClick(p => {
          let { x, y } = p;
          if (this.doc!.snapToGrid) {
            const g = this.doc!.gridSize;
            x = Math.round(x / g) * g;
            y = Math.round(y / g) * g;
          }
          this.updateGhost(null);
          this.cb.onPlace(tool.mode, { x, y });
        }),
        drag: panOrNothing
      });
      return;
    }
    if (tool.vertexInsert && this.selectedId) {
      stop();
      const id = this.selectedId;
      this.gesture(e, { click: groundClick(p => this.cb.onInsertVertex(id, p)), drag: panOrNothing });
      return;
    }
    // Select mode
    const hit = domItem ?? this.pick(e.clientX, e.clientY);
    if (!hit) {
      stop();
      this.gesture(e, { click: () => this.cb.onSelect(null), drag: panOrNothing });
      return;
    }
    const item = this.item(hit);
    // Big things (buildings) move only once selected, so dragging across the map still pans; a
    // locked item never moves (dragging it pans).
    if (((item?.type === "building" || item?.type === "paving") && hit !== this.selectedId) || item?.locked) {
      stop();
      this.gesture(e, { click: () => this.cb.onSelect(hit), drag: panOrNothing });
      return;
    }
    e.stopPropagation();
    if (hit !== this.selectedId) this.cb.onSelect(hit);
    this.gesture(e, { drag: s => this.itemDrag(s, hit) });
  }

  // Dragging out a porch or carport part over a building: a rectangle square to the building.
  /** Height of a building's eaves (where its roof starts): parts are drawn on that plane, so they
   * line up with the roof the user sees from above. */
  private eaveY(b: BuildingItem) {
    return buildingBaseHeight(b, this.doc!.heights, this.doc!.gridSize) + (b.wallHeight ?? DEFAULT_BUILDING.wallHeight);
  }

  private openPartDrag(start: PointerEvent, b: BuildingItem): Drag | null {
    const y = this.eaveY(b);
    const g0 = this.planeAt(start.clientX, start.clientY, y);
    if (!g0) return null;
    const outline = buildingLocalPoints(b);
    // Snap to the walls: a side within 2 ft of a wall's line lands on it
    const snap = (v: number, axis: "x" | "y") => {
      let best = v, d = 2 * this.upf();
      for (const p of outline) if (Math.abs(p[axis] - v) < d) { d = Math.abs(p[axis] - v); best = p[axis]; }
      return best;
    };
    const la = toBuildingLocal(b, { x: g0.x, y: g0.z });
    const a = { x: snap(la.x, "x"), y: snap(la.y, "y") };
    const mat = new THREE.LineDashedMaterial({ color: 0xf59e0b, dashSize: 1.5 * this.upf(), gapSize: 1 * this.upf(), depthTest: false });
    const line = new THREE.LineLoop(new THREE.BufferGeometry(), mat);
    line.renderOrder = 20;
    this.fx.add(line);
    let c = a;
    const corners = () => partFromCorners(a, c);
    const draw = () => {
      line.geometry.setFromPoints(corners().map(p => {
        const r = rotatePoint(p, b.rotation);
        return new THREE.Vector3(b.x + r.x, y + 0.2 * this.upf(), b.y + r.y);
      }));
      line.computeLineDistances();
      this.invalidate();
    };
    return {
      move: ev => {
        const g = this.planeAt(ev.clientX, ev.clientY, y);
        if (!g) return;
        const l = toBuildingLocal(b, { x: g.x, y: g.z });
        c = { x: snap(l.x, "x"), y: snap(l.y, "y") };
        draw();
      },
      end: () => {
        this.fx.remove(line);
        line.geometry.dispose();
        mat.dispose();
        this.cb.onOpenPart(b.id, { pts: corners() });
      }
    };
  }

  private terrainStroke(e: PointerEvent) {
    const g = this.groundAt(e.clientX, e.clientY);
    if (!g) return;
    let point: P = { x: g.x, y: g.z };
    const lower = e.shiftKey;
    const id = e.pointerId;
    let last = performance.now();
    let frame = 0;
    this.setDragging(true);
    this.cb.onTerrainBrush(point, 0.016, lower, "start");
    const tick = () => {
      const now = performance.now();
      // Real time between frames, so a slow device sculpts as fast as a quick one (only a long
      // stall, like a hidden tab, is cut short).
      const dt = Math.min((now - last) / 1000, 0.25);
      last = now;
      this.cb.onTerrainBrush(point, dt || 0.016, lower, "move");
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const move = (ev: PointerEvent) => {
      if (ev.pointerId !== id) return;
      const p = this.groundAt(ev.clientX, ev.clientY);
      if (p) {
        point = { x: p.x, y: p.z };
        this.drawBrush(p);
      }
    };
    const up = (ev: PointerEvent) => {
      if (ev.pointerId !== id) return;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      this.cb.onTerrainBrush(point, 0, lower, "end");
      this.setDragging(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  private drawBrush(center: THREE.Vector3) {
    const r = this.tool.brushRadius;
    const pos = this.brush.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < 72; i++) {
      const a = (i / 72) * Math.PI * 2;
      const x = center.x + Math.cos(a) * r;
      const z = center.z + Math.sin(a) * r;
      pos.setXYZ(i, x, this.h(x, z) + 0.6, z);
    }
    pos.needsUpdate = true;
    const t = this.tool.terrainTool;
    (this.brush.material as THREE.LineBasicMaterial).color.setHex(t === "sculpt" ? 0xf59e0b : t === "smooth" ? 0x38bdf8 : t === "woods" ? 0x22c55e : 0x818cf8);
    this.brush.visible = true;
    this.invalidate();
  }

  private onWheel(e: WheelEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (this.povId) {
      // Zoom the lens: narrower view up close, wider view out.
      const cam = this.item(this.povId) as CameraItem | null;
      if (!cam) return;
      const delta = (e.deltaMode !== 0 ? e.deltaY * 33 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.0015);
      const hFov = Math.round(clamp(getCameraHFov(cam) * Math.exp(delta), 12, 130));
      if (hFov !== Math.round(getCameraHFov(cam))) {
        this.cb.onChange(cam.id, { hFov, fov: hFov });
        clearTimeout(this.povWheelTimer);
        this.povWheelTimer = window.setTimeout(() => this.cb.onCommit(), 350);
      }
      return;
    }
    const line = e.deltaMode !== 0;
    // Scroll up/down (mouse wheel or two fingers) and pinch zoom at the cursor; a sideways
    // two-finger swipe slides the map sideways. Panning is a drag.
    if (!e.ctrlKey && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      const g0 = this.groundAt(e.clientX, e.clientY);
      const g1 = g0 && this.planeAt(e.clientX - e.deltaX, e.clientY, g0.y);
      if (g0 && g1) this.shift(g0.x - g1.x, g0.z - g1.z);
      return;
    }
    const delta = (line ? e.deltaY * 33 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.002);
    this.zoomAt(e.clientX, e.clientY, Math.exp(delta));
  }

  private povWheelTimer = 0;

  // ------------------------------------------------------------------ measuring

  private measurePts: THREE.Vector3[] = [];
  private measureCursor: THREE.Vector3 | null = null;
  private measureLine: THREE.Line | null = null;
  private measureLabels: { el: HTMLDivElement; at: THREE.Vector3 }[] = [];

  /** Points measured so far (plan coordinates), and the total length in plan units. */
  measurement() {
    const pts = this.measurePts.map(v => ({ x: v.x, y: v.z }));
    let total = 0;
    for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    return { points: pts, total };
  }

  private clearMeasure() {
    this.measurePts = [];
    this.measureCursor = null;
    this.drawMeasure();
  }

  private addMeasurePoint(p: THREE.Vector3, keepGoing: boolean) {
    // A new measurement after a finished one, unless Shift keeps the chain going.
    if (this.measurePts.length >= 2 && !keepGoing) this.measurePts = [];
    this.measurePts.push(p.clone());
    this.drawMeasure();
  }

  private drawMeasure() {
    if (this.measureLine) {
      this.fx.remove(this.measureLine);
      this.measureLine.geometry.dispose();
      this.measureLine = null;
    }
    this.measureLabels.forEach(l => l.el.remove());
    this.measureLabels = [];
    const pts = [...this.measurePts];
    if (this.measureCursor && pts.length >= 1 && pts.length < 2) pts.push(this.measureCursor);
    if (pts.length >= 1) {
      const lift = 0.3 * this.upf();
      const geo = new THREE.BufferGeometry().setFromPoints(pts.map(v => new THREE.Vector3(v.x, v.y + lift, v.z)));
      this.measureLine = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xfacc15, depthTest: false, transparent: true }));
      this.measureLine.renderOrder = 30;
      this.measureLine.frustumCulled = false;
      this.fx.add(this.measureLine);
      const upf = this.upf();
      let total = 0;
      for (let i = 1; i < pts.length; i++) {
        const d = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z) / upf;
        total += d;
        const el = document.createElement("div");
        el.className = "scp-measure";
        el.dataset.testid = "measure-label";
        el.setAttribute("data-testid", "measure-label");
        el.textContent = `${d < 10 ? d.toFixed(1) : Math.round(d)} ft`;
        this.labelsLayer.appendChild(el);
        this.measureLabels.push({ el, at: pts[i - 1].clone().lerp(pts[i], 0.5) });
      }
      if (pts.length > 2) {
        const el = document.createElement("div");
        el.className = "scp-measure total";
        el.textContent = `Total ${total < 10 ? total.toFixed(1) : Math.round(total)} ft`;
        this.labelsLayer.appendChild(el);
        this.measureLabels.push({ el, at: pts[pts.length - 1].clone() });
      }
    }
    this.invalidate();
  }

  /** Drag inside a camera view to aim the camera: the picture follows the pointer. */
  private povAim(e: PointerEvent) {
    const id = this.povId!;
    const start = this.item(id) as CameraItem | null;
    if (!start) return;
    const hFov = getCameraHFov(start);
    const vFov = (2 * Math.atan(Math.tan((hFov * DEG) / 2) / (this.povRect.width / this.povRect.height))) / DEG;
    const degPerPxX = hFov / this.povRect.width;
    const degPerPxY = vFov / this.povRect.height;
    const x0 = e.clientX;
    const y0 = e.clientY;
    const r0 = start.rotation;
    const p0 = start.pitch ?? DEFAULT_CAMERA_PITCH;
    this.setDragging(true);
    const move = (ev: PointerEvent) => {
      // Grab-and-drag: dragging right swings the view left (like moving the picture).
      const rotation = (((r0 - (ev.clientX - x0) * degPerPxX) % 360) + 360) % 360;
      const pitch = clamp(p0 + (ev.clientY - y0) * degPerPxY, -89, 30);
      this.cb.onChange(id, { rotation: Math.round(rotation * 10) / 10, pitch: Math.round(pitch * 10) / 10 });
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      this.setDragging(false);
      this.cb.onCommit();
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }

  /** Zoom keeping the ground point under the cursor fixed (scale about that point). */
  private zoomAt(clientX: number, clientY: number, factor: number) {
    const pos = this.controls.getPosition(new THREE.Vector3(), true);
    const target = this.controls.getTarget(new THREE.Vector3(), true);
    const dist = pos.distanceTo(target);
    const f = clamp(dist * factor, this.controls.minDistance, this.controls.maxDistance) / dist;
    if (Math.abs(f - 1) < 1e-4) return;
    const p = this.groundAt(clientX, clientY) ?? target.clone();
    const np = p.clone().add(pos.sub(p).multiplyScalar(f));
    const nt = p.clone().add(target.sub(p).multiplyScalar(f));
    void this.controls.setLookAt(np.x, np.y, np.z, nt.x, nt.y, nt.z, true);
    this.invalidate();
  }

  private onDoubleClick(e: MouseEvent) {
    if (this.tool.mode !== "select" || this.tool.terrain) return;
    if ((e.target as HTMLElement).closest?.("[data-handle],[data-item-id]")) return;
    if (this.pick(e.clientX, e.clientY)) return;
    this.zoomAt(e.clientX, e.clientY, 0.5);
  }

  private onHoverMove(e: PointerEvent) {
    if (e.buttons || this.dragging) return;
    this.lastPointer = { x: e.clientX, y: e.clientY };
    if (this.hoverFrame) return;
    this.hoverFrame = requestAnimationFrame(() => {
      this.hoverFrame = 0;
      const p = this.lastPointer;
      if (!p || !this.doc) return;
      const g = this.groundAt(p.x, p.y);
      this.cb.onHover(g ? { x: g.x, y: g.z } : null);
      if (this.tool.terrain) {
        if (g) this.drawBrush(g);
        return;
      }
      if (this.tool.mode === "measure") {
        if (this.measurePts.length === 1 && g) {
          this.measureCursor = g;
          this.drawMeasure();
        }
        return;
      }
      const target = document.elementFromPoint(p.x, p.y) as HTMLElement | null;
      if (this.tool.mode === "select" && !this.tool.aimingCameraId) {
        const dom = (target?.closest?.("[data-item-id]") as HTMLElement | null)?.dataset.itemId ?? null;
        this.setHover(dom ?? (target?.closest?.("[data-handle]") ? null : this.pick(p.x, p.y)));
      } else {
        this.setHover(null);
        this.updateGhost(g);
      }
    });
  }

  private updateCursor() {
    const t = this.tool;
    let c = "grab";
    if (this.povId) c = "move";
    else if (t.terrain || t.mode !== "select" || t.aimingCameraId || t.vertexInsert) c = "crosshair";
    else if (this.hoverId) c = (this.item(this.hoverId)?.type === "building" || this.item(this.hoverId)?.type === "paving") && this.hoverId !== this.selectedId ? "pointer" : "move";
    this.container.style.cursor = c;
  }

  // ------------------------------------------------------------------ placement preview

  private updateGhost(at: THREE.Vector3 | null) {
    const preview = this.tool.mode !== "select" && this.tool.mode !== "trace-building" && this.tool.mode !== "measure" ? this.tool.preview : null;
    if (this.ghostFan) {
      this.fx.remove(this.ghostFan);
      disposeObjectDeep(this.ghostFan);
      this.ghostFan = null;
    }
    if (!at || !preview || !this.doc) {
      if (this.ghost) {
        this.fx.remove(this.ghost);
        disposeObjectDeep(this.ghost);
        this.ghost = null;
        this.ghostKey = "";
      }
      this.invalidate();
      return;
    }
    const doc = this.doc;
    let item: CanvasItem = { ...preview, x: at.x, y: at.z } as CanvasItem;
    const under = item.type === "camera" ? cameraUnderRoof({ x: at.x, y: at.z }, doc.items, doc.unitsPerFoot) : null;
    if (under) {
      item = { ...item, x: under.x, y: under.y, rotation: under.rotation, mount: under.mount, height: under.heightFt } as CameraItem;
    } else if (item.type === "camera") {
      const buildings = doc.items.filter(i => i.type === "building");
      const on = buildings.find(b => pointInPolygonXY({ x: at.x, y: at.z }, buildingWorldPoints(b as BuildingItem)));
      const wall = nearestWall({ x: at.x, y: at.z }, on ? [on] : buildings);
      if (wall && (on || wall.distance < wallSnapDistance(doc.unitsPerFoot))) {
        const b = buildings.find(x => x.id === wall.buildingId) as BuildingItem;
        const height = mountHeightForBuilding(b);
        item = { ...item, x: wall.point.x, y: wall.point.y, rotation: wall.rotation, mount: { type: "building", buildingId: wall.buildingId, edgeIndex: wall.edgeIndex, edgeT: wall.edgeT, at: wall.at, height }, height } as CameraItem;
      }
    }
    // Paving is built where it lies (draped on the ground), so its preview is rebuilt as it moves
    const key = `${preview.type}|${preview.id}|${JSON.stringify((item as CameraItem).mount ?? null)}|${item.rotation}|${item.type === "paving" ? `${Math.round(at.x)},${Math.round(at.z)}` : ""}`;
    if (key !== this.ghostKey) {
      if (this.ghost) {
        this.fx.remove(this.ghost);
        disposeObjectDeep(this.ghost);
      }
      this.ghostKey = key;
      const obj = item.type === "label" || item.type === "target" || item.type === "recorder" ? this.pinGhost() : this.buildObject(item);
      if (obj) {
        obj.traverse(o => {
          const m = (o as THREE.Mesh).material as THREE.Material | undefined;
          if (m) { m.transparent = true; m.opacity = 0.55; m.depthWrite = false; }
          o.raycast = () => {};
        });
      }
      this.ghost = obj;
      if (obj) this.fx.add(obj);
    }
    if (this.ghost) this.place(this.ghost, item);
    if (item.type === "camera") {
      const cam = item as CameraItem;
      const obstacles = doc.items.filter(i => i.type === "building" || i.type === "tree") as (BuildingItem | TreeItem)[];
      this.ghostFan = buildCoverageFan(doc, cam, cameraPlanPosition(cam, doc.items), cameraMountHeight(cam), obstacles);
      if (this.ghostFan) this.fx.add(this.ghostFan);
    }
    this.invalidate();
  }

  private pinGhost() {
    const g = new THREE.Group();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(1.5 * this.upf(), 1.5 * this.upf(), 0.2, 24), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    g.add(m);
    return g;
  }
}
