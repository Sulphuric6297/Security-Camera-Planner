import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Camera, ChevronDown, Copy, Crosshair, Eye, Lock, LockOpen, Maximize2, RotateCcw, RotateCw, Trash2, ZoomIn, ZoomOut } from "lucide-react";
import { clamp } from "../constants";
import { niceScaleBar } from "../lib/view";
import { SiteView } from "./SiteView";
import type { ViewCallbacks, ViewDoc, ViewInfo, ViewTool } from "./types";

type Props = {
  doc: ViewDoc;
  selectedId: string | null;
  tool: ViewTool;
  callbacks: ViewCallbacks;
  /** The pose the 2D / 3D tabs ask for; changes animate. */
  pose: "top" | "tilt";
  poseSignal: number;
  hidden?: boolean;
  /** Selection actions for the floating bar (rotate only where turning makes sense; look for cameras). */
  actions: { duplicate: () => void; rotate?: () => void; remove?: () => void; zoomTo: () => void; look?: () => void; locked?: boolean; toggleLock?: () => void; extra?: React.ReactNode; /** Only `extra` (a part of the item is being edited, e.g. a window). */ only?: boolean } | null;
  snapshot: { download: () => void; addToReport: () => void };
  /** Looking through this camera: the view shows its picture and the map controls step aside. */
  povId?: string | null;
  /** Controls drawn over the camera picture (camera switcher, exit). */
  povUi?: React.ReactNode;
  onReady: (view: SiteView | null) => void;
  /** Width covered by a panel on the right (the inspector); the controls move left of it. */
  rightInset?: number;
};

