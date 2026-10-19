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
  // The rounded edge (bevel) grows the outline outward: build the body that much shorter so the
  // whole car is exactly its stated length.
  const body = new THREE.Mesh(taper(profileGeometry(clampProfile(0, beltFrac), length - 2 * bevel, height, width, bevel)), paint);
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

  // Lights and bumpers: their outer faces just proud of the body's ends (no flicker where two
  // surfaces meet), the whole car still its stated length.
  const lightGeo = new THREE.BoxGeometry(width * 0.2, height * 0.07, length * 0.012);
  const head = new THREE.MeshStandardMaterial({ color: "#fff7d6", emissive: "#fff2b3", emissiveIntensity: 0.6 });
  const tail = new THREE.MeshStandardMaterial({ color: "#d81b1b", emissive: "#a30d0d", emissiveIntensity: 0.5 });
  const frontY = profile.body[1][1] * height * 0.92;
  const rearY = profile.body[profile.body.length - 2][1] * height * 0.85;
  [-1, 1].forEach(sx => {
    const h = new THREE.Mesh(lightGeo, head);
    h.position.set(sx * width * 0.3, frontY, -length / 2 + length * 0.004);
    group.add(h);
    const t = new THREE.Mesh(lightGeo, tail);
    t.position.set(sx * width * 0.3, rearY, length / 2 - length * 0.004);
    group.add(t);
  });
  const bumperGeo = new THREE.BoxGeometry(width * 0.96, height * 0.1, length * 0.03);
  const fb = new THREE.Mesh(bumperGeo, trimMat);
  fb.position.set(0, height * 0.24, -length / 2 + length * 0.013);
  group.add(fb);
  const rb = new THREE.Mesh(bumperGeo, trimMat);
  rb.position.set(0, height * 0.24, length / 2 - length * 0.013);
  group.add(rb);

  // Grille, side mirrors and door seams
  const grille = new THREE.Mesh(new THREE.BoxGeometry(width * 0.42, height * 0.1, length * 0.012), trimMat);
  grille.position.set(0, frontY * 0.92, -length / 2 + length * 0.004);
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
