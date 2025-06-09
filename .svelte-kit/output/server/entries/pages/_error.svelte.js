import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="flex flex-col items-center justify-center text-center text-primary"><h1 class="text-center my-5 text-3xl" data-svelte-h="svelte-1os7evj">Sorry there was an error!</h1> <p class="py-5">${escape($page.status)}: ${escape($page?.error?.message || "Unkown")}</p></div>`;
});
export {
  Error as default
};
