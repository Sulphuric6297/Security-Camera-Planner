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
  CircleHelp,
  Copy,
  Trash2
} from "lucide-react";
import type { ViewMode } from "../types";
import type { PlanMeta } from "../lib/storage";

export type WorkflowStepId = "site" | "buildings" | "cameras" | "review" | "report";

type Props = {
  projectName: string;
  onRename: (name: string) => void;
  onNew: () => void;
  /** Open a saved plan file. */
  onOpen: () => void;
  onSave: () => void;
  /** Earlier plans kept in this browser (the open one is not listed). */
  recentPlans: PlanMeta[];
  onRecentMenu: () => void;
  onOpenRecent: (id: string) => void;
  onDeleteRecent: (id: string) => void;
  onDuplicate: () => void;
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
  const [openMenu, setOpenMenu] = useState(false);
  const openRef = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    if (!openMenu) return;
    const close = (e: MouseEvent) => {
      if (openRef.current && !openRef.current.contains(e.target as Node)) setOpenMenu(false);
    };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenMenu(false); };
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("mousedown", close); window.removeEventListener("keydown", esc); };
  }, [openMenu]);

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
          <div className="relative" ref={openRef}>
            <button
              onClick={() => { if (!openMenu) props.onRecentMenu(); setOpenMenu(o => !o); }}
              className={`${iconBtn} ${openMenu ? "text-white bg-white/10" : ""}`}
              title="Open plan"
              aria-expanded={openMenu}
            >
              <FolderOpen className="w-4 h-4" />
            </button>
            {openMenu && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl p-1.5 z-50" role="menu" aria-label="Open plan">
                <div className="px-3 pt-1.5 pb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Recent plans</div>
                {props.recentPlans.length === 0 ? (
                  <div className="px-3 pb-2 text-xs text-slate-400">None yet. When you start a new plan, this one is kept here.</div>
                ) : (
                  <ul className="max-h-72 overflow-y-auto" aria-label="Recent plans">
                    {props.recentPlans.map(p => (
                      <li key={p.id} className="group flex items-center rounded-lg hover:bg-white/10">
                        <button
                          role="menuitem"
                          className="flex-1 min-w-0 px-3 py-2 text-left"
                          onClick={() => { setOpenMenu(false); props.onOpenRecent(p.id); }}
                          aria-label={`Open ${p.name}`}
                        >
                          <div className="text-sm text-slate-100 truncate">{p.name}</div>
                          <div className="text-[11px] text-slate-400">
                            {p.cameras} camera{p.cameras === 1 ? "" : "s"} · {p.buildings} building{p.buildings === 1 ? "" : "s"} · {new Date(p.updatedAt).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                          </div>
                        </button>
                        <button
                          className="p-2 mr-1 rounded-md text-slate-500 hover:text-red-300 hover:bg-white/10"
                          onClick={() => props.onDeleteRecent(p.id)}
                          aria-label={`Delete ${p.name}`}
                          title="Delete this plan (you can undo)"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="border-t border-white/10 mt-1 pt-1">
                  <button className={menuItem} role="menuitem" onClick={() => { setOpenMenu(false); props.onOpen(); }}>
                    <Upload className="w-4 h-4 text-slate-400" /> Open a saved file…
                  </button>
                  <button className={menuItem} role="menuitem" onClick={() => { setOpenMenu(false); props.onDuplicate(); }}>
                    <Copy className="w-4 h-4 text-slate-400" /> Duplicate this plan
                  </button>
                </div>
              </div>
            )}
          </div>
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
