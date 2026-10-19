import { Check, AlertTriangle, X, Target, Trash2, Wand2 } from "lucide-react";
import type { CameraItem, TargetItem } from "../types";
import type { TargetCoverage } from "../lib/coverage";
import { TARGET_KINDS } from "../lib/items";
import { DORI_LEVELS } from "../lib/camera";

export const LEVEL_LABEL: Record<string, string> = { identify: "faces", recognize: "recognize", observe: "observe", detect: "detect" };
export const GOAL_LABEL: Record<string, string> = {
  identify: "See faces",
  recognize: "Recognize people",
  observe: "See what's happening",
  detect: "Notice someone"
};
export const REASON_TEXT: Record<string, string> = {
  "outside-view": "outside every camera's view",
  "too-far": "too far for any camera",
  "under-camera": "under a camera's view (too close/steep)",
  "above-view": "above the view",
  blocked: "blocked by a building or tree"
};

export type CoverageStatus = "met" | "partial" | "none";
export const targetStatus = (r: TargetCoverage | undefined): CoverageStatus => (!r || !r.best ? "none" : r.met ? "met" : "partial");
export const STATUS_COLOR: Record<CoverageStatus, string> = { met: "#10b981", partial: "#f59e0b", none: "#ef4444" };

type Props = {
  targets: TargetItem[];
  results: Map<string, TargetCoverage>;
  cameras: CameraItem[];
  onAdd: () => void;
  onSelect: (id: string) => void;
  onUpdate: (id: string, patch: Partial<TargetItem>) => void;
  onDelete: (id: string) => void;
  showBlindSpots: boolean;
  onToggleBlindSpots: (on: boolean) => void;
  /** Share of the site some camera sees (when blind spots are on). */
  coveredFraction?: number | null;
  onSuggest: () => void;
  /** Aim the best camera at a spot and zoom it in (or suggest a camera when none sees it). */
  onFix: (id: string) => void;
  night: boolean;
  onToggleNight: (on: boolean) => void;
};

/** "What to protect": the checklist that turns camera cones into a yes/no answer. */
export function CoveragePanel(props: Props) {
  const { targets, results } = props;
  const met = targets.filter(t => results.get(t.id)?.met).length;
  const camName = (id: string) => {
    const i = props.cameras.findIndex(c => c.id === id);
    return i >= 0 ? props.cameras[i].label || `Camera ${i + 1}` : "a camera";
  };
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2.5" data-testid="coverage-panel">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase font-bold text-slate-400">What to protect</div>
        {targets.length > 0 && (
          <div className="text-xs font-semibold text-slate-200" data-testid="coverage-score">
            {met} of {targets.length} covered
          </div>
        )}
      </div>
      {targets.length > 0 && (
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden" aria-hidden>
          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(met / targets.length) * 100}%` }} />
        </div>
      )}
      {targets.length === 0 ? (
        <p className="text-sm text-slate-400">Mark your doors, gates and driveway, and see right away which ones your cameras cover.</p>
      ) : (
        <ul className="space-y-1.5" aria-label="Protected spots">
          {targets.map(t => {
            const r = results.get(t.id);
            const status = targetStatus(r);
            const Icon = status === "met" ? Check : status === "partial" ? AlertTriangle : X;
            const detail = !r?.best
              ? `Not covered: ${REASON_TEXT[r?.reason ?? "outside-view"]}`
              : `${camName(r.best.cameraId)} · ${LEVEL_LABEL[r.best.level]}${status === "partial" ? ` (want ${LEVEL_LABEL[t.goal]})` : ""}`;
            return (
              <li key={t.id} className="rounded-lg bg-black/20 px-2 py-1.5" data-status={status}>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: STATUS_COLOR[status] }} aria-label={status === "met" ? "Covered" : status === "partial" ? "Not enough detail" : "Not covered"}>
                    <Icon className="w-3 h-3 text-white" />
                  </span>
                  <button className="flex-1 min-w-0 text-left" onClick={() => props.onSelect(t.id)}>
                    <span className="block text-sm text-slate-100 truncate">{t.label}</span>
                    <span className="block text-[11px] text-slate-400 truncate">{detail}</span>
                  </button>
                  {status !== "met" && (
                    <button
                      onClick={() => props.onFix(t.id)}
                      className="flex items-center gap-1 rounded-md bg-emerald-600/90 hover:bg-emerald-500 px-1.5 py-0.5 text-[11px] font-semibold text-white"
                      title={r?.best ? `Aim ${camName(r.best.cameraId)} at it and zoom in until it sees ${LEVEL_LABEL[t.goal]}` : "Suggest a camera for it"}
                      aria-label={`Fix ${t.label}`}
                    >
                      <Wand2 className="w-3 h-3" /> Fix
                    </button>
                  )}
                  <button onClick={() => props.onDelete(t.id)} className="p-1 text-slate-500 hover:text-red-300" title="Remove" aria-label={`Remove ${t.label}`}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="mt-1 grid grid-cols-2 gap-1.5 pl-7">
                  <select
                    aria-label="Kind"
                    value={t.kind}
                    onChange={e => {
                      const kind = e.target.value as TargetItem["kind"];
                      props.onUpdate(t.id, { kind, goal: TARGET_KINDS[kind].goal });
                    }}
                    className="w-full min-w-0 bg-zinc-900 border border-white/10 rounded px-1 py-0.5 text-[11px] text-slate-200"
                  >
                    {Object.entries(TARGET_KINDS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                  </select>
                  <select
                    aria-label="Goal"
                    value={t.goal}
                    onChange={e => props.onUpdate(t.id, { goal: e.target.value as TargetItem["goal"] })}
                    className="w-full min-w-0 bg-zinc-900 border border-white/10 rounded px-1 py-0.5 text-[11px] text-slate-200"
                  >
                    {DORI_LEVELS.map(l => <option key={l.id} value={l.id}>{GOAL_LABEL[l.id]}</option>)}
                  </select>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {targets.length > 0 && met < targets.length && (
        <button onClick={props.onSuggest} className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold text-white">
          <Wand2 className="w-4 h-4" /> Suggest cameras for the rest
        </button>
      )}
      <button onClick={props.onAdd} className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-dashed border-white/20 text-sm text-slate-200 hover:bg-white/5">
        <Target className="w-4 h-4 text-rose-300" /> Mark a door, gate or driveway
      </button>
      <label className="flex items-center justify-between gap-2 text-xs text-slate-300 cursor-pointer">
        <span>
          Show blind spots
          {props.showBlindSpots && props.coveredFraction != null && (
            <span className="text-slate-500"> · {Math.round((1 - props.coveredFraction) * 100)}% of the area around your cameras unseen</span>
          )}
        </span>
        <input type="checkbox" checked={props.showBlindSpots} onChange={e => props.onToggleBlindSpots(e.target.checked)} className="accent-rose-500" aria-label="Show blind spots" />
      </label>
      <label className="flex items-center justify-between gap-2 text-xs text-slate-300 cursor-pointer" title="Limit every camera to its night vision (infrared) range">
        <span>Check at night (infrared range)</span>
        <input type="checkbox" checked={props.night} onChange={e => props.onToggleNight(e.target.checked)} className="accent-indigo-500" aria-label="Check at night" />
      </label>
    </div>
  );
}
