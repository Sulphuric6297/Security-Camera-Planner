// Pure-logic tests (no browser page) for the client report and the camera CSV.
import { test, expect } from "@playwright/test";
import { buildPartsList, buildReportHtml, camerasCsv, compassFromRotation, type ReportCamera } from "../../src/lib/report";

const cam = (over: Partial<ReportCamera> = {}): ReportCamera => ({
  number: 1,
  label: "Front door",
  color: "#3b82f6",
  heightFt: 9,
  mount: "on House",
  lensLabel: "4 mm",
  hFov: 87,
  resolutionLabel: "4 MP",
  tiltDeg: -15,
  facing: "S",
  identifyFt: 18.4,
  recognizeFt: 36.8,
  detectFt: 184,
  blindSpotFt: 6.2,
  covers: ["Door 1 (faces)"],
  ...over
});

test.describe("report", () => {
  test("compass direction from plan rotation (0 = east, clockwise, north up)", () => {
    expect(compassFromRotation(0)).toBe("E");
    expect(compassFromRotation(90)).toBe("S");
    expect(compassFromRotation(180)).toBe("W");
    expect(compassFromRotation(270)).toBe("N");
    expect(compassFromRotation(-45)).toBe("NE");
    expect(compassFromRotation(135)).toBe("SW");
  });

  test("parts list groups identical cameras", () => {
    const parts = buildPartsList([cam(), cam({ number: 2 }), cam({ number: 3, lensLabel: "12 mm", hFov: 28 })]);
    expect(parts).toHaveLength(2);
    expect(parts[0].qty).toBe(2);
    expect(parts[0].numbers).toEqual([1, 2]);
  });

  test("CSV has a header and one escaped row per camera", () => {
    const csv = camerasCsv([cam({ label: 'Garage, "side"', notes: "check\nlight" })]);
    const lines = csv.trim().split("\n");
    expect(lines[0]).toContain("Faces to (ft)");
    expect(csv).toContain('"Garage, ""side"""');
    expect(csv).toContain('"check\nlight"');
  });

  test("report: summary, checklist, schedule, parts, cameras; text is escaped", () => {
    const html = buildReportHtml({
      title: "Smith <home>",
      site: { label: "123 Main St", lat: 39.78, lon: -89.68 },
      preparedAt: "today",
      planImage: "data:image/png;base64,AAA",
      pickedViews: [],
      cameras: [cam({ viewImage: "data:image/png;base64,BBB" })],
      spots: [
        { label: "Door 1", kind: "Door", needs: "See faces", status: "met", camera: "1. Front door", got: "faces" },
        { label: "Gate", kind: "Gate", needs: "Recognize people", status: "none", reason: "Not covered: outside every camera's view" }
      ],
      counts: { buildings: 2 }
    });
    expect(html).toContain("Smith &lt;home&gt;");
    expect(html).toContain("1 of 2 protected spots covered");
    expect(html).toContain("1 protected spot still needs attention");
    for (const id of ["coverage-checklist", "camera-schedule", "parts-list"]) expect(html).toContain(`id="${id}"`);
    expect(html.match(/<img /g)).toHaveLength(2); // plan + camera view
    expect(html).toContain("estimates");
  });
});
