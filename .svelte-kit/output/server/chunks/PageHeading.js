import { c as create_ssr_component, e as escape } from "./ssr.js";
const PageHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { descrb } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.descrb === void 0 && $$bindings.descrb && descrb !== void 0) $$bindings.descrb(descrb);
  return `<div class="flex flex-col jusitfy-center items-center mx-[5%] my-32 space-y-8"><h1 class="font-bold text-5xl text-overred-text-blue">${escape(title)}</h1> <p class="font-light text-xl text-center text-overred-variant-blue">${escape(descrb)}</p></div>`;
});
export {
  PageHeading as P
};
