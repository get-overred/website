import { c as create_ssr_component, a as add_attribute, b as subscribe, e as escape, n as null_to_empty, v as validate_component, d as each, g as get_store_value, o as onDestroy, f as add_styles, m as missing_component, h as spread, i as escape_object, j as merge_ssr_styles } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { d as derived, w as writable } from "../../chunks/index2.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="border-t-4 border-secondary py-5 md:py-6 flex flex-col items-center justify-center p-3 space-y-5" data-svelte-h="svelte-11jug92"><p class="text-lg font-bold text-center flex justify-center items-center text-primary">© 2025 • MIT License</p> <p class="text-lg font-bold text-center flex justify-center items-center text-primary">Developed by<span><a href="https://mokollmar.com"> @mokollmar</a></span></p> <a href="/sitemap.xml" class="text-md underline font-semibold text-primary">Sitemap.xml</a></div>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class_data } = $$props;
  if ($$props.class_data === void 0 && $$bindings.class_data && class_data !== void 0) $$bindings.class_data(class_data);
  return `<div${add_attribute("class", class_data, 0)}><svg width="8758" height="1598" viewBox="0 0 8758 1598" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_46_2)"><path d="M836.409 1382.25C716.347 1382.25 612.492 1359.44 524.846 1313.81C438.401 1266.99 371.766 1200.35 324.942 1113.91C278.117 1027.46 254.705 924.21 254.705 804.147C254.705 684.084 278.117 580.83 324.942 494.385C371.766 406.739 438.401 339.504 524.846 292.679C612.492 245.855 716.347 222.442 836.409 222.442C956.472 222.442 1058.53 245.855 1142.57 292.679C1227.81 339.504 1292.65 406.739 1337.07 494.385C1381.49 580.83 1403.71 684.084 1403.71 804.147C1403.71 984.241 1353.88 1125.92 1254.23 1229.17C1155.78 1331.22 1016.5 1382.25 836.409 1382.25ZM836.409 1122.91C918.052 1122.91 979.885 1096.5 1021.91 1043.67C1065.13 989.644 1086.74 910.403 1086.74 805.948C1086.74 701.493 1065.13 621.651 1021.91 566.422C979.885 509.993 918.052 481.778 836.409 481.778C754.767 481.778 689.933 509.993 641.908 566.422C595.083 621.651 571.671 701.493 571.671 805.948C571.671 910.403 595.083 989.644 641.908 1043.67C689.933 1096.5 754.767 1122.91 836.409 1122.91Z" fill="black" fill-opacity="0.9"></path><path d="M5764.82 1463.29L5294.77 995.047V1375.05H4988.61V337.703C5017.43 318.493 5055.85 300.483 5103.87 283.674C5153.1 265.665 5207.73 251.257 5267.76 240.452C5327.79 228.445 5389.02 222.442 5451.45 222.442C5603.93 222.442 5722.8 257.861 5808.04 328.698C5894.49 399.535 5937.71 497.386 5937.71 622.252C5937.71 717.101 5913.7 796.343 5865.67 859.976C5818.85 923.609 5755.21 970.434 5674.77 1000.45L5971.93 1239.98L5764.82 1463.29ZM5465.86 813.152C5518.69 813.152 5559.51 796.343 5588.33 762.725C5617.14 729.108 5631.55 686.485 5631.55 634.858C5631.55 582.031 5615.94 540.009 5584.72 508.792C5554.71 476.375 5507.88 460.167 5444.25 460.167C5384.22 460.167 5334.39 472.173 5294.77 496.186V636.659C5294.77 693.089 5310.98 736.912 5343.4 768.128C5377.02 798.144 5417.84 813.152 5465.86 813.152ZM6115.96 1375.05V229.646H6940.79V463.769H6422.12V676.28H6870.56V910.403H6422.12V1140.92H6951.6V1375.05H6115.96ZM7113.16 1375.05V292.679C7169.59 268.666 7234.43 251.257 7307.66 240.452C7380.9 228.445 7452.34 222.442 7521.98 222.442C7727.28 222.442 7883.37 272.268 7990.22 371.921C8097.08 470.372 8150.51 614.448 8150.51 804.147C8150.51 938.617 8124.69 1047.87 8073.07 1131.92C8022.64 1215.96 7951.8 1277.79 7860.55 1317.42C7769.31 1355.84 7664.25 1375.05 7545.39 1375.05H7113.16ZM7422.92 1140.92H7529.18C7620.43 1140.92 7691.87 1113.31 7743.49 1058.08C7796.32 1002.85 7822.73 918.207 7822.73 804.147C7822.73 693.689 7797.52 610.846 7747.09 555.617C7696.67 499.187 7623.43 470.972 7527.38 470.972C7510.57 470.972 7493.16 472.173 7475.15 474.574C7457.14 475.775 7439.73 478.777 7422.92 483.579V1140.92Z" fill="black" fill-opacity="0.9"></path><rect x="4484.35" y="25.7275" width="4216.78" height="1571.97" rx="643.194" fill="#FA0000" fill-opacity="0.5" stroke="#FA0000" stroke-width="64.3194" stroke-dasharray="128.64 128.64"></rect><path d="M2030.18 1375.05L1718.61 454.764H2015.77L2204.87 1113.91L2375.96 454.764H2665.91L2377.76 1375.05H2030.18ZM3192.91 1385.85C3096.86 1385.85 3011.62 1366.64 2937.18 1328.22C2863.94 1289.8 2806.31 1233.97 2764.29 1160.73C2722.26 1087.5 2701.25 999.249 2701.25 895.995C2701.25 750.719 2741.47 639.06 2821.92 561.02C2903.56 481.778 3012.82 442.157 3149.69 442.157C3245.74 442.157 3323.78 460.767 3383.81 497.987C3445.04 534.005 3490.07 582.631 3518.88 643.863C3547.7 705.095 3562.1 772.931 3562.1 847.37C3562.1 873.783 3560.3 901.398 3556.7 930.213C3554.3 957.827 3550.1 985.442 3544.1 1013.06H2984C2990.01 1074.29 3015.22 1115.71 3059.64 1137.32C3105.27 1158.93 3157.49 1169.74 3216.32 1169.74C3265.55 1169.74 3310.57 1164.34 3351.39 1153.53C3392.22 1141.52 3425.23 1125.92 3450.45 1106.71L3527.89 1286.8C3497.87 1312.01 3452.85 1334.82 3392.82 1355.24C3333.99 1375.65 3267.35 1385.85 3192.91 1385.85ZM2984 831.161H3309.97C3309.97 783.136 3296.17 742.915 3268.55 710.498C3242.14 676.88 3201.92 660.071 3147.89 660.071C3096.26 660.071 3056.04 675.68 3027.22 706.896C2998.41 738.112 2984 779.534 2984 831.161ZM3723.5 1375.05V611.446C3765.52 563.421 3817.15 523.2 3878.38 490.783C3940.81 458.366 4012.25 442.157 4092.69 442.157C4191.15 442.157 4277.59 467.371 4352.03 517.797L4276.39 724.905C4258.38 712.899 4236.77 703.894 4211.56 697.891C4187.54 691.888 4165.33 688.887 4144.92 688.887C4119.71 688.887 4096.3 692.488 4074.68 699.692C4054.27 705.695 4039.27 712.899 4029.66 721.304V1375.05H3723.5Z" fill="black" fill-opacity="0.8"></path><circle cx="819.429" cy="788.556" r="785.983" fill="#FA0000" fill-opacity="0.5" stroke="#FA0000" stroke-width="64.3194" stroke-dasharray="128.64 128.64"></circle></g><defs><clipPath id="clip0_46_2"><rect width="8757.73" height="1597.69" fill="white"></rect></clipPath></defs></svg></div>`;
});
const css$8 = {
  code: "#header.svelte-1ekyqcp{transition:transform 1.5s ease-in-out,\n			background-color 1s ease-in-out,\n			all 1s ease-in-out}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport Logo from \\"./assets/Logo.svelte\\";\\nimport { fade, fly, draw, blur } from \\"svelte/transition\\";\\nimport { quintOut } from \\"svelte/easing\\";\\nexport let yScroll = 0;\\nlet mounted = false;\\nonMount(() => mounted = true);\\nlet current_link = \\"\\";\\n$: if (mounted) current_link = $page.url.pathname;\\n$: if (current_link) {\\n  routes.forEach((element, index) => {\\n    show_routes[index] = current_link.includes(\\n      element.url.replace(\\"/\\", \\"\\")\\n    );\\n    console.log(\\"Does check?\\");\\n    console.log(current_link.includes(element.url.replace(\\"/\\", \\"\\")));\\n  });\\n  console.log(routes);\\n}\\nlet isScroll = false;\\n$: isScroll = yScroll > 0;\\nconst routes = [\\n  { title: \\"Docs\\", url: \\"/docs\\" },\\n  { title: \\"Contact\\", url: \\"/contact\\" }\\n];\\nconst show_routes = [false, false, false];\\nconst btns = [\\n  { title: \\"Download\\", url: \\"https://chrome.com\\" },\\n  {\\n    icon: \\"fa-brands fa-github\\",\\n    url: \\"https://github.com/mokollmar/overred\\"\\n  }\\n];\\n<\/script>\\n\\n<header id=\\"header\\" class=\\"sticky top-0 pt-6 flex justify-center z-50\\">\\n\\t<div\\n\\t\\tid=\\"header\\"\\n\\t\\tclass={\\"items-center flex flex-row justify-between py-2 w-full px-6\\" +\\n\\t\\t\\t(isScroll\\n\\t\\t\\t\\t? \\" backdrop-blur-[5px] bg-white bg-opacity-50 rounded-xl shadow-centered-lg md:w-[85%] xl:w-[75%]\\"\\n\\t\\t\\t\\t: \\" md:w-[90%] xl:w-[80%] \\")}\\n\\t>\\n\\t\\t<a\\n\\t\\t\\thref=\\"/\\"\\n\\t\\t\\tclass=\\"text-center text-xl hover:opacity-75 overflow-hidden\\"\\n\\t\\t>\\n\\t\\t\\t<Logo\\n\\t\\t\\t\\tclass_data=\\"w-60 flex jusitfy-center items-center object-contain px-6 py-2 h-12 overflow-hidden\\"\\n\\t\\t\\t/>\\n\\t\\t</a>\\n\\n\\t\\t<div class=\\"space-x-20 flex flex-row\\">\\n\\t\\t\\t<div class=\\"flex flex-row justify-center items-center space-x-12\\">\\n\\t\\t\\t\\t{#each routes as _route, index}\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col items-center justify-center\\">\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-overred-variant-blue font-bold text-md h-min\\"\\n\\t\\t\\t\\t\\t\\t\\thref={_route.url}>{_route.title}</a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{#if show_routes[index]}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\ttransition:fade={{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\teasing: quintOut,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tduration: 2000,\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"h-[0.1rem] w-full rounded-l-2xl bg-gradient-to-tr from-overred-red via-overred-shadow-orange to-overred-shadow-pink\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"h-[0.1rem]\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"flex flex-row justify-center items-center space-x-6\\">\\n\\t\\t\\t\\t{#each btns as _, idx}\\n\\t\\t\\t\\t\\t{#if idx == 1}\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-overred-variant-blue aspect-square text-4xl flex justify-center items-center\\"\\n\\t\\t\\t\\t\\t\\t\\thref={btns[idx].url}\\n\\t\\t\\t\\t\\t\\t\\t><i class={btns[idx].icon}></i></a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-white bg-overred-variant-blue py-2 px-5 rounded-full font-semibold text-md hover:bg-overred-text-blue transition-all duration-500\\"\\n\\t\\t\\t\\t\\t\\t\\thref={btns[idx].url}>{btns[idx].title}</a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</header>\\n\\n<style>\\n\\t#header {\\n\\t\\ttransition:\\n\\t\\t\\ttransform 1.5s ease-in-out,\\n\\t\\t\\tbackground-color 1s ease-in-out,\\n\\t\\t\\tall 1s ease-in-out;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiGC,sBAAQ,CACP,UAAU,CACT,SAAS,CAAC,IAAI,CAAC,WAAW,CAAC;AAC9B,GAAG,gBAAgB,CAAC,EAAE,CAAC,WAAW,CAAC;AACnC,GAAG,GAAG,CAAC,EAAE,CAAC,WACT"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { yScroll = 0 } = $$props;
  let isScroll = false;
  const routes = [{ title: "Docs", url: "/docs" }, { title: "Contact", url: "/contact" }];
  const show_routes = [false, false, false];
  const btns = [
    {
      title: "Download",
      url: "https://chrome.com"
    },
    {
      icon: "fa-brands fa-github",
      url: "https://github.com/mokollmar/overred"
    }
  ];
  if ($$props.yScroll === void 0 && $$bindings.yScroll && yScroll !== void 0) $$bindings.yScroll(yScroll);
  $$result.css.add(css$8);
  isScroll = yScroll > 0;
  $$unsubscribe_page();
  return `<header id="header" class="sticky top-0 pt-6 flex justify-center z-50 svelte-1ekyqcp"><div id="header" class="${escape(
    null_to_empty("items-center flex flex-row justify-between py-2 w-full px-6" + (isScroll ? " backdrop-blur-[5px] bg-white bg-opacity-50 rounded-xl shadow-centered-lg md:w-[85%] xl:w-[75%]" : " md:w-[90%] xl:w-[80%] ")),
    true
  ) + " svelte-1ekyqcp"}"><a href="/" class="text-center text-xl hover:opacity-75 overflow-hidden">${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      class_data: "w-60 flex jusitfy-center items-center object-contain px-6 py-2 h-12 overflow-hidden"
    },
    {},
    {}
  )}</a> <div class="space-x-20 flex flex-row"><div class="flex flex-row justify-center items-center space-x-12">${each(routes, (_route, index) => {
    return `<div class="flex flex-col items-center justify-center"><a class="text-overred-variant-blue font-bold text-md h-min"${add_attribute("href", _route.url, 0)}>${escape(_route.title)}</a> ${show_routes[index] ? `<div class="h-[0.1rem] w-full rounded-l-2xl bg-gradient-to-tr from-overred-red via-overred-shadow-orange to-overred-shadow-pink"></div>` : `<div class="h-[0.1rem]"></div>`} </div>`;
  })}</div> <div class="flex flex-row justify-center items-center space-x-6">${each(btns, (_, idx) => {
    return `${idx == 1 ? `<a class="text-overred-variant-blue aspect-square text-4xl flex justify-center items-center"${add_attribute("href", btns[idx].url, 0)}><i${add_attribute("class", btns[idx].icon, 0)}></i></a>` : `<a class="text-white bg-overred-variant-blue py-2 px-5 rounded-full font-semibold text-md hover:bg-overred-text-blue transition-all duration-500"${add_attribute("href", btns[idx].url, 0)}>${escape(btns[idx].title)}</a>`}`;
  })}</div></div></div> </header>`;
});
function writableDerived(origins, derive, reflect, initial) {
  var childDerivedSetter, originValues, blockNextDerive = false;
  var reflectOldValues = reflect.length >= 2;
  var wrappedDerive = (got, set, update3) => {
    childDerivedSetter = set;
    if (reflectOldValues) {
      originValues = got;
    }
    if (!blockNextDerive) {
      let returned = derive(got, set, update3);
      if (derive.length < 2) {
        set(returned);
      } else {
        return returned;
      }
    }
    blockNextDerive = false;
  };
  var childDerived = derived(origins, wrappedDerive, initial);
  var singleOrigin = !Array.isArray(origins);
  function doReflect(reflecting) {
    var setWith = reflect(reflecting, originValues);
    if (singleOrigin) {
      blockNextDerive = true;
      origins.set(setWith);
    } else {
      setWith.forEach((value, i) => {
        blockNextDerive = true;
        origins[i].set(value);
      });
    }
    blockNextDerive = false;
  }
  var tryingSet = false;
  function update2(fn) {
    var isUpdated, mutatedBySubscriptions, oldValue, newValue;
    if (tryingSet) {
      newValue = fn(get_store_value(childDerived));
      childDerivedSetter(newValue);
      return;
    }
    var unsubscribe = childDerived.subscribe((value) => {
      if (!tryingSet) {
        oldValue = value;
      } else if (!isUpdated) {
        isUpdated = true;
      } else {
        mutatedBySubscriptions = true;
      }
    });
    newValue = fn(oldValue);
    tryingSet = true;
    childDerivedSetter(newValue);
    unsubscribe();
    tryingSet = false;
    if (mutatedBySubscriptions) {
      newValue = get_store_value(childDerived);
    }
    if (isUpdated) {
      doReflect(newValue);
    }
  }
  return {
    subscribe: childDerived.subscribe,
    set(value) {
      update2(() => value);
    },
    update: update2
  };
}
const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    remove(toastId);
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
function update(toast2) {
  if (toast2.id) {
    clearFromRemoveQueue(toast2.id);
  }
  toasts.update(($toasts) => $toasts.map((t) => t.id === toast2.id ? { ...t, ...toast2 } : t));
}
function add(toast2) {
  toasts.update(($toasts) => [toast2, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast2) {
  if (get_store_value(toasts).find((t) => t.id === toast2.id)) {
    update(toast2);
  } else {
    add(toast2);
  }
}
function dismiss(toastId) {
  toasts.update(($toasts) => {
    if (toastId) {
      addToRemoveQueue(toastId);
    } else {
      $toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      });
    }
    return $toasts.map((t) => t.id === toastId || toastId === void 0 ? { ...t, visible: false } : t);
  });
}
function remove(toastId) {
  toasts.update(($toasts) => {
    if (toastId === void 0) {
      return [];
    }
    return $toasts.filter((t) => t.id !== toastId);
  });
}
function startPause(time) {
  pausedAt.set(time);
}
function endPause(time) {
  let diff;
  pausedAt.update(($pausedAt) => {
    diff = time - ($pausedAt || 0);
    return null;
  });
  toasts.update(($toasts) => $toasts.map((t) => ({
    ...t,
    pauseDuration: t.pauseDuration + diff
  })));
}
const defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
function useToasterStore(toastOptions = {}) {
  const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
    ...toastOptions,
    ...toastOptions[t.type],
    ...t,
    duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
    style: [toastOptions.style, toastOptions[t.type]?.style, t.style].join(";")
  })), ($toasts) => $toasts);
  return {
    toasts: mergedToasts,
    pausedAt
  };
}
const isFunction = (valOrFunction) => typeof valOrFunction === "function";
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
const genId = /* @__PURE__ */ (() => {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
})();
const prefersReducedMotion = /* @__PURE__ */ (() => {
  let shouldReduceMotion;
  return () => {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
const createToast = (message, type = "blank", opts) => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite"
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId()
});
const createHandler = (type) => (message, options) => {
  const toast2 = createToast(message, type, options);
  upsert(toast2);
  return toast2.id;
};
const toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
  dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
  promise.then((p) => {
    toast.success(resolveValue(msgs.success, p), {
      id,
      ...opts,
      ...opts?.success
    });
    return p;
  }).catch((e) => {
    toast.error(resolveValue(msgs.error, e), {
      id,
      ...opts,
      ...opts?.error
    });
  });
  return promise;
};
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts: toasts2, pausedAt: pausedAt2 } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt2.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts2.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts: toasts2, handlers };
}
const css$7 = {
  code: "div.svelte-11kvm4p{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-11kvm4p-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-11kvm4p::after{content:'';box-sizing:border-box;animation:svelte-11kvm4p-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-11kvm4p-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-11kvm4p-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: `{"version":3,"file":"CheckmarkIcon.svelte","sources":["CheckmarkIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#61d345\\";\\nexport let secondary = \\"#fff\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 20px;\\n\\t\\topacity: 0;\\n\\t\\theight: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbackground: var(--primary, #61d345);\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(45deg);\\n\\t\\tanimation: circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t\\tanimation-delay: 100ms;\\n\\t}\\n\\n\\tdiv::after {\\n\\t\\tcontent: '';\\n\\t\\tbox-sizing: border-box;\\n\\t\\tanimation: checkmarkAnimation 0.2s ease-out forwards;\\n\\t\\topacity: 0;\\n\\t\\tanimation-delay: 200ms;\\n\\t\\tposition: absolute;\\n\\t\\tborder-right: 2px solid;\\n\\t\\tborder-bottom: 2px solid;\\n\\t\\tborder-color: var(--secondary, #fff);\\n\\t\\tbottom: 6px;\\n\\t\\tleft: 6px;\\n\\t\\theight: 10px;\\n\\t\\twidth: 6px;\\n\\t}\\n\\n\\t@keyframes circleAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(45deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(45deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes checkmarkAnimation {\\n\\t\\t0% {\\n\\t\\t\\theight: 0;\\n\\t\\t\\twidth: 0;\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\t40% {\\n\\t\\t\\theight: 0;\\n\\t\\t\\twidth: 6px;\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t\\theight: 10px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CACnC,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,8BAAe,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAChF,eAAe,CAAE,KAClB,CAEA,kBAAG,OAAQ,CACV,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,iCAAkB,CAAC,IAAI,CAAC,QAAQ,CAAC,QAAQ,CACpD,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,KAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,GAAG,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAAC,KAAK,CACxB,YAAY,CAAE,IAAI,WAAW,CAAC,KAAK,CAAC,CACpC,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACR,CAEA,WAAW,8BAAgB,CAC1B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,iCAAmB,CAC7B,EAAG,CACF,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CACV,CACA,GAAI,CACH,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IACT,CACD"}`
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `  <div class="svelte-11kvm4p"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$6 = {
  code: "div.svelte-1ee93ns{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-1ee93ns-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-1ee93ns::after,div.svelte-1ee93ns::before{content:'';animation:svelte-1ee93ns-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-1ee93ns:before{animation:svelte-1ee93ns-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-1ee93ns-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1ee93ns-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-1ee93ns-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: `{"version":3,"file":"ErrorIcon.svelte","sources":["ErrorIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#ff4b4b\\";\\nexport let secondary = \\"#fff\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 20px;\\n\\t\\topacity: 0;\\n\\t\\theight: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbackground: var(--primary, #ff4b4b);\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(45deg);\\n\\t\\tanimation: circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t\\tanimation-delay: 100ms;\\n\\t}\\n\\n\\tdiv::after,\\n\\tdiv::before {\\n\\t\\tcontent: '';\\n\\t\\tanimation: firstLineAnimation 0.15s ease-out forwards;\\n\\t\\tanimation-delay: 150ms;\\n\\t\\tposition: absolute;\\n\\t\\tborder-radius: 3px;\\n\\t\\topacity: 0;\\n\\t\\tbackground: var(--secondary, #fff);\\n\\t\\tbottom: 9px;\\n\\t\\tleft: 4px;\\n\\t\\theight: 2px;\\n\\t\\twidth: 12px;\\n\\t}\\n\\n\\tdiv:before {\\n\\t\\tanimation: secondLineAnimation 0.15s ease-out forwards;\\n\\t\\tanimation-delay: 180ms;\\n\\t\\ttransform: rotate(90deg);\\n\\t}\\n\\n\\t@keyframes circleAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(45deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(45deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes firstLineAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes secondLineAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(90deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(90deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CACnC,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,8BAAe,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAChF,eAAe,CAAE,KAClB,CAEA,kBAAG,OAAO,CACV,kBAAG,QAAS,CACX,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,iCAAkB,CAAC,KAAK,CAAC,QAAQ,CAAC,QAAQ,CACrD,eAAe,CAAE,KAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,WAAW,CAAC,KAAK,CAAC,CAClC,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IACR,CAEA,kBAAG,OAAQ,CACV,SAAS,CAAE,kCAAmB,CAAC,KAAK,CAAC,QAAQ,CAAC,QAAQ,CACtD,eAAe,CAAE,KAAK,CACtB,SAAS,CAAE,OAAO,KAAK,CACxB,CAEA,WAAW,8BAAgB,CAC1B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,iCAAmB,CAC7B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD,CAEA,WAAW,kCAAoB,CAC9B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD"}`
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  $$result.css.add(css$6);
  return `  <div class="svelte-1ee93ns"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$5 = {
  code: "div.svelte-1j7dflg{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-1j7dflg-rotate 1s linear infinite}@keyframes svelte-1j7dflg-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"LoaderIcon.svelte","sources":["LoaderIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#616161\\";\\nexport let secondary = \\"#e0e0e0\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 12px;\\n\\t\\theight: 12px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid;\\n\\t\\tborder-radius: 100%;\\n\\t\\tborder-color: var(--secondary, #e0e0e0);\\n\\t\\tborder-right-color: var(--primary, #616161);\\n\\t\\tanimation: rotate 1s linear infinite;\\n\\t}\\n\\n\\t@keyframes rotate {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: rotate(0deg);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,WAAW,CAAC,QAAQ,CAAC,CACvC,kBAAkB,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CAC3C,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAC7B,CAEA,WAAW,qBAAO,CACjB,IAAK,CACJ,SAAS,CAAE,OAAO,IAAI,CACvB,CACA,EAAG,CACF,SAAS,CAAE,OAAO,MAAM,CACzB,CACD"}'
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  $$result.css.add(css$5);
  return `  <div class="svelte-1j7dflg"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$4 = {
  code: ".indicator.svelte-1kgeier{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1kgeier{position:absolute}.animated.svelte-1kgeier{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1kgeier-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1kgeier-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: `{"version":3,"file":"ToastIcon.svelte","sources":["ToastIcon.svelte"],"sourcesContent":["<script>import CheckmarkIcon from \\"./CheckmarkIcon.svelte\\";\\nimport ErrorIcon from \\"./ErrorIcon.svelte\\";\\nimport LoaderIcon from \\"./LoaderIcon.svelte\\";\\nexport let toast;\\n$:\\n  ({ type, icon, iconTheme } = toast);\\n<\/script>\\n\\n{#if typeof icon === 'string'}\\n\\t<div class=\\"animated\\">{icon}</div>\\n{:else if typeof icon !== 'undefined'}\\n\\t<svelte:component this={icon} />\\n{:else if type !== 'blank'}\\n\\t<div class=\\"indicator\\">\\n\\t\\t<LoaderIcon {...iconTheme} />\\n\\t\\t{#if type !== 'loading'}\\n\\t\\t\\t<div class=\\"status\\">\\n\\t\\t\\t\\t{#if type === 'error'}\\n\\t\\t\\t\\t\\t<ErrorIcon {...iconTheme} />\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<CheckmarkIcon {...iconTheme} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.indicator {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmin-width: 20px;\\n\\t\\tmin-height: 20px;\\n\\t}\\n\\n\\t.status {\\n\\t\\tposition: absolute;\\n\\t}\\n\\n\\t.animated {\\n\\t\\tposition: relative;\\n\\t\\ttransform: scale(0.6);\\n\\t\\topacity: 0.4;\\n\\t\\tmin-width: 20px;\\n\\t\\tanimation: enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t}\\n\\n\\t@keyframes enter {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0.6);\\n\\t\\t\\topacity: 0.4;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,yBAAW,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACb,CAEA,sBAAQ,CACP,QAAQ,CAAE,QACX,CAEA,wBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QACrE,CAEA,WAAW,oBAAM,CAChB,IAAK,CACJ,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD"}`
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  $$result.css.add(css$4);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="animated svelte-1kgeier">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1kgeier">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})} ${type !== "loading" ? `<div class="status svelte-1kgeier">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const css$3 = {
  code: ".message.svelte-1nauejd{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: `{"version":3,"file":"ToastMessage.svelte","sources":["ToastMessage.svelte"],"sourcesContent":["<script>export let toast;\\n<\/script>\\n\\n<div class=\\"message\\" {...toast.ariaProps}>\\n\\t{#if typeof toast.message === 'string'}\\n\\t\\t{toast.message}\\n\\t{:else}\\n\\t\\t<svelte:component this={toast.message} {toast} />\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.message {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 4px 10px;\\n\\t\\tcolor: inherit;\\n\\t\\tflex: 1 1 auto;\\n\\t\\twhite-space: pre-line;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,uBAAS,CACR,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,WAAW,CAAE,QACd"}`
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  $$result.css.add(css$3);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-1nauejd" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
});
const css$2 = {
  code: "@keyframes svelte-ug60r4-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-ug60r4-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-ug60r4-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-ug60r4-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-ug60r4{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-ug60r4{opacity:0}.enter.svelte-ug60r4{animation:svelte-ug60r4-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-ug60r4{animation:svelte-ug60r4-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-ug60r4{animation:svelte-ug60r4-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-ug60r4{animation:svelte-ug60r4-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: `{"version":3,"file":"ToastBar.svelte","sources":["ToastBar.svelte"],"sourcesContent":["<script>import ToastIcon from \\"./ToastIcon.svelte\\";\\nimport { prefersReducedMotion } from \\"../core/utils\\";\\nimport ToastMessage from \\"./ToastMessage.svelte\\";\\nexport let toast;\\nexport let position = void 0;\\nexport let style = \\"\\";\\nexport let Component = void 0;\\nlet factor;\\nlet animation;\\n$: {\\n  const top = (toast.position || position || \\"top-center\\").includes(\\"top\\");\\n  factor = top ? 1 : -1;\\n  const [enter, exit] = prefersReducedMotion() ? [\\"fadeIn\\", \\"fadeOut\\"] : [\\"enter\\", \\"exit\\"];\\n  animation = toast.visible ? enter : exit;\\n}\\n<\/script>\\n\\n<div\\n\\tclass=\\"base {toast.height ? animation : 'transparent'} {toast.className || ''}\\"\\n\\tstyle=\\"{style}; {toast.style}\\"\\n\\tstyle:--factor={factor}\\n>\\n\\t{#if Component}\\n\\t\\t<svelte:component this={Component}>\\n\\t\\t\\t<ToastIcon {toast} slot=\\"icon\\" />\\n\\t\\t\\t<ToastMessage {toast} slot=\\"message\\" />\\n\\t\\t</svelte:component>\\n\\t{:else}\\n\\t\\t<slot {ToastIcon} {ToastMessage} {toast}>\\n\\t\\t\\t<ToastIcon {toast} />\\n\\t\\t\\t<ToastMessage {toast} />\\n\\t\\t</slot>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t@keyframes enterAnimation {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);\\n\\t\\t\\topacity: 0.5;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate3d(0, 0, 0) scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes exitAnimation {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate3d(0, 0, -1px) scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fadeInAnimation {\\n\\t\\t0% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fadeOutAnimation {\\n\\t\\t0% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.base {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tbackground: #fff;\\n\\t\\tcolor: #363636;\\n\\t\\tline-height: 1.3;\\n\\t\\twill-change: transform;\\n\\t\\tbox-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\\n\\t\\tmax-width: 350px;\\n\\t\\tpointer-events: auto;\\n\\t\\tpadding: 8px 10px;\\n\\t\\tborder-radius: 8px;\\n\\t}\\n\\n\\t.transparent {\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t.enter {\\n\\t\\tanimation: enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;\\n\\t}\\n\\n\\t.exit {\\n\\t\\tanimation: exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;\\n\\t}\\n\\n\\t.fadeIn {\\n\\t\\tanimation: fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;\\n\\t}\\n\\n\\t.fadeOut {\\n\\t\\tanimation: fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoCC,WAAW,4BAAe,CACzB,EAAG,CACF,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,GAAG,CAAC,CACpE,OAAO,CAAE,GACV,CACA,IAAK,CACJ,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACxC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,2BAAc,CACxB,EAAG,CACF,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,CAC3C,OAAO,CAAE,CACV,CACA,IAAK,CACJ,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,GAAG,CAAC,CACvE,OAAO,CAAE,CACV,CACD,CAEA,WAAW,6BAAgB,CAC1B,EAAG,CACF,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CACV,CACD,CAEA,WAAW,8BAAiB,CAC3B,EAAG,CACF,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CACV,CACD,CAEA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,SAAS,CACtB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACxE,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,GAChB,CAEA,0BAAa,CACZ,OAAO,CAAE,CACV,CAEA,oBAAO,CACN,SAAS,CAAE,4BAAc,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACnE,CAEA,mBAAM,CACL,SAAS,CAAE,2BAAa,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACjE,CAEA,qBAAQ,CACP,SAAS,CAAE,6BAAe,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACpE,CAEA,sBAAS,CACR,SAAS,CAAE,8BAAgB,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACpE"}`
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0) $$bindings.Component(Component);
  $$result.css.add(css$2);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-ug60r4"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon, ToastMessage, toast: toast2 }) : ` ${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})} ${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})} `}`} </div>`;
});
const css$1 = {
  code: ".wrapper.svelte-v01oml{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-v01oml{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-v01oml{z-index:9999}.active.svelte-v01oml>*{pointer-events:auto}",
  map: `{"version":3,"file":"ToastWrapper.svelte","sources":["ToastWrapper.svelte"],"sourcesContent":["<script>import { onMount } from \\"svelte\\";\\nimport { prefersReducedMotion } from \\"../core/utils\\";\\nimport ToastBar from \\"./ToastBar.svelte\\";\\nimport ToastMessage from \\"./ToastMessage.svelte\\";\\nexport let toast;\\nexport let setHeight;\\nlet wrapperEl;\\nonMount(() => {\\n  setHeight(wrapperEl.getBoundingClientRect().height);\\n});\\n$:\\n  top = toast.position?.includes(\\"top\\") ? 0 : null;\\n$:\\n  bottom = toast.position?.includes(\\"bottom\\") ? 0 : null;\\n$:\\n  factor = toast.position?.includes(\\"top\\") ? 1 : -1;\\n$:\\n  justifyContent = toast.position?.includes(\\"center\\") && \\"center\\" || (toast.position?.includes(\\"right\\") || toast.position?.includes(\\"end\\")) && \\"flex-end\\" || null;\\n<\/script>\\n\\n<div\\n\\tbind:this={wrapperEl}\\n\\tclass=\\"wrapper\\"\\n\\tclass:active={toast.visible}\\n\\tclass:transition={!prefersReducedMotion()}\\n\\tstyle:--factor={factor}\\n\\tstyle:--offset={toast.offset}\\n\\tstyle:top\\n\\tstyle:bottom\\n\\tstyle:justify-content={justifyContent}\\n>\\n\\t{#if toast.type === 'custom'}\\n\\t\\t<ToastMessage {toast} />\\n\\t{:else}\\n\\t\\t<slot {toast}>\\n\\t\\t\\t<ToastBar {toast} position={toast.position} />\\n\\t\\t</slot>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tdisplay: flex;\\n\\t\\tposition: absolute;\\n\\t\\ttransform: translateY(calc(var(--offset, 16px) * var(--factor) * 1px));\\n\\t}\\n\\n\\t.transition {\\n\\t\\ttransition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1);\\n\\t}\\n\\n\\t.active {\\n\\t\\tz-index: 9999;\\n\\t}\\n\\n\\t.active > :global(*) {\\n\\t\\tpointer-events: auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyCC,sBAAS,CACR,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,WAAW,KAAK,IAAI,QAAQ,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtE,CAEA,yBAAY,CACX,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACvD,CAEA,qBAAQ,CACP,OAAO,CAAE,IACV,CAEA,qBAAO,CAAW,CAAG,CACpB,cAAc,CAAE,IACjB"}`
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0) $$bindings.setHeight(setHeight);
  $$result.css.add(css$1);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-v01oml",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : ` ${validate_component(ToastBar, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})} `}`} </div>`;
});
const css = {
  code: ".toaster.svelte-1phplh9{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: `{"version":3,"file":"Toaster.svelte","sources":["Toaster.svelte"],"sourcesContent":["<script>import useToaster from \\"../core/use-toaster\\";\\nimport ToastWrapper from \\"./ToastWrapper.svelte\\";\\nexport let reverseOrder = false;\\nexport let position = \\"top-center\\";\\nexport let toastOptions = void 0;\\nexport let gutter = 8;\\nexport let containerStyle = void 0;\\nexport let containerClassName = void 0;\\nconst { toasts, handlers } = useToaster(toastOptions);\\nlet _toasts;\\n$:\\n  _toasts = $toasts.map((toast) => ({\\n    ...toast,\\n    position: toast.position || position,\\n    offset: handlers.calculateOffset(toast, $toasts, {\\n      reverseOrder,\\n      gutter,\\n      defaultPosition: position\\n    })\\n  }));\\n<\/script>\\n\\n<div\\n\\tclass=\\"toaster {containerClassName || ''}\\"\\n\\tstyle={containerStyle}\\n\\ton:mouseenter={handlers.startPause}\\n\\ton:mouseleave={handlers.endPause}\\n\\trole=\\"alert\\"\\n>\\n\\t{#each _toasts as toast (toast.id)}\\n\\t\\t<ToastWrapper {toast} setHeight={(height) => handlers.updateHeight(toast.id, height)} />\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.toaster {\\n\\t\\t--default-offset: 16px;\\n\\n\\t\\tposition: fixed;\\n\\t\\tz-index: 9999;\\n\\t\\ttop: var(--default-offset);\\n\\t\\tleft: var(--default-offset);\\n\\t\\tright: var(--default-offset);\\n\\t\\tbottom: var(--default-offset);\\n\\t\\tpointer-events: none;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmCC,uBAAS,CACR,gBAAgB,CAAE,IAAI,CAEtB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,gBAAgB,CAAC,CAC1B,IAAI,CAAE,IAAI,gBAAgB,CAAC,CAC3B,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,cAAc,CAAE,IACjB"}`
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts: toasts2, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts2, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0) $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0) $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0) $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0) $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0) $$bindings.containerClassName(containerClassName);
  $$result.css.add(css);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-1phplh9"}"${add_attribute("style", containerStyle, 0)} role="alert">${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yScroll = 0;
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} <div class="bg-background flex flex-col overflow-x-clip min-h-screen"> ${validate_component(Header, "Header").$$render($$result, { yScroll }, {}, {})} <div class="flex flex-grow">${slots.default ? slots.default({}) : ``}</div>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
