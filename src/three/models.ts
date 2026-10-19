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

const profileGeometry = (profile: Profile, length: number, height: number, width: number, bevel: number) => {
  // Shape in (z, y), extruded along x, then centered on x.
  const shape = new THREE.Shape(profile.map(([z, y]) => new THREE.Vector2(z * length, y * height)));
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.01, width - bevel * 2),
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 4
  });
  // ExtrudeGeometry extrudes along +z: map shape (x=z, y) -> world (z, y) and extrusion -> x.
  geo.rotateY(-Math.PI / 2);
  geo.translate((width - bevel * 2) / 2, 0, 0);
  geo.computeVertexNormals();
  return geo;
};

/** A real-size car (width x length x height in plan units) of the item's vehicle type. */
export const create3dCar = (item: ParkingItem): THREE.Group => {
  const group = new THREE.Group();
  const width = Math.max(item.width, 0.5);
  const length = Math.max(item.height, 1);
  const height = Math.max(item.vehicleHeight ?? width * 0.8, 0.5);
  const type = resolveVehicleType(item) ?? "sedan";
  const profile = CAR_PROFILES[type];

  const paint = new THREE.MeshStandardMaterial({ color: item.color, metalness: 0.45, roughness: 0.32 });
  const glass = new THREE.MeshStandardMaterial({ color: "#121a24", metalness: 0.1, roughness: 0.18, envMapIntensity: 0.35 });
  const rubber = new THREE.MeshStandardMaterial({ color: "#121417", roughness: 0.9 });
  const rimMat = new THREE.MeshStandardMaterial({ color: "#b8bec7", metalness: 0.8, roughness: 0.3 });
  const trimMat = new THREE.MeshStandardMaterial({ color: "#1f2328", roughness: 0.7 });

  const bevel = Math.min(width, height) * 0.06;
  // Real cabins narrow toward the roof (tumblehome): pull the sides in above the beltline.
  const beltY = Math.min(...profile.glass.map(p => p[1])) * height;
  const taper = (geo: THREE.BufferGeometry) => {
    const pos = geo.getAttribute("position");
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > beltY) pos.setX(i, pos.getX(i) * (1 - 0.16 * ((y - beltY) / Math.max(1e-6, height - beltY))));
    }
    geo.computeVertexNormals();
    return geo;
  };
  // The car in three parts, from its side profile: painted lower body up to the window line, a
  // glass cabin above it (windshield, side and rear windows all show), and a painted roof panel.
  const beltFrac = beltY / height;
  // The part of the side profile between two heights (polygon clipped to a horizontal band).
  const clampProfile = (lo: number, hi: number): Profile => {
    const clip = (pts: Profile, keep: (p: [number, number]) => boolean, cut: (a: [number, number], b: [number, number]) => [number, number]) => {
      const out: Profile = [];
      pts.forEach((cur, i) => {
        const prev = pts[(i + pts.length - 1) % pts.length];
        if (keep(cur)) {
          if (!keep(prev)) out.push(cut(prev, cur));
          out.push(cur);
        } else if (keep(prev)) out.push(cut(prev, cur));
      });
      return out;
    };
    const at = (y: number) => (a: [number, number], b: [number, number]): [number, number] => [a[0] + ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]), y];
    return clip(clip(profile.body, p => p[1] >= lo, at(lo)), p => p[1] <= hi, at(hi));
  };
  const body = new THREE.Mesh(taper(profileGeometry(clampProfile(0, beltFrac), length, height, width, bevel)), paint);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);
  const cabin = new THREE.Mesh(taper(profileGeometry(clampProfile(beltFrac - 0.01, 1), length, height, width * 0.94, 0)), glass);
  cabin.castShadow = true;
  group.add(cabin);
  const roofTop = Math.max(...profile.body.map(p => p[1]));
  const roof = new THREE.Mesh(taper(profileGeometry(clampProfile(roofTop - 0.07, 1.01), length, height, width * 0.95, 0)), paint);
  roof.position.y = height * 0.004;
  roof.castShadow = true;
  group.add(roof);
  // Side pillars between front and rear windows (sedans/hatchbacks/SUVs) read better with a B-pillar.
  if (type !== "van" && type !== "truck") {
    const pillarZ = (profile.glass[1][0] + profile.glass[2][0]) / 2 * length;
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(width * 0.9, (roofTop - beltFrac) * height * 0.9, length * 0.025), paint);
    pillar.position.set(0, (beltFrac + roofTop) / 2 * height, pillarZ);
    group.add(pillar);
  }

  // Wheels
  const wheelR = height * 0.21;
  const wheelW = width * 0.13;
  const tireGeo = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 20);
  tireGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(wheelR * 0.6, wheelR * 0.6, wheelW * 1.04, 14);
  rimGeo.rotateZ(Math.PI / 2);
  const axleZ = length * (type === "van" ? 0.34 : 0.31);
  // Dark wheel arches on the body sides
  const archGeo = new THREE.CircleGeometry(wheelR * 1.18, 20, 0, Math.PI);
  const archMat = new THREE.MeshStandardMaterial({ color: "#0d0f12", roughness: 1, side: THREE.DoubleSide });
  [-1, 1].forEach(sx => [-1, 1].forEach(sz => {
    const arch = new THREE.Mesh(archGeo, archMat);
    arch.position.set(sx * (width / 2 + 0.005), wheelR, sz * length * (type === "van" ? 0.34 : 0.31));
    arch.rotation.y = sx * Math.PI / 2;
    group.add(arch);
  }));
  [-1, 1].forEach(sx => [-1, 1].forEach(sz => {
    const x = sx * (width / 2 - wheelW * 0.42);
    const tire = new THREE.Mesh(tireGeo, rubber);
    tire.position.set(x, wheelR, sz * axleZ);
    tire.castShadow = true;
    group.add(tire);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.copy(tire.position);
    group.add(rim);
  }));

  // Lights and bumpers
  const lightGeo = new THREE.BoxGeometry(width * 0.2, height * 0.07, length * 0.012);
  const head = new THREE.MeshStandardMaterial({ color: "#fff7d6", emissive: "#fff2b3", emissiveIntensity: 0.6 });
  const tail = new THREE.MeshStandardMaterial({ color: "#d81b1b", emissive: "#a30d0d", emissiveIntensity: 0.5 });
  const frontY = profile.body[1][1] * height * 0.92;
  const rearY = profile.body[profile.body.length - 2][1] * height * 0.85;
  [-1, 1].forEach(sx => {
    const h = new THREE.Mesh(lightGeo, head);
    h.position.set(sx * width * 0.3, frontY, -length / 2 - length * 0.003);
    group.add(h);
    const t = new THREE.Mesh(lightGeo, tail);
    t.position.set(sx * width * 0.3, rearY, length / 2 + length * 0.003);
    group.add(t);
  });
  const bumperGeo = new THREE.BoxGeometry(width * 0.96, height * 0.1, length * 0.03);
  const fb = new THREE.Mesh(bumperGeo, trimMat);
  fb.position.set(0, height * 0.24, -length / 2 + length * 0.01);
  group.add(fb);
  const rb = new THREE.Mesh(bumperGeo, trimMat);
  rb.position.set(0, height * 0.24, length / 2 - length * 0.01);
  group.add(rb);

  // Grille, side mirrors and door seams
  const grille = new THREE.Mesh(new THREE.BoxGeometry(width * 0.42, height * 0.1, length * 0.012), trimMat);
  grille.position.set(0, frontY * 0.92, -length / 2 - length * 0.002);
  group.add(grille);
  const mirrorGeo = new THREE.BoxGeometry(width * 0.08, height * 0.07, length * 0.035);
  const mirrorZ = profile.glass[0][0] * length + length * 0.02;
  [-1, 1].forEach(sx => {
    const m = new THREE.Mesh(mirrorGeo, paint);
    m.position.set(sx * (width / 2 + width * 0.035), beltY + height * 0.03, mirrorZ);
    m.castShadow = true;
    group.add(m);
  });
  const seamMat = new THREE.LineBasicMaterial({ color: "#000000", transparent: true, opacity: 0.35 });
  const seams: number[] = [];
  const doorZs = type === "van" || type === "truck" ? [profile.glass[0][0] * length, profile.glass[2][0] * length] : [profile.glass[0][0] * length, (profile.glass[1][0] + profile.glass[2][0]) / 2 * length, profile.glass[3][0] * length];
  [-1, 1].forEach(sx => doorZs.forEach(z => seams.push(sx * (width / 2 + 0.01), wheelR * 1.25, z, sx * (width / 2 + 0.01), beltY * 0.98, z)));
  const seamGeo = new THREE.BufferGeometry();
  seamGeo.setAttribute("position", new THREE.Float32BufferAttribute(seams, 3));
  group.add(new THREE.LineSegments(seamGeo, seamMat));

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

