import { g as getHeaderImage, _ as __variableDynamicImportRuntimeHelper } from "../../../chunks/functions.js";
const load = async () => {
  try {
    const allMarkdownFiles = /* @__PURE__ */ Object.assign({ "/src/posts/overred-vs-clueso/overred-vs-clueso.md": () => import("../../../chunks/overred-vs-clueso.js"), "/src/posts/overred-vs-scribe/overred-vs-scribe.md": () => import("../../../chunks/overred-vs-scribe.js"), "/src/posts/quick-start/ cooperative defection.md": () => import("../../../chunks/ cooperative defection.js") });
    const allHeaderImages = /* @__PURE__ */ Object.assign({ "/src/posts/overred-vs-scribe/header/Screenshot 2024-11-08 at 18.17.45.png": () => import("../../../chunks/Screenshot 2024-11-08 at 18.17.45.js"), "/src/posts/quick-start/header/header.png": () => import("../../../chunks/header.js") });
    const iterableMarkdownFiles = Object.entries(allMarkdownFiles);
    const interableHeaderImages = Object.entries(allHeaderImages);
    const allPosts = await Promise.all(
      iterableMarkdownFiles.map(async ([path, resolver]) => {
        const blogArticle = await resolver();
        const theSlug = path.split("/src/posts/")[1].split("/")[0];
        if (blogArticle && blogArticle?.metadata) {
          const header_image = await getHeaderImage(theSlug, interableHeaderImages);
          const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../posts/overred-vs-clueso/overred-vs-clueso.md": () => import("../../../chunks/overred-vs-clueso.js"), "../../posts/overred-vs-scribe/overred-vs-scribe.md": () => import("../../../chunks/overred-vs-scribe.js"), "../../posts/quick-start/ cooperative defection.md": () => import("../../../chunks/ cooperative defection.js") }), `../../posts/${theSlug}/${theSlug}.md`, 5);
          console.log(post.default);
          if (blogArticle?.metadata.published === true) {
            return {
              meta: blogArticle?.metadata,
              slug: theSlug,
              header_image
            };
          }
        }
      })
    );
    console.log(allPosts);
    return { props: allPosts };
  } catch (e) {
    console.log("OMG AN ERROR");
    console.error(e);
  }
};
export {
  load
};
