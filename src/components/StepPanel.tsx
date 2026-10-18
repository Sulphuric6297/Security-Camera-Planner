import React from "react";
import {
  ArrowRight,
  Box,
  Camera,
  Car,
  Download,
  Eye,
  EyeOff,
  FileText,
  Image as ImageIcon,
  LayoutGrid,
  Mountain,
  Plus,
  Square,
  Trees,
  Upload,
  Wand2
} from "lucide-react";
import type { BuildingItem, CameraItem, CanvasItem } from "../types";
import type { WorkflowStepId } from "./AppHeader";
import { getDoriDistances, getGroundCoverage } from "../lib/camera";
import { DEFAULT_CAMERA_PITCH } from "../constants";

export const STEP_INFO: Record<WorkflowStepId, { n: number; title: string; blurb: string; next?: WorkflowStepId }> = {
  site: { n: 1, title: "Your site", blurb: "The satellite map, elevation and buildings for your property.", next: "buildings" },
  buildings: { n: 2, title: "Buildings", blurb: "Check the buildings, fix heights and roofs, add trees and vehicles that block views.", next: "cameras" },
  cameras: { n: 3, title: "Cameras", blurb: "Mark what to protect, then add cameras until everything is green. Click right next to a wall to mount a camera there.", next: "review" },
  review: { n: 4, title: "Review coverage", blurb: "Check what's covered, find blind spots, and see every camera's view in 3D and on the camera wall.", next: "report" },
  report: { n: 5, title: "Report", blurb: "A PDF with the site plan, camera list and every camera's view." }
};

type Props = {
  step: WorkflowStepId;
  items: CanvasItem[];
  site: { label?: string; widthFt?: number; heightFt?: number; imagery?: boolean } | null;
  reportViews: number;
  showAllCones: boolean;
  onToggleCones: (show: boolean) => void;
  onSelect: (id: string) => void;
  onStep: (step: WorkflowStepId) => void;
  onImportSite: () => void;
  onUploadBaseMap: () => void;
  onTool: (tool: "add-building" | "trace-building" | "add-tree" | "add-parking" | "add-camera") => void;
  onView: (view: "plan" | "iso3d" | "nvr") => void;
  onReportPdf: () => void;
  onPlanPng: () => void;
  onAddViewToReport: () => void;
  onMoreReportOptions: () => void;
  /** The "What to protect" checklist (shown in the Cameras and Review steps). */
  coverage?: React.ReactNode;
};

const card = "rounded-xl border border-white/10 bg-white/5 p-3";
const action =
  "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-200 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors";
const kbd = "ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-400 font-mono";
const listButton = "w-full flex items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-white/5";

