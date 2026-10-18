import React from "react";
import { Camera, Check, Mountain, Square, Trees, Car, Eye, EyeOff } from "lucide-react";
import type { CameraItem, CanvasItem } from "../types";
import { getDoriDistances } from "../lib/camera";

type Props = {
  items: CanvasItem[];
  hasSite: boolean;
  onSelect: (id: string) => void;
  onImportSite: () => void;
  onAddCamera: () => void;
  onAddBuilding: () => void;
  showAllCones: boolean;
  onToggleCones: (show: boolean) => void;
};

/** Shown in the side panel when nothing is selected: progress, a camera list and quick actions. */
export function ProjectOverview({ items, hasSite, onSelect, onImportSite, onAddCamera, onAddBuilding, showAllCones, onToggleCones }: Props) {
  const cameras = items.filter(i => i.type === "camera") as CameraItem[];
  const counts = {
    buildings: items.filter(i => i.type === "building").length,
    trees: items.filter(i => i.type === "tree").length,
    vehicles: items.filter(i => i.type === "parking").length
  };
  const checklist = [
    { done: hasSite, label: "Import your site", action: onImportSite, icon: Mountain },
    { done: counts.buildings > 0, label: "Add your buildings", action: onAddBuilding, icon: Square },
    { done: cameras.length > 0, label: "Place your first camera", action: onAddCamera, icon: Camera }
  ];
  const allDone = checklist.every(c => c.done);

  return (
    <div className="space-y-5">
      {!allDone && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
          <div className="text-xs font-bold uppercase text-slate-400">Getting started</div>
          {checklist.map(item => (
            <button
              key={item.label}
              onClick={item.action}
              disabled={item.done}
              className="w-full flex items-center gap-3 rounded-lg px-2 py-2 text-left text-sm hover:bg-white/5 disabled:hover:bg-transparent"
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center ${item.done ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-slate-300"}`}>
                {item.done ? <Check className="w-3.5 h-3.5" /> : <item.icon className="w-3.5 h-3.5" />}
              </span>
              <span className={item.done ? "text-slate-500 line-through" : "text-slate-200"}>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase text-slate-400">Cameras ({cameras.length})</div>
          <button
            onClick={() => onToggleCones(!showAllCones)}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200"
            title={showAllCones ? "Show only the selected camera's 3D view cone" : "Show every camera's 3D view cone"}
          >
            {showAllCones ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            {showAllCones ? "All cones" : "Selected only"}
          </button>
        </div>
        {cameras.length === 0 ? (
          <p className="text-sm text-slate-400">No cameras yet. Press <kbd className="px-1 rounded bg-white/10 text-slate-200">C</kbd> or use the camera tool, then click on the plan.</p>
        ) : (
          <ul className="space-y-1">
            {cameras.map(cam => {
              const identify = Math.round(getDoriDistances(cam)[0].distance);
              return (
                <li key={cam.id}>
                  <button onClick={() => onSelect(cam.id)} className="w-full flex items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-white/5">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: cam.color }} />
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm text-slate-200 truncate">{cam.label}</span>
                      <span className="block text-[11px] text-slate-500 truncate">
                        {cam.description?.trim() || `${Math.round(cam.mount?.height ?? cam.height ?? 0)} ft · ${Math.round(cam.hFov ?? cam.fov)}° · faces to ~${identify} ft`}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <button onClick={onAddCamera} className="w-full py-2 rounded-lg border border-dashed border-white/15 text-sm text-slate-300 hover:bg-white/5">
          + Add camera
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { icon: Square, label: "Buildings", n: counts.buildings },
          { icon: Trees, label: "Trees", n: counts.trees },
          { icon: Car, label: "Vehicles", n: counts.vehicles }
        ].map(c => (
          <div key={c.label} className="rounded-xl border border-white/10 bg-white/5 py-3">
            <c.icon className="w-4 h-4 mx-auto text-slate-400" />
            <div className="text-lg font-bold text-slate-200 leading-tight mt-1">{c.n}</div>
            <div className="text-[10px] uppercase text-slate-500">{c.label}</div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        Tips: <kbd className="px-1 rounded bg-white/10">V</kbd> select · <kbd className="px-1 rounded bg-white/10">C</kbd> camera ·{" "}
        <kbd className="px-1 rounded bg-white/10">B</kbd> building · <kbd className="px-1 rounded bg-white/10">2</kbd>/<kbd className="px-1 rounded bg-white/10">3</kbd> views ·
        arrows nudge · <kbd className="px-1 rounded bg-white/10">⌘/Ctrl+D</kbd> duplicate · <kbd className="px-1 rounded bg-white/10">⌘/Ctrl+Z</kbd> undo
      </p>
    </div>
  );
}
