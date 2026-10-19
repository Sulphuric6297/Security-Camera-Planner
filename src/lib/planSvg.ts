// The printed site plan (report and PNG export): a clean top-down drawing as an SVG string.
import { DEFAULT_CAMERA_HEIGHT_FT, DEFAULT_CAMERA_PITCH } from "../constants";
import type { BuildingItem, CameraItem, CanvasItem, ImageItem, LabelItem, ParkingItem, TargetItem, TreeItem } from "../types";
import { getCameraAspectValue, getCameraHFov, getDoriDistances, getGroundCoverage, vFovFromH } from "./camera";
import { buildingLocalPoints, cameraPlanPosition, visibilityPolygon } from "./planGeom";

export type PlanSvgInput = {
  items: CanvasItem[];
  canvas: { width: number; height: number };
  background: { url: string | null; x: number; y: number; width: number; height: number; opacity: number } | null;
  shadeUrl?: string | null;
  contours?: { minor: string; major: string } | null;
  gridSize: number;
  showGrid: boolean;
  targetStatus: Record<string, "met" | "partial" | "none">;
  dori: boolean;
  showCones: boolean;
  unitsPerFoot: number;
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const f = (n: number) => (Math.round(n * 100) / 100).toString();

export const planSvg = (input: PlanSvgInput) => {
  const { items, canvas } = input;
  const ui = Math.max(canvas.width, canvas.height) / 1000; // size of icons and text, in plan units
  const out: string[] = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">`);
  out.push(`<rect width="${canvas.width}" height="${canvas.height}" fill="#f8fafc"/>`);
  if (input.showGrid && !input.background?.url) {
    out.push(`<defs><pattern id="g" width="${input.gridSize}" height="${input.gridSize}" patternUnits="userSpaceOnUse"><path d="M ${input.gridSize} 0 L 0 0 0 ${input.gridSize}" fill="none" stroke="#cbd5e1" stroke-width="${f(ui)}"/></pattern></defs>`);
    out.push(`<rect width="${canvas.width}" height="${canvas.height}" fill="url(#g)"/>`);
  }
  const bg = input.background;
  if (bg?.url) out.push(`<image href="${bg.url}" x="${f(bg.x)}" y="${f(bg.y)}" width="${f(bg.width)}" height="${f(bg.height)}" preserveAspectRatio="none" opacity="${bg.opacity}"/>`);
  if (input.shadeUrl) out.push(`<image href="${input.shadeUrl}" x="0" y="0" width="${canvas.width}" height="${canvas.height}" preserveAspectRatio="none" opacity="0.5"/>`);
  if (input.contours) {
    const c = bg?.url ? "rgba(255,247,230," : "rgba(68,52,30,";
    out.push(`<path d="${input.contours.minor}" fill="none" stroke="${c}0.55)" stroke-width="${f(0.8 * ui)}"/>`);
    out.push(`<path d="${input.contours.major}" fill="none" stroke="${c}0.95)" stroke-width="${f(1.8 * ui)}"/>`);
  }

  const obstacles = items.filter(i => i.type === "building" || i.type === "tree") as (BuildingItem | TreeItem)[];
  const buildings = items.filter(i => i.type === "building") as BuildingItem[];

  // Coverage first, so everything else sits on top of it.
  if (input.showCones) {
    items.forEach(item => {
      if (item.type !== "camera") return;
      const c = item as CameraItem;
      const p = cameraPlanPosition(c, items);
      const hFov = getCameraHFov(c);
      const toPath = (pts: { x: number; y: number }[]) => `M ${f(p.x)} ${f(p.y)} ${pts.map(q => `L ${f(p.x + q.x)} ${f(p.y + q.y)}`).join(" ")} Z`;
      const full = toPath(visibilityPolygon(p, c.range, hFov, c.rotation, buildings));
      const clear = toPath(visibilityPolygon(p, c.range, hFov, c.rotation, obstacles));
      out.push(`<path d="${full}" fill="#fde047" fill-opacity="0.16" stroke="#eab308" stroke-opacity="0.5" stroke-dasharray="${f(4 * ui)} ${f(4 * ui)}" stroke-width="${f(ui)}"/>`);
      out.push(`<path d="${clear}" fill="${c.color}" fill-opacity="0.16" stroke="${c.color}" stroke-opacity="0.7" stroke-width="${f(ui)}"/>`);
      if (input.dori) {
        out.push(`<clipPath id="clip-${c.id}"><path d="${clear}"/></clipPath><g clip-path="url(#clip-${c.id})">`);
        const a0 = ((c.rotation - hFov / 2) * Math.PI) / 180;
        const a1 = ((c.rotation + hFov / 2) * Math.PI) / 180;
        const large = hFov > 180 ? 1 : 0;
        const pt = (r: number, a: number) => `${f(p.x + r * Math.cos(a))} ${f(p.y + r * Math.sin(a))}`;
        const ring = (rIn: number, rOut: number) =>
          rIn <= 0.01
            ? `M ${f(p.x)} ${f(p.y)} L ${pt(rOut, a0)} A ${f(rOut)} ${f(rOut)} 0 ${large} 1 ${pt(rOut, a1)} Z`
            : `M ${pt(rIn, a0)} L ${pt(rOut, a0)} A ${f(rOut)} ${f(rOut)} 0 ${large} 1 ${pt(rOut, a1)} L ${pt(rIn, a1)} A ${f(rIn)} ${f(rIn)} 0 ${large} 0 ${pt(rIn, a0)} Z`;
        let inner = 0;
        getDoriDistances(c).forEach(z => {
          const outer = Math.min(z.distance * input.unitsPerFoot, c.range);
          if (outer <= inner) return;
          out.push(`<path d="${ring(inner, outer)}" fill="${z.color}" fill-opacity="0.16" stroke="${z.color}" stroke-opacity="0.5" stroke-width="${f(0.75 * ui)}"/>`);
          inner = outer;
        });
        const mount = c.mount?.height ?? c.height ?? DEFAULT_CAMERA_HEIGHT_FT;
        const blind = getGroundCoverage(mount, c.pitch ?? DEFAULT_CAMERA_PITCH, c.vFov ?? vFovFromH(hFov, getCameraAspectValue(c))).near * input.unitsPerFoot;
        if (Number.isFinite(blind) && blind > 0.5) out.push(`<path d="${ring(0, Math.min(blind, c.range))}" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-opacity="0.6" stroke-width="${f(0.75 * ui)}" stroke-dasharray="${f(3 * ui)} ${f(3 * ui)}"/>`);
        out.push(`</g>`);
      }
    });
  }

  items.forEach(item => {
    if (item.type === "building") {
      const b = item as BuildingItem;
      const pts = buildingLocalPoints(b).map(p => `${f(p.x)},${f(p.y)}`).join(" ");
      out.push(`<g transform="translate(${f(b.x)} ${f(b.y)}) rotate(${f(b.rotation)})"><polygon points="${pts}" fill="${b.color}" fill-opacity="${bg?.url ? 0.55 : 1}" stroke="#334155" stroke-width="${f(1.2 * ui)}"/>`);
      const label = b.label?.trim();
      if (label) {
        const o = b.labelOffset ?? { x: 0, y: 0 };
        const size = Math.max(8 * ui, Math.min(b.labelFontSize ?? 12, 24) * ui);
        out.push(`<text x="${f(o.x)}" y="${f(o.y)}" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="${f(size)}" fill="#fff" stroke="rgba(0,0,0,0.6)" stroke-width="${f(2 * ui)}" paint-order="stroke">${esc(label)}</text>`);
      }
      out.push(`</g>`);
    } else if (item.type === "tree") {
      const t = item as TreeItem;
      const r = t.radius * (t.width ?? 1);
      out.push(`<circle cx="${f(t.x)}" cy="${f(t.y)}" r="${f(r)}" fill="${t.color}" fill-opacity="0.75" stroke="rgba(0,0,0,0.3)" stroke-width="${f(ui)}"/>`);
      out.push(`<circle cx="${f(t.x)}" cy="${f(t.y)}" r="${f(r * 0.45)}" fill="#000" fill-opacity="0.12"/>`);
    } else if (item.type === "parking") {
      const v = item as ParkingItem;
      out.push(`<g transform="translate(${f(v.x)} ${f(v.y)}) rotate(${f(v.rotation)})"><rect x="${f(-v.width / 2)}" y="${f(-v.height / 2)}" width="${f(v.width)}" height="${f(v.height)}" rx="${f(Math.min(v.width, v.height) * 0.3)}" fill="${v.color}" stroke="#475569" stroke-width="${f(ui)}"/>`);
      out.push(`<rect x="${f(-v.width * 0.36)}" y="${f(-v.height * 0.3)}" width="${f(v.width * 0.72)}" height="${f(v.height * 0.17)}" rx="${f(v.width * 0.1)}" fill="rgba(15,23,42,0.6)"/></g>`);
    } else if (item.type === "image") {
      const im = item as ImageItem;
      out.push(`<image href="${im.src}" transform="translate(${f(im.x)} ${f(im.y)}) rotate(${f(im.rotation)})" x="${f(-im.width / 2)}" y="${f(-im.height / 2)}" width="${f(im.width)}" height="${f(im.height)}"/>`);
    } else if (item.type === "label") {
      const l = item as LabelItem;
      out.push(`<text x="${f(l.x)}" y="${f(l.y)}" font-size="${f(l.fontSize)}" fill="${l.color}" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${esc(l.text)}</text>`);
    }
  });

  // Cameras and protected spots on top, at a readable size.
  items.forEach(item => {
    if (item.type === "camera") {
      const c = item as CameraItem;
      const p = cameraPlanPosition(c, items);
      out.push(`<g transform="translate(${f(p.x)} ${f(p.y)})"><g transform="rotate(${f(c.rotation)}) scale(${f(ui)})"><rect x="-10" y="-8" width="20" height="16" rx="4" fill="#1e293b"/><circle r="4" fill="${c.color}"/><rect x="10" y="-4" width="6" height="8" fill="#475569"/></g>`);
      const w = Math.max(36, c.label.length * 6.2 + 16);
      const lo = c.labelOffset ?? { x: -Math.cos((c.rotation * Math.PI) / 180) * 38 * ui, y: -Math.sin((c.rotation * Math.PI) / 180) * 38 * ui };
      out.push(`<g transform="translate(${f(lo.x)} ${f(lo.y)}) scale(${f(ui)})"><rect x="${f(-w / 2)}" y="-10" width="${f(w)}" height="20" rx="6" fill="rgba(255,255,255,0.94)" stroke="${c.color}"/><text text-anchor="middle" dy="4" font-size="10" font-family="system-ui, sans-serif" font-weight="700" fill="#334155">${esc(c.label)}</text></g></g>`);
    } else if (item.type === "target") {
      const t = item as TargetItem;
      const status = input.targetStatus[t.id] ?? "none";
      const color = status === "met" ? "#16a34a" : status === "partial" ? "#f59e0b" : "#ef4444";
      const r = 9 * ui;
      out.push(`<g transform="translate(${f(t.x)} ${f(t.y)})"><circle r="${f(r * 1.6)}" fill="${color}" fill-opacity="0.18"/><circle r="${f(r)}" fill="${color}" stroke="#fff" stroke-width="${f(2 * ui)}"/>`);
      out.push(`<text y="${f(r * 0.38)}" text-anchor="middle" font-size="${f(r * 1.15)}" font-weight="700" fill="#fff" font-family="system-ui, sans-serif">${status === "met" ? "✓" : status === "partial" ? "!" : "✕"}</text>`);
      out.push(`<text y="${f(r * 2.9)}" text-anchor="middle" font-size="${f(11 * ui)}" font-weight="700" fill="#fff" stroke="rgba(0,0,0,0.75)" stroke-width="${f(3 * ui)}" paint-order="stroke" font-family="system-ui, sans-serif">${esc(t.label)}</text></g>`);
    }
  });
  out.push(`</svg>`);
  return out.join("");
};
