# Security Camera Planner — working rules

Static React + Vite + TypeScript app, hosted on GitHub Pages. No API keys, no backend.

## The testing rule (mandatory after every change)

**Every change, however small, must pass the full check before it is committed:**

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
- Before calling a change done, check for flakiness: `npx playwright test --repeat-each=3`.
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
| `plan-editing.spec.ts` | Placing every item type (2D and 3D) at real size, vehicle types, dragging, adding corners, undo/redo, duplicate, nudge, delete + Undo toast, panning |
| `camera.spec.ts` | Aim handle matches the stored rotation, lens/mount/resolution presets, DORI distances, wall mounting, building rotation |
| `terrain.spec.ts` | Contours off by default and toggleable; sculpted terrain not overwritten by elevation |
| `roof-trace.spec.ts` | Click a roof on the satellite image to trace a building |
| `persistence.spec.ts` | IndexedDB autosave restore, Save → New → Open round trip |
| `views-and-report.spec.ts` | 3D render, camera preview, 3D lighting (no fog, full-site shadows), camera wall tiles, PDF report contents |
| `align.spec.ts` | Lining footprints up with aerial imagery (pure logic, synthetic scenes) |
| `geometry.spec.ts` | Plan geometry helpers such as clipping footprints to the site (pure logic) |
| `items.spec.ts` | New items at real-world size for any map scale, old-save migration (pure logic) |

When you add a feature in a new area, add a new spec file and a row to this table.

## How the tests work

- `tests/e2e/fixtures.ts` **stubs all network traffic.** Tiles, geocoding, Overpass, USA
  Structures and elevation return fixed local data. So tests are fast, deterministic and
  offline, and they never call real map services. If you add a new external service, stub it
  there (anything not stubbed is aborted).
- The `test` fixture starts each test with empty storage and fails the test on any uncaught
  page error.
- Tests read the app state through `window.__scpProject()` (zustand store) and
  `window.__scpHistory`. Keep these hooks.
- The plan SVG has `data-testid="plan"`. Prefer roles, titles and test ids over CSS classes in
  selectors.
- Keep test titles ASCII. Playwright's `setFiles` silently fails when a test's output path
  contains characters like "→".

## Project conventions

- Plan units are feet. Plan (x, y) maps to 3D world (x, z), with Y up. Camera rotation 0° = +x,
  clockwise on screen.
- Saved-document state lives in `src/state/project.ts` (zustand). UI-only state stays in components.
- New items come from `createItem` in `src/lib/items.ts`, with sizes in real feet times
  `unitsPerFoot`. Never hard-code sizes in placement code.
- Pure logic goes in `src/lib/` (geo, camera, terrain, geometry). UI pieces go in
  `src/components/`.
- Changes are developed on a feature branch. Do not merge or deploy to `main` without the
  owner's OK.
