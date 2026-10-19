import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GripHorizontal } from "lucide-react";

type Props = {
  title: React.ReactNode;
  /** Remembers where the user put it (per browser). */
  storageKey: string;
  width: number;
  onWidth: (w: number) => void;
  minWidth?: number;
  maxWidth?: number;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  label?: string;
};

type Pos = { x: number; y: number };

const load = (key: string): Pos | null => {
  try {
    const v = JSON.parse(localStorage.getItem(key) || "null");
    return v && Number.isFinite(v.x) && Number.isFinite(v.y) ? v : null;
  } catch {
    return null;
  }
};

/**
 * A window over the map that can be dragged by its title bar and resized from its corner.
 * It starts centered near the bottom of the map; double-click the title bar to put it back.
 */
export function FloatingWindow({ title, storageKey, width, onWidth, minWidth = 260, maxWidth = 900, actions, children, className = "", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Pos | null>(() => load(storageKey));

  // Keep it inside the map area (also when the window or the panels change size).
  const clampPos = (p: Pos): Pos => {
    const el = ref.current;
    const parent = el?.offsetParent as HTMLElement | null;
    if (!el || !parent) return p;
    const maxX = Math.max(0, parent.clientWidth - el.offsetWidth);
    const maxY = Math.max(0, parent.clientHeight - el.offsetHeight);
    return { x: Math.min(Math.max(0, p.x), maxX), y: Math.min(Math.max(0, p.y), maxY) };
  };
  const defaultPos = (): Pos => {
    const el = ref.current;
    const parent = el?.offsetParent as HTMLElement | null;
    if (!el || !parent) return { x: 0, y: 0 };
    // Centered, sitting just above the tool dock at the bottom of the map
    return { x: (parent.clientWidth - el.offsetWidth) / 2, y: parent.clientHeight - el.offsetHeight - 84 };
  };

  useLayoutEffect(() => {
    setPos(p => clampPos(p ?? defaultPos()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    const onResize = () => setPos(p => (p ? clampPos(p) : p));
    window.addEventListener("resize", onResize);
    const parent = ref.current?.offsetParent;
    const ro = parent ? new ResizeObserver(onResize) : null;
    if (parent && ro) ro.observe(parent);
    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!pos) return;
    try { localStorage.setItem(storageKey, JSON.stringify(pos)); } catch { /* ignore */ }
  }, [pos, storageKey]);

  const startMove = (e: React.PointerEvent) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest("button")) return;
    e.preventDefault();
    const start = { x: e.clientX, y: e.clientY, pos: pos ?? defaultPos() };
    const move = (ev: PointerEvent) => setPos(clampPos({ x: start.pos.x + ev.clientX - start.x, y: start.pos.y + ev.clientY - start.y }));
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const startResize = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    const start = { x: e.clientX, w: width };
    const move = (ev: PointerEvent) => onWidth(Math.round(Math.min(maxWidth, Math.max(minWidth, start.w + ev.clientX - start.x))));
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label={label}
      className={`absolute z-40 bg-zinc-900/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 ring-1 ring-black/50 ${className}`}
      style={{ width, left: pos?.x ?? 0, top: pos?.y ?? 0, visibility: pos ? "visible" : "hidden" }}
    >
      <div
        className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/5 bg-white/5 cursor-move select-none touch-none"
        onPointerDown={startMove}
        onDoubleClick={() => setPos(clampPos(defaultPos()))}
        title="Drag to move · double-click to put it back"
        data-testid="window-titlebar"
      >
        <div className="flex items-center gap-2 min-w-0">
          <GripHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
          {title}
        </div>
        <div className="flex items-center gap-1 shrink-0">{actions}</div>
      </div>
      {children}
      <div
        className="absolute right-0 bottom-0 w-4 h-4 cursor-nwse-resize touch-none"
        style={{ background: "linear-gradient(135deg, transparent 50%, rgba(148,163,184,0.6) 50%)" }}
        onPointerDown={startResize}
        title="Drag to resize"
        aria-label="Resize"
        data-testid="window-resize"
      />
    </div>
  );
}
