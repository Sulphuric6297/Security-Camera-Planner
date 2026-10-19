import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  Check,
  ChevronDown,
  FolderOpen,
  Image as ImageIcon,
  LayoutGrid,
  Map as MapIcon,
  MoreHorizontal,
  Mountain,
  Plus,
  Save,
  Settings,
  Square,
  Upload,
  Eye,
  FileText,
  Keyboard,
  PanelLeft,
  CircleHelp
} from "lucide-react";
import type { ViewMode } from "../types";

export type WorkflowStepId = "site" | "buildings" | "cameras" | "review" | "report";

type Props = {
  projectName: string;
  onRename: (name: string) => void;
  onNew: () => void;
  onOpen: () => void;
  onSave: () => void;
  stepsDone: Record<WorkflowStepId, boolean>;
  /** The step whose panel is showing. */
  activeStep: WorkflowStepId;
  onStep: (step: WorkflowStepId) => void;
  viewMode: ViewMode;
  onViewMode: (mode: ViewMode) => void;
  onSettings: () => void;
  onUploadBaseMap: () => void;
  onAddOverlay: () => void;
  onAddViewToReport: () => void;
  onShortcuts: () => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  className?: string;
};

const STEPS: { id: WorkflowStepId; label: string; icon: React.ComponentType<{ className?: string }>; hint: string }[] = [
  { id: "site", label: "Site", icon: Mountain, hint: "Import your property: satellite map, elevation and buildings" },
  { id: "buildings", label: "Buildings", icon: Square, hint: "Add or adjust buildings, trees and vehicles" },
  { id: "cameras", label: "Cameras", icon: Camera, hint: "Place and aim cameras" },
  { id: "review", label: "Review", icon: Eye, hint: "Check coverage in 3D and each camera's view" },
  { id: "report", label: "Report", icon: FileText, hint: "Export a PDF-ready report" }
];

/** Top bar: project, the guided steps, view switcher and less-used actions in a "More" menu. */
export function AppHeader(props: Props) {
  const { projectName, stepsDone, viewMode } = props;
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(projectName);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentStep = props.activeStep;

  useEffect(() => setNameDraft(projectName), [projectName]);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, [menuOpen]);

  const commitName = () => {
    setEditingName(false);
    const name = nameDraft.trim();
    if (name && name !== projectName) props.onRename(name);
    else setNameDraft(projectName);
  };

  const iconBtn = "p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors";
  const menuItem = "w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 rounded-lg text-left";

  return (
    <header className={`h-14 bg-zinc-900 border-b border-white/10 z-40 flex items-center gap-3 px-3 ${props.className ?? ""}`}>
      {/* Project */}
      <div className="flex items-center gap-2 min-w-0 shrink">
        <button
          onClick={props.onToggleSidebar}
          className={`${iconBtn} ${props.sidebarOpen ? "text-white bg-white/10" : ""}`}
          title={props.sidebarOpen ? "Hide the steps panel" : "Show the steps panel"}
          aria-label="Toggle steps panel"
          aria-pressed={props.sidebarOpen}
        >
          <PanelLeft className="w-4 h-4" />
        </button>
        <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <Camera className="w-5 h-5" />
        </div>
        {editingName ? (
          <input
            autoFocus
            value={nameDraft}
            onChange={e => setNameDraft(e.target.value)}
            onBlur={commitName}
            onKeyDown={e => {
              if (e.key === "Enter") commitName();
              if (e.key === "Escape") { setNameDraft(projectName); setEditingName(false); }
            }}
            className="w-44 bg-zinc-950 border border-white/20 rounded-md px-2 py-1 text-sm font-semibold text-slate-100 outline-none focus:border-emerald-500"
          />
        ) : (
          <button
            onClick={() => setEditingName(true)}
            title="Rename project"
            className="text-base font-bold text-slate-200 tracking-tight truncate max-w-[12rem] hover:text-white"
          >
            {projectName}
          </button>
        )}
        <div className="flex items-center shrink-0">
          <button onClick={props.onNew} className={iconBtn} title="New plan"><Plus className="w-4 h-4" /></button>
          <button onClick={props.onOpen} className={iconBtn} title="Open plan"><FolderOpen className="w-4 h-4" /></button>
          <button onClick={props.onSave} className={iconBtn} title="Save plan (Ctrl/⌘+S)"><Save className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Guided steps */}
      <nav className="flex-1 flex items-center justify-center min-w-0" aria-label="Steps">
        <ol className="flex items-center gap-1 rounded-xl bg-black/20 p-1 border border-white/5 overflow-x-auto">
          {STEPS.map((step, i) => {
            const done = stepsDone[step.id];
            const current = step.id === currentStep;
            return (
              <li key={step.id} className="flex items-center">
                {i > 0 && <span className="w-3 h-px bg-white/10 mx-0.5 hidden xl:block" />}
                <button
                  onClick={() => props.onStep(step.id)}
                  title={step.hint}
                  aria-current={current ? "step" : undefined}
                  data-done={done ? "true" : "false"}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${current
                    ? "bg-emerald-600 text-white shadow"
                    : done
                      ? "text-emerald-300 hover:bg-white/10"
                      : "text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${done && !current ? "bg-emerald-500/20" : current ? "bg-white/20" : "bg-white/10"}`}>
                    {done ? <Check className="w-3 h-3" /> : i + 1}
                  </span>
                  <span className="hidden lg:inline">{step.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Views + actions */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5" role="tablist" aria-label="View">
          {([
            { id: "plan", label: "2D", title: "Plan view (2)" },
            { id: "iso3d", label: "3D", title: "3D view (3)" },
            { id: "nvr", label: <LayoutGrid className="w-4 h-4" />, title: "Camera wall: every camera's view" }
          ] as { id: ViewMode; label: React.ReactNode; title: string }[]).map(v => (
            <button
              key={v.id}
              role="tab"
              title={v.title}
              aria-selected={viewMode === v.id}
              onClick={() => props.onViewMode(v.id)}
              className={`px-3 h-7 flex items-center rounded-md text-sm font-bold transition-all ${viewMode === v.id ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="relative" ref={menuRef}>
          <button onClick={() => setMenuOpen(o => !o)} className={`${iconBtn} flex items-center gap-1`} title="More" aria-expanded={menuOpen}>
            <MoreHorizontal className="w-4 h-4" />
            <ChevronDown className="w-3 h-3" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-60 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl p-1.5 z-50">
              {[
                { icon: Settings, label: "Plan settings", action: props.onSettings },
                { icon: Upload, label: "Use my own map image…", action: props.onUploadBaseMap },
                { icon: ImageIcon, label: "Add image overlay…", action: props.onAddOverlay },
                { icon: MapIcon, label: "Add this view to report", action: props.onAddViewToReport },
                { icon: Keyboard, label: "Keyboard shortcuts (?)", action: props.onShortcuts }
              ].map(item => (
                <button key={item.label} className={menuItem} onClick={() => { setMenuOpen(false); item.action(); }}>
                  <item.icon className="w-4 h-4 text-slate-400" />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button onClick={props.onShortcuts} className={iconBtn} title="Keyboard shortcuts and help (?)" aria-label="Help">
          <CircleHelp className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
