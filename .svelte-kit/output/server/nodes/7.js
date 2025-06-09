import * as universal from '../entries/pages/docs/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/docs/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/docs/+page.ts";
export const imports = ["_app/immutable/nodes/7.Cpzr0OIc.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/ProfilePictures.DGp7s7DG.js","_app/immutable/chunks/scheduler.ESG4J4As.js","_app/immutable/chunks/index.CbhNv2OM.js","_app/immutable/chunks/each.DV1TCby9.js","_app/immutable/chunks/PageHeading.BlIsExcP.js","_app/immutable/chunks/index.QWTMb9We.js","_app/immutable/chunks/stores.Bf1sF5yy.js","_app/immutable/chunks/entry.B04yrovI.js"];
export const stylesheets = [];
export const fonts = [];
