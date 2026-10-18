
// --- Autosave storage (tiny IndexedDB key-value store) ---

export const AUTOSAVE_KEY = "current-project";
export const openAutosaveDb = () =>
  new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open("security-camera-planner", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("kv");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
export const idbGet = async (key: string) => {
  const db = await openAutosaveDb();
  return new Promise<any>((resolve, reject) => {
    const req = db.transaction("kv", "readonly").objectStore("kv").get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
};
export const idbSet = async (key: string, value: unknown) => {
  const db = await openAutosaveDb();
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction("kv", "readwrite");
    tx.objectStore("kv").put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};