/** The side panel for the current workflow step (shown when nothing is selected). */
export function StepPanel(props: Props) {
  const { step, items } = props;
  const info = STEP_INFO[step];
  const cameras = items.filter(i => i.type === "camera") as CameraItem[];
  const buildings = items.filter(i => i.type === "building") as BuildingItem[];
  const trees = items.filter(i => i.type === "tree").length;
  const vehicles = items.filter(i => i.type === "parking").length;

  return (
    <div className="flex flex-col gap-4" data-testid="step-panel" data-step={step}>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">Step {info.n} of 5</div>
        <h2 className="text-lg font-bold text-slate-100">{info.title}</h2>
        <p className="text-sm text-slate-400 mt-0.5">{info.blurb}</p>
      </div>

      {step === "site" && (
        <>
          {props.site ? (
            <div className={card}>
              <div className="text-[10px] uppercase font-bold text-slate-400">Site</div>
              <div className="text-sm text-slate-100 font-semibold truncate" title={props.site.label}>{props.site.label || "Imported site"}</div>
              {props.site.widthFt && props.site.heightFt && (
                <div className="text-xs text-slate-400">{Math.round(props.site.widthFt).toLocaleString()} × {Math.round(props.site.heightFt).toLocaleString()} ft</div>
              )}
            </div>
          ) : (
            <button onClick={props.onImportSite} className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20">
              Search for my address
            </button>
          )}
          <div className="space-y-2">
            {props.site && (
              <button onClick={props.onImportSite} className={action}>
                <Mountain className="w-4 h-4 text-emerald-400" /> Change or re-import the site
              </button>
            )}
            <button onClick={props.onUploadBaseMap} className={action}>
              <Upload className="w-4 h-4 text-slate-400" /> Use my own map or floor plan image
            </button>
          </div>
          <p className="text-xs text-slate-500">Elevation lines and shading are in the bottom-left corner of the plan.</p>
        </>
      )}

      {step === "buildings" && (
        <>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => props.onTool("trace-building")} className={action} title="Click a roof on the satellite map to outline it">
              <Wand2 className="w-4 h-4 text-emerald-400" /> Trace a roof <span className={kbd}>R</span>
            </button>
            <button onClick={() => props.onTool("add-building")} className={action}>
              <Square className="w-4 h-4 text-slate-400" /> Add building <span className={kbd}>B</span>
            </button>
            <button onClick={() => props.onTool("add-tree")} className={action}>
              <Trees className="w-4 h-4 text-slate-400" /> Add tree <span className={kbd}>T</span>
            </button>
            <button onClick={() => props.onTool("add-parking")} className={action}>
              <Car className="w-4 h-4 text-slate-400" /> Add vehicle <span className={kbd}>P</span>
            </button>
          </div>
          <div className={card}>
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
              Buildings ({buildings.length}) · {trees} tree{trees === 1 ? "" : "s"} · {vehicles} vehicle{vehicles === 1 ? "" : "s"}
            </div>
            {buildings.length === 0 ? (
              <p className="text-sm text-slate-400">No buildings yet. Trace a roof on the map or add one.</p>
            ) : (
              <ul className="max-h-72 overflow-auto custom-scrollbar -mx-1" aria-label="Buildings">
                {buildings.map((b, i) => (
                  <li key={b.id}>
                    <button onClick={() => props.onSelect(b.id)} className={listButton}>
                      <Box className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm text-slate-200 truncate">{b.label?.trim() || `Building ${i + 1}`}</span>
                        <span className="block text-[11px] text-slate-500">
                          {Math.round(b.wallHeight ?? 0)} ft tall · {b.roofType && b.roofType !== "auto" ? `${b.roofType} roof` : "auto roof"}
                          {b.importSource === "osm" ? " · from map data" : ""}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-xs text-slate-500">Tip: map data heights are estimates. Click a building to fix its height or roof.</p>
        </>
      )}

      {step === "cameras" && (
        <>
          <button onClick={() => props.onTool("add-camera")} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
            <Plus className="w-4 h-4" /> Add a camera <span className="text-[10px] px-1.5 rounded bg-black/20 font-mono">C</span>
          </button>
          {props.coverage}
          <div className={card}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-[10px] uppercase font-bold text-slate-400">Cameras ({cameras.length})</div>
              <button
                onClick={() => props.onToggleCones(!props.showAllCones)}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200"
                title={props.showAllCones ? "Show only the selected camera's 3D view cone" : "Show every camera's 3D view cone"}
              >
                {props.showAllCones ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                {props.showAllCones ? "All cones" : "Selected only"}
              </button>
            </div>
            {cameras.length === 0 ? (
              <p className="text-sm text-slate-400">No cameras yet. Add one, then drag its blue dot to aim it.</p>
            ) : (
              <ul className="-mx-1" aria-label="Cameras">
                {cameras.map((cam, i) => {
                  const identify = Math.round(getDoriDistances(cam)[0].distance);
                  return (
                    <li key={cam.id}>
                      <button onClick={() => props.onSelect(cam.id)} className={listButton}>
                        <span className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold text-white" style={{ background: cam.color }}>
                          {i + 1}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-sm text-slate-200 truncate">{cam.label}</span>
                          <span className="block text-[11px] text-slate-500 truncate">
                            {Math.round(cam.mount?.height ?? cam.height ?? 0)} ft high · {Math.round(cam.hFov ?? cam.fov)}° · faces to ~{identify} ft
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </>
      )}

      {step === "review" && (
        <>
          {props.coverage}
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => props.onView("iso3d")} className={action}>
              <Box className="w-4 h-4 text-indigo-300" /> 3D view
            </button>
            <button onClick={() => props.onView("nvr")} className={action}>
              <LayoutGrid className="w-4 h-4 text-indigo-300" /> Camera wall
            </button>
          </div>
          {cameras.length === 0 ? (
            <div className={card}>
              <p className="text-sm text-slate-400">Add cameras first, then come back to check what they cover.</p>
              <button onClick={() => props.onStep("cameras")} className="mt-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">Go to Cameras →</button>
            </div>
          ) : (
            <ul className="space-y-2" aria-label="Camera coverage">
              {cameras.map((cam, i) => {
                const dori = getDoriDistances(cam);
                const ground = getGroundCoverage(cam.mount?.height ?? cam.height ?? 9, cam.pitch ?? DEFAULT_CAMERA_PITCH, cam.vFov ?? 50);
                return (
                  <li key={cam.id}>
                    <button onClick={() => props.onSelect(cam.id)} className={`${card} w-full text-left hover:bg-white/10`}>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: cam.color }}>{i + 1}</span>
                        <span className="text-sm font-semibold text-slate-100 truncate">{cam.label}</span>
                      </div>
                      <div className="mt-1.5 grid grid-cols-3 gap-1 text-[11px] text-slate-400">
                        <span>Faces <b className="text-slate-200">{Math.round(dori[0].distance)} ft</b></span>
                        <span>Detect <b className="text-slate-200">{Math.round(dori[dori.length - 1].distance)} ft</b></span>
                        <span>Blind <b className="text-slate-200">{Number.isFinite(ground.near) ? `${Math.round(ground.near)} ft` : "—"}</b></span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}

      {step === "report" && (
        <>
          <button onClick={props.onReportPdf} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/20">
            <FileText className="w-4 h-4" /> Download PDF report
          </button>
          <p className="text-xs text-slate-400 -mt-2">
            {props.reportViews > 0
              ? `Includes your ${props.reportViews} picked view${props.reportViews === 1 ? "" : "s"}, the camera list and each camera's view.`
              : "Includes the site plan, the camera list and every camera's view."}
          </p>
          <div className="space-y-2">
            <button onClick={props.onAddViewToReport} className={action}>
              <Camera className="w-4 h-4 text-slate-400" /> Add the current view to the report
            </button>
            <button onClick={props.onPlanPng} className={action}>
              <ImageIcon className="w-4 h-4 text-slate-400" /> Download the plan as an image
            </button>
            <button onClick={props.onMoreReportOptions} className={action}>
              <Download className="w-4 h-4 text-slate-400" /> More report options…
            </button>
          </div>
        </>
      )}

      {info.next && (
        <button
          onClick={() => props.onStep(info.next!)}
          className="mt-1 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 text-sm font-semibold"
        >
          Next: {STEP_INFO[info.next].title} <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
