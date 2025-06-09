import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1luckif_START -->${$$result.title = `<title>OverRED - 404</title>`, ""}<!-- HEAD_svelte-1luckif_END -->`, ""} <div class="flex flex-grow flex-col items-center justify-center" data-svelte-h="svelte-1v9p0g4"><h1 class="text-3xl text-primary">LOL this Page does not exist!</h1></div>`;
});
export {
  Page as default
};
