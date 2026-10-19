import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Map as MapIcon, Moon, Pause, Play, Plus, SlidersHorizontal, X } from "lucide-react";

export type LookCamera = { id: string; number: number; label: string; color: string; thumb?: string };

type Props = {
  cameras: LookCamera[];
  currentId: string;
  aspect: number;
  /** Lines about the current camera: lens, height, what it covers. */
  details: { text: string; tone?: "good" | "warn" | "bad" }[];
  onSwitch: (id: string) => void;
  onExit: () => void;
  onAddToReport: () => void;
  /** Night: the picture as the camera's infrared sees it. */
  night: boolean;
  onNight: (on: boolean) => void;
  /** The camera's settings panel beside the picture (hidden by default so the picture is big). */
  settingsOpen?: boolean;
  onSettings?: () => void;
  /** Width covered on the right (the inspector): the picture sits left of it. */
  rightInset?: number;
};

const two = (n: number) => String(n).padStart(2, "0");

/**
 * Looking through a camera: its picture fills the view (rendered by the map view underneath),
 * with a recorder-style stamp, the camera's details, every camera's thumbnail to switch to, and
 * the way back to the map. Drag the picture to aim, scroll to zoom the lens.
 */
export function CameraLook({ cameras, currentId, aspect, details, onSwitch, onExit, onAddToReport, night, onNight, settingsOpen = false, onSettings, rightInset = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1, h: 1 });
  const [now, setNow] = useState(() => new Date());
  // Tour: step through every camera on its own (stops on any manual switch).
  const [touring, setTouring] = useState(false);
  const tourRef = useRef({ cameras, currentId, onSwitch });
  tourRef.current = { cameras, currentId, onSwitch };
  useEffect(() => {
    if (!touring) return;
    const t = window.setInterval(() => {
      const { cameras: cams, currentId: id, onSwitch: go } = tourRef.current;
      if (cams.length < 2) return;
      const i = cams.findIndex(c => c.id === id);
      go(cams[(i + 1) % cams.length].id);
    }, 3500);
    return () => window.clearInterval(t);
  }, [touring]);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  // Same framing as the map view: the picture as large as fits, centered.
  const w = Math.min(size.w, size.h * aspect);
  const h = w / aspect;
  const frame = { left: (size.w - w) / 2, top: (size.h - h) / 2, width: w, height: h };
  const index = cameras.findIndex(c => c.id === currentId);
  const cam = cameras[index];
  const step = (d: number) => {
    setTouring(false);
    if (cameras.length < 2) return;
    onSwitch(cameras[(index + d + cameras.length) % cameras.length].id);
  };
  const stamp = `${now.getFullYear()}-${two(now.getMonth() + 1)}-${two(now.getDate())}  ${two(now.getHours())}:${two(now.getMinutes())}:${two(now.getSeconds())}`;
  const btn = "flex items-center gap-1.5 rounded-lg bg-zinc-900/85 hover:bg-zinc-800 border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-100 shadow pointer-events-auto";

  return (
    <div ref={ref} style={{ right: rightInset }} className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none select-none" data-testid="camera-look" aria-label={`Looking through ${cam?.label ?? "camera"}`}>
      {/* Recorder stamp on the picture */}
      <div className="absolute font-mono font-semibold text-white text-[13px] sm:text-sm" style={{ left: frame.left + 14, top: frame.top + 12, textShadow: "0 1px 3px rgba(0,0,0,.9)" }}>
        CAM {cam ? two(cam.number) : "--"}&nbsp;&nbsp;{cam?.label.toUpperCase()}
      </div>
      <div className="absolute font-mono font-semibold text-white text-[13px] sm:text-sm" style={{ right: size.w - frame.left - frame.width + 14, top: frame.top + 12, textShadow: "0 1px 3px rgba(0,0,0,.9)" }}>
        {night && <span className="mr-3">IR</span>}{stamp}
      </div>

      {/* Top bar: switch cameras, back to the map */}
      <div className="absolute left-1/2 -translate-x-1/2 w-max flex items-center gap-2 whitespace-nowrap" style={{ top: frame.top > 56 ? frame.top - 46 : frame.top + 44 }}>
        <button className={btn} onClick={() => step(-1)} disabled={cameras.length < 2} aria-label="Previous camera" title="Previous camera (←)">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="rounded-lg bg-zinc-900/85 border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-100 shadow flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: cam?.color }} />
          {cam?.label} <span className="text-slate-400 font-normal">{index + 1} of {cameras.length}</span>
        </div>
        <button className={btn} onClick={() => step(1)} disabled={cameras.length < 2} aria-label="Next camera" title="Next camera (→)">
          <ChevronRight className="w-4 h-4" />
        </button>
        {cameras.length > 1 && (
          <button className={`${btn} ${touring ? "!bg-emerald-600 !border-emerald-400/40" : ""}`} onClick={() => setTouring(v => !v)} aria-pressed={touring} title="Show every camera in turn">
            {touring ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />} Tour
          </button>
        )}
        <button className={`${btn} ${night ? "!bg-indigo-600 !border-indigo-400/40" : ""}`} onClick={() => onNight(!night)} aria-pressed={night} title="Night: what the camera's infrared sees (N)">
          <Moon className="w-3.5 h-3.5" /> Night
        </button>
        {onSettings && (
          <button className={`${btn} ${settingsOpen ? "!bg-sky-700 !border-sky-400/40" : ""}`} onClick={onSettings} aria-pressed={settingsOpen} title="Lens, mount and aim settings, next to the picture (S)">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Settings
          </button>
        )}
        <button className={btn} onClick={onAddToReport} title="Add this view to the report">
          <Plus className="w-3.5 h-3.5" /> Report
        </button>
        <button className={`${btn} !bg-emerald-600 hover:!bg-emerald-500 !border-emerald-400/40`} onClick={onExit} title="Back to the map (Esc)">
          <MapIcon className="w-3.5 h-3.5" /> Back to map
        </button>
      </div>
      {/* Close, where a window's close button is expected */}
      <button
        className="absolute flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900/85 hover:bg-red-600 border border-white/20 text-white shadow-lg pointer-events-auto"
        style={{ right: size.w - frame.left - frame.width + 12, top: frame.top + 40 }}
        onClick={onExit}
        aria-label="Close camera view"
        title="Close the camera view (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* What this camera gets */}
      {details.length > 0 && (
        <div className="absolute max-w-[min(26rem,60%)] rounded-xl bg-zinc-900/85 border border-white/15 px-3 py-2 text-xs text-slate-200 shadow space-y-0.5 pointer-events-auto" style={{ left: frame.left + 12, bottom: size.h - frame.top - frame.height + 12 + (cameras.length > 1 ? 92 : 0) }} data-testid="camera-look-details">
          {details.map((d, i) => (
            <div key={i} className={d.tone === "good" ? "text-emerald-300" : d.tone === "warn" ? "text-amber-300" : d.tone === "bad" ? "text-red-300" : ""}>{d.text}</div>
          ))}
        </div>
      )}

      {/* Hint */}
      <div className="absolute rounded-full bg-black/60 px-3 py-1 text-[11px] text-slate-200" style={{ right: size.w - frame.left - frame.width + 12, bottom: size.h - frame.top - frame.height + 12 + (cameras.length > 1 ? 92 : 0) }}>
        Drag to aim · scroll to zoom the lens · ← → other cameras · N night · S settings · Esc map
      </div>

      {/* Every camera, to jump between them */}
      {cameras.length > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-2 pointer-events-auto" style={{ bottom: size.h - frame.top - frame.height + 8 }} role="tablist" aria-label="Cameras">
          {cameras.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === currentId}
              onClick={() => { setTouring(false); onSwitch(c.id); }}
              className={`relative shrink-0 w-32 h-[76px] rounded-lg overflow-hidden border-2 bg-zinc-800 shadow ${c.id === currentId ? "border-emerald-400" : "border-white/20 hover:border-white/50"}`}
              title={c.label}
            >
              {c.thumb && <img src={c.thumb} alt="" className="absolute inset-0 w-full h-full object-cover" />}
              <span className="absolute left-1 bottom-1 rounded bg-black/70 px-1.5 text-[10px] font-semibold text-white">{c.number} · {c.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
