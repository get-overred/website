import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as PageHeading } from "../../../chunks/PageHeading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-1/3 mx-auto flex flex-col">${validate_component(PageHeading, "PageHeading").$$render(
    $$result,
    {
      title: "Privacy Policy",
      descrb: " This Chrome extension is built with privacy by design. All data —\n        including screenshots, user clicks, and how-to guides — is stored only\n        on your device. No data is sent to any server, cloud service, or third\n        party. We do not collect, track, or analyze your browsing behavior. The\n        extension works entirely offline and does not use any external APIs. All\n        permissions requested are strictly necessary for creating guides and\n        capturing screenshots, and are only activated through direct user\n        interaction. Your data stays yours — local, private, and under your full\n        control."
    },
    {},
    {}
  )} </div>`;
});
export {
  Page as default
};
