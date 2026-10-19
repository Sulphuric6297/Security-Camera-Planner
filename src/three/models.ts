import * as THREE from "three";
import { clamp } from "../constants";
import { CanvasItem, ParkingItem, TreeItem } from "../types";


export const resolveVehicleType = (item: ParkingItem): ParkingItem['vehicleType'] => {
  const rawType = (item as unknown as { vehicleType?: string }).vehicleType;
  if (rawType) {
    if (rawType === 'motorcycle') return 'hatchback';
    if (['sedan', 'suv', 'truck', 'sports', 'van', 'hatchback'].includes(rawType)) {
      return rawType as ParkingItem['vehicleType'];
    }
  }
  const hash = item.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  return ['sedan', 'suv', 'truck', 'sports', 'van', 'hatchback'][hash % 6] as ParkingItem['vehicleType'];
};

export const getCarSignature = (item: ParkingItem) =>
  `${item.width}|${item.height}|${item.vehicleHeight ?? 5}|${resolveVehicleType(item)}|${item.color}`;

export const getTreeSignature = (item: TreeItem) =>
  `${item.radius}|${item.height ?? 30}|${item.width ?? 1}|${item.treeType ?? 'deciduous'}|${item.color}`;

export const getItemTypeLabel = (type: CanvasItem["type"], plural = false) => {
  if (type === "parking") return plural ? "Vehicles" : "Vehicle";
  if (type === "camera") return plural ? "Cameras" : "Camera";
  if (type === "building") return plural ? "Buildings" : "Building";
  if (type === "tree") return plural ? "Trees" : "Tree";
  if (type === "label") return plural ? "Text" : "Text";
  if (type === "image") return plural ? "Overlays" : "Overlay";
  if (type === "target") return plural ? "Protected spots" : "Protected spot";
  if (type === "recorder") return plural ? "Recorders" : "Recorder";
  if (type === "paving") return plural ? "Driveways and paths" : "Driveway or path";
  return type;
};

// --- Cars: real-size models built from a side profile per vehicle type ---
// Profiles are [along the car, height] as fractions of length/height; the front is -z (z = -0.5).
type Profile = [number, number][];
const CAR_PROFILES: Record<NonNullable<ParkingItem["vehicleType"]>, { body: Profile; glass: Profile }> = {
  sedan: {
    body: [[-0.5, 0.2], [-0.5, 0.42], [-0.46, 0.5], [-0.2, 0.56], [-0.06, 0.95], [0.2, 1], [0.34, 0.62], [0.47, 0.58], [0.5, 0.45], [0.5, 0.2]],
    glass: [[-0.18, 0.6], [-0.055, 0.91], [0.19, 0.95], [0.31, 0.64]]
  },
  hatchback: {
    body: [[-0.5, 0.2], [-0.5, 0.42], [-0.46, 0.52], [-0.22, 0.58], [-0.08, 0.95], [0.32, 0.98], [0.48, 0.62], [0.5, 0.45], [0.5, 0.2]],
    glass: [[-0.2, 0.62], [-0.075, 0.91], [0.31, 0.93], [0.45, 0.64]]
  },
  suv: {
    body: [[-0.5, 0.22], [-0.5, 0.5], [-0.46, 0.58], [-0.26, 0.63], [-0.13, 0.97], [0.45, 1], [0.5, 0.92], [0.5, 0.22]],
    glass: [[-0.24, 0.66], [-0.125, 0.93], [0.43, 0.95], [0.48, 0.66]]
  },
  van: {
    body: [[-0.5, 0.2], [-0.5, 0.48], [-0.44, 0.58], [-0.34, 0.62], [-0.26, 0.97], [0.48, 1], [0.5, 0.95], [0.5, 0.2]],
    glass: [[-0.32, 0.64], [-0.255, 0.93], [-0.02, 0.94], [-0.02, 0.64]]
  },
  truck: {
    body: [[-0.5, 0.22], [-0.5, 0.52], [-0.45, 0.6], [-0.18, 0.64], [-0.07, 0.98], [0.12, 1], [0.15, 0.64], [0.5, 0.64], [0.5, 0.22]],
    glass: [[-0.16, 0.67], [-0.065, 0.94], [0.11, 0.95], [0.13, 0.67]]
  },
  sports: {
    body: [[-0.5, 0.2], [-0.5, 0.38], [-0.44, 0.46], [-0.16, 0.52], [0, 0.94], [0.14, 0.96], [0.46, 0.58], [0.5, 0.48], [0.5, 0.2]],
    glass: [[-0.14, 0.56], [0, 0.9], [0.13, 0.91], [0.4, 0.6]]
  }
};

