import type { CameraItem } from "../types";
import {
  DORI_LEVELS,
  LENS_PRESETS,
  MOUNT_PRESETS,
  RESOLUTION_PRESETS,
  getCameraHFov,
  getCameraResolution,
  getDoriDistances,
  getGroundCoverage,
  suggestPitchForDistance,
  vFovFromH,
  getCameraAspectValue
} from "../lib/camera";
import { DEFAULT_CAMERA_PITCH, DEFAULT_IR_RANGE_FT } from "../constants";
import { useEffect, useState } from "react";
import { catalogByBrand, findModel, getCatalog, onCatalogChange, zoomedHFov, type CameraModel } from "../lib/cameraCatalog";

type Props = {
  camera: CameraItem;
  mountHeight: number;
  onChange: (updates: Partial<CameraItem>) => void;
  onMountHeightChange: (height: number) => void;
  /** Aim mode: the next click on the plan is where the camera looks. */
  aiming?: boolean;
  onAimAtPoint?: () => void;
  /** Protected spots this camera can be pointed at. */
  targets?: { id: string; label: string }[];
  onAimAtTarget?: (id: string) => void;
};

/**
 * Outcome presets: what the camera is for, mapped to a lens, a resolution, a tilt distance and a
 * range. Worked out from the DORI pixel densities (IEC 62676-4) for a 4 MP sensor.
 */
export const OUTCOME_PRESETS = [
  { id: "faces", label: "Faces at a door", lens: "4mm", width: 2688, aimFt: 12, range: 40, hint: "Identify visitors up to ~18 ft" },
  { id: "driveway", label: "Driveway", lens: "6mm", width: 2688, aimFt: 40, range: 90, hint: "Recognize people up to ~70 ft" },
  { id: "plates", label: "License plates", lens: "12mm", width: 3840, aimFt: 35, range: 90, hint: "Faces and plates up to ~100 ft" },
  { id: "yard", label: "Whole yard", lens: "2.8mm", width: 2688, aimFt: 30, range: 100, hint: "Wide view: notice anyone in the yard" }
] as const;

const chip = (active: boolean) =>
  `px-2 py-1.5 rounded-lg text-[11px] font-semibold border transition-colors text-center ${active
    ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100"
    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
  }`;

const fmtFt = (ft: number) => (Number.isFinite(ft) ? `${Math.round(ft)} ft` : "∞");

