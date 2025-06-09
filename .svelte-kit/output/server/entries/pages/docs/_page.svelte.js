import { c as create_ssr_component, b as subscribe, v as validate_component, d as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { P as PageHeading } from "../../../chunks/PageHeading.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let categories = [
    {
      title: "Latest",
      state: true,
      key: "date"
    },
    {
      title: "Comparison",
      state: false,
      key: "comparison"
    },
    { title: "News", state: false, key: "news" }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="w-full h-full flex flex-col items-center justify-center">${validate_component(PageHeading, "PageHeading").$$render(
    $$result,
    {
      title: "Blog",
      descrb: "Read all our Articles"
    },
    {},
    {}
  )}  <div class="my-12 mx-[5%] flex flex-row justify-between overflow-x-scroll space-x-24">${each(categories, (catgy) => {
    return `<button${add_attribute("class", "w-60 rounded-md py-6 px-12 border-4 hover:border-overred-red text-center flex justify-center items-center font-semibold" + (catgy.state ? " border-overred-red" : ""), 0)}>${escape(catgy.title)} </button>`;
  })}</div> ${``}</div>`;
});
export {
  Page as default
};