/** Paint, glass, rubber and trim, shared by every car (paint per color). */
const carMats = new Map<string, THREE.Material>();
const carMat = (key: string, make: () => THREE.Material) => {
  let m = carMats.get(key);
  if (!m) { m = make(); m.userData.shared = true; carMats.set(key, m); }
  return m;
};

/** The top line of a side profile at a point along the car (its upper chain, smoothed). */
const profileTop = (profile: Profile) => {
  // The body polygon runs front-bottom, up over the top, down to rear-bottom: its top chain is
  // everything but the first and last points.
  const chain = profile.slice(1, -1);
  const curve = new THREE.SplineCurve(chain.map(([z, y]) => new THREE.Vector2(z, y)));
  const samples = curve.getPoints(160);
  return (z: number) => {
    for (let i = 1; i < samples.length; i++) {
      const a = samples[i - 1], b = samples[i];
      if ((z >= a.x && z <= b.x) || (z <= a.x && z >= b.x)) return a.y + ((b.y - a.y) * (z - a.x)) / (b.x - a.x || 1);
    }
    return z < samples[0].x ? samples[0].y : samples[samples.length - 1].y;
  };
};

/**
 * A real-size car (width x length x height in plan units) of the item's vehicle type: one smooth
 * body lofted from rounded cross-sections along its side profile (narrower toward the roof and
 * rounded at the ends), its windows cut from the same surface with painted pillars between them,
 * clearcoat paint, reflective glass, and wheels with spoked rims in dark wheel arches.
 */
