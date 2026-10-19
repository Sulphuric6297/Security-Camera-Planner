// Recorder (NVR) storage estimate from the cameras' resolutions.
// Typical H.265 main-stream bitrates at 15-20 fps; real numbers vary with scene, night noise and settings.

export const BITRATE_MBPS: { maxWidth: number; mbps: number }[] = [
  { maxWidth: 1920, mbps: 2 }, // 1080p
  { maxWidth: 2688, mbps: 3 }, // 4 MP
  { maxWidth: 2960, mbps: 4 }, // 5 MP
  { maxWidth: 99999, mbps: 6 } // 4K
];
export const bitrateFor = (resolutionWidth: number) => BITRATE_MBPS.find(b => resolutionWidth <= b.maxWidth)!.mbps;

/** Share of the time a motion-only camera records (a typical home average). */
export const MOTION_FRACTION = 0.3;
const DRIVE_SIZES_TB = [1, 2, 4, 6, 8, 10, 12, 16, 20, 24];

export const estimateStorage = (resolutionWidths: number[], days: number, mode: "continuous" | "motion") => {
  const mbps = resolutionWidths.reduce((sum, w) => sum + bitrateFor(w), 0);
  const fraction = mode === "motion" ? MOTION_FRACTION : 1;
  const tb = (mbps * 1e6 / 8) * 86400 * days * fraction / 1e12;
  // Leave ~10% free; the smallest common drive size that fits.
  const drive = DRIVE_SIZES_TB.find(s => s >= tb * 1.1) ?? Math.ceil(tb * 1.1);
  return { mbps, tb, driveTb: drive };
};
