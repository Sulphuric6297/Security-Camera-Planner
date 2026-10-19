# Security Camera Planner — working rules

Static React + Vite + TypeScript app, hosted on GitHub Pages. No API keys, no backend.

## Privacy (never break this)

- **Never put the owner's personal details in the repository**: not their address, street, town,
  ZIP code, the coordinates of their property, their name or email, photos or screenshots of
  their place, or anything else personal. That covers code, tests, fixtures, docs, file names,
  commit messages, pull requests and the deployed site. The repository is public.
- Examples, fixtures and walkthroughs use made-up places ("123 Main St, Springfield").
- The owner's own plan files and screenshots of them stay local (scratch folders, git-excluded
  `zz-*` files) and are never committed. Git authors use the owner's GitHub no-reply email.

## How to work

- **Look at the real app, not just the tests.** Tests check stored numbers; they don't show
  whether the screen looks right or is easy to use. For any UI change or UI bug:
  1. Reproduce it on screen first: `npm run look` (screenshots of the main screens, see below).
  2. Fix it.
  3. Look again at the same screens and compare.
  4. Show the user the before/after screenshots.
- **Say only what you have seen.** Describe a feature as working only after using it in the
  browser. Say "live" only after the deployed site serves the new build. If something is still
  deploying, unchecked or a guess, say so plainly.
- **Edit directly** with exact find-and-replace edits; keep changes focused.
- Run the full check once a batch of changes is done (not after every small edit).

## The testing rule

Every change is tested, **once** in full: by CI on its pull request. Don't repeat the full suite.

- **While working and before pushing:** `npm run typecheck`, `npm run build`, and the spec files
  for the areas you changed (`npx playwright test tests/e2e/<area>.spec.ts`, see the table
  below). Not the whole suite: CI runs that.
- **The pull request's CI run is the gate:** the full suite (`npm run check`) runs there. If it
  fails, fix it and push; re-run locally only the failing spec files, never everything again.
- **Never merge with a failing CI run.** If a test fails, fix the app, not the test. Change a
  test only when the intended behaviour changed, and say so in the commit message.
- **Every bug fix adds a test that fails without the fix. Every new feature adds a test for
  it.** Put it in the spec for that area (see the table below). The app is one large component
  (`code.tsx`) sharing one store, so an edit to one area can break another: that's what the
  full CI run is for.
- **When the owner says publish, publish:** merge as soon as the pull request is green (or, if
  they ask for it now, deploy the build to `gh-pages` straight away) and don't wait on any
  further runs.
- Check a new or changed test for flakiness on its own: `npx playwright test <spec> --repeat-each=3`.

First-time setup: `npm ci`. Chromium is already installed in Claude Code cloud sessions.
Elsewhere, run `npx playwright install chromium`.

Useful commands:

| Command | What it does |
| --- | --- |
| `npm run look` | Build, then screenshot the main screens into `look/` (add `-- -g camera` for one) |
| `npm run typecheck` | Type errors only (fast) |
| `npx playwright test tests/e2e/camera.spec.ts` | One area, while iterating |
| `npx playwright test -g "aim handle"` | One test by name |
| `npx playwright show-trace test-results/<test>/trace.zip` | Step through a failure |

## What the suite covers (`tests/e2e/`)