export const create3dCar = (item: ParkingItem): THREE.Group => {
  const group = new THREE.Group();
  const width = Math.max(item.width, 0.5);
  const length = Math.max(item.height, 1);
  const height = Math.max(item.vehicleHeight ?? width * 0.8, 0.5);
  const type = resolveVehicleType(item) ?? "sedan";
  const profile = CAR_PROFILES[type];

  const paint = carMat(`paint-${item.color}`, () => new THREE.MeshPhysicalMaterial({ color: item.color, metalness: 0.3, roughness: 0.4, clearcoat: 1, clearcoatRoughness: 0.1 }));
  const glass = carMat("glass", () => new THREE.MeshStandardMaterial({ color: "#0e141b", metalness: 0.85, roughness: 0.06, envMapIntensity: 1.2 }));
  const rubber = carMat("rubber", () => new THREE.MeshStandardMaterial({ color: "#151719", roughness: 0.92 }));
  const rimMat = carMat("rim", () => new THREE.MeshStandardMaterial({ color: "#c3c8cf", metalness: 0.85, roughness: 0.28 }));
  const trimMat = carMat("trim", () => new THREE.MeshStandardMaterial({ color: "#16191d", roughness: 0.65 }));

  const top = profileTop(profile.body);
  const belt = Math.min(...profile.glass.map(p => p[1])); // window line, fraction of height
  const roofTop = Math.max(...profile.body.map(p => p[1]));
  const gz = profile.glass.map(p => p[0]); // windshield base, roof front, roof rear, rear glass base
  const bottom = Math.min(...profile.body.map(p => p[1])); // underside (above the wheels' centers)

  // --- Body: rings of a rounded-rectangle section, one per station along the car ---
  const stations = 72, around = 36;
  const pos: number[] = [];
  const zs: number[] = [];
  for (let i = 0; i <= stations; i++) {
    // More stations near the ends, where the shape turns fastest
    const u = i / stations;
    zs.push(-0.5 + 0.5 * (1 - Math.cos(Math.PI * u)));
  }
  // Plan shape: full width along the sides, rounding in to a flat nose and tail about 4/5 as wide
  const endTaper = (e: number) => 0.8 + 0.2 * Math.pow(Math.max(0, 1 - Math.pow(e, 4)), 0.25);
  const ringOf = (zf: number) => {
    const yTop = top(zf) * height, y0 = bottom * height;
    // Plan shape: the ends round off, the corners pull in
    const e = Math.min(1, Math.abs(zf) / 0.5);
    const halfW = (width / 2) * endTaper(e);
    const pts: [number, number][] = [];
    for (let k = 0; k < around; k++) {
      // Around the section: bottom (theta -pi/2) up the right side to the top (pi/2), then down the left
      const th = -Math.PI / 2 + (2 * Math.PI * k) / around;
      const c = Math.cos(th), sn = Math.sin(th);
      const ex = 2 / 5; // superellipse: square-ish with rounded corners
      const x0 = Math.sign(c) * Math.pow(Math.abs(c), ex);
      const yN = Math.sign(sn) * Math.pow(Math.abs(sn), ex); // -1 bottom .. 1 top
      const y = y0 + ((yN + 1) / 2) * (yTop - y0);
      // Sides: a gentle bulge at the shoulder, the cabin leaning in above the window line
      const yb = belt * height;
      let f = 1;
      if (y <= yb) f = 0.95 + 0.05 * Math.sin((Math.PI * Math.max(0, y - bottom * height)) / Math.max(1e-6, yb - bottom * height));
      else f = 1 - 0.2 * Math.min(1, (y - yb) / Math.max(1e-6, roofTop * height - yb));
      pts.push([x0 * halfW * f, y]);
    }
    return pts;
  };
  for (const zf of zs) for (const [x, y] of ringOf(zf)) pos.push(x, y, zf * length);
  const bodyIdx: number[] = [], glassIdx: number[] = [];
  // Which faces are window: in the cabin (between the window line and the roof edge, along the
  // glass), but not the pillars between windows.
  const isGlass = (zf: number, y: number, xFrac: number) => {
    const yf = y / height;
    if (zf < gz[0] || zf > gz[3]) return false;
    // The glass shape in side view: between its base line and the line from its top corners
    const tAt = (a: [number, number], b: [number, number]) => a[1] + ((b[1] - a[1]) * (zf - a[0])) / (b[0] - a[0] || 1);
    const g = profile.glass as [number, number][];
    const upper = zf < g[1][0] ? tAt(g[0], g[1]) : zf > g[2][0] ? tAt(g[2], g[3]) : tAt(g[1], g[2]);
    if (yf < belt + 0.015 || yf > upper - 0.02) return false;
    // Side windows: pillars at the windshield (A), the middle (B) and the back (C)
    if (Math.abs(xFrac) > 0.55) {
      const bz = (g[1][0] + g[2][0]) / 2;
      const pillar = 0.018;
      if (type !== "van" && type !== "truck" && Math.abs(zf - bz) < pillar) return false;
      if (zf < g[1][0] - 0.01 && yf > tAt(g[0], g[1]) - 0.06) return false; // A-pillar edge
      if (zf > g[2][0] + 0.01 && yf > tAt(g[2], g[3]) - 0.06) return false; // C-pillar edge
      return true;
    }
    // Windshield and rear window: the sloped front and back of the cabin
    return zf < g[1][0] + 0.01 || zf > g[2][0] - 0.01;
  };
  for (let i = 0; i < stations; i++) {
    for (let k = 0; k < around; k++) {
      const a = i * around + k, b = i * around + ((k + 1) % around), c = (i + 1) * around + ((k + 1) % around), d = (i + 1) * around + k;
      const zf = (zs[i] + zs[i + 1]) / 2;
      const y = (pos[a * 3 + 1] + pos[c * 3 + 1]) / 2;
      const xm = (pos[a * 3] + pos[c * 3]) / 2;
      const ring = ringOf(zf);
      const maxX = Math.max(...ring.map(p => Math.abs(p[0])), 1e-6);
      const list = isGlass(zf, y, xm / maxX) ? glassIdx : bodyIdx;
      // Wound to face out (the rings go round counterclockwise seen from the front)
      list.push(a, c, d, a, b, c);
    }
  }
  // Caps at the ends (front and rear faces)
  const capCenter = (i: number) => {
    const ring = pos.slice(i * around * 3, (i + 1) * around * 3);
    let cx = 0, cy = 0, cz = 0;
    for (let k = 0; k < around; k++) { cx += ring[k * 3]; cy += ring[k * 3 + 1]; cz += ring[k * 3 + 2]; }
    pos.push(cx / around, cy / around, cz / around);
    return pos.length / 3 - 1;
  };
  const front = capCenter(0), rear = capCenter(stations);
  for (let k = 0; k < around; k++) {
    bodyIdx.push(front, (k + 1) % around, k);
    bodyIdx.push(rear, stations * around + k, stations * around + ((k + 1) % around));
  }
  const bodyGeo = new THREE.BufferGeometry();
  bodyGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  bodyGeo.setIndex([...bodyIdx, ...glassIdx]);
  bodyGeo.addGroup(0, bodyIdx.length, 0);
  bodyGeo.addGroup(bodyIdx.length, glassIdx.length, 1);
  bodyGeo.computeVertexNormals();
  const body = new THREE.Mesh(bodyGeo, [paint, glass]);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // --- Wheels: tires with spoked rims, in dark arches cut into the body sides ---
  const wheelR = height * 0.21;
  const wheelW = width * 0.14;
  const axleZ = length * (type === "van" ? 0.34 : 0.31);
  const tireGeo = new THREE.TorusGeometry(wheelR * 0.78, wheelR * 0.24, 10, 28);
  const rimGeo = new THREE.CylinderGeometry(wheelR * 0.56, wheelR * 0.56, wheelW * 0.5, 24);
  rimGeo.rotateZ(Math.PI / 2);
  const spokeGeo = new THREE.BoxGeometry(wheelW * 0.18, wheelR * 1.0, wheelR * 0.12);
  // Dark wheel arches laid on the body side just outside its surface over each wheel
  const archMat = carMat("arch", () => new THREE.MeshStandardMaterial({ color: "#08090b", roughness: 1, side: THREE.DoubleSide }));
  const archGeo = new THREE.CircleGeometry(wheelR * 1.18, 24, 0, Math.PI);
  const sideX = (zf: number) => {
    // The body's widest point at the wheel's height range (its shoulder bulge)
    const ring = ringOf(zf).filter(p => p[1] <= wheelR * 2.2 && p[0] > 0);
    return ring.length ? Math.max(...ring.map(p => p[0])) : width / 2;
  };
  [-1, 1].forEach(sx => [-1, 1].forEach(sz => {
    const arch = new THREE.Mesh(archGeo, archMat);
    arch.position.set(sx * (sideX(sz * axleZ / length) + width * 0.004), wheelR, sz * axleZ);
    arch.rotation.y = sx * Math.PI / 2;
    group.add(arch);
    const wheel = new THREE.Group();
    const tire = new THREE.Mesh(tireGeo, rubber);
    tire.rotation.y = Math.PI / 2;
    tire.scale.set(1, 1, wheelW / (wheelR * 0.48));
    tire.castShadow = true;
    wheel.add(tire);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    wheel.add(rim);
    for (let k = 0; k < 5; k++) {
      const spoke = new THREE.Mesh(spokeGeo, rimMat);
      spoke.rotation.x = (k * 2 * Math.PI) / 5;
      spoke.position.x = sx * wheelW * 0.12;
      wheel.add(spoke);
    }
    wheel.position.set(sx * (width / 2 - wheelW * 0.62), wheelR, sz * axleZ);
    group.add(wheel);
  }));

  // --- Lights and grille on the flat nose and tail, a dark lower bumper strip, and mirrors ---
  const frontTop = top(-0.5) * height, rearTop = top(0.5) * height, y0 = bottom * height;
  const head = carMat("head", () => new THREE.MeshStandardMaterial({ color: "#f4f1e6", emissive: "#fff2c4", emissiveIntensity: 0.5, metalness: 0.3, roughness: 0.15 }));
  const tail = carMat("tail", () => new THREE.MeshStandardMaterial({ color: "#b3141b", emissive: "#7a0a0e", emissiveIntensity: 0.45, roughness: 0.25 }));
  const noseHalf = (width / 2) * 0.8;
  const onEnd = (mat: THREE.Material, w: number, h: number, x: number, y: number, sz: number) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, length * 0.006), mat);
    m.position.set(x, y, sz * (length / 2 - length * 0.002));
    group.add(m);
  };
  [-1, 1].forEach(sx => {
    onEnd(head, noseHalf * 0.42, (frontTop - y0) * 0.22, sx * noseHalf * 0.66, y0 + (frontTop - y0) * 0.72, -1);
    onEnd(tail, noseHalf * 0.4, (rearTop - y0) * (type === "sedan" || type === "sports" ? 0.22 : 0.12), sx * noseHalf * 0.7, y0 + (rearTop - y0) * 0.74, 1);
  });
  onEnd(trimMat, noseHalf * 0.75, (frontTop - y0) * 0.26, 0, y0 + (frontTop - y0) * 0.42, -1);
  onEnd(trimMat, noseHalf * 1.7, (frontTop - y0) * 0.14, 0, y0 + (frontTop - y0) * 0.1, -1);
  onEnd(trimMat, noseHalf * 1.7, (rearTop - y0) * 0.1, 0, y0 + (rearTop - y0) * 0.08, 1);
  const mirrorGeo = new THREE.BoxGeometry(width * 0.05, height * 0.05, length * 0.022);
  [-1, 1].forEach(sx => {
    const m = new THREE.Mesh(mirrorGeo, trimMat);
    m.position.set(sx * (width / 2 + width * 0.02), belt * height + height * 0.04, (gz[0] + 0.02) * length);
    m.castShadow = true;
    group.add(m);
  });

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
  return group;
};

