import * as universal from '../entries/pages/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/3.DlACvCCF.js","_app/immutable/chunks/scheduler.ESG4J4As.js","_app/immutable/chunks/index.CbhNv2OM.js","_app/immutable/chunks/each.DV1TCby9.js"];
export const stylesheets = ["_app/immutable/assets/3.DqxmcjQL.css"];
export const fonts = [];