/** Many leaf cards scattered over an ellipsoid shell (radii rx, ry), merged into one mesh. */
const leafCards = (rx: number, ry: number, cy: number, count: number, cardSize: number, rand: (i: number) => number, color: THREE.Color, needles: boolean) => {
  const positions: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  const t1 = new THREE.Vector3();
  const t2 = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    // A point on (or a little inside) the shell, more on the sunny top
    const u = rand(i * 3 + 1) * 2 - 1;
    const up = u > -0.85 ? u * 0.85 + 0.15 * Math.abs(u) : u;
    const theta = rand(i * 3 + 2) * Math.PI * 2;
    const ring = Math.sqrt(Math.max(0, 1 - up * up));
    const depth = 0.72 + rand(i * 3 + 3) * 0.35;
    v.set(Math.cos(theta) * ring * rx * depth, cy + up * ry * depth, Math.sin(theta) * ring * rx * depth);
    // Facing mostly outward, tipped at random
    n.set(Math.cos(theta) * ring, up, Math.sin(theta) * ring).add(new THREE.Vector3(rand(i + 900) - 0.5, rand(i + 901) - 0.5, rand(i + 902) - 0.5).multiplyScalar(1.4)).normalize();
    t1.set(0, 1, 0).cross(n);
    if (t1.lengthSq() < 1e-4) t1.set(1, 0, 0);
    t1.normalize();
    t2.copy(n).cross(t1).normalize();
    const s = cardSize * (0.75 + rand(i + 700) * 0.5) * 0.5;
    const corners = [[-1, -1, 0, 0], [1, -1, 1, 0], [1, 1, 1, 1], [-1, 1, 0, 1]];
    const quad = corners.map(([a, b, uu, vv]) => ({ p: v.clone().addScaledVector(t1, a * s).addScaledVector(t2, b * s), uv: [uu, vv] }));
    // Shade: darker underneath and inside, lighter on top
    const shade = clamp(0.62 + up * 0.22 + (depth - 0.9) * 0.6 + (rand(i + 500) - 0.5) * 0.18, 0.35, 1.1);
    const c = color.clone().multiplyScalar(shade);
    for (const k of [0, 1, 2, 0, 2, 3]) {
      positions.push(quad[k].p.x, quad[k].p.y, quad[k].p.z);
      uvs.push(quad[k].uv[0], quad[k].uv[1]);
      colors.push(c.r, c.g, c.b);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const tex = getLeafTexture(needles);
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    vertexColors: true,
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    roughness: 0.85,
    metalness: 0
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
};

/** A lumpy solid core so you can't see through the canopy (shaded like the shadowed inside). */
const canopyCore = (rx: number, ry: number, cy: number, color: THREE.Color, rand: (i: number) => number) => {
  const geo = new THREE.IcosahedronGeometry(1, 3);
  const pos = geo.getAttribute("position");
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const bump = 0.86 + 0.14 * Math.sin(x * 5.1 + rand(1) * 6) * Math.sin(y * 4.3 + rand(2) * 6) * Math.sin(z * 4.7 + rand(3) * 6) + (rand(i + 1000) - 0.5) * 0.08;
    pos.setXYZ(i, x * rx * bump, cy + y * ry * bump, z * rx * bump);
  }
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: color.clone().multiplyScalar(0.55), roughness: 1, flatShading: true }));
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
    const geo = new THREE.CylinderGeometry(r1, r0, len, 6);
    geo.translate(0, len / 2, 0);
    const m = new THREE.Mesh(geo, trunkMat);
    m.position.copy(from);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
    m.castShadow = true;
    return add(m);
  };

  if (treeType === "conifer") {
    // Conifer: a straight trunk and tiers of drooping, jagged boughs narrowing to a point.
    const canopyR = item.radius * widthMultiplier;
    const trunkR = trunkRadiusFor(canopyR);
    const trunkH = treeHeight * 0.12;
    branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, treeHeight * 0.92, 0), trunkR, trunkR * 0.25);
    const tiers = 7;
    const span = treeHeight - trunkH;
    const mat = new THREE.MeshStandardMaterial({ color: base.clone().multiplyScalar(0.8), roughness: 0.95, flatShading: true });
    for (let i = 0; i < tiers; i++) {
      const t = i / tiers;
      const r = canopyR * (1 - t * 0.88) * (0.9 + rand(i) * 0.2);
      const h = (span / tiers) * 1.8;
      const geo = new THREE.ConeGeometry(r, h, 14, 2, true);
      const pos = geo.getAttribute("position");
      for (let k = 0; k < pos.count; k++) {
        const x = pos.getX(k), y = pos.getY(k), z = pos.getZ(k);
        const ang = Math.atan2(z, x);
        // Star-shaped skirt: boughs stick out, gaps between them; tips droop
        const jag = 1 + 0.22 * Math.sin(ang * 7 + i * 1.7) + (rand(k + i * 100) - 0.5) * 0.12;
        const droop = y < -h * 0.3 ? -h * 0.08 * (1 + Math.sin(ang * 7 + i * 1.7)) : 0;
        pos.setXYZ(k, x * jag, y + droop, z * jag);
      }
      geo.computeVertexNormals();
      const tier = new THREE.Mesh(geo, mat);
      tier.position.y = trunkH + t * span + h / 2 - (span / tiers) * 0.4;
      tier.rotation.y = rand(i + 10) * Math.PI;
      tier.castShadow = true;
      tier.receiveShadow = true;
      add(tier);
    }
    add(leafCards(canopyR * 0.55, span * 0.45, trunkH + span * 0.42, 70, canopyR * 0.55, rand, base, true));
  } else if (treeType === "palm") {
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
  } else if (treeType === "bush") {
    // Bush: a low, wide mound of leaves.
    const bushRadius = item.radius * widthMultiplier;
    const bushHeight = Math.min(treeHeight * 0.5, bushRadius * 1.4);
    add(canopyCore(bushRadius * 0.8, bushHeight * 0.45, bushHeight * 0.45, base, rand));
    add(leafCards(bushRadius, bushHeight * 0.55, bushHeight * 0.45, 60, bushRadius * 0.6, rand, base, false));
  } else {
    // Deciduous (default): trunk to about a third of the height, forking into branches that
    // carry a full, rounded canopy of leaves.
    const canopyR = item.radius * widthMultiplier;
    const trunkR = trunkRadiusFor(canopyR);
    const canopyBottom = treeHeight * 0.3;
    const canopyH = treeHeight - canopyBottom;
    const centerY = canopyBottom + canopyH * 0.5;
    const forkY = canopyBottom + canopyH * 0.12;
    branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, forkY, 0), trunkR, trunkR * 0.8);
    const limbs = 4 + Math.floor(rand(5) * 3);
    for (let i = 0; i < limbs; i++) {
      const a = (i / limbs) * Math.PI * 2 + rand(i + 20) * 0.8;
      const reach = canopyR * (0.45 + rand(i + 30) * 0.3);
      const tip = new THREE.Vector3(Math.cos(a) * reach, centerY + canopyH * (rand(i + 40) * 0.3 - 0.05), Math.sin(a) * reach);
      branch(new THREE.Vector3(0, forkY, 0), tip, trunkR * 0.55, trunkR * 0.15);
    }
    add(canopyCore(canopyR * 0.78, canopyH * 0.4, centerY, base, rand));
    const cards = Math.round(clamp(canopyR * 9, 70, 220));
    add(leafCards(canopyR, canopyH * 0.5, centerY, cards, canopyR * 0.55, rand, base, false));
  }

  group.position.set(item.x, 0, item.y);
  group.rotation.y = -THREE.MathUtils.degToRad(item.rotation);
  return group;
};
