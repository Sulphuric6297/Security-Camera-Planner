import { CameraItem } from "../types";


export const fovFromDiagonal = (diag: number, aspect: number) => {
  const diagRad = (diag * Math.PI) / 180;
  const vRad = 2 * Math.atan(Math.tan(diagRad / 2) / Math.sqrt(aspect * aspect + 1));
  const hRad = 2 * Math.atan(Math.tan(vRad / 2) * aspect);
  return { h: (hRad * 180) / Math.PI, v: (vRad * 180) / Math.PI };
};

export const diagonalFromHv = (h: number, v: number) => {
  const hRad = (h * Math.PI) / 180;
  const vRad = (v * Math.PI) / 180;
  const diag = 2 * Math.atan(Math.sqrt(Math.tan(hRad / 2) ** 2 + Math.tan(vRad / 2) ** 2));
  return (diag * 180) / Math.PI;
};

export const vFovFromH = (h: number, aspect: number) => {
  const hRad = (h * Math.PI) / 180;
  const vRad = 2 * Math.atan(Math.tan(hRad / 2) / aspect);
  return (vRad * 180) / Math.PI;
};

export const hFovFromV = (v: number, aspect: number) => {
  const vRad = (v * Math.PI) / 180;
  const hRad = 2 * Math.atan(Math.tan(vRad / 2) * aspect);
  return (hRad * 180) / Math.PI;
};

export const getCameraAspectValue = (camera?: CameraItem | null) => {
  if (!camera) return 16 / 9;
  if (camera.aspect && camera.aspect > 0) return camera.aspect;
  const h = camera.hFov ?? camera.fov;
  const v = camera.vFov;
  if (v && v > 0) {
    const hRad = (h * Math.PI) / 180;
    const vRad = (v * Math.PI) / 180;
    const aspect = Math.tan(hRad / 2) / Math.tan(vRad / 2);
    return aspect || 16 / 9;
  }
  return 16 / 9;
};
