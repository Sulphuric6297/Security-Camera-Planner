# Security Camera Planner — working rules

Static React + Vite + TypeScript app, hosted on GitHub Pages. No API keys, no backend.

## How to work: speed and accuracy first, then tests

- **Edit directly.** Use the editor's exact find-and-replace edits on the files. Don't write
  long scripts to make changes, and don't re-read or re-check things that haven't changed.
- **Make all the changes for the task, then test once at the end.** Don't run tests, builds or
  screenshots after each small edit; `npm run typecheck` is fine as a quick sanity check.
- Then run the full check below and fix whatever it points out.

## The testing rule

Work through a batch of related changes first; you don't need to run tests after every small edit.
**Before committing or pushing, the whole batch must pass the full check:**

```bash
npm run check   # typecheck + production build + full end-to-end suite (all app areas)
```

- Run the **whole** suite, not just the tests for the part you edited. The app is one large
  component (`code.tsx`) sharing one store, so an edit to one area often breaks another
  (for example, a change to building labels broke building dragging, and a change to the NVR
  layout broke undo).
- **Never commit or push with a failing check.** If a test fails, fix the app, not the test.
  Change a test only when the intended behaviour changed, and say so in the commit message.
- **Every bug fix adds a test that fails without the fix. Every new feature adds a test for
  it.** Put it in the spec for that area (see the table below).
- For larger batches, also check for flakiness: `npx playwright test --repeat-each=3`.
- CI runs the same `npm run check` on every push and pull request. Deploy to GitHub Pages
  runs only if it passes.

First-time setup: `npm ci`. Chromium is already installed in Claude Code cloud sessions.
Elsewhere, run `npx playwright install chromium`.

Useful commands:

| Command | What it does |
| --- | --- |
| `npm run typecheck` | Type errors only (fast) |
| `npx playwright test tests/e2e/camera.spec.ts` | One area, while iterating |
| `npx playwright test -g "aim handle"` | One test by name |
| `npx playwright show-trace test-results/<test>/trace.zip` | Step through a failure |

## What the suite covers (`tests/e2e/`)

| Spec | Area |
| --- | --- |
| `smoke.spec.ts` | App loads, onboarding, steps, 2D/3D/camera-wall views, tool and view shortcuts |
| `import-site.spec.ts` | Address search, drawing or moving the area, building review, auto-aligning outlines to the photo + manual nudge, imagery + elevation + building import, re-import merge |
| `plan-editing.spec.ts` | Placing every item type (top-down and tilted) at real size, vehicle types, dragging items, building corner/edge/height/rotate handles, unselected buildings pan instead of moving, undo/redo, duplicate, nudge, delete + Undo toast, map-style panning |
| `camera.spec.ts` | Aim handle sets rotation and tilt, field-of-view and range handles, dragging a camera onto a wall mounts it, lens/mount/resolution presets, DORI distances, wall mounting, building rotation |
| `terrain.spec.ts` | Contours off by default and toggleable; sculpted terrain not overwritten by elevation |
| `roof-trace.spec.ts` | Click a roof on the satellite image to trace a building |
| `persistence.spec.ts` | IndexedDB autosave restore, Save → New → Open round trip |
| `views-and-report.spec.ts` | 3D render, camera preview, 3D lighting (no fog, full-site shadows), solid roofs with photo roofs as an option + roof picker, camera wall tiles, PDF report contents (schedule, parts list, coverage checklist), camera list CSV |
| `workflow.spec.ts` | Step-driven side panel + Next, selection action bar, scale bar accuracy, zoom to fit/selection, auto-zoom + north arrow after import, shortcuts dialog, 3D snapshot menu, bigger handles on touch screens |
| `protect.spec.ts` | Marking spots to protect, checklist + score, blocked views, aim at a spot/target, outcome presets, blind-spot overlay, camera onto a building mounts on its wall, Suggest cameras (+ undo), night/infrared check |
| `coverage.spec.ts` | Coverage math: DORI level, field of view, range, under-camera blind spot, walls and trees blocking, best camera per spot, blind-spot grid (pure logic) |
| `report.spec.ts` | Report HTML sections and escaping, parts list grouping, CSV escaping, compass directions, recorder storage estimate (pure logic) |
| `suggest.spec.ts` | "Suggest cameras": wall mounts that meet each spot's goal, one camera for nearby spots, nothing for covered spots, pole fallback (pure logic) |
| `align.spec.ts` | Lining footprints up with aerial imagery (pure logic, synthetic scenes) |
| `geometry.spec.ts` | Plan geometry helpers such as clipping footprints to the site (pure logic) |
| `buildings3d.spec.ts` | 3D roofs: roof choice, gable/hip/flat geometry, photo texture coordinates, exact wall height (pure logic) |
| `items.spec.ts` | New items at real-world size for any map scale, old-save migration (pure logic) |
| `detect.spec.ts` | Finding tree crowns and parked cars on an aerial photo, ignoring lawns and shadows (pure logic) |

When you add a feature in a new area, add a new spec file and a row to this table.

## How the tests work

- `tests/e2e/fixtures.ts` **stubs all network traffic.** Tiles, geocoding, Overpass, USA
  Structures and elevation return fixed local data. So tests are fast, deterministic and
  offline, and they never call real map services. If you add a new external service, stub it
  there (anything not stubbed is aborted).
- The `test` fixture starts each test with empty storage and fails the test on any uncaught
  page error.
- Tests read the app state through `window.__scpProject()` (zustand store), `window.__scpHistory`,
  `window.__scpThree()` (3D scene), `window.__scpView` (the map view: `toClient`, `toPlan`, `screenBox`,
  `viewInfo`) and `window.__scpSelect(id)`. Keep these hooks. Fixture helpers `screenOf`, `itemBox`,
  `handleCenter` and `drag` find things on screen through them.
- The map view's container has `data-testid="plan"`. Selection handles are `[data-handle=...]`
  (corner, mid, height, rotate, aim, fov-l, fov-r, range, cam-height, radius); target pins are
  `data-testid="target-pin"`. Prefer roles, titles and test ids over CSS classes in selectors.
- Keep test titles ASCII. Playwright's `setFiles` silently fails when a test's output path
  contains characters like "→".

## Design direction

`docs/REDESIGN.md` holds the research-based UX plan, organized in phases. Read it before UI work, and
keep it updated as phases ship.

## Project conventions

- Plan units are feet. Plan (x, y) maps to 3D world (x, z), with Y up. Camera rotation 0° = +x,
  clockwise on screen.
- Saved-document state lives in `src/state/project.ts` (zustand). UI-only state stays in components.
- New items come from `createItem` in `src/lib/items.ts`, with sizes in real feet times
  `unitsPerFoot`. Never hard-code sizes in placement code.
- Pure logic goes in `src/lib/` (geo, camera, terrain, geometry, planGeom). UI pieces go in
  `src/components/`. The map view (2D and 3D are one view) is `src/viewport/`: `SiteView.ts` is the
  engine (scene, camera-controls navigation, picking, handles), `SiteViewport.tsx` its React wrapper.
  The printed plan is drawn by `src/lib/planSvg.ts`.
- Changes are developed on a feature branch. Do not merge or deploy to `main` without the
  owner's OK.
