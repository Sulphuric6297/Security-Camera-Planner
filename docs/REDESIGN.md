# UX redesign plan

Goal: **super easy for a homeowner, still feature-rich for an installer.** This plan combines research
on comparable tools with an audit of every screen in the current app. Each phase ships on its own,
passes `npm run check`, and adds tests (see `CLAUDE.md`).

## Research summary

The closest tools are camera designers (Axis Site Designer, IPVM Camera Calculator, JVSG IP Video
System Design Tool, UniFi Design Center, Hik-Partner Pro) and solar layout tools (Aurora, OpenSolar,
Google Project Sunroof). The solar tools have the same flow: address → roof → place things → report.
What makes the best of them easy:

1. **Start from the address and do the work automatically.** Ask only "does this look right?"
   (Sunroof, Aurora). *We have this; keep it.*
2. **Use a stepper for the order of work, on one canvas you can always edit.** Users need to see where
   they are in the job but must never be locked into a wizard (Aurora sales mode, NN/g staged disclosure).
3. **Lead with outcomes, not specs.** "See faces at the front door" beats "6 mm lens, 4 MP" (Axis Camera
   Selector, System Surveyor Camera Advisor). Put specs under *Advanced*.
4. **Give a coverage verdict, not just pretty cones.** Mark what to protect, then get a checklist
   ("Front door: faces ✓ · Back door: not covered ✗") and blind spots (IPVM blind-spot map, JVSG dead
   zones, UniFi coverage preview).
5. **Use direct manipulation with live numbers.** Drag to aim, click a target to aim at it, and see
   distance and detail level while dragging (IPVM, Axis).
6. **Show the camera view next to the plan, live** (IPVM simulated view, JVSG 3D view).
7. **Use contextual, tiered controls.** Selecting something shows only what matters for it. A small
   floating bar holds its actions (SketchUp, Figma).
8. **Make empty states teach the next step, and keep undo forgiving everywhere** (NN/g).
9. **Generate the report from the design without re-entering anything.** Include an overview with
   numbered cameras, a page per camera, a coverage summary and a parts list (Axis BOM, UniFi PDF,
   JVSG proposals).
10. **Support touch:** handles ≥ 24 px (WCAG 2.5.8) with ≥ 44 px hit areas.

Anti-patterns to avoid: a blank canvas, specs first, every control at once, wizard lock-in, coverage
with no verdict, color-only meaning, confirm dialogs instead of undo, hidden shortcuts, tiny handles,
and previews that look exact without saying they are estimates.

## Audit of the current app (what to fix)

| Area | Problem |
| --- | --- |
| Header | "Report" appears twice (step 5 and the button). The steps don't change what the panel shows, so they feel decorative. The view tabs and steps compete. |
| Left toolbar | Icon-only with tiny letter hints. "Edit terrain" and "map" icons are unclear. |
| Side panel | The overview is good. The inspectors for vehicle, building and tree show everything at once, including leftovers (emoji vehicle buttons, X/Y fields). |
| 2D plan | No scale bar or north arrow, and no zoom-to-fit / zoom-to-selection. After importing a big site, the house is a speck. |
| Camera | Good setup panel (mount, lens, coverage distances, side view), but no verdict about what it covers. The preview floats over the plan. |
| 3D | Plain gray boxes: no roof shape, roofs not textured with the photo, blobby trees, a tiny camera model, five separate buttons (Set 3D BG, Take/Download Snapshot, Add to Report, Reset View). |
| Camera wall | Fine, but the empty state should offer "Add a camera". |
| Report | Technical "Scale" and "Padding" fields. A white body inside a dark app. "Plan PNG / Report PNG / Report PDF" is confusing. |
| Scale | ✅ Fixed: objects are now real size at any map scale (`src/lib/items.ts`). |
| Import | ✅ Good. Outlines now line up with the photo automatically, with nudges as a fallback. |

## Phases

### Phase 1: 3D that looks real (in progress: photo roofs, roof shapes, trees and real-size cameras/cars done)
- Texture roof tops with the aerial photo (project the plan image onto each roof), so 3D buildings
  look like the satellite view from above.
- Give roofs real shapes: flat or gable (hip/gable for houses, flat for large commercial
  footprints), with an inspector toggle. Add eaves and a parapet, and use a stucco/siding wall
  material tinted from the building color.
- Add a sky gradient with soft hemisphere light and sun shadows covering the site (done),
  plus a subtle ground contact shadow.
- Improve the trees (layered deciduous canopy, conifer cones, palm, bush). Give camera models
  (bullet, dome, turret) real size, with an always-visible color marker so they can be found
  from far away.
- Tests: roof meshes get the photo texture, roof type switch, model sizes sane, no WebGL errors.

### Phase 2: a simpler, step-driven interface (done, except touch-size handles)
- **The steps drive the side panel.** Site = import/re-import, map, elevation. Buildings = list,
  trace a roof, add or draw. Cameras = camera list, add, outcome presets. Review = coverage
  checklist and blind spots (phase 3). Report = the report builder (phase 4). Remove the duplicate
  "Report" button.
- **Floating action bar** next to the selection: duplicate, delete, rotate, aim-at (camera),
  lock. Inspectors get *Basic* and *Advanced* tiers, and the leftovers are removed.
- **2D essentials:** scale bar, north arrow, zoom-to-fit (`0`), zoom to selection (`F`).
  After an import, zoom to the buildings.
- **3D toolbar:** Reset view, Snapshot ▾ (download / add to report). The background goes under More.
- A shortcuts overlay (`?`), tooltips with shortcuts on every tool, and touch-size handles.
- Tests: step → panel mapping, action bar actions, zoom-to-fit, scale bar length correct at 2
  map scales, shortcut overlay.

### Phase 3: coverage you can trust (done; door suggestions still to do)
- **"What to protect":** click to add targets (door, gate, driveway, window, area) with a goal
  (identify / recognize / detect). Suggest doors along the building edges.
- **Coverage checklist + score** in Review: for each target, the best camera and the level reached,
  using line of sight blocked by buildings, plus overall % of targets met.
- **Blind-spot overlay:** shade site areas no camera sees (respecting walls).
- **Aim-at mode:** click a target or point and the camera's pan and tilt center it. Live readout
  while dragging the aim handle.
- **Outcome presets** on cameras: "See faces at the door", "Watch the driveway", "Read plates"
  → lens, resolution, tilt.
- Tests: line-of-sight blocking, target levels against hand-computed DORI, the checklist updates
  on aim, aim-at math.

### Phase 4: a one-click professional report (done)
- Cover page with the site overview and numbered camera badges, coverage summary and checklist,
  then a page per camera (view, DORI distances, mount, aim, targets covered). Add a parts list
  (cameras by model/lens) with a CSV export. Move scale and padding under Advanced, and match the
  dark style.
- Tests: the PDF contains every section; the CSV lists each camera.

### Phase 5: smart helpers
- **Suggest cameras:** a greedy layout that covers every target from eave corners, then the user
  edits it.
- Night/IR range, storage estimate (days × bitrate), measure tool.

## Principles for every change
- Keep the plan the single canvas. Steps only change the panel and hints, never lock the user in.
- Every action is undoable. Use toasts with Undo, not confirm dialogs.
- Real units everywhere (feet, with meters secondary). Sizes come from `src/lib/items.ts`.
- Never rely on color alone: always pair it with a label or icon.
- Every bug fix or feature gets a test, and `npm run check` must pass before a commit.
