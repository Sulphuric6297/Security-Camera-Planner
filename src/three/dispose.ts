import * as THREE from "three";


// Frees GPU memory held by an object tree: geometries, materials and every texture they use
// (map, normalMap, ...). Three.js re-uploads anything that is later rendered again, so shared
// cached assets stay safe. `keep` textures (e.g. a shared environment map) are left alone.
export const disposeObjectDeep = (root: THREE.Object3D, keep: Set<THREE.Texture> = new Set()) => {
  root.traverse(child => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose();
    const materials = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
    materials.forEach(material => {
      Object.values(material).forEach(value => {
        if (value instanceof THREE.Texture && !keep.has(value)) value.dispose();
      });
      material.dispose();
    });
  });
};
