// A bullet security camera model. The lens points along local +X; pitch is applied about local Z.
import * as THREE from "three";

/** Camera body about 2 ft long (a little larger than real so it stays visible), in plan units. */
export const createCameraModel = (color: string, unitsPerFoot = 1) => {
  const g = new THREE.Group();
  const k = 0.12 * unitsPerFoot;
  const bodyR = 4.2 * k;
  const bodyL = 16 * k;
  const body = new THREE.MeshStandardMaterial({ color: "#e5e9ef", roughness: 0.45, metalness: 0.15 });
  const dark = new THREE.MeshStandardMaterial({ color: "#0f172a", roughness: 0.3, metalness: 0.5 });
  const trim = new THREE.MeshStandardMaterial({ color: "#1f2937", roughness: 0.6, metalness: 0.2 });

  const cyl = (r1: number, r2: number, len: number, mat: THREE.Material, x: number) => {
    const geo = new THREE.CylinderGeometry(r1, r2, len, 20);
    geo.rotateZ(Math.PI / 2);
    const m = new THREE.Mesh(geo, mat);
    m.position.x = x;
    m.castShadow = true;
    g.add(m);
    return m;
  };
  cyl(bodyR, bodyR, bodyL, body, 0);
  // Sun shield over the body
  const shieldGeo = new THREE.CylinderGeometry(bodyR * 1.12, bodyR * 1.12, bodyL * 1.08, 20, 1, true, Math.PI * 0.15, Math.PI * 0.7);
  shieldGeo.rotateZ(Math.PI / 2);
  const shield = new THREE.Mesh(shieldGeo, new THREE.MeshStandardMaterial({ color: "#f3f5f8", roughness: 0.5, side: THREE.DoubleSide }));
  shield.position.x = bodyL * 0.04;
  g.add(shield);
  cyl(bodyR * 0.95, bodyR * 0.95, 3.2 * k, dark, bodyL / 2 - 1.6 * k);
  cyl(2.1 * k * 0.9, 2.1 * k, 2.2 * k, dark, bodyL / 2 + 0.6 * k);
  // Mount arm and wall plate
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(bodyR * 0.25, bodyR * 0.3, 3 * k, 12), trim);
  arm.position.set(-bodyL * 0.3, -bodyR * 0.9, 0);
  g.add(arm);
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(bodyR * 0.6, bodyR * 0.6, 1.1 * k, 16), trim);
  plate.position.set(-bodyL * 0.3, -bodyR * 1.4, 0);
  g.add(plate);
  // Status light in the camera's color
  const led = new THREE.Mesh(new THREE.SphereGeometry(1.1 * k, 8, 8), new THREE.MeshBasicMaterial({ color }));
  led.position.set(-bodyL * 0.1, bodyR * 0.7, bodyR * 0.3);
  g.add(led);
  g.userData.lensOffset = bodyL / 2 + 1.4 * k;
  return g;
};
