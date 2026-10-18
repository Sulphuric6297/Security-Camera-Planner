import React, { useEffect, useRef, useState } from "react";
import { Camera, LayoutGrid, Plus, Maximize } from "lucide-react";
import { vFovFromH } from "../lib/camera";
import { CameraItem } from "../types";

export const NVRCard = ({ camera, renderFn, sceneKey, onMaximize, onExport, isMaximized, aspect }: { camera: CameraItem, renderFn: (c: CameraItem) => string, sceneKey?: string, onMaximize?: () => void, onExport?: () => void, isMaximized?: boolean, aspect?: number }) => {
  const [src, setSrc] = useState<string | null>(null);
  // Always call the latest render function, but only re-render when the scene or camera actually changes.
  const renderFnRef = useRef(renderFn);
  renderFnRef.current = renderFn;
  const viewAspect = aspect && aspect > 0 ? aspect : 16 / 9;
  const renderBusyRef = useRef(false);
  const renderQueuedRef = useRef(false);
  const renderFrame = () => {
    if (renderBusyRef.current) {
      renderQueuedRef.current = true;
      return;
    }
    renderBusyRef.current = true;
    try {
      const next = renderFnRef.current(camera);
      if (next) setSrc(next);
    } catch (err) {
      console.error("Camera render failed", err);
    } finally {
      renderBusyRef.current = false;
      if (renderQueuedRef.current) {
        renderQueuedRef.current = false;
        renderFrame();
      }
    }
  };

  useEffect(() => {
    const tid = setTimeout(() => {
      renderFrame();
    }, isMaximized ? 0 : 10);
    return () => clearTimeout(tid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, sceneKey, isMaximized]);

  const handleDownload = () => {
    if (!src) return;
    const link = document.createElement("a");
    link.href = src;
    link.download = `nvr_snapshot_${camera.label}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`w-full h-full bg-zinc-900/90 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl flex flex-col ${isMaximized ? '' : 'hover:ring-1 hover:ring-indigo-500 ring-1 ring-black/50'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-slate-200 truncate">{camera.label}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1.5 bg-red-500/20 px-1.5 py-0.5 rounded border border-red-500/30">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-[10px] text-red-400 font-bold tracking-tight">LIVE</span>
          </div>
          {!isMaximized && onMaximize && (
            <button
              onClick={(e) => { e.stopPropagation(); onMaximize(); }}
              className="no-drag text-slate-400 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
              title="Expand View"
              onMouseDown={e => e.stopPropagation()}
            >
              <Maximize className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Camera View */}
      <div
        className="relative w-full overflow-hidden bg-slate-800"
        style={{ aspectRatio: `${viewAspect}` }}
      >
        {src ? (
          <img src={src} className="w-full h-full object-contain select-none" draggable={false} />
        ) : (
          <div className="animate-pulse bg-zinc-800 w-full h-full flex items-center justify-center opacity-50">
            <LayoutGrid className="w-8 h-8" />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-2 bg-white/5 text-xs text-slate-400 flex items-center justify-between border-t border-white/5 shrink-0">
        <div className="flex gap-3">
          <span>H-FOV: {(camera.hFov ?? camera.fov).toFixed(0)}°</span>
          <span>V-FOV: {(camera.vFov ?? vFovFromH(camera.hFov ?? camera.fov, aspect ?? 16 / 9)).toFixed(0)}°</span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onExport?.(); }}
          className="no-drag px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded flex items-center gap-1 transition-colors"
          onMouseDown={e => e.stopPropagation()}
          title="Add this camera view to the report"
        >
          <Plus className="w-3 h-3" />
          + Add to Report
        </button>
      </div>
    </div>
  );
};
