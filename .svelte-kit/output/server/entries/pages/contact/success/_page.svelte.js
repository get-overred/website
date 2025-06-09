import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 5;
  return `<div class="flex flex-grow flex-col items-center justify-center"><h2 class="text-center py-5 text-primary text-2xl sm:text-3xl" data-svelte-h="svelte-1arsej1"><p>I received your contact submission.</p> <p>I strive to respond as quickly as possible!</p></h2> <p class="text-center text-primary text-xl sm:text-2xl">You wil be automatically redirected in: ${escape(count)}</p></div>`;
});
export {
  Page as default
};
