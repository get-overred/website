import { _ as __variableDynamicImportRuntimeHelper, g as getHeaderImage } from "../../../../chunks/functions.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/overred-vs-clueso/overred-vs-clueso.md": () => import("../../../../chunks/overred-vs-clueso.js"), "../../../posts/overred-vs-scribe/overred-vs-scribe.md": () => import("../../../../chunks/overred-vs-scribe.js"), "../../../posts/quick-start/ cooperative defection.md": () => import("../../../../chunks/ cooperative defection.js") }), `../../../posts/${params.slug}/${params.slug}.md`, 6);
    const allHeaderImages = /* @__PURE__ */ Object.assign({ "/src/posts/overred-vs-scribe/header/Screenshot 2024-11-08 at 18.17.45.png": () => import("../../../../chunks/Screenshot 2024-11-08 at 18.17.45.js"), "/src/posts/quick-start/header/header.png": () => import("../../../../chunks/header.js") });
    const interableHeaderImages = Object.entries(allHeaderImages);
    const header_image = await getHeaderImage(params.slug, interableHeaderImages);
    console.log(header_image);
    return {
      props: {
        content: post.default,
        meta: post.metadata,
        header_image
      }
    };
  } catch (e) {
    console.log("IT'S AN ERROR");
    console.log(e);
    error(404, `Could not find ${params.slug}`);
  }
};
export {
  load
};
