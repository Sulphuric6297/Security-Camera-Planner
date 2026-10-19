// The client report (printable HTML → PDF) and the camera list CSV, built from plain data.

export type ReportCamera = {
  number: number;
  label: string;
  color: string;
  heightFt: number;
  /** e.g. "on House" or "free-standing" */
  mount: string;
  lensLabel: string;
  hFov: number;
  resolutionLabel: string;
  tiltDeg: number;
  /** Compass direction it faces, e.g. "SE". */
  facing: string;
  identifyFt: number;
  recognizeFt: number;
  detectFt: number;
  blindSpotFt: number | null;
  irRangeFt: number;
  notes?: string;
  /** Protected spots this camera is the best view of, e.g. "Front door (faces)". */
  covers: string[];
  viewImage?: string;
};

export type ReportSpot = {
  label: string;
  kind: string;
  needs: string;
  status: "met" | "partial" | "none";
  camera?: string;
  got?: string;
  reason?: string;
};

export type ReportInput = {
  title: string;
  site?: { label: string; lat: number; lon: number } | null;
  preparedAt: string;
  planImage?: string;
  /** Views the user picked ("Add to report"); when empty, each camera's view is shown in its section. */
  pickedViews: { label: string; dataUrl: string }[];
  cameras: ReportCamera[];
  spots: ReportSpot[];
  counts: { buildings: number };
  storage?: { days: number; mode: "continuous" | "motion"; tb: number; driveTb: number };
  /** With a recorder placed: each camera's cable run back to it. */
  cabling?: { channels: number; totalFt: number; boxes: number; runs: { number: number; label: string; lengthFt: number; tooLong: boolean }[] };
};

const esc = (text: string) =>
  String(text ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] as string);

/** Plan rotation (0 = east, clockwise on a north-up map) to a compass direction. */
export const compassFromRotation = (rotation: number) => {
  const bearing = (((rotation + 90) % 360) + 360) % 360; // 0 = north
  const names = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return names[Math.round(bearing / 45) % 8];
};

/** Cameras grouped into a shopping list. */
export const buildPartsList = (cameras: ReportCamera[]) => {
  const groups = new Map<string, { description: string; qty: number; numbers: number[] }>();
  cameras.forEach(c => {
    const description = `${c.resolutionLabel} camera, ${c.lensLabel} lens (${Math.round(c.hFov)}°), ${c.mount.startsWith("on ") ? "wall/eave mount" : "pole or free-standing mount"}`;
    const g = groups.get(description) ?? { description, qty: 0, numbers: [] };
    g.qty++;
    g.numbers.push(c.number);
    groups.set(description, g);
  });
  return Array.from(groups.values());
};

const csvCell = (v: string | number) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** One row per camera, for spreadsheets or an installer's quote. */
export const camerasCsv = (cameras: ReportCamera[]) => {
  const header = ["#", "Name", "Mount", "Height (ft)", "Faces", "Tilt (deg down)", "Lens", "Field of view (deg)", "Resolution", "Faces to (ft)", "Recognize to (ft)", "Detect to (ft)", "Night IR (ft)", "Blind spot (ft)", "Covers", "Notes"];
  const rows = cameras.map(c => [
    c.number,
    c.label,
    c.mount,
    Math.round(c.heightFt),
    c.facing,
    Math.abs(Math.round(c.tiltDeg)),
    c.lensLabel,
    Math.round(c.hFov),
    c.resolutionLabel,
    Math.round(c.identifyFt),
    Math.round(c.recognizeFt),
    Math.round(c.detectFt),
    Math.round(c.irRangeFt),
    c.blindSpotFt == null ? "" : Math.round(c.blindSpotFt),
    c.covers.join("; "),
    c.notes ?? ""
  ]);
  return [header, ...rows].map(r => r.map(csvCell).join(",")).join("\n") + "\n";
};

const STATUS_TEXT = { met: "✓ Covered", partial: "! Not enough detail", none: "✕ Not covered" } as const;
const STATUS_COLOR = { met: "#047857", partial: "#b45309", none: "#b91c1c" } as const;

