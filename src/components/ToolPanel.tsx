import React from "react";
import { Camera, Car, MousePointerClick, Square, Target, Trees, Type, Wand2, X } from "lucide-react";
import type { ToolMode, TargetKind } from "../types";
import { TARGET_KINDS, TREE_SIZES, VEHICLE_SIZES, type TreeSize, type VehicleType } from "../lib/items";

export type ToolDefaults = {
  treeSize: TreeSize;
  treeType: "deciduous" | "conifer" | "palm" | "bush";
  vehicleType: VehicleType;
  targetKind: TargetKind;
};

type Props = {
  mode: ToolMode;
  defaults: ToolDefaults;
  onDefaults: (patch: Partial<ToolDefaults>) => void;
  onDone: () => void;
  hasSatellite: boolean;
};

const INFO: Partial<Record<ToolMode, { title: string; icon: React.ComponentType<{ className?: string }>; how: string }>> = {
  "add-camera": { title: "Add a camera", icon: Camera, how: "Click on the map to place it. Click on a house to mount it on the nearest wall. Then drag its blue dot to aim." },
  "add-building": { title: "Add a building", icon: Square, how: "Click to place a building, then drag its corners to match the roof." },
  "trace-building": { title: "Trace a roof", icon: Wand2, how: "Click the middle of a roof on the satellite map and it becomes a 3D building. Keep clicking roofs; press Esc when done." },
  "add-tree": { title: "Add trees", icon: Trees, how: "Pick a type and size, then click on the map. Trees block cameras' views." },
  "add-parking": { title: "Add a vehicle", icon: Car, how: "Pick a type, then click on the map. Vehicles are placed at their real size." },
  "add-label": { title: "Add text", icon: Type, how: "Click on the map where the text should go." },
  "add-target": { title: "Mark a spot to protect", icon: Target, how: "Pick what it is, then click it on the map. Your cameras' coverage of it shows as green, amber or red." }
};

const chip = (on: boolean) =>
  `px-2 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${on ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`;

/** The right panel while a placing tool is active: what to do, and the options for what gets placed. */
export function ToolPanel({ mode, defaults, onDefaults, onDone, hasSatellite }: Props) {
  const info = INFO[mode];
  if (!info) return null;
  return (
    <div className="flex flex-col gap-5" data-testid="tool-panel" data-tool={mode}>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-bold text-lg text-slate-100">
          <info.icon className="w-5 h-5 text-emerald-400" /> {info.title}
        </h2>
        <button onClick={onDone} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg" title="Done (Esc)" aria-label="Done">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="flex gap-2 text-sm text-slate-300">
        <MousePointerClick className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" /> {info.how}
      </p>
      {mode === "trace-building" && !hasSatellite && (
        <p className="text-sm text-amber-300">Import your site first: this tool traces roofs from the satellite map.</p>
      )}

      {mode === "add-tree" && (
        <>
          <div className="space-y-1.5">
            <div className="text-[10px] uppercase font-bold text-slate-400">Type</div>
            <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Tree type">
              {(["deciduous", "conifer", "palm", "bush"] as const).map(t => (
                <button key={t} className={`${chip(defaults.treeType === t)} capitalize`} onClick={() => onDefaults({ treeType: t })}>
                  {t === "deciduous" ? "Leafy tree" : t === "conifer" ? "Pine / evergreen" : t}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-[10px] uppercase font-bold text-slate-400">Size</div>
            <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="Tree size">
              {(Object.keys(TREE_SIZES) as TreeSize[]).map(s => (
                <button key={s} className={chip(defaults.treeSize === s)} onClick={() => onDefaults({ treeSize: s })}>
                  {TREE_SIZES[s].label}
                  <span className="block text-[10px] font-medium opacity-70">{TREE_SIZES[s].radius * 2} ft wide</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {mode === "add-parking" && (
        <div className="space-y-1.5">
          <div className="text-[10px] uppercase font-bold text-slate-400">Vehicle</div>
          <div className="grid grid-cols-2 gap-1.5" role="group" aria-label="Vehicle type">
            {(Object.keys(VEHICLE_SIZES) as VehicleType[]).map(v => (
              <button key={v} className={chip(defaults.vehicleType === v)} onClick={() => onDefaults({ vehicleType: v })}>
                {VEHICLE_SIZES[v].label}
                <span className="block text-[10px] font-medium opacity-70">{VEHICLE_SIZES[v].width} × {VEHICLE_SIZES[v].length} ft</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === "add-target" && (
        <div className="space-y-1.5">
          <div className="text-[10px] uppercase font-bold text-slate-400">What is it?</div>
          <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="Spot kind">
            {(Object.keys(TARGET_KINDS) as TargetKind[]).map(k => (
              <button key={k} className={chip(defaults.targetKind === k)} onClick={() => onDefaults({ targetKind: k })}>
                {TARGET_KINDS[k].label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button onClick={onDone} className="w-full py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-200">
        Done
      </button>
    </div>
  );
}
