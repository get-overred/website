import * as universal from '../entries/pages/404/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/404/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/404/+page.ts";
export const imports = ["_app/immutable/nodes/4.CWe3Nb9w.js","_app/immutable/chunks/scheduler.ESG4J4As.js","_app/immutable/chunks/index.CbhNv2OM.js"];
export const stylesheets = [];
export const fonts = [];
