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
  HardDrive,
  Image as ImageIcon,
  LayoutGrid,
  Mountain,
  Plus,
  Square,
  Trees,
  Upload,
  Wand2,
  Route
} from "lucide-react";
import type { BuildingItem, CameraItem, CanvasItem } from "../types";
import type { WorkflowStepId } from "./AppHeader";
import { getDoriDistances, getGroundCoverage } from "../lib/camera";
import { DEFAULT_CAMERA_PITCH } from "../constants";
import { estimateStorage } from "../lib/recording";
import { isOwnBuilding } from "../lib/items";

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
  site: { label?: string; widthFt?: number; heightFt?: number; imagery?: boolean; details?: string } | null;
  reportViews: number;
  showAllCones: boolean;
  onToggleCones: (show: boolean) => void;
  onSelect: (id: string) => void;
  /** The welcome card in the middle of the map is showing its own start buttons. */
  startCardShown?: boolean;
  /** Look through a camera (the map view shows its picture). */
  onLook: (id: string) => void;
  /** Mark a building as yours (cameras go on it) or not. */
  onMine: (id: string, mine: boolean) => void;
  onStep: (step: WorkflowStepId) => void;
  /** "Next": finishes this step and opens the next one. */
  onNext: (from: WorkflowStepId, to: WorkflowStepId) => void;
  onImportSite: () => void;
  onUploadBaseMap: () => void;
  onTool: (tool: "add-building" | "trace-building" | "add-tree" | "add-parking" | "add-paving" | "add-camera") => void;
  onView: (view: "plan" | "iso3d" | "nvr") => void;
  onReportPdf: () => void;
  onPlanPng: () => void;
  onAddViewToReport: () => void;
  onMoreReportOptions: () => void;
  onCamerasCsv: () => void;
  storage: {
    widths: number[];
    days: number;
    mode: "continuous" | "motion";
    onDays: (days: number) => void;
    onMode: (mode: "continuous" | "motion") => void;
  };
  /** The "What to protect" checklist (shown in the Cameras and Review steps). */
  coverage?: React.ReactNode;
  /** Recorder and cable runs (null until the recorder is placed). */
  cabling: { channels: number; totalFt: number; boxes: number; longest: { label: string; lengthFt: number } | null; tooLong: string[] } | null;
  onPlaceRecorder: () => void;
};

const card = "rounded-xl border border-white/10 bg-white/5 p-3";
const action =
  "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-200 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors";
