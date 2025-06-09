import { c as create_ssr_component } from "./ssr.js";
const PostLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  console.log(date);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  return `<div class="w-full pt-20 flex flex-col items-center justify-center text-overred-variant-blue">${slots.default ? slots.default({
    class: "md_post w-full space-y-10 text-center"
  }) : ``} </div>`;
});
export {
  PostLayout as P
};