| Spec | Area |
| --- | --- |
| `smoke.spec.ts` | App loads, onboarding, steps, 2D/3D/camera-wall views, tool and view shortcuts |
| `import-site.spec.ts` | Address search, drawing or moving the area, building review, auto-aligning outlines to the photo + manual nudge, imagery + elevation + building import, re-import merge |
| `plan-editing.spec.ts` | Placing every item type (top-down and tilted) at real size, vehicle types, dragging items, building corner/edge/height/rotate handles, unselected buildings pan instead of moving, undo/redo, duplicate, nudge, delete + Undo toast, map-style panning, wheel zoom never spins a turned view, vehicles shown as their real 3D model (length, paint) |
| `camera.spec.ts` | Aim handle sets rotation and tilt, field-of-view and range handles, dragging a camera onto a wall mounts it, lens/mount/resolution presets, DORI distances, wall mounting, building rotation |
| `terrain.spec.ts` | Contours off by default and toggleable; sculpted terrain not overwritten by elevation; the brush works as fast at a low frame rate; Woods brush plants/clears trees, with Undo |
| `roof-trace.spec.ts` | Click a roof on the satellite image to trace a building |
| `persistence.spec.ts` | IndexedDB autosave restore, Save → New → Open round trip, Recent plans (New keeps the plan, Undo, reopen, delete, duplicate) |
| `views-and-report.spec.ts` | 3D render, camera preview, trees in front of the house see-through (but not the selected one), 3D lighting (no fog, full-site shadows), solid roofs with photo roofs as an option + roof picker, walls with siding/windows and doors at marked door spots, camera wall tiles, PDF report contents (schedule, parts list, coverage checklist), camera list CSV |
| `workflow.spec.ts` | Step-driven side panel + Next, selection action bar, scale bar accuracy, zoom to fit/selection, auto-zoom + north arrow after import, shortcuts dialog, 3D snapshot menu, bigger handles on touch screens, picking from a side list brings the item into view |
| `protect.spec.ts` | Marking spots to protect, checklist + score, blocked views, aim at a spot/target, outcome presets, blind-spot overlay, camera onto a building mounts on its wall, Suggest cameras (+ undo), Fix a spot (aim + zoom the best camera, or turn an idle one), spots renamed for their kind, buildings in the camera plan, open-sided buildings don't block, drawing porch/carport parts of a house (cameras see under them, Esc, remove one), night/infrared check |
| `coverage.spec.ts` | Coverage math: DORI level, field of view, range, under-camera blind spot, walls and trees blocking, best camera per spot, blind-spot grid, wide-lens curve (pure logic) |
| `report.spec.ts` | Report HTML sections and escaping, parts list grouping, CSV escaping, compass directions, recorder storage estimate (pure logic) |
| `suggest.spec.ts` | "Suggest cameras": wall mounts that meet each spot's goal, one camera angled to take in several spots, nothing for covered spots, pole fallback (pure logic) |
| `align.spec.ts` | Lining footprints up with aerial imagery (pure logic, synthetic scenes) |
| `geometry.spec.ts` | Plan geometry helpers such as clipping footprints to the site; wall cameras stay outside L-shaped houses, walls left around porch/carport parts, windows and doors (automatic layout, a door replaces the window it overlaps) (pure logic) |
| `buildings3d.spec.ts` | 3D roofs: roof choice, gable/hip/flat geometry, photo texture coordinates, exact wall height, facade window bays, doors on walls, light soffits under eaves, open-sided buildings (porch, carport), houses with porch/carport parts (no walls there, posts, walls face out) (pure logic) |
| `items.spec.ts` | New items at real-world size for any map scale, the 3D car exactly its stated length, old-save migration (pure logic) |
| `pov.spec.ts` | Looking through a camera: Enter/Look through, drag to aim, scroll to zoom the lens, arrows/thumbnails/Tour switch cameras, Esc back, Night (infrared) view, the picture fills the window with Settings beside it, closing with its X/tabs/steps; camera pictures rendered from the 3D scene |
| `cabling.spec.ts` | Recorder and cable runs: run lengths, 300 ft limit, recorder size (pure logic); placing/moving the recorder, cable runs on the map, totals in the Report step and PDF |
| `detect.spec.ts` | Finding tree crowns and parked cars on an aerial photo, ignoring lawns and shadows; a hand-labelled real satellite photo of a parking lot (`tests/fixtures/aerial`) (pure logic) |
| `house-editing.spec.ts` | Hands-on editing of a porch house (mouse and keyboard, checked on screen): the picked door's dot on the door, windows dragged up the wall and the bottom square for the sill, locked houses still edit their windows/porches but don't move, copy/paste windows (Ctrl+C/V) and porches (right-click), steps from a railing's right-click, menus stay on screen, cameras under porches and carports, floor height (crawl space) |
| `paving.spec.ts` | Driveways, walkways and patios: draped on sloping ground, cut to the terrain grid, a drawn driveway becomes the spot to protect (pure logic); placing one with W, surface/kind, corner and bend handles |

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
- Vehicles are real 3D models: `public/models/cars/pack/*.glb` (one small file per type, split from
  the "Generic passenger car pack" by Comrade1280, CC BY 4.0, credited in the shortcuts dialog;
  the body texture's alpha marks the paint). `src/three/vehicleModels.ts` loads them on demand;
  the generated car in `src/three/models.ts` stands in until one has loaded (and in node tests).
- Real camera models live in `public/cameras.json` (a copy is built in from `src/data/cameras.json`;
  `src/lib/cameraCatalog.ts` loads the site's copy at start-up). The UniFi entries are refreshed
  weekly by `.github/workflows/update-cameras.yml` (`scripts/update-camera-catalog.mjs`); edit the
  other brands by hand in both files.
- Changes are developed on a feature branch. Do not merge or deploy to `main` without the
  owner's OK.