const kbd = "ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-400 font-mono";
const lookButton = "shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-emerald-300 hover:text-white hover:bg-white/10";
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
              {props.site.details && <div className="text-[11px] text-slate-500 mt-1.5 leading-snug">{props.site.details}</div>}
            </div>
          ) : props.startCardShown ? (
            <p className={`${card} text-sm text-slate-300`}>Start in the middle of the screen: find your property, upload your own map, or start on a blank grid.</p>
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
            {!props.startCardShown && (
              <button onClick={props.onUploadBaseMap} className={action}>
                <Upload className="w-4 h-4 text-slate-400" /> Use my own map or floor plan image
              </button>
            )}
          </div>
          {props.site && <p className="text-xs text-slate-500">Elevation lines and shading: bottom-left corner of the map.</p>}
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
            <button onClick={() => props.onTool("add-paving")} className={`${action} col-span-2`} title="A driveway, walkway or patio on the ground">
              <Route className="w-4 h-4 text-slate-400" /> Add a driveway or path <span className={kbd}>W</span>
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
                  <li key={b.id} className="flex items-center gap-1">
                    <button onClick={() => props.onSelect(b.id)} className={`${listButton} flex-1 min-w-0`}>
                      <Box className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm text-slate-200 truncate">{b.label?.trim() || `Building ${i + 1}`}</span>
                        <span className="block text-[11px] text-slate-500">
                          {Math.round(b.wallHeight ?? 0)} ft tall · {b.roofType && b.roofType !== "auto" ? `${b.roofType} roof` : "auto roof"}
                          {b.importSource === "osm" ? " · from map data" : ""}
                        </span>
                      </span>
                    </button>
                    <label className="flex items-center gap-1 px-1.5 text-[11px] text-slate-300 cursor-pointer shrink-0 whitespace-nowrap" title="Part of my camera plan: cameras can go on it">
                      <input type="checkbox" className="accent-emerald-500" checked={isOwnBuilding(b)} onChange={e => props.onMine(b.id, e.target.checked)} aria-label={`${b.label?.trim() || `Building ${i + 1}`} is part of my camera plan`} />
                      In plan
                    </label>
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
          {props.coverage}
          <button onClick={() => props.onTool("add-camera")} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
            <Plus className="w-4 h-4" /> Add a camera <span className="text-[10px] px-1.5 rounded bg-black/20 font-mono">C</span>
          </button>
          {buildings.length > 0 && (
            <div className={card} data-testid="plan-buildings">
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Buildings in my camera plan</div>
              <p className="text-[11px] text-slate-500 mb-1.5">Cameras go on these; Suggest cameras only uses them. Tick a garage or shed to add it.</p>
              <ul className="space-y-0.5 max-h-40 overflow-y-auto custom-scrollbar">
                {buildings.map((b, i) => {
                  const name = b.label?.trim() || `Building ${i + 1}`;
                  return (
                    <li key={b.id}>
                      <label className="flex items-center gap-2 px-1 py-0.5 rounded text-xs text-slate-200 cursor-pointer hover:bg-white/5">
                        <input type="checkbox" className="accent-emerald-500" checked={isOwnBuilding(b)} onChange={e => props.onMine(b.id, e.target.checked)} aria-label={`${name} is part of my camera plan`} />
                        <span className="truncate">{name}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
                    <li key={cam.id} className="flex items-center gap-1">
                      <button onClick={() => props.onSelect(cam.id)} className={`${listButton} flex-1 min-w-0`}>
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
                      <button onClick={() => props.onLook(cam.id)} className={lookButton} title="Look through this camera" aria-label={`Look through ${cam.label}`}>
                        <Eye className="w-4 h-4" />
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
          {cameras.length > 0 && (
            <button onClick={() => props.onLook(cameras[0].id)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20">
              <Eye className="w-4 h-4" /> Look through each camera
            </button>
          )}
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
              ? `Includes the site plan, the coverage checklist, the camera list, every camera's view, a parts list and your ${props.reportViews} added view${props.reportViews === 1 ? "" : "s"}.`
              : "Includes the site plan, the coverage checklist, the camera list, a parts list and every camera's view."}
          </p>
          <div className="space-y-2">
            <button onClick={props.onAddViewToReport} className={action}>
              <Camera className="w-4 h-4 text-slate-400" /> Add the current view to the report
            </button>
            <button onClick={props.onPlanPng} className={action}>
              <ImageIcon className="w-4 h-4 text-slate-400" /> Download the plan as an image
            </button>
            <button onClick={props.onCamerasCsv} className={action}>
              <Download className="w-4 h-4 text-slate-400" /> Download the camera list (CSV)
            </button>
            <button onClick={props.onMoreReportOptions} className={action}>
              <Download className="w-4 h-4 text-slate-400" /> More report options…
            </button>
          </div>
          <div className={card} data-testid="cabling">
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Recorder and cables</div>
            {props.cabling ? (
              <>
                <div className="text-sm text-slate-100">
                  About <b>{props.cabling.totalFt.toLocaleString("en-US")} ft</b> of network cable ({props.cabling.boxes} × 1000 ft box), a <b>{props.cabling.channels}-channel</b> PoE recorder
                </div>
                {props.cabling.longest && <div className="text-[11px] text-slate-500">Longest run: {props.cabling.longest.label}, about {props.cabling.longest.lengthFt} ft</div>}
                {props.cabling.tooLong.length > 0 && (
                  <div className="mt-1 text-[11px] text-amber-300">Over 300 ft: {props.cabling.tooLong.join(", ")}. Add a switch part way, or move the recorder.</div>
                )}
                <button onClick={props.onPlaceRecorder} className="mt-2 text-xs font-semibold text-emerald-300 hover:text-emerald-200">Move the recorder</button>
              </>
            ) : (
              <>
                <p className="text-xs text-slate-400 mb-2">Place the recorder (NVR) to get each camera's cable length and the cable to buy.</p>
                <button onClick={props.onPlaceRecorder} className={action}>
                  <HardDrive className="w-4 h-4 text-amber-300" /> Place the recorder
                </button>
              </>
            )}
          </div>
          {props.storage.widths.length > 0 && (() => {
            const e = estimateStorage(props.storage.widths, props.storage.days, props.storage.mode);
            return (
              <div className={card} data-testid="storage-estimate">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Recorder storage</div>
                <div className="flex gap-1.5 mb-2">
                  <select
                    aria-label="Days to keep"
                    value={props.storage.days}
                    onChange={e => props.storage.onDays(Number(e.target.value))}
                    className="bg-zinc-900 border border-white/10 rounded px-1.5 py-1 text-xs text-slate-200"
                  >
                    {[7, 14, 30, 60, 90].map(d => <option key={d} value={d}>{d} days</option>)}
                  </select>
                  <select
                    aria-label="Recording mode"
                    value={props.storage.mode}
                    onChange={e => props.storage.onMode(e.target.value as "continuous" | "motion")}
                    className="flex-1 bg-zinc-900 border border-white/10 rounded px-1.5 py-1 text-xs text-slate-200"
                  >
                    <option value="continuous">Record all the time</option>
                    <option value="motion">Record on motion</option>
                  </select>
                </div>
                <div className="text-sm text-slate-100">
                  About <b>{e.tb < 1 ? e.tb.toFixed(1) : Math.round(e.tb * 10) / 10} TB</b>: get a <b>{e.driveTb} TB</b> drive
                </div>
                <div className="text-[11px] text-slate-500">{props.storage.widths.length} camera{props.storage.widths.length === 1 ? "" : "s"} · ~{e.mbps} Mbps total (H.265). An estimate; night and busy scenes use more.</div>
              </div>
            );
          })()}
        </>
      )}

      {info.next && (
        <button
          onClick={() => props.onNext(props.step, info.next!)}
          className="mt-1 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 text-sm font-semibold"
        >
          Next: {STEP_INFO[info.next].title} <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
