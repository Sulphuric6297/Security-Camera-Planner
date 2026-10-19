// Cable runs from each camera back to the recorder (NVR): lengths for the parts list and a check
// against the 100 m (328 ft) Ethernet/PoE limit. Pure logic.

export type CablePoint = { x: number; y: number };
export type CableCamera = CablePoint & { id: string; number: number; label: string; heightFt: number };
export type CableRun = { cameraId: string; number: number; label: string; lengthFt: number; tooLong: boolean };

/** Ethernet (and PoE) carries 100 m; leave a margin for patch cords. */
export const MAX_RUN_FT = 300;
export const RECORDER_CHANNELS = [4, 8, 16, 32, 64];

/**
 * Cable along the building, not through it: the run goes around at right angles (along walls and
 * joists), up or down to the camera, plus about 10% slack and a few feet for the connections.
 * @param upf plan units per foot
 */
export const cableRuns = (cameras: CableCamera[], recorder: CablePoint, upf = 1, recorderHeightFt = 3): CableRun[] =>
  cameras.map(c => {
    const across = (Math.abs(c.x - recorder.x) + Math.abs(c.y - recorder.y)) / upf;
    const vertical = Math.abs(c.heightFt - recorderHeightFt);
    const lengthFt = Math.ceil((across + vertical) * 1.1 + 6);
    return { cameraId: c.id, number: c.number, label: c.label, lengthFt, tooLong: lengthFt > MAX_RUN_FT };
  });

/** Totals for the parts list: cable (and 1000 ft boxes), the longest run, and the recorder size. */
export const cableSummary = (runs: CableRun[]) => {
  const totalFt = runs.reduce((s, r) => s + r.lengthFt, 0);
  const longest = runs.reduce<CableRun | null>((m, r) => (!m || r.lengthFt > m.lengthFt ? r : m), null);
  return {
    totalFt,
    boxes: Math.max(1, Math.ceil(totalFt / 1000)),
    longest,
    tooLong: runs.filter(r => r.tooLong),
    channels: RECORDER_CHANNELS.find(n => n >= runs.length) ?? RECORDER_CHANNELS[RECORDER_CHANNELS.length - 1]
  };
};
