import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../chunks/ssr.js";
import { s as seo_map } from "../../../chunks/seo.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-a9hoph_START -->${$$result.title = `<title>${escape(seo_map.contact.title)}</title>`, ""}<meta name="description"${add_attribute("content", seo_map.contact.description, 0)}><!-- HEAD_svelte-a9hoph_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