/** The map view (2D and 3D in one) with its on-screen controls. */
export function SiteViewport(props: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<SiteView | null>(null);
  const cbRef = useRef(props.callbacks);
  cbRef.current = props.callbacks;
  const [info, setInfo] = useState<ViewInfo | null>(null);
  const [box, setBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [menu, setMenu] = useState(false);
  const selRef = useRef(props.selectedId);
  selRef.current = props.selectedId;

  useLayoutEffect(() => {
    const host = hostRef.current!;
    const forward = new Proxy({} as ViewCallbacks, { get: (_t, key) => (...args: unknown[]) => (cbRef.current as any)[key]?.(...args) });
    const view = new SiteView(host, forward);
    viewRef.current = view;
    view.setDoc(props.doc);
    view.setSelection(props.selectedId);
    view.setTool(props.tool);
    const off = view.onView(i => {
      setInfo(i);
      setBox(selRef.current ? view.screenBox(selRef.current) : null);
    });
    props.onReady(view);
    (window as any).__scpView = view;
    (window as any).__scpThree = () => ({ scene: view.scene, camera: view.camera, renderer: view.renderer });
    return () => {
      off();
      props.onReady(null);
      view.dispose();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.setDoc(props.doc);
    view.setSelection(props.selectedId);
    setBox(props.selectedId ? view.screenBox(props.selectedId) : null);
  }, [props.doc, props.selectedId]);

  useEffect(() => {
    viewRef.current?.setTool(props.tool);
  }, [props.tool]);

  useEffect(() => {
    viewRef.current?.setPov(props.povId ?? null, props.rightInset ?? 0);
  }, [props.povId, props.rightInset]);

  useEffect(() => {
    if (props.poseSignal > 0) viewRef.current?.setPose(props.pose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.poseSignal]);

  const view = viewRef.current;
  const inset = props.rightInset ?? 0;
  const pxPerFoot = info ? info.pxPerUnit * props.doc.unitsPerFoot : 0;
  const bar = info && info.tiltDeg < 30 ? niceScaleBar(pxPerFoot, 110) : null;
  const tilted = (info?.tiltDeg ?? 0) > 8;
  const ctl = "w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10";

  let actionBar: React.ReactNode = null;
  if (props.actions && box && info && !props.hidden && !props.povId) {
    const above = box.y - 56;
    const y = above > 8 ? above : Math.min(info.height - 48, box.y + box.height + 14);
    // Clear of the map's corner controls (top right) when it sits up there
    const rightRoom = y < 180 ? 330 : 190;
    const x = clamp(box.x + box.width / 2, 190, Math.max(190, info.width - inset - rightRoom));
    const btn = "w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10";
    actionBar = (
      <div
        role="toolbar"
        aria-label="Selection actions"
        className="absolute z-30 flex items-center gap-0.5 rounded-xl border border-white/10 bg-zinc-900/95 p-1 shadow-xl backdrop-blur"
        style={{ left: x, top: y, transform: "translateX(-50%)" }}
      >
        {props.actions.look && (
          <button className={`${btn} !w-auto px-2 gap-1.5 text-emerald-300 text-xs font-semibold`} title="Look through this camera (Enter)" aria-label="Look through camera" onClick={props.actions.look}>
            <Eye className="w-4 h-4" /> Look through
          </button>
        )}
        {props.actions.extra}
        {!props.actions.only && <>
        <button className={btn} title="Duplicate (Ctrl/⌘+D)" aria-label="Duplicate" onClick={props.actions.duplicate}><Copy className="w-4 h-4" /></button>
        {props.actions.rotate && <button className={btn} title="Rotate 15° clockwise" aria-label="Rotate" onClick={props.actions.rotate}><RotateCw className="w-4 h-4" /></button>}
        <button className={btn} title="Zoom to it (F)" aria-label="Zoom to selection" onClick={props.actions.zoomTo}><Crosshair className="w-4 h-4" /></button>
        {props.actions.toggleLock && (
          <button
            className={`${btn} ${props.actions.locked ? "!text-amber-300 bg-amber-500/15" : ""}`}
            title={props.actions.locked ? "Locked in place: click to unlock" : "Lock in place, so it can't be moved or reshaped by mistake (its windows, doors and porches stay editable)"}
            aria-label={props.actions.locked ? "Unlock" : "Lock"}
            aria-pressed={!!props.actions.locked}
            onClick={props.actions.toggleLock}
          >
            {props.actions.locked ? <Lock className="w-4 h-4" /> : <LockOpen className="w-4 h-4" />}
          </button>
        )}
        {props.actions.remove && (
          <>
            <span className="w-px h-5 bg-white/10 mx-0.5" />
            <button className={`${btn} hover:!text-red-300`} title="Delete (Del)" aria-label="Delete" onClick={props.actions.remove}><Trash2 className="w-4 h-4" /></button>
          </>
        )}
        </>}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${props.hidden ? "invisible pointer-events-none" : ""}`}>
      <div ref={hostRef} data-testid="plan" className="absolute inset-0 overflow-hidden select-none" style={{ touchAction: "none" }} />
      {actionBar}
      {props.povId && props.povUi}
      <div className={`absolute top-3 z-20 flex items-start gap-2 ${props.povId ? "hidden" : ""}`} style={{ right: 12 + inset }}>
        {tilted && (
          <div className="flex items-center gap-2">
          <button
            onClick={() => { view?.fitSite(); view?.resetNorth(); }}
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900/90 text-xs font-semibold text-slate-200 hover:bg-zinc-800 shadow"
          >
            Reset view
          </button>
          <div className="relative">
            <button
              onClick={() => setMenu(v => !v)}
              aria-expanded={menu}
              className="px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/30 shadow-sm flex items-center gap-1"
            >
              <Camera className="w-3.5 h-3.5" /> Snapshot <ChevronDown className="w-3 h-3" />
            </button>
            {menu && (
              <div className="absolute top-full mt-2 right-0 w-56 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl p-1.5" onMouseLeave={() => setMenu(false)}>
                {[
                  { label: "Download as image", action: props.snapshot.download },
                  { label: "Add to the report", action: props.snapshot.addToReport }
                ].map(m => (
                  <button key={m.label} onClick={() => { setMenu(false); m.action(); }} className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/10 rounded-lg">
                    {m.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          </div>
        )}
        {bar && (
          <div className="rounded-lg bg-zinc-900/85 border border-white/10 px-2.5 py-1.5 text-[11px] text-slate-200 shadow" title="Scale">
            <div className="font-semibold mb-1" data-testid="scale-bar-label">{bar.label}</div>
            <div data-testid="scale-bar" style={{ width: bar.px }} className="h-1.5 border-x-2 border-b-2 border-slate-200" />
          </div>
        )}
        <button
          onClick={() => view?.resetNorth()}
          className="w-10 h-12 rounded-lg bg-zinc-900/85 border border-white/10 flex flex-col items-center justify-center text-slate-200 shadow hover:bg-zinc-800"
          title={info && Math.abs(((info.heading + 540) % 360) - 180) < 0.5 ? "North is up" : "Turn north up (N)"}
          aria-label={props.doc.geo ? "North arrow" : "Compass"}
        >
          <span className="flex flex-col items-center" style={{ transform: `rotate(${-(info?.heading ?? 0)}deg)` }}>
            <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M7 0 L13 15 L7 11 L1 15 Z" fill="#ef4444" /></svg>
            <span className="text-[10px] font-bold leading-none mt-0.5">N</span>
          </span>
        </button>
        <div className="flex flex-col rounded-lg bg-zinc-900/85 border border-white/10 overflow-hidden shadow">
          <button className={ctl} title="Zoom in (+)" aria-label="Zoom in" onClick={() => view?.zoomBy(1.4)}><ZoomIn className="w-4 h-4" /></button>
          <button className={ctl} title="Zoom out (-)" aria-label="Zoom out" onClick={() => view?.zoomBy(1 / 1.4)}><ZoomOut className="w-4 h-4" /></button>
          <button className={ctl} title="Zoom to fit the site (0)" aria-label="Zoom to fit" onClick={() => view?.fitSite()}><Maximize2 className="w-4 h-4" /></button>
        </div>
        <div className="flex flex-col rounded-lg bg-zinc-900/85 border border-white/10 overflow-hidden shadow">
          <button className={`${ctl} ${tilted ? "text-indigo-300" : ""}`} title={tilted ? "Look straight down (2)" : "Tilt into 3D (3)"} aria-label={tilted ? "Look straight down" : "Tilt into 3D"} onClick={() => view?.toggleTilt()}><Box className="w-4 h-4" /></button>
          <button className={ctl} title="Turn the view left" aria-label="Rotate view left" onClick={() => view?.rotateBy(-22.5)}><RotateCcw className="w-4 h-4" /></button>
          <button className={ctl} title="Turn the view right" aria-label="Rotate view right" onClick={() => view?.rotateBy(22.5)}><RotateCw className="w-4 h-4" /></button>
        </div>
      </div>
      {props.doc.blindSpots && props.doc.blindSpots.runs.length > 0 && !props.povId && (
        <div data-testid="blind-spots" style={{ right: 12 + inset }} className="absolute bottom-20 z-20 rounded-full bg-red-600/90 px-3 py-1 text-[11px] font-semibold text-white shadow">
          Red = not seen by any camera
        </div>
      )}
    </div>
  );
}
