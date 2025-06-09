const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function getHeaderImage(slug, iterable) {
  let header_image = await Promise.all(
    iterable.map(async ([path, resolver]) => {
      if (path.includes(slug)) {
        const module = await resolver();
        console.log(`§§§ MATCH §§§ for ${slug}`);
        return module.default;
      }
    })
  );
  header_image = [...header_image].filter((element) => element !== void 0);
  return header_image.join("").length != 0 ? header_image.join("") : void 0;
}
export {
  __variableDynamicImportRuntimeHelper as _,
  getHeaderImage as g
};
