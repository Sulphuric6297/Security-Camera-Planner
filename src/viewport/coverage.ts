// What a camera covers, drawn on the ground: a fan that stops at walls and trees, banded by how much
// detail the camera captures at each distance (DORI). Plus the camera's view pyramid for 3D views.
import * as THREE from "three";
import { DEFAULT_CAMERA_PITCH } from "../constants";
import { getCameraAspectValue, getCameraHFov, getDoriDistances, getGroundCoverage, vFovFromH } from "../lib/camera";
import { heightAt, visibilityPolygon } from "../lib/planGeom";
import type { BuildingItem, CameraItem, TreeItem } from "../types";
import type { P, ViewDoc } from "./types";

export const cameraVFov = (cam: CameraItem) => cam.vFov ?? vFovFromH(getCameraHFov(cam), getCameraAspectValue(cam));

/** Ground fan for one camera, in world space. */
export const buildCoverageFan = (doc: ViewDoc, cam: CameraItem, pos: P, mountFt: number, obstacles: (BuildingItem | TreeItem)[]) => {
  const upf = doc.unitsPerFoot;
  const hFov = getCameraHFov(cam);
  const range = Math.max(1, cam.range);
  const poly = visibilityPolygon(pos, range, hFov, cam.rotation, obstacles);
  const ground = getGroundCoverage(mountFt, cam.pitch ?? DEFAULT_CAMERA_PITCH, cameraVFov(cam));
  const start = Number.isFinite(ground.near) ? Math.min(ground.near * upf, range) : range;
  const end = Math.min(range, Number.isFinite(ground.far) ? ground.far * upf : range);
  if (poly.length < 2 || end <= start) return null;
  const zones = getDoriDistances(cam).map(z => ({ ...z, distance: z.distance * upf }));
  const stops = new Set<number>([start, end]);
  zones.forEach(z => { if (z.distance > start && z.distance < end) stops.add(z.distance); });
  const step = Math.max(2 * upf, (end - start) / 14);
  for (let d = start + step; d < end; d += step) stops.add(d);
  const radii = Array.from(stops).sort((a, b) => a - b);
  const base = new THREE.Color(doc.cones.color ?? cam.color);
  const colorAt = (d: number) => {
    if (!doc.cones.dori) return base;
    const zone = zones.find(z => d <= z.distance);
    return zone ? new THREE.Color(zone.color) : base;
  };
  const positions: number[] = [];
  const colors: number[] = [];
  const lift = 0.3 * upf;
  const v = (dir: P, len: number, r: number) => {
    const t = Math.min(r, len);
    const x = pos.x + dir.x * t;
    const z = pos.y + dir.y * t;
    positions.push(x, heightAt(doc.heights, doc.gridSize, x, z) + lift, z);
  };
  const rays = poly.map(p => {
    const len = Math.hypot(p.x, p.y);
    return { dir: { x: p.x / (len || 1), y: p.y / (len || 1) }, len };
  });
  for (let i = 0; i < rays.length - 1; i++) {
    const a = rays[i];
    const b = rays[i + 1];
    for (let j = 0; j < radii.length - 1; j++) {
      const r0 = radii[j];
      const r1 = radii[j + 1];
      if (r0 >= a.len && r0 >= b.len) break;
      const c = colorAt((r0 + r1) / 2);
      v(a.dir, a.len, r0); v(b.dir, b.len, r0); v(a.dir, a.len, r1);
      v(b.dir, b.len, r0); v(b.dir, b.len, r1); v(a.dir, a.len, r1);
      for (let k = 0; k < 6; k++) colors.push(c.r, c.g, c.b);
    }
  }
  if (!positions.length) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const fan = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: Math.max(0.18, Math.min(0.6, doc.cones.opacity * 2.2)),
    depthWrite: false,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -8
  }));
  fan.renderOrder = 2;
  fan.raycast = () => {};

  // Outline of the visible area
  const outline: number[] = [];
  const edgePt = (dir: P, len: number) => {
    const x = pos.x + dir.x * Math.min(len, end);
    const z = pos.y + dir.y * Math.min(len, end);
    return [x, heightAt(doc.heights, doc.gridSize, x, z) + lift * 1.2, z];
  };
  const startPt = (dir: P) => {
    const x = pos.x + dir.x * start;
    const z = pos.y + dir.y * start;
    return [x, heightAt(doc.heights, doc.gridSize, x, z) + lift * 1.2, z];
  };
  outline.push(...startPt(rays[0].dir), ...edgePt(rays[0].dir, rays[0].len));
  for (let i = 0; i < rays.length - 1; i++) outline.push(...edgePt(rays[i].dir, rays[i].len), ...edgePt(rays[i + 1].dir, rays[i + 1].len));
  const last = rays[rays.length - 1];
  outline.push(...edgePt(last.dir, last.len), ...startPt(last.dir));
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(outline, 3));
  const line = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: base, transparent: true, opacity: 0.85, depthWrite: false }));
  line.renderOrder = 3;
  line.raycast = () => {};
  const group = new THREE.Group();
  group.add(fan, line);
  return group;
};

/** The camera's view pyramid (lens to range), for the selected camera in 3D. */
export const buildFrustumLines = (cam: CameraItem, lensWorld: THREE.Vector3, color: string) => {
  const hFov = getCameraHFov(cam);
  const aspect = getCameraAspectValue(cam);
  const range = Math.max(1, cam.range);
  const vFov = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(hFov) / 2) / aspect);
  const fh = 2 * Math.tan(vFov / 2) * range;
  const fw = fh * aspect;
  const yaw = THREE.MathUtils.degToRad(cam.rotation);
  const pitch = THREE.MathUtils.degToRad(cam.pitch ?? DEFAULT_CAMERA_PITCH);
  const forward = new THREE.Vector3(Math.cos(yaw) * Math.cos(pitch), Math.sin(pitch), Math.sin(yaw) * Math.cos(pitch)).normalize();
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
  const up = new THREE.Vector3().crossVectors(right, forward).normalize();
  const corner = (sx: number, sy: number) =>
    lensWorld.clone().addScaledVector(forward, range).addScaledVector(right, (sx * fw) / 2).addScaledVector(up, (sy * fh) / 2);
  const c = [corner(-1, 1), corner(1, 1), corner(1, -1), corner(-1, -1)];
  const verts: number[] = [];
  c.forEach((p, i) => {
    verts.push(lensWorld.x, lensWorld.y, lensWorld.z, p.x, p.y, p.z);
    const q = c[(i + 1) % 4];
    verts.push(p.x, p.y, p.z, q.x, q.y, q.z);
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  const lines = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7, depthWrite: false }));
  lines.raycast = () => {};
  return lines;
};
