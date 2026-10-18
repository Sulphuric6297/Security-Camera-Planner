import React, { useEffect } from "react";
import { X } from "lucide-react";

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
const mod = isMac ? "⌘" : "Ctrl";

const GROUPS: { title: string; keys: [string, string][] }[] = [
  {
    title: "Tools",
    keys: [
      ["V", "Select / move"],
      ["C", "Place a camera"],
      ["B", "Add a building"],
      ["R", "Trace a roof from the map"],
      ["T", "Add a tree"],
      ["P", "Add a vehicle"],
      ["L", "Add text"],
      ["Esc", "Cancel / deselect"]
    ]
  },
  {
    title: "View",
    keys: [
      ["2", "2D plan"],
      ["3", "3D view"],
      ["0", "Zoom to fit the whole site"],
      ["F", "Zoom to the selection"],
      ["Scroll", "Zoom"],
      ["Space + drag", "Pan"],
      ["?", "This list"]
    ]
  },
  {
    title: "Edit",
    keys: [
      [`${mod}+Z`, "Undo"],
      [`${mod}+Shift+Z`, "Redo"],
      [`${mod}+D`, "Duplicate"],
      [`${mod}+C / ${mod}+V`, "Copy / paste"],
      ["Delete", "Delete the selection"],
      ["Arrows", "Nudge 1 ft (Shift: 10 ft)"],
      ["Shift+click edge", "Add a corner to a building"],
      [`${mod}+S`, "Save the plan"]
    ]
  }
];

export function ShortcutsDialog({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "?") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-label="Keyboard shortcuts"
        className="w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl p-6"
        onMouseDown={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-100">Keyboard shortcuts</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg" title="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {GROUPS.map(g => (
            <div key={g.title}>
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-2">{g.title}</div>
              <ul className="space-y-1.5">
                {g.keys.map(([k, what]) => (
                  <li key={k} className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-slate-300">{what}</span>
                    <kbd className="shrink-0 text-[11px] px-1.5 py-0.5 rounded bg-white/10 text-slate-200 font-mono">{k}</kbd>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
