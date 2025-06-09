import { c as create_ssr_component, a as add_attribute, e as escape, q as compute_rest_props, v as validate_component, b as subscribe, m as missing_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const FallbackImage = "/_app/immutable/assets/fallback_image.rvtRGLN4.jpg";
const profile_picture = "/_app/immutable/assets/profile_picture.D8SpmU-s.jpeg";
const fallback_profile = "/_app/immutable/assets/fallback_profile.pBWKwnIj.webp";
const profile_pictures = {
  "Moritz K.": profile_picture,
  x: fallback_profile
};
const css$4 = {
  code: ".ssbc-button__link.svelte-iupir9,.ssbc-button__icon.svelte-iupir9{display:inline-block}.ssbc-button__link.svelte-iupir9{text-decoration:none;color:#fff}.ssbc-button.svelte-iupir9{transition:25ms ease-out;padding:0.75em}.ssbc-button__icon.svelte-iupir9 svg{width:1em;height:1em;margin:0;vertical-align:middle}.ssbc-button__icon--fill.svelte-iupir9{fill:#fff;stroke:none}.ssbc-button__icon--outline.svelte-iupir9{fill:none;stroke:#fff}",
  map: `{"version":3,"file":"ShareButton.svelte","sources":["ShareButton.svelte"],"sourcesContent":["<script>\\n\\texport let href;\\n\\texport let label = '';\\n\\texport let fill = true;\\n\\texport let ariaLabel = '';\\n\\tlet classes = '';\\n\\n\\texport { classes as class };\\n<\/script>\\n\\n<a\\n\\tclass=\\"ssbc-button__link\\"\\n\\t{href}\\n\\ttarget=\\"_blank\\"\\n\\trel=\\"noopener noreferrer\\"\\n\\taria-label={ariaLabel}\\n>\\n\\t<div class=\\"ssbc-button {classes}\\">\\n\\t\\t<div\\n\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\tclass=\\"ssbc-button__icon\\"\\n\\t\\t\\tclass:ssbc-button__icon--fill={fill}\\n\\t\\t\\tclass:ssbc-button__icon--outline={!fill}\\n\\t\\t>\\n\\t\\t\\t<slot></slot>\\n\\t\\t</div>\\n\\t\\t{label}\\n\\t</div>\\n</a>\\n\\n<style>\\n\\t.ssbc-button__link,\\n\\t.ssbc-button__icon {\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t.ssbc-button__link {\\n\\t\\ttext-decoration: none;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.ssbc-button {\\n\\t\\ttransition: 25ms ease-out;\\n\\t\\tpadding: 0.75em;\\n\\t}\\n\\n\\t.ssbc-button__icon :global(svg) {\\n\\t\\twidth: 1em;\\n\\t\\theight: 1em;\\n\\t\\tmargin: 0;\\n\\t\\tvertical-align: middle;\\n\\t}\\n\\n\\t.ssbc-button__icon--fill {\\n\\t\\tfill: #fff;\\n\\t\\tstroke: none;\\n\\t}\\n\\n\\t.ssbc-button__icon--outline {\\n\\t\\tfill: none;\\n\\t\\tstroke: #fff;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+BC,gCAAkB,CAClB,gCAAmB,CAClB,OAAO,CAAE,YACV,CAEA,gCAAmB,CAClB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IACR,CAEA,0BAAa,CACZ,UAAU,CAAE,IAAI,CAAC,QAAQ,CACzB,OAAO,CAAE,MACV,CAEA,gCAAkB,CAAS,GAAK,CAC/B,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,MACjB,CAEA,sCAAyB,CACxB,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IACT,CAEA,yCAA4B,CAC3B,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IACT"}`
};
const ShareButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { label = "" } = $$props;
  let { fill = true } = $$props;
  let { ariaLabel = "" } = $$props;
  let { class: classes = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0) $$bindings.fill(fill);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$result.css.add(css$4);
  return `<a class="ssbc-button__link svelte-iupir9"${add_attribute("href", href, 0)} target="_blank" rel="noopener noreferrer"${add_attribute("aria-label", ariaLabel, 0)}><div class="${"ssbc-button " + escape(classes, true) + " svelte-iupir9"}"><div aria-hidden="true" class="${[
    "ssbc-button__icon svelte-iupir9",
    (fill ? "ssbc-button__icon--fill" : "") + " " + (!fill ? "ssbc-button__icon--outline" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div> ${escape(label)}</div> </a>`;
});
const css$3 = {
  code: ".ssbc-button--reddit{background-color:#5f99cf}.ssbc-button--reddit:active,.ssbc-button--reddit:hover{background-color:#3a80c1}",
  map: '{"version":3,"file":"Reddit.svelte","sources":["Reddit.svelte"],"sourcesContent":["<script>\\n\\t// @ts-ignore\\n\\timport ShareButton from \\"./ShareButton.svelte\\";\\n\\n\\texport let title;\\n\\texport let url;\\n\\texport let ariaLabel = \'Share on Reddit\';\\n\\tlet classes = \'\';\\n\\n\\texport { classes as class };\\n\\tlet href;\\n\\n\\t$: href = encodeURI(`https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`);\\n<\/script>\\n\\n<ShareButton class=\\"ssbc-button--reddit {classes}\\" {...$$restProps} {ariaLabel} {href}>\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t<path\\n\\t\\t\\td=\\"M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z\\"\\n\\t\\t/>\\n\\t</svg>\\n</ShareButton>\\n\\n<style>\\n\\t:global(.ssbc-button--reddit) {\\n\\t\\tbackground-color: #5f99cf;\\n\\t}\\n\\n\\t:global(.ssbc-button--reddit:active),\\n\\t:global(.ssbc-button--reddit:hover) {\\n\\t\\tbackground-color: #3a80c1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBS,oBAAsB,CAC7B,gBAAgB,CAAE,OACnB,CAEQ,2BAA4B,CAC5B,0BAA4B,CACnC,gBAAgB,CAAE,OACnB"}'
};
const Reddit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "url", "ariaLabel", "class"]);
  let { title } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on Reddit" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$result.css.add(css$3);
  href = encodeURI(`https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`);
  return `${validate_component(ShareButton, "ShareButton").$$render($$result, Object.assign({}, { class: "ssbc-button--reddit " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
    default: () => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"></path></svg>`;
    }
  })}`;
});
const css$2 = {
  code: ".ssbc-button--x{background-color:#14171a}.ssbc-button--x:active,.ssbc-button--x:hover{background-color:#000000}",
  map: `{"version":3,"file":"X.svelte","sources":["X.svelte"],"sourcesContent":["<script>\\n\\t// @ts-ignore\\n\\timport ShareButton from './ShareButton.svelte';\\n\\n\\texport let text;\\n\\texport let url;\\n\\texport let ariaLabel = 'Share on X';\\n\\texport let hashtags = '';\\n\\texport let via = '';\\n\\texport let related = '';\\n\\tlet classes = '';\\n\\n\\texport { classes as class };\\n\\n\\tlet href;\\n\\n\\t$: href = encodeURI(\\n\\t\\t\`https://x.com/intent/tweet/?text=\${text}&hashtags=\${hashtags}&via=\${via}&related=\${related}&url=\${url}\`\\n\\t);\\n<\/script>\\n\\n<ShareButton class=\\"ssbc-button--x {classes}\\" {...$$restProps} {ariaLabel} {href}>\\n\\t<svg width=\\"25\\" height=\\"23\\" viewBox=\\"0 0 25 23\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n\\t\\t<path\\n\\t\\t\\td=\\"M19.38 0.622803H23.06L14.98 9.79481L24.42 22.2368H17.012L11.212 14.6759L4.57199 22.2368H0.891987L9.45199 12.4268L0.411987 0.622803H8.00399L13.244 7.52972L19.38 0.622803ZM18.092 20.0834H20.132L6.93199 2.69647H4.73999L18.092 20.0834Z\\"\\n\\t\\t\\tfill=\\"white\\"\\n\\t\\t/>\\n\\t</svg>\\n</ShareButton>\\n\\n<style>\\n\\t:global(.ssbc-button--x) {\\n\\t\\tbackground-color: #14171a;\\n\\t}\\n\\n\\t:global(.ssbc-button--x:active),\\n\\t:global(.ssbc-button--x:hover) {\\n\\t\\tbackground-color: #000000;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+BS,eAAiB,CACxB,gBAAgB,CAAE,OACnB,CAEQ,sBAAuB,CACvB,qBAAuB,CAC9B,gBAAgB,CAAE,OACnB"}`
};
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text", "url", "ariaLabel", "hashtags", "via", "related", "class"]);
  let { text } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on X" } = $$props;
  let { hashtags = "" } = $$props;
  let { via = "" } = $$props;
  let { related = "" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.hashtags === void 0 && $$bindings.hashtags && hashtags !== void 0) $$bindings.hashtags(hashtags);
  if ($$props.via === void 0 && $$bindings.via && via !== void 0) $$bindings.via(via);
  if ($$props.related === void 0 && $$bindings.related && related !== void 0) $$bindings.related(related);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$result.css.add(css$2);
  href = encodeURI(`https://x.com/intent/tweet/?text=${text}&hashtags=${hashtags}&via=${via}&related=${related}&url=${url}`);
  return `${validate_component(ShareButton, "ShareButton").$$render($$result, Object.assign({}, { class: "ssbc-button--x " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
    default: () => {
      return `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.38 0.622803H23.06L14.98 9.79481L24.42 22.2368H17.012L11.212 14.6759L4.57199 22.2368H0.891987L9.45199 12.4268L0.411987 0.622803H8.00399L13.244 7.52972L19.38 0.622803ZM18.092 20.0834H20.132L6.93199 2.69647H4.73999L18.092 20.0834Z" fill="white"></path></svg>`;
    }
  })}`;
});
const css$1 = {
  code: ".ssbc-button--linkedin{background-color:#0077b5}.ssbc-button--linkedin:active,.ssbc-button--linkedin:hover{background-color:#046293}",
  map: `{"version":3,"file":"LinkedIn.svelte","sources":["LinkedIn.svelte"],"sourcesContent":["<script>\\n\\t// @ts-ignore\\n\\timport ShareButton from './ShareButton.svelte';\\n\\n\\texport let url;\\n\\texport let ariaLabel = 'Share on LinkedIn';\\n\\tlet classes = '';\\n\\n\\texport { classes as class };\\n\\n\\tlet href;\\n\\n\\t$: href = encodeURI(\`https://www.linkedin.com/sharing/share-offsite/?url=\${url}\`);\\n<\/script>\\n\\n<ShareButton class=\\"ssbc-button--linkedin {classes}\\" {...$$restProps} {ariaLabel} {href}>\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t<path\\n\\t\\t\\td=\\"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z\\"\\n\\t\\t/>\\n\\t</svg>\\n</ShareButton>\\n\\n<style>\\n\\t:global(.ssbc-button--linkedin) {\\n\\t\\tbackground-color: #0077b5;\\n\\t}\\n\\n\\t:global(.ssbc-button--linkedin:active),\\n\\t:global(.ssbc-button--linkedin:hover) {\\n\\t\\tbackground-color: #046293;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBS,sBAAwB,CAC/B,gBAAgB,CAAE,OACnB,CAEQ,6BAA8B,CAC9B,4BAA8B,CACrC,gBAAgB,CAAE,OACnB"}`
};
const LinkedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["url", "ariaLabel", "class"]);
  let { url } = $$props;
  let { ariaLabel = "Share on LinkedIn" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$result.css.add(css$1);
  href = encodeURI(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  return `${validate_component(ShareButton, "ShareButton").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: "ssbc-button--linkedin " + classes
      },
      $$restProps,
      { ariaLabel },
      { href }
    ),
    {},
    {
      default: () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path></svg>`;
      }
    }
  )}`;
});
const config = {
  siteUrl: "https://overred.co",
  siteName: "OverRED",
  siteDescription: "OverRED - create How-to guides in Seconds",
  twitterHandle: "@overred"
};
const Cliboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const OverredOgFallback = "/_app/immutable/assets/overred_og_fallback.Gbt4o3ka.png";
const css = {
  code: ".post_shadow.svelte-xrzh0v{box-shadow:10px 10px 40px 40px rgb(247, 94, 80, 0.15)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import FallbackImage from \\"$lib/assets/fallback_image.jpg\\";\\nimport { profile_pictures } from \\"$lib/ProfilePictures\\";\\nimport Reddit from \\"$lib/share/Reddit.svelte\\";\\nimport X from \\"$lib/share/X.svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport LinkedIn from \\"$lib/share/LinkedIn.svelte\\";\\nimport { config } from \\"$lib/config\\";\\nimport Cliboard from \\"$lib/cliboard.svelte\\";\\nimport OverredOgFallback from \\"$lib/assets/overred_og_fallback.png\\";\\nexport let data;\\nconst metadata = data.props.meta;\\nconst category = capitalize(data.props.meta.category.toString());\\nconst profilePicture = profile_pictures[data.props.meta.authors[0] ?? \\"x\\"];\\nfunction capitalize(x) {\\n  return x.charAt(0).toUpperCase() + x.slice(1);\\n}\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{metadata.title}</title>\\n\\n\\t<meta content={metadata.description} name=\\"description\\" />\\n\\n\\t<meta content={metadata.title} property=\\"og:title\\" />\\n\\t<meta content={data.props?.header_image ?? OverredOgFallback} property=\\"og:image\\" />\\n\\t<meta content={config.siteUrl} property=\\"og:url\\" />\\n\\t<meta content={metadata.description} property=\\"og:description\\" />\\n\\t<meta content={config.siteName} property=\\"og:site_name\\" />\\n\\n\\t<meta content={config.twitterHandle} name=\\"twitter:creator\\" />\\n\\t<meta content=\\"summary_large_image\\" name=\\"twitter:card\\" />\\n\\t<meta content={metadata.title} name=\\"twitter:title\\" />\\n\\t<meta content={metadata.description} name=\\"twitter:description\\" />\\n\\t<meta content={data.props?.header_image ?? OverredOgFallback} name=\\"twitter:image\\" />\\n</svelte:head>\\n\\n<Cliboard />\\n\\n<div class=\\"w-full flex flex-col\\">\\n\\t<ol class=\\"breadcrumb justify-start items-center flex m-32 py-2 px-6 rounded-lg w-auto\\">\\n\\t\\t<li class=\\"crumb\\"><a class=\\"anchor\\" href=\\"/blog\\">Blog</a></li>\\n\\t\\t<li class=\\"crumb-separator\\" aria-hidden=\\"true\\">&rsaquo;</li>\\n\\t\\t<li class=\\"crumb\\">\\n\\t\\t\\t<a class=\\"anchor\\" href={`/blog?filter=${metadata.category}`}>{category}</a>\\n\\t\\t</li>\\n\\t\\t<li class=\\"crumb-separator\\" aria-hidden=\\"true\\">&rsaquo;</li>\\n\\t\\t<li>{metadata.title}</li>\\n\\t</ol>\\n\\n\\t<article\\n\\t\\tclass=\\"flex flex-col items-center justify-center mx-[15%] mb-3 mt-12 bg-background rounded-xl p-20 pt-0 post_shadow\\"\\n\\t>\\n\\t\\t<div class=\\"flex flex-col justify-start items-center space-y-4\\">\\n\\t\\t\\t<div class=\\"w-full flex m-5 flex-row items-center justify-between pt-6\\">\\n\\t\\t\\t\\t<!-- Profiles-->\\n\\t\\t\\t\\t<div class=\\"flex flex-row jusitfy-center items-center space-x-3 pt-2\\">\\n\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\tsrc={profilePicture}\\n\\t\\t\\t\\t\\t\\tclass=\\"h-12 w-12 border-2 border-white object-contain rounded-full\\"\\n\\t\\t\\t\\t\\t\\talt=\\"my_profile\\"\\n\\t\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-sm text-overred-variant-blue text-opacity-80 italic font-semibold\\">\\n\\t\\t\\t\\t\\t\\t\\t{`${metadata.authors[0]}`}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-row text-sm text-overred-variant-blue text-opacity-70\\">\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"italic\\">{`${metadata.date}`}</p>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"flex justify-center items-center px-1\\">&bull;</span>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"italic\\">{`${metadata.reading_time} min`}</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<!-- Social Icons -->\\n\\t\\t\\t\\t<div class=\\"flex flex-row space-x-5 justify-center items-center\\">\\n\\t\\t\\t\\t\\t<X\\n\\t\\t\\t\\t\\t\\ttext={metadata.title}\\n\\t\\t\\t\\t\\t\\turl={$page.url}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-center items-center rounded-full\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<Reddit\\n\\t\\t\\t\\t\\t\\ttitle={metadata.title}\\n\\t\\t\\t\\t\\t\\turl={$page.url}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-center items-center rounded-full\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<LinkedIn\\n\\t\\t\\t\\t\\t\\ttext={metadata.title}\\n\\t\\t\\t\\t\\t\\turl={$page.url}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-center items-center rounded-full\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"w-full flex flex-col space-y-5 py-12 jusitfy-center items-center\\">\\n\\t\\t\\t\\t<h1 class=\\"text-overred-variant-blue text-center text-5xl font-bold\\">{metadata.title}</h1>\\n\\t\\t\\t\\t<p\\n\\t\\t\\t\\t\\tclass=\\"text-overred-variant-blue text-xl font-semidbold text-opacity-80 w-[95%] text-center\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{metadata.description}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<img\\n\\t\\t\\t\\tsrc={data.props?.header_image ?? FallbackImage}\\n\\t\\t\\t\\tclass=\\"h-96 w-full object-cover rounded-lg my-6 bg-overred-red\\"\\n\\t\\t\\t\\talt=\\"my_image\\"\\n\\t\\t\\t/>\\n\\n\\t\\t\\t<svelte:component this={data.props.content} />\\n\\t\\t</div>\\n\\t</article>\\n</div>\\n\\n<!-- <div use:tocCrawler={{ mode: \'generate\', prefix: \'-\' }} class=\\"bg-slate-200 p-5\\">\\n\\t<div class=\\"bg-slate-300\\">\\n\\n\\t</div>\\n\\t<h2>Heading 2</h2>\\n\\t<p>...</p>\\n\\t<h3>Heading 3</h3>\\n\\t<p>...</p>\\n</div> -->\\n\\n<style>\\n\\t.post_shadow {\\n\\t\\tbox-shadow: 10px 10px 40px 40px rgb(247, 94, 80, 0.15);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6HC,0BAAa,CACZ,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CACtD"}'
};
function capitalize(x) {
  return x.charAt(0).toUpperCase() + x.slice(1);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const metadata = data.props.meta;
  const category = capitalize(data.props.meta.category.toString());
  const profilePicture = profile_pictures[data.props.meta.authors[0] ?? "x"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1q4pbod_START -->${$$result.title = `<title>${escape(metadata.title)}</title>`, ""}<meta${add_attribute("content", metadata.description, 0)} name="description"><meta${add_attribute("content", metadata.title, 0)} property="og:title"><meta${add_attribute("content", data.props?.header_image ?? OverredOgFallback, 0)} property="og:image"><meta${add_attribute("content", config.siteUrl, 0)} property="og:url"><meta${add_attribute("content", metadata.description, 0)} property="og:description"><meta${add_attribute("content", config.siteName, 0)} property="og:site_name"><meta${add_attribute("content", config.twitterHandle, 0)} name="twitter:creator"><meta content="summary_large_image" name="twitter:card"><meta${add_attribute("content", metadata.title, 0)} name="twitter:title"><meta${add_attribute("content", metadata.description, 0)} name="twitter:description"><meta${add_attribute("content", data.props?.header_image ?? OverredOgFallback, 0)} name="twitter:image"><!-- HEAD_svelte-1q4pbod_END -->`, ""} ${validate_component(Cliboard, "Cliboard").$$render($$result, {}, {}, {})} <div class="w-full flex flex-col"><ol class="breadcrumb justify-start items-center flex m-32 py-2 px-6 rounded-lg w-auto"><li class="crumb" data-svelte-h="svelte-gx2ani"><a class="anchor" href="/blog">Blog</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">›</li> <li class="crumb"><a class="anchor"${add_attribute("href", `/blog?filter=${metadata.category}`, 0)}>${escape(category)}</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">›</li> <li>${escape(metadata.title)}</li></ol> <article class="flex flex-col items-center justify-center mx-[15%] mb-3 mt-12 bg-background rounded-xl p-20 pt-0 post_shadow svelte-xrzh0v"><div class="flex flex-col justify-start items-center space-y-4"><div class="w-full flex m-5 flex-row items-center justify-between pt-6"> <div class="flex flex-row jusitfy-center items-center space-x-3 pt-2"><img${add_attribute("src", profilePicture, 0)} class="h-12 w-12 border-2 border-white object-contain rounded-full" alt="my_profile"> <div class="flex flex-col"><p class="text-sm text-overred-variant-blue text-opacity-80 italic font-semibold">${escape(`${metadata.authors[0]}`)}</p> <div class="flex flex-row text-sm text-overred-variant-blue text-opacity-70"><p class="italic">${escape(`${metadata.date}`)}</p> <span class="flex justify-center items-center px-1" data-svelte-h="svelte-1h5ntg6">•</span> <p class="italic">${escape(`${metadata.reading_time} min`)}</p></div></div></div>  <div class="flex flex-row space-x-5 justify-center items-center">${validate_component(X, "X").$$render(
    $$result,
    {
      text: metadata.title,
      url: $page.url,
      class: "flex justify-center items-center rounded-full"
    },
    {},
    {}
  )} ${validate_component(Reddit, "Reddit").$$render(
    $$result,
    {
      title: metadata.title,
      url: $page.url,
      class: "flex justify-center items-center rounded-full"
    },
    {},
    {}
  )} ${validate_component(LinkedIn, "LinkedIn").$$render(
    $$result,
    {
      text: metadata.title,
      url: $page.url,
      class: "flex justify-center items-center rounded-full"
    },
    {},
    {}
  )}</div></div> <div class="w-full flex flex-col space-y-5 py-12 jusitfy-center items-center"><h1 class="text-overred-variant-blue text-center text-5xl font-bold">${escape(metadata.title)}</h1> <p class="text-overred-variant-blue text-xl font-semidbold text-opacity-80 w-[95%] text-center">${escape(metadata.description)}</p></div> <img${add_attribute("src", data.props?.header_image ?? FallbackImage, 0)} class="h-96 w-full object-cover rounded-lg my-6 bg-overred-red" alt="my_image"> ${validate_component(data.props.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article></div> `;
});
export {
  Page as default
};