export const buildReportHtml = (r: ReportInput, opts: { autoPrint?: boolean } = {}) => {
  const met = r.spots.filter(s => s.status === "met").length;
  const summary = [
    `${r.cameras.length} camera${r.cameras.length === 1 ? "" : "s"}`,
    `${r.counts.buildings} building${r.counts.buildings === 1 ? "" : "s"}`,
    r.spots.length ? `${met} of ${r.spots.length} protected spots covered` : ""
  ].filter(Boolean).join(" · ");

  const spotsHtml = r.spots.length
    ? `<h2>Coverage checklist</h2>
      <table id="coverage-checklist">
        <thead><tr><th>Spot</th><th>Needs</th><th>Result</th><th>Best camera</th></tr></thead>
        <tbody>${r.spots.map(s => `<tr>
          <td><b>${esc(s.label)}</b> <span class="note">${esc(s.kind)}</span></td>
          <td>${esc(s.needs)}</td>
          <td style="color:${STATUS_COLOR[s.status]};font-weight:600">${STATUS_TEXT[s.status]}</td>
          <td>${s.camera ? `${esc(s.camera)} · ${esc(s.got ?? "")}` : `<span class="note">${esc(s.reason ?? "")}</span>`}</td>
        </tr>`).join("")}</tbody>
      </table>`
    : "";

  const scheduleHtml = r.cameras.length
    ? `<h2>Camera schedule</h2>
      <table id="camera-schedule">
        <thead><tr><th>Camera</th><th>Mount</th><th>Faces</th><th>Lens</th><th>Tilt</th><th>Identify to</th><th>Recognize to</th><th>Detect to</th><th>Night (IR)</th><th>Notes</th></tr></thead>
        <tbody>${r.cameras.map(c => `<tr>
          <td><span class="dot" style="background:${esc(c.color)}"></span>${c.number}. ${esc(c.label)}</td>
          <td>${Math.round(c.heightFt)} ft ${esc(c.mount)}</td>
          <td>${esc(c.facing)}</td>
          <td>${Math.round(c.hFov)}° · ${esc(c.resolutionLabel)}</td>
          <td>${Math.abs(Math.round(c.tiltDeg))}° down</td>
          <td>${Math.round(c.identifyFt)} ft</td>
          <td>${Math.round(c.recognizeFt)} ft</td>
          <td>${Math.round(c.detectFt)} ft</td>
          <td>${Math.round(c.irRangeFt)} ft</td>
          <td>${esc(c.notes ?? "")}</td>
        </tr>`).join("")}</tbody>
      </table>
      <p class="note">Identify ≈ recognize a stranger's face or read a plate (250 px/m); Recognize ≈ tell if it's someone you know (125 px/m); Detect ≈ notice someone is there (25 px/m), per IEC 62676-4.</p>`
    : "";

  const parts = buildPartsList(r.cameras);
  const cab = r.cabling;
  const storageText = r.storage ? `about ${r.storage.tb < 1 ? r.storage.tb.toFixed(1) : Math.round(r.storage.tb * 10) / 10} TB of storage (a ${r.storage.driveTb} TB drive) for ${r.storage.days} days of ${r.storage.mode === "motion" ? "motion-only" : "continuous"} recording` : "";
  const partsHtml = parts.length
    ? `<h2>Parts list</h2>
      <table id="parts-list">
        <thead><tr><th>Qty</th><th>Item</th><th>Cameras</th></tr></thead>
        <tbody>${parts.map(p => `<tr><td>${p.qty}</td><td>${esc(p.description)}</td><td>${p.numbers.map(n => `#${n}`).join(", ")}</td></tr>`).join("")}${cab
          ? `<tr><td>1</td><td>PoE recorder (NVR), ${cab.channels} channels${storageText ? `, ${esc(storageText)}` : ""}</td><td>all</td></tr>
             <tr><td>${cab.boxes}</td><td>Cat6 network cable, 1000 ft box (about ${cab.totalFt.toLocaleString("en-US")} ft in ${cab.runs.length} run${cab.runs.length === 1 ? "" : "s"})</td><td>all</td></tr>`
          : ""}</tbody>
      </table>
      ${cab
        ? `<h3>Cable runs</h3>
      <table id="cable-runs">
        <thead><tr><th>Camera</th><th>Run to the recorder</th></tr></thead>
        <tbody>${cab.runs.map(c => `<tr><td>${c.number}. ${esc(c.label)}</td><td${c.tooLong ? ' style="color:#b91c1c;font-weight:600"' : ""}>about ${c.lengthFt} ft${c.tooLong ? " (over 300 ft: needs a switch or extender part way)" : ""}</td></tr>`).join("")}</tbody>
      </table>
      <p class="note">Runs go along walls and ceilings at right angles, up to each camera, with 10% slack. Measure on site before buying.</p>`
        : `<p class="note">Plus a recorder (NVR) with ${r.cameras.length} or more channels${storageText ? ` and ${storageText}` : ""}, and network cable or power for each camera. Place the recorder on the plan to get cable lengths.</p>`}`
    : "";

  const cameraSections = r.cameras.map(c => `
    <div class="item camera">
      <h3><span class="dot" style="background:${esc(c.color)}"></span>${c.number}. ${esc(c.label)}</h3>
      <div class="facts">
        <span>${Math.round(c.heightFt)} ft high ${esc(c.mount)}</span>
        <span>faces ${esc(c.facing)}, tilted ${Math.abs(Math.round(c.tiltDeg))}° down</span>
        <span>faces to ${Math.round(c.identifyFt)} ft · detect to ${Math.round(c.detectFt)} ft</span>
        ${c.blindSpotFt != null ? `<span>blind spot under it: ${Math.round(c.blindSpotFt)} ft</span>` : ""}
        ${c.covers.length ? `<span>covers: ${c.covers.map(esc).join(", ")}</span>` : ""}
      </div>
      ${c.viewImage ? `<img src="${c.viewImage}" alt="${esc(c.label)} view" />` : ""}
    </div>`).join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${esc(r.title || "Security Plan Report")}</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; max-width: 1000px; margin: 0 auto; color: #0f172a; }
    h1 { margin-bottom: 4px; }
    h2 { margin-top: 32px; font-size: 18px; page-break-after: avoid; }
    .meta { color: #475569; font-size: 14px; margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 14px; line-height: 1.6; }
    .score { display: inline-block; margin-top: 6px; padding: 4px 10px; border-radius: 999px; background: ${r.spots.length && met === r.spots.length ? "#d1fae5" : "#fef3c7"}; color: #0f172a; font-weight: 600; font-size: 13px; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; }
    th, td { text-align: left; padding: 6px 8px; border-bottom: 1px solid #e2e8f0; vertical-align: top; }
    th { background: #f8fafc; font-weight: 600; }
    .dot { display: inline-block; width: 9px; height: 9px; border-radius: 50%; margin-right: 6px; }
    .note { color: #64748b; font-size: 11px; }
    .item { margin-bottom: 28px; page-break-inside: avoid; }
    .item h3 { color: #334155; margin-bottom: 6px; }
    .facts { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 12px; color: #475569; margin-bottom: 8px; }
    .item img, .plan img { width: 100%; border: 1px solid #e2e8f0; border-radius: 4px; }
    .disclaimer { margin-top: 36px; color: #64748b; font-size: 11px; border-top: 1px solid #e2e8f0; padding-top: 10px; }
    @media print { body { padding: 0; } }
  </style>
</head>
<body>
  <h1>${esc(r.title || "Security Camera Plan")}</h1>
  <div class="meta">
    ${r.site ? `<div><b>Site:</b> ${esc(r.site.label)} (${r.site.lat.toFixed(5)}, ${r.site.lon.toFixed(5)})</div>` : ""}
    <div>${esc(summary)} · Prepared ${esc(r.preparedAt)}</div>
    ${r.spots.length ? `<div class="score">${met === r.spots.length ? "Every protected spot is covered" : `${r.spots.length - met} protected spot${r.spots.length - met === 1 ? "" : "s"} still need${r.spots.length - met === 1 ? "s" : ""} attention`}</div>` : ""}
  </div>
  ${r.planImage ? `<div class="plan item"><h2>Site plan</h2><img src="${r.planImage}" alt="Site plan" /></div>` : ""}
  ${spotsHtml}
  ${scheduleHtml}
  ${partsHtml}
  ${r.cameras.length ? `<h2>Cameras</h2>${cameraSections}` : ""}
  ${r.pickedViews.length ? `<h2>More views</h2>${r.pickedViews.map(v => `<div class="item"><h3>${esc(v.label)}</h3><img src="${v.dataUrl}" alt="${esc(v.label)}" /></div>`).join("")}` : ""}
  <p class="disclaimer">Distances and coverage are estimates from the camera's lens and resolution under good lighting. Real results depend on the camera model, night vision, weather and installation.</p>
  ${opts.autoPrint ? "<script>window.onload = () => setTimeout(() => window.print(), 500);</script>" : ""}
</body>
</html>`;
};
