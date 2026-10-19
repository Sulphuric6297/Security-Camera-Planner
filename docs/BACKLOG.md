# Backlog (from the October usability and feature reviews)

Goal: plotting a camera system for one or more buildings is easy, feature-rich and fun, and you can
**see what each camera will see** (camera point of view is the heart of the app).

## Camera point of view (top priority)
- [x] Camera views rendered from the real scene (same models, shadows, lighting), with sky, haze and ground to the horizon.
- [x] Full-screen "look through camera" mode: drag to aim, scroll to zoom the lens, arrows to switch cameras, thumbnails of every camera, Esc back to the map.
- [ ] CCTV look: name + time overlay, night/infrared view.
- [x] Better 3D: cars, trees, ground beyond the site.
- [ ] Building walls: siding, windows, doors.

## Detection and shapes
- [x] Trees: canopy vs lawn by darkness + leaf texture, shadow edges ignored, touching crowns split (tuned on labelled NEON photos: ~1% -> ~50% of crowns in dense forest).
- [x] Cars: compared with the pavement around them (any paint), rows of parked cars split.
- [x] Traced roofs: edges snapped to the photo's edges; angled outlines kept.
- [ ] Real suburban test imagery for cars (none reachable from the sandbox).

## Wrong results / lost work
- [x] Adding one view to the report drops the site plan and camera views from the PDF (code.tsx buildReport, src/lib/report.ts).
- [x] Most inspector edits can't be undone (updateItem never saves history; chips/selects/sliders).
- [x] Clicking near a wall mounts the camera at wall top − 1 ft (23 ft on a 2-storey house): faces never met. Default to ~9–10 ft; outcome presets set height.
- [ ] Save always downloads security_project.zip; New wipes the only autosave via window.confirm.
- [ ] "Download PDF report" opens a print popup (blocked by popup blockers).

## Workflow and guidance
- [ ] One vocabulary for detail levels everywhere (Faces / People / Activity / Motion; DORI in tooltips).
- [x] Cameras step: "What to protect" first.
- [ ] Review read-only with failing spots + fix actions, per-camera "covers".
- [x] Suggest cameras dead-end when no building is "mine": inline checklist; "mine" checkbox in the buildings list.
- [ ] Selecting from side lists should bring the item into view.
- [x] Start screen: one CTA (side panel points to the welcome card).
- [ ] Hide Next until imported; "blank grid" shouldn't switch to Add camera.
- [ ] One name per action (import, camera wall, project name).
- [ ] Review photo-detected trees/cars (list, remove all).
- [ ] Auto-fit after import: frame the user's building, pad for dock/legends.

## Too many / duplicate controls
- [ ] Camera inspector: one aim section, one mount system, one lens control; verdict line on top; camera number in header.
- [ ] "Add to report" in 5 places with 5 labels; show picked views in the Report step.
- [ ] Cone toggles in 3 places; keep one in the legend.
- [ ] Report options dialog duplicates the Report step.

## Vestigial UI to remove
- [ ] Plan settings: label font defaults, canvas px sizes, map px offsets, 3D environment/panorama/HDRI, stats, Clear canvas, isometric snapshot text.
- [ ] Snapshot menu: "Keep in snapshots", "Set 3D background image".
- [ ] Terrain sculpt tool/panel/DEM guide jargon (move own-elevation upload to Site → Advanced).
- [x] LIVE badges on the camera wall; unused code, backup files (noUnusedLocals is on).
- [ ] Tree emoji buttons, vehicle 24 colors + 8 rotation buttons, building vertex buttons, image overlay leftovers, "Connector Dash Size".

## Feedback, layout, keys
- [ ] One status stack centered in the visible map (toast, hint, "show camera view", vertex hint).
- [ ] Distinct icons per meaning (mountain, wand, rotate).
- [ ] Display toggle "Off" shown as active green; put the toggle in the Site step.
- [ ] Selection bar: no rotate for spots/wall cameras; add Aim and Camera view for cameras.
- [x] Map badge shows camera number; offset from mount point.
- [ ] Choose "what should it see" before placing a camera.
- [x] Keys: tilt tooltip, Esc closes the camera view.
- [ ] Keys: arrows slide wall cameras; A = aim; Tab cycles; list Ctrl+G/Ctrl+Y.

## Productivity / repeatability (feature gap analysis)
- [x] Consistent camera numbering (next free number) + Renumber.
- [ ] Sticky camera defaults ("next camera like the last").
- [ ] Copy/paste camera settings (Ctrl+Shift+C/V).
- [ ] Saved camera templates ("My cameras") with model/price.
- [ ] Duplicate keeps wall mount (slides along the wall); Alt-drag duplicate.
- [ ] Camera table with "set all" per column.
- [ ] Multi-select + batch edit.
- [ ] Re-run Suggest (replace unlocked suggested cameras), options.
- [ ] Bill of materials with prices; recorder/switch item + cable lengths.
- [ ] Copy a building's camera layout to another building.
- [ ] Project library: recent plans, duplicate plan.
- [ ] Lock items; layer visibility.
- [ ] Measure tool.
- [ ] Coverage-level heatmap.
- [ ] Camera tour; command palette; Good/Better/Best options; completion delight.