/** Plain-language camera setup: presets, what the camera can see at each distance, and a side view. */
export function CameraSetupPanel({ camera, mountHeight, onChange, onMountHeightChange, aiming, onAimAtPoint, targets, onAimAtTarget }: Props) {
  const hFov = getCameraHFov(camera);
  const aspect = getCameraAspectValue(camera);
  const vFov = camera.vFov ?? vFovFromH(hFov, aspect);
  const pitch = camera.pitch ?? DEFAULT_CAMERA_PITCH;
  const resolution = getCameraResolution(camera);
  const dori = getDoriDistances(camera);
  const ground = getGroundCoverage(mountHeight, pitch, vFov);
  const detectFt = dori[dori.length - 1].distance;

  const setLens = (lens: (typeof LENS_PRESETS)[number]) =>
    onChange({ lensPreset: lens.id, hFov: lens.hFov, fov: lens.hFov, vFov: vFovFromH(lens.hFov, aspect), model: undefined, zoom: undefined });

  // The camera list (refreshed from the site after start-up)
  const [, setCatalogVersion] = useState(0);
  useEffect(() => onCatalogChange(() => setCatalogVersion(v => v + 1)), []);
  const model = findModel(camera.model);
  const pickModel = (m: CameraModel | undefined) => {
    if (!m) return onChange({ model: undefined, zoom: undefined });
    const h = zoomedHFov(m, 0);
    onChange({ model: m.id, zoom: 0, hFov: h, fov: h, vFov: vFovFromH(h, m.aspect), aspect: m.aspect, resolutionWidth: m.resolutionWidth, irRangeFt: m.irRangeFt, lensPreset: undefined });
  };
  const setZoom = (z: number) => {
    if (!model) return;
    const h = zoomedHFov(model, z);
    onChange({ zoom: z, hFov: h, fov: h, vFov: vFovFromH(h, model.aspect) });
  };

  const setMount = (mount: (typeof MOUNT_PRESETS)[number]) => {
    onMountHeightChange(mount.height);
    onChange({ mountPreset: mount.id, pitch: mount.pitch });
  };

  const aimAt = (distanceFt: number) => onChange({ pitch: suggestPitchForDistance(mountHeight, distanceFt) });

  const applyOutcome = (o: (typeof OUTCOME_PRESETS)[number]) => {
    const lens = LENS_PRESETS.find(l => l.id === o.lens)!;
    onChange({
      lensPreset: lens.id,
      hFov: lens.hFov,
      fov: lens.hFov,
      vFov: vFovFromH(lens.hFov, aspect),
      resolutionWidth: o.width,
      pitch: suggestPitchForDistance(mountHeight, o.aimFt),
      range: o.range,
      model: undefined,
      zoom: undefined
    });
  };
  const activeOutcome = OUTCOME_PRESETS.find(o => camera.lensPreset === o.lens && resolution === o.width);

  // --- Side view diagram geometry (camera on the left, looking right) ---
  const viewW = 280;
  const viewH = 120;
  const groundY = viewH - 18;
  const maxDist = Math.max(40, Math.min(camera.range, Number.isFinite(ground.far) ? ground.far * 1.1 : camera.range));
  const sx = (ft: number) => 18 + (Math.min(ft, maxDist) / maxDist) * (viewW - 30);
  const maxH = Math.max(mountHeight * 1.6, 12);
  const sy = (ft: number) => groundY - (ft / maxH) * (groundY - 10);
  const camX = sx(0);
  const camY = sy(mountHeight);
  const rayEnd = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const len = maxDist * 1.5;
    const gx = len * Math.cos(rad);
    const gy = mountHeight + len * Math.sin(rad);
    if (gy < 0) {
      const t = mountHeight / (mountHeight - gy);
      return { x: sx(gx * t), y: groundY };
    }
    return { x: sx(gx), y: sy(gy) };
  };
  const top = rayEnd(pitch + vFov / 2);
  const bottom = rayEnd(pitch - vFov / 2);

  return (
    <div className="space-y-4">
      <div className="space-y-1.5" data-testid="camera-model">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase font-bold text-slate-400">Camera model</div>
          <div className="text-[10px] text-slate-500" title="The list updates itself from the makers' spec sheets">list of {getCatalog().updated}</div>
        </div>
        <select
          value={model?.id ?? ""}
          onChange={e => pickModel(findModel(e.target.value))}
          className="w-full bg-zinc-900 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-slate-100"
          aria-label="Camera model"
        >
          <option value="">Any camera (set the lens below)</option>
          {catalogByBrand().map(([brand, models]) => (
            <optgroup key={brand} label={brand}>
              {models.map(m => <option key={m.id} value={m.id}>{brand === "UniFi" ? `UniFi ${m.name}` : m.name}</option>)}
            </optgroup>
          ))}
        </select>
        {model && (
          <div className="text-[11px] text-slate-400">
            {Math.round(model.hFov)}°{model.hFovTele ? `–${Math.round(model.hFovTele)}°` : ""} wide ·{" "}
            {RESOLUTION_PRESETS.find(r => r.width === model.resolutionWidth)?.label ?? `${model.resolutionWidth} px`} · night vision {model.irRangeFt} ft
            {model.approx ? " · approximate" : ""}
          </div>
        )}
        {model?.hFovTele && (
          <label className="block text-[11px] text-slate-300">
            <span className="flex justify-between"><span>Zoom</span><span className="font-semibold text-slate-100">{Math.round(hFov)}° wide</span></span>
            <input type="range" min={0} max={1} step={0.02} value={camera.zoom ?? 0} onChange={e => setZoom(Number(e.target.value))} className="w-full accent-emerald-500" aria-label="Zoom" />
          </label>
        )}
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] uppercase font-bold text-slate-400">What should it see?</div>
        <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="What should it see">
          {OUTCOME_PRESETS.map(o => (
            <button key={o.id} title={o.hint} onClick={() => applyOutcome(o)} className={chip(activeOutcome?.id === o.id)}>
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {onAimAtPoint && (
        <div className="space-y-1.5">
          <button
            onClick={onAimAtPoint}
            aria-pressed={!!aiming}
            className={`w-full py-2 rounded-lg text-xs font-semibold border ${aiming ? "border-sky-400/60 bg-sky-500/20 text-sky-100" : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"}`}
          >
            {aiming ? "Click on the map where it should look… (Esc to cancel)" : "Aim at a spot on the map"}
          </button>
          {targets && targets.length > 0 && onAimAtTarget && (
            <div className="flex flex-wrap gap-1.5" aria-label="Aim at a protected spot">
              {targets.map(t => (
                <button key={t.id} onClick={() => onAimAtTarget(t.id)} className={chip(false)} title={`Turn and tilt toward ${t.label}`}>
                  → {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="space-y-1.5">
        <div className="text-[10px] uppercase font-bold text-slate-400">Mount</div>
        <div className="grid grid-cols-4 gap-1.5">
          {MOUNT_PRESETS.map(m => (
            <button key={m.id} title={`${m.hint} · ${m.height} ft`} onClick={() => setMount(m)} className={chip(camera.mountPreset === m.id)}>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] uppercase font-bold text-slate-400">Lens</div>
        <div className="grid grid-cols-4 gap-1.5">
          {LENS_PRESETS.map(l => (
            <button key={l.id} title={`${l.hint} · ${l.hFov}° wide`} onClick={() => setLens(l)} className={chip(camera.lensPreset === l.id || (!camera.lensPreset && Math.abs(hFov - l.hFov) < 2))}>
              <span className="whitespace-nowrap">{l.label.replace(" ", "")}</span>
              <span className="block text-[9px] font-medium opacity-70">{l.hFov}°</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] uppercase font-bold text-slate-400">Resolution</div>
        <div className="grid grid-cols-4 gap-1.5">
          {RESOLUTION_PRESETS.map(r => (
            <button key={r.id} onClick={() => onChange({ resolutionWidth: r.width, model: undefined })} className={chip(resolution === r.width)}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase font-bold text-slate-400">What it can see</div>
          <button
            onClick={() => onChange({ range: Math.round(detectFt) })}
            className="text-[10px] font-semibold text-emerald-300 hover:text-emerald-200"
            title="Set the coverage range to the Detect distance"
          >
            Range = detect
          </button>
        </div>
        {dori.map(level => (
          <div key={level.id} className="flex items-center gap-2 text-xs" title={level.hint}>
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: level.color }} />
            <span className="text-slate-200 font-semibold flex-1">{level.label}</span>
            <span className="text-slate-100 font-semibold tabular-nums">up to {fmtFt(level.distance)}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase font-bold text-slate-400">Side view</div>
          <div className="text-[10px] text-slate-400">{mountHeight} ft high · tilt {Math.abs(Math.round(pitch))}° {pitch <= 0 ? "down" : "up"}</div>
        </div>
        <svg viewBox={`0 0 ${viewW} ${viewH}`} className="w-full" role="img" aria-label="Side view of the camera's coverage">
          <rect x={0} y={groundY} width={viewW} height={viewH - groundY} fill="#3f4a35" />
          {/* DORI ticks on the ground */}
          {DORI_LEVELS.map((level, i) => {
            const d = dori[i].distance;
            if (d > maxDist) return null;
            return <line key={level.id} x1={sx(d)} x2={sx(d)} y1={groundY} y2={groundY + 6} stroke={level.color} strokeWidth={2} />;
          })}
          {/* blind spot */}
          {Number.isFinite(ground.near) && ground.near > 0 && (
            <rect x={camX} y={groundY - 3} width={Math.max(0, sx(ground.near) - camX)} height={3} fill="#ef4444" opacity={0.8} />
          )}
          <polygon points={`${camX},${camY} ${top.x},${top.y} ${bottom.x},${bottom.y}`} fill="#3b82f6" opacity={0.25} />
          <line x1={camX} y1={camY} x2={top.x} y2={top.y} stroke="#93c5fd" strokeWidth={1} />
          <line x1={camX} y1={camY} x2={bottom.x} y2={bottom.y} stroke="#93c5fd" strokeWidth={1} />
          <line x1={camX} y1={groundY} x2={camX} y2={camY} stroke="#94a3b8" strokeWidth={2} />
          <circle cx={camX} cy={camY} r={4} fill="#e2e8f0" />
          {/* person for scale at the identify distance */}
          {dori[0].distance < maxDist && (
            <g transform={`translate(${sx(dori[0].distance)}, ${groundY})`} opacity={0.8}>
              <line x1={0} y1={0} x2={0} y2={sy(5.2) - groundY} stroke="#fde68a" strokeWidth={2} />
              <circle cx={0} cy={sy(5.8) - groundY} r={3} fill="#fde68a" />
            </g>
          )}
        </svg>
        <div className="flex justify-between text-[11px] text-slate-400">
          <span>Blind spot: <span className="text-slate-200 font-semibold">{fmtFt(ground.near)}</span></span>
          <span>Sees ground to: <span className="text-slate-200 font-semibold">{Number.isFinite(ground.far) ? fmtFt(ground.far) : "horizon"}</span></span>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] uppercase font-bold text-slate-400">Night vision (infrared) reach</div>
        <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Night vision reach">
          {[50, 100, 165, 260].map(ft => (
            <button key={ft} onClick={() => onChange({ irRangeFt: ft })} className={chip((camera.irRangeFt ?? DEFAULT_IR_RANGE_FT) === ft)} title={`${Math.round(ft / 3.28)} m on the spec sheet`}>
              {ft} ft
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] uppercase font-bold text-slate-400">Aim at</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Door", ft: 12 },
            { label: "Yard", ft: 30 },
            { label: "Driveway", ft: 50 }
          ].map(t => (
            <button key={t.label} onClick={() => aimAt(t.ft)} className={chip(false)} title={`Tilt so the center of the view is ~${t.ft} ft away`}>
              {t.label}
              <span className="block text-[9px] font-medium opacity-70">{t.ft} ft</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
