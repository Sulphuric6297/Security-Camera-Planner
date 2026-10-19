// Real 3D models for vehicles: the "Generic passenger car pack" by Comrade1280 (CC BY 4.0), split
// into one small file per car (public/models/cars/pack, about 0.5 MB each, nose toward -z). Built
// for speed: a model loads only when a vehicle of its type is in the plan, is prepared once and
// merged into a single mesh (one draw call per material), and every car of a type shares it.
// Each car is scaled to its real length and painted its color: the paint is marked in the body
// texture (alpha 128 = paint, holding the paint's shading as grey), so trim, chrome and lights
// keep their own colors. Until its model has loaded (and in tests without a browser) the
// generated car stands in.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import type { ParkingItem } from "../types";

type VehicleType = NonNullable<ParkingItem["vehicleType"]>;

// Relative to the page, like cameras.json (works wherever the site is hosted)
const BASE = "models/cars/pack/";
/** The model file for each vehicle type. */
export const VEHICLE_MODELS: Record<VehicleType, string> = {
  sedan: `${BASE}sedan.glb`,
  suv: `${BASE}suv.glb`,
  truck: `${BASE}pickup.glb`,
  van: `${BASE}minivan.glb`,
  hatchback: `${BASE}hatchback.glb`,
  sports: `${BASE}sport.glb`
};

/** The models' makers (CC BY: credited in the app). */
export const VEHICLE_MODEL_CREDITS = [
  { title: "Generic passenger car pack", author: "Comrade1280", url: "https://sketchfab.com/3d-models/generic-passenger-car-pack-20f9af9b8a404d5cb022ac6fe87f21f5", license: "CC BY 4.0" }
];

const shared = <T extends THREE.Material>(m: T) => { m.userData.shared = true; return m; };
const glass = shared(new THREE.MeshStandardMaterial({ color: "#10161d", metalness: 0.3, roughness: 0.06, transparent: true, opacity: 0.82 }));

/**
 * The body material in a color: where the texture's alpha marks paint, the paint color times the
 * paint's shading (grey, the usual shade stored at 200); elsewhere the texture as it is. Paint is
 * glossy, trim rougher.
 */
const paintMaterial = (map: THREE.Texture, color: string) => {
  const m = new THREE.MeshStandardMaterial({ map, color: 0xffffff, metalness: 0, roughness: 1 });
  const paint = { value: new THREE.Color(color) };
  m.onBeforeCompile = shader => {
    shader.uniforms.paintColor = paint;
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform vec3 paintColor;")
      .replace("#include <map_fragment>", `
        float scpPaint = 0.0;
        #ifdef USE_MAP
          vec4 scpTexel = texture2D( map, vMapUv );
          scpPaint = 1.0 - step( 0.75, scpTexel.a );
          // 200/255 (sRGB) is 0.578 linear: the usual shade gives exactly the paint color
          diffuseColor.rgb *= mix( scpTexel.rgb, paintColor * scpTexel.r * 1.73, scpPaint );
        #endif`)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix( 0.6, 0.28, scpPaint );")
      .replace("#include <metalnessmap_fragment>", "#include <metalnessmap_fragment>\nmetalnessFactor = mix( 0.15, 0.35, scpPaint );");
  };
  m.customProgramCacheKey = () => "scp-car-paint";
  m.userData.shared = true;
  m.userData.paint = true;
  m.userData.paintColor = color;
  return m;
};

type Template = { geometry: THREE.BufferGeometry; materials: THREE.Material[]; body: number; length: number; paints: Map<string, THREE.Material> };
const templates = new Map<VehicleType, Template>();
const loading = new Map<VehicleType, Promise<void>>();
const listeners = new Set<() => void>();
let version = 0;
/** Bumps when a model finishes loading (vehicles built before then are rebuilt). */
export const vehicleModelsVersion = () => version;
export const onVehicleModelsLoaded = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };

/** The whole model baked into one geometry with a group per material, along z, on y = 0. */
const prepare = (scene: THREE.Object3D): Template | null => {
  scene.updateMatrixWorld(true);
  type Piece = { mat: THREE.Material; pos: number[]; nor: number[]; uv: number[] };
  const byMat = new Map<THREE.Material, Piece>();
  const piece = (m: THREE.Material) => { let p = byMat.get(m); if (!p) { p = { mat: m, pos: [], nor: [], uv: [] }; byMat.set(m, p); } return p; };
  // One material per part: the model's own, but its glass ours
  const own = new Map<THREE.Material, THREE.Material>();
  const mapMat = (mt: THREE.Material) => {
    let m = own.get(mt);
    if (!m) {
      m = /glass/i.test(mt.name) ? glass : shared(mt);
      own.set(mt, m);
    }
    return m;
  };
  const normalMatrix = new THREE.Matrix3();
  const v = new THREE.Vector3();
  scene.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !o.visible) return;
    const geo = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
    const pos = geo.getAttribute("position"), nor = geo.getAttribute("normal"), uv = geo.getAttribute("uv");
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const groups = geo.groups.length ? geo.groups : [{ start: 0, count: pos.count, materialIndex: 0 }];
    normalMatrix.getNormalMatrix(mesh.matrixWorld);
    for (const gr of groups) {
      const p = piece(mapMat(mats[gr.materialIndex ?? 0]));
      for (let i = gr.start; i < gr.start + gr.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
        p.pos.push(v.x, v.y, v.z);
        if (nor) { v.fromBufferAttribute(nor, i).applyMatrix3(normalMatrix).normalize(); p.nor.push(v.x, v.y, v.z); }
        p.uv.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
      }
    }
  });
  if (!byMat.size) return null;
  // Opaque parts first, the glass last (drawn after what's behind it)
  const pieces = [...byMat.values()].sort((a, b) => Number(a.mat.transparent) - Number(b.mat.transparent));
  const geos = pieces.map(p => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(p.pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(p.uv, 2));
    if (p.nor.length === p.pos.length) g.setAttribute("normal", new THREE.Float32BufferAttribute(p.nor, 3));
    else g.computeVertexNormals();
    return g;
  });
  const geometry = mergeGeometries(geos, true);
  geos.forEach(g => g.dispose());
  if (!geometry) return null;
  // Along z (the files are), centred, standing on y = 0
  geometry.computeBoundingBox();
  let b = geometry.boundingBox!;
  if (b.max.x - b.min.x > b.max.z - b.min.z) geometry.rotateY(Math.PI / 2);
  geometry.computeBoundingBox();
  b = geometry.boundingBox!;
  geometry.translate(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  // The geometry is shared by every vehicle of this type: never disposed with one of them
  geometry.userData.shared = true;
  const body = pieces.findIndex(p => /body/i.test(p.mat.name) && !!(p.mat as THREE.MeshStandardMaterial).map);
  return { geometry, materials: pieces.map(p => p.mat), body, length: b.max.z - b.min.z, paints: new Map() };
};

/** Starts loading the model for a vehicle type (once). */
export const loadVehicleModel = (type: VehicleType) => {
  if (typeof window === "undefined" || typeof document === "undefined") return Promise.resolve();
  const have = loading.get(type);
  if (have) return have;
  const url = VEHICLE_MODELS[type];
  const p = new GLTFLoader().loadAsync(url).then(g => {
    const t = prepare(g.scene);
    if (t) templates.set(type, t);
    version++;
    listeners.forEach(fn => fn());
  }).catch(err => { console.warn(`Vehicle model ${url} did not load`, err); });
  loading.set(type, p);
  return p;
};

/**
 * The vehicle as its real model, at its real length and in its color, or null while the model
 * is still loading (the caller shows the generated car meanwhile).
 */
export const createVehicleModel = (color: string, type: VehicleType, lengthUnits: number): THREE.Group | null => {
  const t = templates.get(type);
  if (!t) { void loadVehicleModel(type); return null; }
  const key = color || "#9aa1a8";
  let paint = t.paints.get(key);
  if (!paint && t.body >= 0) {
    paint = paintMaterial((t.materials[t.body] as THREE.MeshStandardMaterial).map!, key);
    t.paints.set(key, paint);
  }
  const mesh = new THREE.Mesh(t.geometry, t.materials.map((m, i) => (i === t.body && paint ? paint : m)));
  mesh.name = "vehicle-body";
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.scale.setScalar(lengthUnits / t.length);
  const group = new THREE.Group();
  group.add(mesh);
  group.userData.vehicleModel = type;
  return group;
};
