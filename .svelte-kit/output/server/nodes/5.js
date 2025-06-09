import * as universal from '../entries/pages/contact/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.ts";
export const imports = ["_app/immutable/nodes/5.7Od0TvSy.js","_app/immutable/chunks/scheduler.ESG4J4As.js","_app/immutable/chunks/index.CbhNv2OM.js","_app/immutable/chunks/PageHeading.BlIsExcP.js","_app/immutable/chunks/seo.BKX5ZMcc.js"];
export const stylesheets = ["_app/immutable/assets/5.DFLIdvin.css"];
export const fonts = [];