// --- Trees: a trunk with branches and a canopy of leaf cards (textured, alpha-cut quads) around a
// dark core, so they read as real foliage from a camera at eye level as well as from above ---

let leafTexture: THREE.Texture | null = null;
let needleTexture: THREE.Texture | null = null;
/** A tile of drawn leaves (white-ish, tinted per tree), transparent between them. */
const getLeafTexture = (needles: boolean) => {
  if (typeof document === "undefined") return null;
  if (needles ? needleTexture : leafTexture) return needles ? needleTexture : leafTexture;
  const size = 256;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  let seed = needles ? 7 : 3;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  if (needles) {
    // Sprays of needles along twigs
    for (let i = 0; i < 46; i++) {
      const x = 20 + rnd() * (size - 40);
      const y = 20 + rnd() * (size - 40);
      const a = rnd() * Math.PI * 2;
      const len = 36 + rnd() * 40;
      const l = 0.55 + rnd() * 0.45;
      g.strokeStyle = `rgba(${Math.round(200 * l)},${Math.round(230 * l)},${Math.round(200 * l)},1)`;
      g.lineWidth = 2;
      for (let k = 0; k < len; k += 3) {
        const px = x + Math.cos(a) * k;
        const py = y + Math.sin(a) * k;
        for (const side of [-1, 1]) {
          g.beginPath();
          g.moveTo(px, py);
          g.lineTo(px + Math.cos(a + side * 0.9) * 9, py + Math.sin(a + side * 0.9) * 9);
          g.stroke();
        }
      }
    }
  } else {
    for (let i = 0; i < 150; i++) {
      const r = size * 0.45 * Math.sqrt(rnd());
      const t = rnd() * Math.PI * 2;
      const x = size / 2 + Math.cos(t) * r;
      const y = size / 2 + Math.sin(t) * r;
      const l = 0.5 + rnd() * 0.5;
      g.save();
      g.translate(x, y);
      g.rotate(rnd() * Math.PI * 2);
      g.fillStyle = `rgb(${Math.round(205 * l)},${Math.round(235 * l)},${Math.round(190 * l)})`;
      g.beginPath();
      g.ellipse(0, 0, 13 + rnd() * 6, 6 + rnd() * 3, 0, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = `rgba(0,0,0,0.25)`;
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(-12, 0);
      g.lineTo(12, 0);
      g.stroke();
      g.restore();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.userData.shared = true;
  if (needles) needleTexture = tex;
  else leafTexture = tex;
  return tex;
};

type Rand = (i: number) => number;
type Clump = { x: number; y: number; z: number; rx: number; ry: number };

/**
 * Leaf cards (textured quads) scattered over the shells of foliage clumps, more on the sunny top,
 * facing mostly outward, shaded darker underneath and inside. One merged mesh for the whole tree.
 */
const leafCardMesh = (clumps: Clump[], perUnitArea: number, cardSize: number, rand: Rand, color: THREE.Color, needles: boolean) => {
  const positions: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  const v = new THREE.Vector3(), n = new THREE.Vector3(), t1 = new THREE.Vector3(), t2 = new THREE.Vector3();
  let k = 0;
  clumps.forEach((c, ci) => {
    const count = Math.round(clamp(perUnitArea * c.rx * Math.max(c.rx, c.ry), 26, 240));
    for (let i = 0; i < count; i++, k++) {
      const u = rand(k * 3 + 1 + ci) * 2 - 1;
      const up = u > -0.85 ? u * 0.85 + 0.15 * Math.abs(u) : u;
      const theta = rand(k * 3 + 2) * Math.PI * 2;
      const ring = Math.sqrt(Math.max(0, 1 - up * up));
      const depth = 0.8 + rand(k * 3 + 3) * 0.28;
      v.set(c.x + Math.cos(theta) * ring * c.rx * depth, c.y + up * c.ry * depth, c.z + Math.sin(theta) * ring * c.rx * depth);
      n.set(Math.cos(theta) * ring, up, Math.sin(theta) * ring)
        .add(new THREE.Vector3(rand(k + 900) - 0.5, rand(k + 901) - 0.5, rand(k + 902) - 0.5).multiplyScalar(1.2))
        .normalize();
      t1.set(0, 1, 0).cross(n);
      if (t1.lengthSq() < 1e-4) t1.set(1, 0, 0);
      t1.normalize();
      t2.copy(n).cross(t1).normalize();
      const sz = cardSize * (0.7 + rand(k + 700) * 0.6) * 0.5;
      const quad = [[-1, -1, 0, 0], [1, -1, 1, 0], [1, 1, 1, 1], [-1, 1, 0, 1]].map(([a, b, uu, vv]) => ({
        p: v.clone().addScaledVector(t1, a * sz).addScaledVector(t2, b * sz),
        uv: [uu, vv]
      }));
      const shade = clamp(0.66 + up * 0.26 + (depth - 0.9) * 0.5 + (rand(k + 500) - 0.5) * 0.2, 0.35, 1.15);
      const col = color.clone().multiplyScalar(shade);
      const first = positions.length / 3;
      for (const q of quad) {
        positions.push(q.p.x, q.p.y, q.p.z);
        uvs.push(q.uv[0], q.uv[1]);
        colors.push(col.r, col.g, col.b);
      }
      indices.push(first, first + 1, first + 2, first, first + 2, first + 3);
    }
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    map: getLeafTexture(needles),
    vertexColors: true,
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    roughness: 0.85,
    metalness: 0
  }));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
};

/**
 * Solid, smooth-shaded insides of the foliage clumps (so you can't see through the crown), gently
 * lumpy, darker underneath like a real crown's shade. One merged mesh.
 */
const clumpCoreMesh = (clumps: Clump[], color: THREE.Color, rand: Rand) => {
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  clumps.forEach((c, ci) => {
    const g = new THREE.IcosahedronGeometry(1, 1);
    const pos = g.getAttribute("position");
    const base = positions.length / 3;
    const ph = rand(ci + 60) * 6;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const bump = 0.86 + 0.12 * Math.sin(x * 4.1 + ph) * Math.sin(y * 3.7 + ph * 1.3) * Math.sin(z * 4.3 + ph * 0.7);
      positions.push(c.x + x * c.rx * 0.8 * bump, c.y + y * c.ry * 0.8 * bump, c.z + z * c.rx * 0.8 * bump);
      const shade = 0.3 + 0.2 * (y * 0.5 + 0.5);
      colors.push(color.r * shade, color.g * shade, color.b * shade);
    }
    const idx = g.getIndex();
    if (idx) for (let i = 0; i < idx.count; i++) indices.push(base + idx.getX(i));
    else for (let i = 0; i < pos.count; i++) indices.push(base + i);
    g.dispose();
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
};

/**
 * A conifer's boughs: tiers of drooping skirts narrowing to a point. Each skirt has soft lobes (one
 * per bough) with drooping tips, light at the tips and dark toward the trunk. One merged mesh.
 */
const coniferSkirtMesh = (tiers: { y: number; r: number; h: number }[], color: THREE.Color, rand: Rand) => {
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  const seg = 20, rings = 3;
  tiers.forEach((t, ti) => {
    const lobes = 8 + (ti % 3);
    const phase = rand(ti + 200) * Math.PI * 2;
    const base = positions.length / 3;
    for (let ri = 0; ri <= rings; ri++) {
      const f = ri / rings; // 0 at the trunk (top of the skirt), 1 at the tips
      for (let si = 0; si <= seg; si++) {
        const a = (si / seg) * Math.PI * 2;
        const lobe = Math.pow(Math.max(0, Math.cos((a * lobes + phase) / 2)), 2);
        const rr = t.r * f * (0.82 + 0.26 * lobe);
        const droop = t.h * (f * 1.0 + 0.18 * f * f * lobe);
        positions.push(Math.cos(a) * rr, t.y + t.h - droop, Math.sin(a) * rr);
        const shade = (0.32 + 0.4 * f * (0.6 + 0.4 * lobe)) * (0.9 + 0.2 * rand(ti * 97 + ri * 31 + si));
        colors.push(color.r * shade, color.g * shade, color.b * shade);
      }
    }
    for (let ri = 0; ri < rings; ri++) {
      for (let si = 0; si < seg; si++) {
        const a = base + ri * (seg + 1) + si, b = a + seg + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    }
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, side: THREE.DoubleSide }));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
};

export const create3dTree = (item: TreeItem): THREE.Group => {
  const group = new THREE.Group();
  const treeHeight = item.height ?? 30;
  const widthMultiplier = item.width ?? 1;
  const treeType = item.treeType ?? "deciduous";
  const trunkMat = new THREE.MeshStandardMaterial({ color: "#4f3d2e", roughness: 1 });

  // Deterministic per-tree variation
  const seed = item.id.split("").reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const rand = (i: number) => {
    const x = Math.sin(seed * 0.0001 + i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };
  // Real trunks are ~1 ft across for a yard tree, not a fifth of the canopy.
  const trunkRadiusFor = (canopyR: number) => clamp(canopyR * 0.055, 0.25, 1.4);
  const base = new THREE.Color(item.color);
  // Slight hue/lightness variation between trees
  const hsl = { h: 0, s: 0, l: 0 };
  base.getHSL(hsl);
  base.setHSL(hsl.h + (rand(77) - 0.5) * 0.03, clamp(hsl.s * (0.85 + rand(78) * 0.2), 0, 1), clamp(hsl.l * (0.85 + rand(79) * 0.25), 0.05, 0.7));
  const add = (m: THREE.Object3D) => { group.add(m); return m; };
  const branch = (from: THREE.Vector3, to: THREE.Vector3, r0: number, r1: number) => {
    const len = from.distanceTo(to);
    const geo = new THREE.CylinderGeometry(r1, r0, len, 7);
    geo.translate(0, len / 2, 0);
    const m = new THREE.Mesh(geo, trunkMat);
    m.position.copy(from);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
    m.castShadow = true;
    return add(m);
  };

  if (treeType === "palm") {
    // Palm: a tall, slightly leaning ringed trunk and drooping fronds.
    const trunkRadius = clamp(item.radius * 0.08, 0.35, 1.2);
    const trunkH = treeHeight * 0.88;
    const lean = new THREE.Vector3((rand(1) - 0.5) * 0.15 * trunkH, 0, (rand(2) - 0.5) * 0.15 * trunkH);
    const segments = 10;
    const bark = new THREE.MeshStandardMaterial({ color: "#8a7458", roughness: 1 });
    let prev = new THREE.Vector3();
    for (let i = 1; i <= segments; i++) {
      const t = i / segments;
      const p = new THREE.Vector3(lean.x * t * t, trunkH * t, lean.z * t * t);
      const len = prev.distanceTo(p);
      const geo = new THREE.CylinderGeometry(trunkRadius * (1 - t * 0.3), trunkRadius * (1 - (t - 1 / segments) * 0.3) * 1.06, len, 8);
      geo.translate(0, len / 2, 0);
      const seg = new THREE.Mesh(geo, bark);
      seg.position.copy(prev);
      seg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p.clone().sub(prev).normalize());
      seg.castShadow = true;
      add(seg);
      prev = p;
    }
    const frondMat = new THREE.MeshStandardMaterial({ color: base, roughness: 0.8, side: THREE.DoubleSide });
    const frondLength = Math.max(item.radius * widthMultiplier, 4);
    for (let i = 0; i < 11; i++) {
      const angle = (i / 11) * Math.PI * 2 + rand(i) * 0.3;
      // A frond: a long tapered strip arching out and down
      const pts: number[] = [];
      const steps = 8;
      for (let k = 0; k < steps; k++) {
        const t0 = k / steps, t1 = (k + 1) / steps;
        const w0 = Math.sin(Math.PI * t0) * frondLength * 0.14 + 0.05, w1 = Math.sin(Math.PI * t1) * frondLength * 0.14 + 0.05;
        const y0 = Math.sin(t0 * Math.PI * 0.6) * frondLength * 0.25 - t0 * t0 * frondLength * 0.55;
        const y1 = Math.sin(t1 * Math.PI * 0.6) * frondLength * 0.25 - t1 * t1 * frondLength * 0.55;
        const x0 = t0 * frondLength, x1 = t1 * frondLength;
        pts.push(x0, y0, -w0, x1, y1, -w1, x1, y1, w1, x0, y0, -w0, x1, y1, w1, x0, y0, w0);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      geo.computeVertexNormals();
      const frond = new THREE.Mesh(geo, frondMat);
      frond.position.copy(prev);
      frond.rotation.y = angle;
      frond.castShadow = true;
      add(frond);
    }
  } else if (treeType === "conifer") {
    // Conifer (pine, spruce, fir): a straight trunk, bare low down, and tiers of drooping boughs
    // narrowing to a spire, with needle sprays fringing each tier.
    const canopyR = item.radius * widthMultiplier;
    const trunkR = trunkRadiusFor(canopyR);
    const bare = treeHeight * 0.08;
    const crownH = treeHeight - bare;
    branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, treeHeight * 0.95, 0), trunkR, trunkR * 0.2);
    const count = Math.round(clamp(crownH / 3.2, 6, 14));
    const tiers: { y: number; r: number; h: number }[] = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const r = Math.max(0.6, canopyR * Math.pow(1 - t, 0.95) * (0.92 + rand(i) * 0.14));
      const h = (crownH / count) * 1.7;
      tiers.push({ y: bare + t * crownH * 0.94, r, h });
    }
    const needle = base.clone().lerp(new THREE.Color("#1f3b2a"), 0.35);
    add(coniferSkirtMesh(tiers, needle, rand));
    // Needle sprays around each tier's edge: a soft, fuzzy outline
    const fringe: Clump[] = tiers.map(t => ({ x: 0, y: t.y + t.h * 0.2, z: 0, rx: t.r * 0.92, ry: t.h * 0.3 }));
    add(leafCardMesh(fringe, 1.3, Math.max(1.2, canopyR * 0.32), rand, needle, true));
  } else if (treeType === "bush") {
    // Bush: a low, wide mound of a few leafy clumps.
    const r = item.radius * widthMultiplier;
    const h = Math.min(treeHeight * 0.5, r * 1.4);
    const clumps: Clump[] = [{ x: 0, y: h * 0.45, z: 0, rx: r * 0.75, ry: h * 0.45 }];
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + rand(i + 3);
      clumps.push({ x: Math.cos(a) * r * 0.38, y: h * 0.35, z: Math.sin(a) * r * 0.38, rx: r * 0.55, ry: h * 0.38 });
    }
    add(clumpCoreMesh(clumps, base, rand));
    add(leafCardMesh(clumps, 2.2, Math.max(0.9, r * 0.45), rand, base, false));
  } else {
    // Deciduous (default): a trunk forking into limbs, each carrying a clump of foliage, plus one on
    // top, so the crown has a real tree's irregular outline instead of one smooth ball.
    const canopyR = item.radius * widthMultiplier;
    const trunkR = trunkRadiusFor(canopyR);
    const canopyBottom = treeHeight * 0.3;
    const canopyH = treeHeight - canopyBottom;
    const forkY = canopyBottom + canopyH * 0.1;
    branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, forkY, 0), trunkR, trunkR * 0.8);
    const clumps: Clump[] = [];
    // A clump is never much taller than it is wide (a stretched one reads as a green spindle).
    const topR = canopyR * (0.5 + rand(9) * 0.1);
    const topRy = Math.min(canopyH * 0.3, topR * 1.25);
    clumps.push({ x: (rand(11) - 0.5) * canopyR * 0.2, y: treeHeight - topRy, z: (rand(12) - 0.5) * canopyR * 0.2, rx: topR, ry: topRy });
    const limbs = 5 + Math.floor(rand(5) * 3);
    for (let i = 0; i < limbs; i++) {
      const a = (i / limbs) * Math.PI * 2 + rand(i + 20) * 0.7;
      const cr = canopyR * (0.4 + rand(i + 50) * 0.14);
      const reach = Math.max(0, canopyR - cr) * (0.75 + rand(i + 30) * 0.25);
      const cy = canopyBottom + canopyH * (0.32 + rand(i + 40) * 0.3);
      const ry = Math.min(canopyH * 0.3, cr * 0.85);
      clumps.push({ x: Math.cos(a) * reach, y: cy, z: Math.sin(a) * reach, rx: cr, ry });
      branch(new THREE.Vector3(0, forkY, 0), new THREE.Vector3(Math.cos(a) * reach * 0.8, cy - ry * 0.3, Math.sin(a) * reach * 0.8), trunkR * 0.55, trunkR * 0.15);
    }
    // A crown much taller than wide (a narrow tree): more clumps stacked up the stem, and the
    // stem carried up through them.
    if (canopyH > canopyR * 2.6) {
      const step = canopyR * 0.8;
      for (let y = canopyBottom + canopyR, i = 0; y < treeHeight - topRy * 1.5; y += step, i++) {
        const a = rand(i + 300) * Math.PI * 2;
        clumps.push({ x: Math.cos(a) * canopyR * 0.3, y, z: Math.sin(a) * canopyR * 0.3, rx: canopyR * (0.8 + rand(i + 310) * 0.25), ry: canopyR * 0.9 });
      }
      branch(new THREE.Vector3(0, forkY, 0), new THREE.Vector3(0, treeHeight - topRy, 0), trunkR * 0.7, trunkR * 0.3);
    }
    add(clumpCoreMesh(clumps, base, rand));
    add(leafCardMesh(clumps, 1.9, clamp(canopyR * 0.36, 1.2, 4.5), rand, base, false));
  }

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
  return group;
};
