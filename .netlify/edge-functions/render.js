var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props) if (!keys.has(k) && k[0] !== "$") rest[k] = props[k];
  return rest;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_current_component(component6) {
  current_component = component6;
}
function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(
          merge_ssr_styles(attributes.style, styles_to_add)
        );
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name) continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function escape_attribute_value(value) {
  const should_escape = typeof value === "string" || value && typeof value === "object";
  return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key2 in obj) {
    result[key2] = escape_attribute_value(obj[key2]);
  }
  return result;
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component6, name) {
  if (!component6 || !component6.$$render) {
    if (name === "svelte:component") name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component6;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css3) => css3.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean) return "";
  const assignment = `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2] != null && style_object[key2] !== "").map((key2) => `${key2}: ${escape_attribute_value(style_object[key2])};`).join(" ");
}
function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : "";
}
var current_component, _boolean_attributes, boolean_attributes, invalid_attribute_name_character, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    _boolean_attributes = /** @type {const} */
    [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ];
    boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
    invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index.js
function error(status, body2) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body2);
}
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
var HttpError, Redirect, SvelteKitError, ActionFailure, encoder;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, tracked_url_properties, DATA_SUFFIX, HTML_DATA_SUFFIX, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    internal = new URL("sveltekit-internal://");
    tracked_url_properties = /** @type {const} */
    [
      "href",
      "pathname",
      "search",
      "toString",
      "toJSON"
    ];
    DATA_SUFFIX = "/__data.json";
    HTML_DATA_SUFFIX = ".html__data.json";
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update2) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  if (!stores_array.every(Boolean)) {
    throw new Error("derived() expects stores as input, got a falsy value");
  }
  const auto = fn.length < 2;
  return readable(initial_value, (set, update2) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set, update2);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map(
      (store, i) => subscribe(
        store,
        (value) => {
          values[i] = value;
          pending &= ~(1 << i);
          if (started) {
            sync();
          }
        },
        () => {
          pending |= 1 << i;
        }
      )
    );
    started = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    };
  });
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_ssr();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/client.js
function get(key2, parse2 = JSON.parse) {
  try {
    return parse2(sessionStorage[key2]);
  } catch {
  }
}
var SNAPSHOT_KEY, SCROLL_KEY;
var init_client = __esm({
  ".svelte-kit/output/server/chunks/client.js"() {
    init_exports();
    SNAPSHOT_KEY = "sveltekit:snapshot";
    SCROLL_KEY = "sveltekit:scroll";
    get(SCROLL_KEY) ?? {};
    get(SNAPSHOT_KEY) ?? {};
  }
});

// .svelte-kit/output/server/chunks/stores.js
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_ssr();
    init_client();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
function writableDerived(origins, derive, reflect, initial2) {
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
  var childDerived = derived(origins, wrappedDerive, initial2);
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
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
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
var Footer, Logo, css$8, Header, TOAST_LIMIT, toasts, pausedAt, toastTimeouts, addToRemoveQueue, clearFromRemoveQueue, defaultTimeouts, isFunction, resolveValue, genId, prefersReducedMotion, createToast, createHandler, toast, handlers, css$7, CheckmarkIcon, css$6, ErrorIcon, css$5, LoaderIcon, css$4, ToastIcon, css$3, ToastMessage, css$2, ToastBar, css$1, ToastWrapper, css, Toaster, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    init_stores();
    init_index2();
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="border-t-4 border-secondary py-5 md:py-6 flex flex-col items-center justify-center p-3 space-y-5" data-svelte-h="svelte-11jug92"><p class="text-lg font-bold text-center flex justify-center items-center text-primary">\xA9 2025 \u2022 MIT License</p> <p class="text-lg font-bold text-center flex justify-center items-center text-primary">Developed by<span><a href="https://mokollmar.com">\xA0@mokollmar</a></span></p> <a href="/sitemap.xml" class="text-md underline font-semibold text-primary">Sitemap.xml</a></div>`;
    });
    Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { class_data } = $$props;
      if ($$props.class_data === void 0 && $$bindings.class_data && class_data !== void 0) $$bindings.class_data(class_data);
      return `<div${add_attribute("class", class_data, 0)}><svg width="8758" height="1598" viewBox="0 0 8758 1598" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_46_2)"><path d="M836.409 1382.25C716.347 1382.25 612.492 1359.44 524.846 1313.81C438.401 1266.99 371.766 1200.35 324.942 1113.91C278.117 1027.46 254.705 924.21 254.705 804.147C254.705 684.084 278.117 580.83 324.942 494.385C371.766 406.739 438.401 339.504 524.846 292.679C612.492 245.855 716.347 222.442 836.409 222.442C956.472 222.442 1058.53 245.855 1142.57 292.679C1227.81 339.504 1292.65 406.739 1337.07 494.385C1381.49 580.83 1403.71 684.084 1403.71 804.147C1403.71 984.241 1353.88 1125.92 1254.23 1229.17C1155.78 1331.22 1016.5 1382.25 836.409 1382.25ZM836.409 1122.91C918.052 1122.91 979.885 1096.5 1021.91 1043.67C1065.13 989.644 1086.74 910.403 1086.74 805.948C1086.74 701.493 1065.13 621.651 1021.91 566.422C979.885 509.993 918.052 481.778 836.409 481.778C754.767 481.778 689.933 509.993 641.908 566.422C595.083 621.651 571.671 701.493 571.671 805.948C571.671 910.403 595.083 989.644 641.908 1043.67C689.933 1096.5 754.767 1122.91 836.409 1122.91Z" fill="black" fill-opacity="0.9"></path><path d="M5764.82 1463.29L5294.77 995.047V1375.05H4988.61V337.703C5017.43 318.493 5055.85 300.483 5103.87 283.674C5153.1 265.665 5207.73 251.257 5267.76 240.452C5327.79 228.445 5389.02 222.442 5451.45 222.442C5603.93 222.442 5722.8 257.861 5808.04 328.698C5894.49 399.535 5937.71 497.386 5937.71 622.252C5937.71 717.101 5913.7 796.343 5865.67 859.976C5818.85 923.609 5755.21 970.434 5674.77 1000.45L5971.93 1239.98L5764.82 1463.29ZM5465.86 813.152C5518.69 813.152 5559.51 796.343 5588.33 762.725C5617.14 729.108 5631.55 686.485 5631.55 634.858C5631.55 582.031 5615.94 540.009 5584.72 508.792C5554.71 476.375 5507.88 460.167 5444.25 460.167C5384.22 460.167 5334.39 472.173 5294.77 496.186V636.659C5294.77 693.089 5310.98 736.912 5343.4 768.128C5377.02 798.144 5417.84 813.152 5465.86 813.152ZM6115.96 1375.05V229.646H6940.79V463.769H6422.12V676.28H6870.56V910.403H6422.12V1140.92H6951.6V1375.05H6115.96ZM7113.16 1375.05V292.679C7169.59 268.666 7234.43 251.257 7307.66 240.452C7380.9 228.445 7452.34 222.442 7521.98 222.442C7727.28 222.442 7883.37 272.268 7990.22 371.921C8097.08 470.372 8150.51 614.448 8150.51 804.147C8150.51 938.617 8124.69 1047.87 8073.07 1131.92C8022.64 1215.96 7951.8 1277.79 7860.55 1317.42C7769.31 1355.84 7664.25 1375.05 7545.39 1375.05H7113.16ZM7422.92 1140.92H7529.18C7620.43 1140.92 7691.87 1113.31 7743.49 1058.08C7796.32 1002.85 7822.73 918.207 7822.73 804.147C7822.73 693.689 7797.52 610.846 7747.09 555.617C7696.67 499.187 7623.43 470.972 7527.38 470.972C7510.57 470.972 7493.16 472.173 7475.15 474.574C7457.14 475.775 7439.73 478.777 7422.92 483.579V1140.92Z" fill="black" fill-opacity="0.9"></path><rect x="4484.35" y="25.7275" width="4216.78" height="1571.97" rx="643.194" fill="#FA0000" fill-opacity="0.5" stroke="#FA0000" stroke-width="64.3194" stroke-dasharray="128.64 128.64"></rect><path d="M2030.18 1375.05L1718.61 454.764H2015.77L2204.87 1113.91L2375.96 454.764H2665.91L2377.76 1375.05H2030.18ZM3192.91 1385.85C3096.86 1385.85 3011.62 1366.64 2937.18 1328.22C2863.94 1289.8 2806.31 1233.97 2764.29 1160.73C2722.26 1087.5 2701.25 999.249 2701.25 895.995C2701.25 750.719 2741.47 639.06 2821.92 561.02C2903.56 481.778 3012.82 442.157 3149.69 442.157C3245.74 442.157 3323.78 460.767 3383.81 497.987C3445.04 534.005 3490.07 582.631 3518.88 643.863C3547.7 705.095 3562.1 772.931 3562.1 847.37C3562.1 873.783 3560.3 901.398 3556.7 930.213C3554.3 957.827 3550.1 985.442 3544.1 1013.06H2984C2990.01 1074.29 3015.22 1115.71 3059.64 1137.32C3105.27 1158.93 3157.49 1169.74 3216.32 1169.74C3265.55 1169.74 3310.57 1164.34 3351.39 1153.53C3392.22 1141.52 3425.23 1125.92 3450.45 1106.71L3527.89 1286.8C3497.87 1312.01 3452.85 1334.82 3392.82 1355.24C3333.99 1375.65 3267.35 1385.85 3192.91 1385.85ZM2984 831.161H3309.97C3309.97 783.136 3296.17 742.915 3268.55 710.498C3242.14 676.88 3201.92 660.071 3147.89 660.071C3096.26 660.071 3056.04 675.68 3027.22 706.896C2998.41 738.112 2984 779.534 2984 831.161ZM3723.5 1375.05V611.446C3765.52 563.421 3817.15 523.2 3878.38 490.783C3940.81 458.366 4012.25 442.157 4092.69 442.157C4191.15 442.157 4277.59 467.371 4352.03 517.797L4276.39 724.905C4258.38 712.899 4236.77 703.894 4211.56 697.891C4187.54 691.888 4165.33 688.887 4144.92 688.887C4119.71 688.887 4096.3 692.488 4074.68 699.692C4054.27 705.695 4039.27 712.899 4029.66 721.304V1375.05H3723.5Z" fill="black" fill-opacity="0.8"></path><circle cx="819.429" cy="788.556" r="785.983" fill="#FA0000" fill-opacity="0.5" stroke="#FA0000" stroke-width="64.3194" stroke-dasharray="128.64 128.64"></circle></g><defs><clipPath id="clip0_46_2"><rect width="8757.73" height="1597.69" fill="white"></rect></clipPath></defs></svg></div>`;
    });
    css$8 = {
      code: "#header.svelte-1ekyqcp{transition:transform 1.5s ease-in-out,\n			background-color 1s ease-in-out,\n			all 1s ease-in-out}",
      map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport Logo from \\"./assets/Logo.svelte\\";\\nimport { fade, fly, draw, blur } from \\"svelte/transition\\";\\nimport { quintOut } from \\"svelte/easing\\";\\nexport let yScroll = 0;\\nlet mounted = false;\\nonMount(() => mounted = true);\\nlet current_link = \\"\\";\\n$: if (mounted) current_link = $page.url.pathname;\\n$: if (current_link) {\\n  routes.forEach((element, index) => {\\n    show_routes[index] = current_link.includes(\\n      element.url.replace(\\"/\\", \\"\\")\\n    );\\n    console.log(\\"Does check?\\");\\n    console.log(current_link.includes(element.url.replace(\\"/\\", \\"\\")));\\n  });\\n  console.log(routes);\\n}\\nlet isScroll = false;\\n$: isScroll = yScroll > 0;\\nconst routes = [\\n  { title: \\"Docs\\", url: \\"/docs\\" },\\n  { title: \\"Contact\\", url: \\"/contact\\" }\\n];\\nconst show_routes = [false, false, false];\\nconst btns = [\\n  { title: \\"Download\\", url: \\"https://chrome.com\\" },\\n  {\\n    icon: \\"fa-brands fa-github\\",\\n    url: \\"https://github.com/mokollmar/overred\\"\\n  }\\n];\\n<\/script>\\n\\n<header id=\\"header\\" class=\\"sticky top-0 pt-6 flex justify-center z-50\\">\\n\\t<div\\n\\t\\tid=\\"header\\"\\n\\t\\tclass={\\"items-center flex flex-row justify-between py-2 w-full px-6\\" +\\n\\t\\t\\t(isScroll\\n\\t\\t\\t\\t? \\" backdrop-blur-[5px] bg-white bg-opacity-50 rounded-xl shadow-centered-lg md:w-[85%] xl:w-[75%]\\"\\n\\t\\t\\t\\t: \\" md:w-[90%] xl:w-[80%] \\")}\\n\\t>\\n\\t\\t<a\\n\\t\\t\\thref=\\"/\\"\\n\\t\\t\\tclass=\\"text-center text-xl hover:opacity-75 overflow-hidden\\"\\n\\t\\t>\\n\\t\\t\\t<Logo\\n\\t\\t\\t\\tclass_data=\\"w-60 flex jusitfy-center items-center object-contain px-6 py-2 h-12 overflow-hidden\\"\\n\\t\\t\\t/>\\n\\t\\t</a>\\n\\n\\t\\t<div class=\\"space-x-20 flex flex-row\\">\\n\\t\\t\\t<div class=\\"flex flex-row justify-center items-center space-x-12\\">\\n\\t\\t\\t\\t{#each routes as _route, index}\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col items-center justify-center\\">\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-overred-variant-blue font-bold text-md h-min\\"\\n\\t\\t\\t\\t\\t\\t\\thref={_route.url}>{_route.title}</a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{#if show_routes[index]}\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\ttransition:fade={{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\teasing: quintOut,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tduration: 2000,\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"h-[0.1rem] w-full rounded-l-2xl bg-gradient-to-tr from-overred-red via-overred-shadow-orange to-overred-shadow-pink\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"h-[0.1rem]\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"flex flex-row justify-center items-center space-x-6\\">\\n\\t\\t\\t\\t{#each btns as _, idx}\\n\\t\\t\\t\\t\\t{#if idx == 1}\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-overred-variant-blue aspect-square text-4xl flex justify-center items-center\\"\\n\\t\\t\\t\\t\\t\\t\\thref={btns[idx].url}\\n\\t\\t\\t\\t\\t\\t\\t><i class={btns[idx].icon}></i></a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"text-white bg-overred-variant-blue py-2 px-5 rounded-full font-semibold text-md hover:bg-overred-text-blue transition-all duration-500\\"\\n\\t\\t\\t\\t\\t\\t\\thref={btns[idx].url}>{btns[idx].title}</a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</header>\\n\\n<style>\\n\\t#header {\\n\\t\\ttransition:\\n\\t\\t\\ttransform 1.5s ease-in-out,\\n\\t\\t\\tbackground-color 1s ease-in-out,\\n\\t\\t\\tall 1s ease-in-out;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiGC,sBAAQ,CACP,UAAU,CACT,SAAS,CAAC,IAAI,CAAC,WAAW,CAAC;AAC9B,GAAG,gBAAgB,CAAC,EAAE,CAAC,WAAW,CAAC;AACnC,GAAG,GAAG,CAAC,EAAE,CAAC,WACT"}'
    };
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      )}</a> <div class="space-x-20 flex flex-row"><div class="flex flex-row justify-center items-center space-x-12">${each(routes, (_route, index6) => {
        return `<div class="flex flex-col items-center justify-center"><a class="text-overred-variant-blue font-bold text-md h-min"${add_attribute("href", _route.url, 0)}>${escape(_route.title)}</a> ${show_routes[index6] ? `<div class="h-[0.1rem] w-full rounded-l-2xl bg-gradient-to-tr from-overred-red via-overred-shadow-orange to-overred-shadow-pink"></div>` : `<div class="h-[0.1rem]"></div>`} </div>`;
      })}</div> <div class="flex flex-row justify-center items-center space-x-6">${each(btns, (_, idx) => {
        return `${idx == 1 ? `<a class="text-overred-variant-blue aspect-square text-4xl flex justify-center items-center"${add_attribute("href", btns[idx].url, 0)}><i${add_attribute("class", btns[idx].icon, 0)}></i></a>` : `<a class="text-white bg-overred-variant-blue py-2 px-5 rounded-full font-semibold text-md hover:bg-overred-text-blue transition-all duration-500"${add_attribute("href", btns[idx].url, 0)}>${escape(btns[idx].title)}</a>`}`;
      })}</div></div></div> </header>`;
    });
    TOAST_LIMIT = 20;
    toasts = writable([]);
    pausedAt = writable(null);
    toastTimeouts = /* @__PURE__ */ new Map();
    addToRemoveQueue = (toastId) => {
      if (toastTimeouts.has(toastId)) {
        return;
      }
      const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        remove(toastId);
      }, 1e3);
      toastTimeouts.set(toastId, timeout);
    };
    clearFromRemoveQueue = (toastId) => {
      const timeout = toastTimeouts.get(toastId);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    defaultTimeouts = {
      blank: 4e3,
      error: 4e3,
      success: 2e3,
      loading: Infinity,
      custom: 4e3
    };
    isFunction = (valOrFunction) => typeof valOrFunction === "function";
    resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
    genId = /* @__PURE__ */ (() => {
      let count = 0;
      return () => {
        count += 1;
        return count.toString();
      };
    })();
    prefersReducedMotion = /* @__PURE__ */ (() => {
      let shouldReduceMotion;
      return () => {
        if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
          const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
          shouldReduceMotion = !mediaQuery || mediaQuery.matches;
        }
        return shouldReduceMotion;
      };
    })();
    createToast = (message, type = "blank", opts) => ({
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
    createHandler = (type) => (message, options2) => {
      const toast2 = createToast(message, type, options2);
      upsert(toast2);
      return toast2.id;
    };
    toast = (message, opts) => createHandler("blank")(message, opts);
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
    handlers = {
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
    css$7 = {
      code: "div.svelte-11kvm4p{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-11kvm4p-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-11kvm4p::after{content:'';box-sizing:border-box;animation:svelte-11kvm4p-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-11kvm4p-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-11kvm4p-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
      map: `{"version":3,"file":"CheckmarkIcon.svelte","sources":["CheckmarkIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#61d345\\";\\nexport let secondary = \\"#fff\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 20px;\\n\\t\\topacity: 0;\\n\\t\\theight: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbackground: var(--primary, #61d345);\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(45deg);\\n\\t\\tanimation: circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t\\tanimation-delay: 100ms;\\n\\t}\\n\\n\\tdiv::after {\\n\\t\\tcontent: '';\\n\\t\\tbox-sizing: border-box;\\n\\t\\tanimation: checkmarkAnimation 0.2s ease-out forwards;\\n\\t\\topacity: 0;\\n\\t\\tanimation-delay: 200ms;\\n\\t\\tposition: absolute;\\n\\t\\tborder-right: 2px solid;\\n\\t\\tborder-bottom: 2px solid;\\n\\t\\tborder-color: var(--secondary, #fff);\\n\\t\\tbottom: 6px;\\n\\t\\tleft: 6px;\\n\\t\\theight: 10px;\\n\\t\\twidth: 6px;\\n\\t}\\n\\n\\t@keyframes circleAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(45deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(45deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes checkmarkAnimation {\\n\\t\\t0% {\\n\\t\\t\\theight: 0;\\n\\t\\t\\twidth: 0;\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\t40% {\\n\\t\\t\\theight: 0;\\n\\t\\t\\twidth: 6px;\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t\\theight: 10px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CACnC,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,8BAAe,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAChF,eAAe,CAAE,KAClB,CAEA,kBAAG,OAAQ,CACV,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,iCAAkB,CAAC,IAAI,CAAC,QAAQ,CAAC,QAAQ,CACpD,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,KAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,GAAG,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAAC,KAAK,CACxB,YAAY,CAAE,IAAI,WAAW,CAAC,KAAK,CAAC,CACpC,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACR,CAEA,WAAW,8BAAgB,CAC1B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,iCAAmB,CAC7B,EAAG,CACF,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CACV,CACA,GAAI,CACH,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IACT,CACD"}`
    };
    CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    css$6 = {
      code: "div.svelte-1ee93ns{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-1ee93ns-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-1ee93ns::after,div.svelte-1ee93ns::before{content:'';animation:svelte-1ee93ns-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-1ee93ns:before{animation:svelte-1ee93ns-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-1ee93ns-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1ee93ns-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-1ee93ns-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
      map: `{"version":3,"file":"ErrorIcon.svelte","sources":["ErrorIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#ff4b4b\\";\\nexport let secondary = \\"#fff\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 20px;\\n\\t\\topacity: 0;\\n\\t\\theight: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tbackground: var(--primary, #ff4b4b);\\n\\t\\tposition: relative;\\n\\t\\ttransform: rotate(45deg);\\n\\t\\tanimation: circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t\\tanimation-delay: 100ms;\\n\\t}\\n\\n\\tdiv::after,\\n\\tdiv::before {\\n\\t\\tcontent: '';\\n\\t\\tanimation: firstLineAnimation 0.15s ease-out forwards;\\n\\t\\tanimation-delay: 150ms;\\n\\t\\tposition: absolute;\\n\\t\\tborder-radius: 3px;\\n\\t\\topacity: 0;\\n\\t\\tbackground: var(--secondary, #fff);\\n\\t\\tbottom: 9px;\\n\\t\\tleft: 4px;\\n\\t\\theight: 2px;\\n\\t\\twidth: 12px;\\n\\t}\\n\\n\\tdiv:before {\\n\\t\\tanimation: secondLineAnimation 0.15s ease-out forwards;\\n\\t\\tanimation-delay: 180ms;\\n\\t\\ttransform: rotate(90deg);\\n\\t}\\n\\n\\t@keyframes circleAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(45deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(45deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes firstLineAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes secondLineAnimation {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0) rotate(90deg);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1) rotate(90deg);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CACnC,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,8BAAe,CAAC,IAAI,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QAAQ,CAChF,eAAe,CAAE,KAClB,CAEA,kBAAG,OAAO,CACV,kBAAG,QAAS,CACX,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,iCAAkB,CAAC,KAAK,CAAC,QAAQ,CAAC,QAAQ,CACrD,eAAe,CAAE,KAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,WAAW,CAAC,KAAK,CAAC,CAClC,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IACR,CAEA,kBAAG,OAAQ,CACV,SAAS,CAAE,kCAAmB,CAAC,KAAK,CAAC,QAAQ,CAAC,QAAQ,CACtD,eAAe,CAAE,KAAK,CACtB,SAAS,CAAE,OAAO,KAAK,CACxB,CAEA,WAAW,8BAAgB,CAC1B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,iCAAmB,CAC7B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD,CAEA,WAAW,kCAAoB,CAC9B,IAAK,CACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,OAAO,KAAK,CAAC,CACjC,OAAO,CAAE,CACV,CACD"}`
    };
    ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    css$5 = {
      code: "div.svelte-1j7dflg{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-1j7dflg-rotate 1s linear infinite}@keyframes svelte-1j7dflg-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
      map: '{"version":3,"file":"LoaderIcon.svelte","sources":["LoaderIcon.svelte"],"sourcesContent":["<!-- Adapted from https://github.com/timolins/react-hot-toast -->\\n<script>export let primary = \\"#616161\\";\\nexport let secondary = \\"#e0e0e0\\";\\n<\/script>\\n\\n<div style:--primary={primary} style:--secondary={secondary} />\\n\\n<style>\\n\\tdiv {\\n\\t\\twidth: 12px;\\n\\t\\theight: 12px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 2px solid;\\n\\t\\tborder-radius: 100%;\\n\\t\\tborder-color: var(--secondary, #e0e0e0);\\n\\t\\tborder-right-color: var(--primary, #616161);\\n\\t\\tanimation: rotate 1s linear infinite;\\n\\t}\\n\\n\\t@keyframes rotate {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: rotate(0deg);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,kBAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,WAAW,CAAC,QAAQ,CAAC,CACvC,kBAAkB,CAAE,IAAI,SAAS,CAAC,QAAQ,CAAC,CAC3C,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAC7B,CAEA,WAAW,qBAAO,CACjB,IAAK,CACJ,SAAS,CAAE,OAAO,IAAI,CACvB,CACA,EAAG,CACF,SAAS,CAAE,OAAO,MAAM,CACzB,CACD"}'
    };
    LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    css$4 = {
      code: ".indicator.svelte-1kgeier{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1kgeier{position:absolute}.animated.svelte-1kgeier{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1kgeier-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1kgeier-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
      map: `{"version":3,"file":"ToastIcon.svelte","sources":["ToastIcon.svelte"],"sourcesContent":["<script>import CheckmarkIcon from \\"./CheckmarkIcon.svelte\\";\\nimport ErrorIcon from \\"./ErrorIcon.svelte\\";\\nimport LoaderIcon from \\"./LoaderIcon.svelte\\";\\nexport let toast;\\n$:\\n  ({ type, icon, iconTheme } = toast);\\n<\/script>\\n\\n{#if typeof icon === 'string'}\\n\\t<div class=\\"animated\\">{icon}</div>\\n{:else if typeof icon !== 'undefined'}\\n\\t<svelte:component this={icon} />\\n{:else if type !== 'blank'}\\n\\t<div class=\\"indicator\\">\\n\\t\\t<LoaderIcon {...iconTheme} />\\n\\t\\t{#if type !== 'loading'}\\n\\t\\t\\t<div class=\\"status\\">\\n\\t\\t\\t\\t{#if type === 'error'}\\n\\t\\t\\t\\t\\t<ErrorIcon {...iconTheme} />\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<CheckmarkIcon {...iconTheme} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.indicator {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmin-width: 20px;\\n\\t\\tmin-height: 20px;\\n\\t}\\n\\n\\t.status {\\n\\t\\tposition: absolute;\\n\\t}\\n\\n\\t.animated {\\n\\t\\tposition: relative;\\n\\t\\ttransform: scale(0.6);\\n\\t\\topacity: 0.4;\\n\\t\\tmin-width: 20px;\\n\\t\\tanimation: enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\\n\\t}\\n\\n\\t@keyframes enter {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0.6);\\n\\t\\t\\topacity: 0.4;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,yBAAW,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACb,CAEA,sBAAQ,CACP,QAAQ,CAAE,QACX,CAEA,wBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,KAAK,CAAC,aAAa,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,QACrE,CAEA,WAAW,oBAAM,CAChB,IAAK,CACJ,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GACV,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACV,CACD"}`
    };
    ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let type;
      let icon;
      let iconTheme;
      let { toast: toast2 } = $$props;
      if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
      $$result.css.add(css$4);
      ({ type, icon, iconTheme } = toast2);
      return `${typeof icon === "string" ? `<div class="animated svelte-1kgeier">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1kgeier">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})} ${type !== "loading" ? `<div class="status svelte-1kgeier">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
    });
    css$3 = {
      code: ".message.svelte-1nauejd{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
      map: `{"version":3,"file":"ToastMessage.svelte","sources":["ToastMessage.svelte"],"sourcesContent":["<script>export let toast;\\n<\/script>\\n\\n<div class=\\"message\\" {...toast.ariaProps}>\\n\\t{#if typeof toast.message === 'string'}\\n\\t\\t{toast.message}\\n\\t{:else}\\n\\t\\t<svelte:component this={toast.message} {toast} />\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.message {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 4px 10px;\\n\\t\\tcolor: inherit;\\n\\t\\tflex: 1 1 auto;\\n\\t\\twhite-space: pre-line;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,uBAAS,CACR,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,WAAW,CAAE,QACd"}`
    };
    ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { toast: toast2 } = $$props;
      if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0) $$bindings.toast(toast2);
      $$result.css.add(css$3);
      return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-1nauejd" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
    });
    css$2 = {
      code: "@keyframes svelte-ug60r4-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-ug60r4-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-ug60r4-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-ug60r4-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-ug60r4{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-ug60r4{opacity:0}.enter.svelte-ug60r4{animation:svelte-ug60r4-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-ug60r4{animation:svelte-ug60r4-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-ug60r4{animation:svelte-ug60r4-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-ug60r4{animation:svelte-ug60r4-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
      map: `{"version":3,"file":"ToastBar.svelte","sources":["ToastBar.svelte"],"sourcesContent":["<script>import ToastIcon from \\"./ToastIcon.svelte\\";\\nimport { prefersReducedMotion } from \\"../core/utils\\";\\nimport ToastMessage from \\"./ToastMessage.svelte\\";\\nexport let toast;\\nexport let position = void 0;\\nexport let style = \\"\\";\\nexport let Component = void 0;\\nlet factor;\\nlet animation;\\n$: {\\n  const top = (toast.position || position || \\"top-center\\").includes(\\"top\\");\\n  factor = top ? 1 : -1;\\n  const [enter, exit] = prefersReducedMotion() ? [\\"fadeIn\\", \\"fadeOut\\"] : [\\"enter\\", \\"exit\\"];\\n  animation = toast.visible ? enter : exit;\\n}\\n<\/script>\\n\\n<div\\n\\tclass=\\"base {toast.height ? animation : 'transparent'} {toast.className || ''}\\"\\n\\tstyle=\\"{style}; {toast.style}\\"\\n\\tstyle:--factor={factor}\\n>\\n\\t{#if Component}\\n\\t\\t<svelte:component this={Component}>\\n\\t\\t\\t<ToastIcon {toast} slot=\\"icon\\" />\\n\\t\\t\\t<ToastMessage {toast} slot=\\"message\\" />\\n\\t\\t</svelte:component>\\n\\t{:else}\\n\\t\\t<slot {ToastIcon} {ToastMessage} {toast}>\\n\\t\\t\\t<ToastIcon {toast} />\\n\\t\\t\\t<ToastMessage {toast} />\\n\\t\\t</slot>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t@keyframes enterAnimation {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);\\n\\t\\t\\topacity: 0.5;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate3d(0, 0, 0) scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes exitAnimation {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translate3d(0, 0, -1px) scale(1);\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fadeInAnimation {\\n\\t\\t0% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fadeOutAnimation {\\n\\t\\t0% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.base {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tbackground: #fff;\\n\\t\\tcolor: #363636;\\n\\t\\tline-height: 1.3;\\n\\t\\twill-change: transform;\\n\\t\\tbox-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\\n\\t\\tmax-width: 350px;\\n\\t\\tpointer-events: auto;\\n\\t\\tpadding: 8px 10px;\\n\\t\\tborder-radius: 8px;\\n\\t}\\n\\n\\t.transparent {\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t.enter {\\n\\t\\tanimation: enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;\\n\\t}\\n\\n\\t.exit {\\n\\t\\tanimation: exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;\\n\\t}\\n\\n\\t.fadeIn {\\n\\t\\tanimation: fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;\\n\\t}\\n\\n\\t.fadeOut {\\n\\t\\tanimation: fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoCC,WAAW,4BAAe,CACzB,EAAG,CACF,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,GAAG,CAAC,CACpE,OAAO,CAAE,GACV,CACA,IAAK,CACJ,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACxC,OAAO,CAAE,CACV,CACD,CAEA,WAAW,2BAAc,CACxB,EAAG,CACF,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,CAC3C,OAAO,CAAE,CACV,CACA,IAAK,CACJ,SAAS,CAAE,YAAY,CAAC,CAAC,CAAC,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,GAAG,CAAC,CACvE,OAAO,CAAE,CACV,CACD,CAEA,WAAW,6BAAgB,CAC1B,EAAG,CACF,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CACV,CACD,CAEA,WAAW,8BAAiB,CAC3B,EAAG,CACF,OAAO,CAAE,CACV,CACA,IAAK,CACJ,OAAO,CAAE,CACV,CACD,CAEA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,SAAS,CACtB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACxE,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,GAChB,CAEA,0BAAa,CACZ,OAAO,CAAE,CACV,CAEA,oBAAO,CACN,SAAS,CAAE,4BAAc,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACnE,CAEA,mBAAM,CACL,SAAS,CAAE,2BAAa,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACjE,CAEA,qBAAQ,CACP,SAAS,CAAE,6BAAe,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACpE,CAEA,sBAAS,CACR,SAAS,CAAE,8BAAgB,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QACpE"}`
    };
    ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    css$1 = {
      code: ".wrapper.svelte-v01oml{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-v01oml{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-v01oml{z-index:9999}.active.svelte-v01oml>*{pointer-events:auto}",
      map: `{"version":3,"file":"ToastWrapper.svelte","sources":["ToastWrapper.svelte"],"sourcesContent":["<script>import { onMount } from \\"svelte\\";\\nimport { prefersReducedMotion } from \\"../core/utils\\";\\nimport ToastBar from \\"./ToastBar.svelte\\";\\nimport ToastMessage from \\"./ToastMessage.svelte\\";\\nexport let toast;\\nexport let setHeight;\\nlet wrapperEl;\\nonMount(() => {\\n  setHeight(wrapperEl.getBoundingClientRect().height);\\n});\\n$:\\n  top = toast.position?.includes(\\"top\\") ? 0 : null;\\n$:\\n  bottom = toast.position?.includes(\\"bottom\\") ? 0 : null;\\n$:\\n  factor = toast.position?.includes(\\"top\\") ? 1 : -1;\\n$:\\n  justifyContent = toast.position?.includes(\\"center\\") && \\"center\\" || (toast.position?.includes(\\"right\\") || toast.position?.includes(\\"end\\")) && \\"flex-end\\" || null;\\n<\/script>\\n\\n<div\\n\\tbind:this={wrapperEl}\\n\\tclass=\\"wrapper\\"\\n\\tclass:active={toast.visible}\\n\\tclass:transition={!prefersReducedMotion()}\\n\\tstyle:--factor={factor}\\n\\tstyle:--offset={toast.offset}\\n\\tstyle:top\\n\\tstyle:bottom\\n\\tstyle:justify-content={justifyContent}\\n>\\n\\t{#if toast.type === 'custom'}\\n\\t\\t<ToastMessage {toast} />\\n\\t{:else}\\n\\t\\t<slot {toast}>\\n\\t\\t\\t<ToastBar {toast} position={toast.position} />\\n\\t\\t</slot>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tdisplay: flex;\\n\\t\\tposition: absolute;\\n\\t\\ttransform: translateY(calc(var(--offset, 16px) * var(--factor) * 1px));\\n\\t}\\n\\n\\t.transition {\\n\\t\\ttransition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1);\\n\\t}\\n\\n\\t.active {\\n\\t\\tz-index: 9999;\\n\\t}\\n\\n\\t.active > :global(*) {\\n\\t\\tpointer-events: auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyCC,sBAAS,CACR,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,WAAW,KAAK,IAAI,QAAQ,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtE,CAEA,yBAAY,CACX,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACvD,CAEA,qBAAQ,CACP,OAAO,CAAE,IACV,CAEA,qBAAO,CAAW,CAAG,CACpB,cAAc,CAAE,IACjB"}`
    };
    ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    css = {
      code: ".toaster.svelte-1phplh9{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
      map: `{"version":3,"file":"Toaster.svelte","sources":["Toaster.svelte"],"sourcesContent":["<script>import useToaster from \\"../core/use-toaster\\";\\nimport ToastWrapper from \\"./ToastWrapper.svelte\\";\\nexport let reverseOrder = false;\\nexport let position = \\"top-center\\";\\nexport let toastOptions = void 0;\\nexport let gutter = 8;\\nexport let containerStyle = void 0;\\nexport let containerClassName = void 0;\\nconst { toasts, handlers } = useToaster(toastOptions);\\nlet _toasts;\\n$:\\n  _toasts = $toasts.map((toast) => ({\\n    ...toast,\\n    position: toast.position || position,\\n    offset: handlers.calculateOffset(toast, $toasts, {\\n      reverseOrder,\\n      gutter,\\n      defaultPosition: position\\n    })\\n  }));\\n<\/script>\\n\\n<div\\n\\tclass=\\"toaster {containerClassName || ''}\\"\\n\\tstyle={containerStyle}\\n\\ton:mouseenter={handlers.startPause}\\n\\ton:mouseleave={handlers.endPause}\\n\\trole=\\"alert\\"\\n>\\n\\t{#each _toasts as toast (toast.id)}\\n\\t\\t<ToastWrapper {toast} setHeight={(height) => handlers.updateHeight(toast.id, height)} />\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.toaster {\\n\\t\\t--default-offset: 16px;\\n\\n\\t\\tposition: fixed;\\n\\t\\tz-index: 9999;\\n\\t\\ttop: var(--default-offset);\\n\\t\\tleft: var(--default-offset);\\n\\t\\tright: var(--default-offset);\\n\\t\\tbottom: var(--default-offset);\\n\\t\\tpointer-events: none;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmCC,uBAAS,CACR,gBAAgB,CAAE,IAAI,CAEtB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,gBAAgB,CAAC,CAC1B,IAAI,CAAE,IAAI,gBAAgB,CAAC,CAC3B,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,cAAc,CAAE,IACjB"}`
    };
    Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let yScroll = 0;
      return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} <div class="bg-background flex flex-col overflow-x-clip min-h-screen"> ${validate_component(Header, "Header").$$render($$result, { yScroll }, {}, {})} <div class="flex flex-grow">${slots.default ? slots.default({}) : ``}</div>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    imports = ["_app/immutable/nodes/0.BfDp_f24.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/chunks/index.CbhNv2OM.js", "_app/immutable/chunks/each.DV1TCby9.js", "_app/immutable/chunks/stores.Bf1sF5yy.js", "_app/immutable/chunks/entry.B04yrovI.js", "_app/immutable/chunks/index.QWTMb9We.js", "_app/immutable/chunks/spread.CgU5AtxT.js"];
    stylesheets = ["_app/immutable/assets/0.DwTH6S3B.css"];
    fonts = ["_app/immutable/assets/fa-brands-400.O7nZalfM.woff2", "_app/immutable/assets/fa-brands-400.Dur5g48u.ttf", "_app/immutable/assets/fa-regular-400.DgEfZSYE.woff2", "_app/immutable/assets/fa-regular-400.Bf3rG5Nx.ttf", "_app/immutable/assets/fa-solid-900.DOQJEhcS.woff2", "_app/immutable/assets/fa-solid-900.BV3CbEM2.ttf", "_app/immutable/assets/fa-v4compatibility.BX8XWJtE.woff2", "_app/immutable/assets/fa-v4compatibility.B9MWI-E6.ttf"];
  }
});

// .svelte-kit/output/server/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_error.svelte.js"() {
    init_ssr();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<div class="flex flex-col items-center justify-center text-center text-primary"><h1 class="text-center my-5 text-3xl" data-svelte-h="svelte-1os7evj">Sorry there was an error!</h1> <p class="py-5">${escape($page.status)}: ${escape($page?.error?.message || "Unkown")}</p></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.BTyjO4Z_.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/chunks/index.CbhNv2OM.js", "_app/immutable/chunks/stores.Bf1sF5yy.js", "_app/immutable/chunks/entry.B04yrovI.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/chunks/functions.js
async function getHeaderImage(slug, iterable) {
  let header_image = await Promise.all(
    iterable.map(async ([path, resolver]) => {
      if (path.includes(slug)) {
        const module = await resolver();
        console.log(`\xA7\xA7\xA7 MATCH \xA7\xA7\xA7 for ${slug}`);
        return module.default;
      }
    })
  );
  header_image = [...header_image].filter((element) => element !== void 0);
  return header_image.join("").length != 0 ? header_image.join("") : void 0;
}
var __variableDynamicImportRuntimeHelper;
var init_functions = __esm({
  ".svelte-kit/output/server/chunks/functions.js"() {
    __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
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
  }
});

// .svelte-kit/output/server/chunks/postLayout.js
var PostLayout;
var init_postLayout = __esm({
  ".svelte-kit/output/server/chunks/postLayout.js"() {
    init_ssr();
    PostLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { date } = $$props;
      console.log(date);
      if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
      return `<div class="w-full pt-20 flex flex-col items-center justify-center text-overred-variant-blue">${slots.default ? slots.default({
        class: "md_post w-full space-y-10 text-center"
      }) : ``} </div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/overred-vs-clueso.js
var overred_vs_clueso_exports = {};
__export(overred_vs_clueso_exports, {
  default: () => Overred_vs_clueso,
  metadata: () => metadata
});
var metadata, Overred_vs_clueso;
var init_overred_vs_clueso = __esm({
  ".svelte-kit/output/server/chunks/overred-vs-clueso.js"() {
    init_ssr();
    init_postLayout();
    metadata = {
      "title": "OverRED vs Clueso",
      "description": "Why OverRED is as good as the YC-funded Clueso!",
      "date": "03.03.2023",
      "category": "comparison",
      "published": true,
      "authors": ["Moritz K."],
      "reading_time": 4
    };
    Overred_vs_clueso = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostLayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
        default: () => {
          return `<h1 data-svelte-h="svelte-tfvnkl">Svelte-Netlify-Demo</h1> <p data-svelte-h="svelte-1d6w0uf">Hello there, welcome to the OverRED offical <a href="https://overred.co" rel="nofollow">LAUNCH</a> Site. <a href="https://pagespeed.web.dev/analysis/https-svelte-netlify-demo-netlify-app/o8xryfd6zs?form_factor=desktop" rel="nofollow">PageSpeed</a> score of 100 in Performance/SEO, standard header-footer layout, extensive customization options, and advanced features for both Svelte and Netlify. Have fun building your project! \u{1F389}</p> <h2 data-svelte-h="svelte-a010b9">Table of Contents</h2> <ol data-svelte-h="svelte-x87ipa"><li><a href="#features">Features</a> <ul><li><a href="#in-short">In-Short</a></li> <li><a href="#in-detail">In-Detail</a></li></ul></li> <li><a href="#installation">Installation</a></li> <li><a href="#packages">Packages</a></li> <li><a href="#demo">Demo</a></li> <li><a href="#contributing">Contributing</a></li></ol> <h2 data-svelte-h="svelte-61ryoa">\u{1F31F} Features</h2> <h3 data-svelte-h="svelte-17rbzc0">In-Short</h3> <ul class="contains-task-list" data-svelte-h="svelte-1kddq9k"><li class="task-list-item"><input type="checkbox" checked disabled> \u26A1\uFE0F <strong>Performance</strong> performance-optimised from the start</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F440} <strong>SEO</strong> working Sitemap.xml, Robots.txt, page titles and descriptions</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F310} <strong>Netlify</strong> can be directly uploaded to Netlify</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F6E0}\uFE0F <strong>Tailwind</strong> nice looking modern UI, fully integrated Tailwind</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F3A8} <strong>Customizable</strong> custom error pages and custom reusable colors</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F4F1} <strong>Responsivess</strong> looks beautiful on all Viewports</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F4AC} <strong>Contact Form</strong> fully working Netlify contact form</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F973} <strong>FontAwesome Integration</strong> fully working FontAwesome integration</li></ul> <p data-svelte-h="svelte-tei1uq">Additional features:</p> <ul class="contains-task-list" data-svelte-h="svelte-znepgi"><li class="task-list-item"><input type="checkbox" checked disabled> custom Netlify 404 Page with _redirects</li> <li class="task-list-item"><input type="checkbox" checked disabled> custom local Google Font Integration</li> <li class="task-list-item"><input type="checkbox" checked disabled> standard header and footer structure</li> <li class="task-list-item"><input type="checkbox" checked disabled> enhanced:img and lazy loading</li> <li class="task-list-item"><input type="checkbox" checked disabled> Slug passing from the laod function</li> <li class="task-list-item"><input type="checkbox" checked disabled> device-specific Favicons / all Meta Tags</li> <li class="task-list-item"><input type="checkbox" checked disabled> local variables and store writables</li></ul> <h3 data-svelte-h="svelte-4knaw3">In-Detail</h3> <h4 data-svelte-h="svelte-652qdo">Performance</h4> <p data-svelte-h="svelte-soakar">The repository utilizes the @sveltejs/enhanced-img plugin, which boosts performance by optimizing image sizes and formats, reducing layout shifts, and decreasing loading times. We also implement lazy loading, delaying the loading of non-critical resources such as images or videos until they are needed, significantly accelerating the initial page load time. Additionally, the project uses local fonts, eliminating the need to download fonts from the web, thereby reducing webpage loading times and preventing display delays.</p> <h4 data-svelte-h="svelte-dlyu8l">SEO</h4> <p data-svelte-h="svelte-1xbn1o">The repository features a working Sitemap.xml, which is due to Netlify\u2019s handling of server-side JavaScript in the static folder. For now, the Sitemap.xml <url>tags need to be added manually. The current Robots.txt configuration allows all crawlers to index all pages. Inside the app.html, we have added title, description, and all relevant meta and Open Graph tags.</url></p> <h4 data-svelte-h="svelte-1egktl1">Netlify</h4> <p data-svelte-h="svelte-1xppme3">This repository can be directly uploaded and hosted by Netlify. We added the correctly working netlify.toml configuration and the Netlify adapter. All pages are prerendered to be hosted as static sites on Netlify. We also added the _redirects configuration, which redirects users in the event of a 404 status to the custom 404 page.</p> <h2 data-svelte-h="svelte-1t41g4a">\u{1F4E6} Packages</h2> <p data-svelte-h="svelte-1r2aqfp">If you\u2019re curious, this repository utilizes the following non-default packages:</p> <h2 data-svelte-h="svelte-1tdre91">\u{1F4CD} Demo</h2> <p data-svelte-h="svelte-rqo8om">To visit the live demo website, click <a href="https://svelte-netlify-demo.netlify.app" rel="nofollow">here</a>.</p> <h2 data-svelte-h="svelte-1stxylu">\u{1F468}\u200D\u{1F4BB} Contributing</h2> <p data-svelte-h="svelte-1amlnt">Feel free to fork the repository, make modifications, and submit a pull request. Here are some ways you can contribute:</p> <ul data-svelte-h="svelte-1o4vc0q"><li>Enhance existing features by fixing bugs and implementing improvements.</li> <li>Propose new features that you believe would be beneficial.</li> <li>Enhance the documentation to make it even more accessible and user-friendly.</li></ul> <h2 data-svelte-h="svelte-tzycul">Svelte</h2> <p data-svelte-h="svelte-v5hfzr">Media inside the <strong>static</strong> folder is served from.</p>`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/chunks/overred-vs-scribe.js
var overred_vs_scribe_exports = {};
__export(overred_vs_scribe_exports, {
  default: () => Overred_vs_scribe,
  metadata: () => metadata2
});
var metadata2, Overred_vs_scribe;
var init_overred_vs_scribe = __esm({
  ".svelte-kit/output/server/chunks/overred-vs-scribe.js"() {
    init_ssr();
    init_postLayout();
    metadata2 = {
      "title": "OverRED vs Scribe",
      "description": "Why OverRED is sooo much better then Scribe, yes it is!",
      "date": "05.09.2024",
      "category": "comparison",
      "published": true,
      "authors": ["Moritz K."],
      "reading_time": 4
    };
    Overred_vs_scribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostLayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata2), {}, {
        default: () => {
          return `<h1 data-svelte-h="svelte-tfvnkl">Svelte-Netlify-Demo</h1> <p data-svelte-h="svelte-1d6w0uf">Hello there, welcome to the OverRED offical <a href="https://overred.co" rel="nofollow">LAUNCH</a> Site. <a href="https://pagespeed.web.dev/analysis/https-svelte-netlify-demo-netlify-app/o8xryfd6zs?form_factor=desktop" rel="nofollow">PageSpeed</a> score of 100 in Performance/SEO, standard header-footer layout, extensive customization options, and advanced features for both Svelte and Netlify. Have fun building your project! \u{1F389}</p> <h2 data-svelte-h="svelte-a010b9">Table of Contents</h2> <ol data-svelte-h="svelte-x87ipa"><li><a href="#features">Features</a> <ul><li><a href="#in-short">In-Short</a></li> <li><a href="#in-detail">In-Detail</a></li></ul></li> <li><a href="#installation">Installation</a></li> <li><a href="#packages">Packages</a></li> <li><a href="#demo">Demo</a></li> <li><a href="#contributing">Contributing</a></li></ol> <h2 data-svelte-h="svelte-61ryoa">\u{1F31F} Features</h2> <h3 data-svelte-h="svelte-17rbzc0">In-Short</h3> <ul class="contains-task-list" data-svelte-h="svelte-1kddq9k"><li class="task-list-item"><input type="checkbox" checked disabled> \u26A1\uFE0F <strong>Performance</strong> performance-optimised from the start</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F440} <strong>SEO</strong> working Sitemap.xml, Robots.txt, page titles and descriptions</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F310} <strong>Netlify</strong> can be directly uploaded to Netlify</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F6E0}\uFE0F <strong>Tailwind</strong> nice looking modern UI, fully integrated Tailwind</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F3A8} <strong>Customizable</strong> custom error pages and custom reusable colors</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F4F1} <strong>Responsivess</strong> looks beautiful on all Viewports</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F4AC} <strong>Contact Form</strong> fully working Netlify contact form</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F973} <strong>FontAwesome Integration</strong> fully working FontAwesome integration</li></ul> <p data-svelte-h="svelte-tei1uq">Additional features:</p> <ul class="contains-task-list" data-svelte-h="svelte-znepgi"><li class="task-list-item"><input type="checkbox" checked disabled> custom Netlify 404 Page with _redirects</li> <li class="task-list-item"><input type="checkbox" checked disabled> custom local Google Font Integration</li> <li class="task-list-item"><input type="checkbox" checked disabled> standard header and footer structure</li> <li class="task-list-item"><input type="checkbox" checked disabled> enhanced:img and lazy loading</li> <li class="task-list-item"><input type="checkbox" checked disabled> Slug passing from the laod function</li> <li class="task-list-item"><input type="checkbox" checked disabled> device-specific Favicons / all Meta Tags</li> <li class="task-list-item"><input type="checkbox" checked disabled> local variables and store writables</li></ul> <h3 data-svelte-h="svelte-4knaw3">In-Detail</h3> <h4 data-svelte-h="svelte-652qdo">Performance</h4> <p data-svelte-h="svelte-soakar">The repository utilizes the @sveltejs/enhanced-img plugin, which boosts performance by optimizing image sizes and formats, reducing layout shifts, and decreasing loading times. We also implement lazy loading, delaying the loading of non-critical resources such as images or videos until they are needed, significantly accelerating the initial page load time. Additionally, the project uses local fonts, eliminating the need to download fonts from the web, thereby reducing webpage loading times and preventing display delays.</p> <h4 data-svelte-h="svelte-dlyu8l">SEO</h4> <p data-svelte-h="svelte-1xbn1o">The repository features a working Sitemap.xml, which is due to Netlify\u2019s handling of server-side JavaScript in the static folder. For now, the Sitemap.xml <url>tags need to be added manually. The current Robots.txt configuration allows all crawlers to index all pages. Inside the app.html, we have added title, description, and all relevant meta and Open Graph tags.</url></p> <h4 data-svelte-h="svelte-1egktl1">Netlify</h4> <p data-svelte-h="svelte-1xppme3">This repository can be directly uploaded and hosted by Netlify. We added the correctly working netlify.toml configuration and the Netlify adapter. All pages are prerendered to be hosted as static sites on Netlify. We also added the _redirects configuration, which redirects users in the event of a 404 status to the custom 404 page.</p> <h2 data-svelte-h="svelte-1t41g4a">\u{1F4E6} Packages</h2> <p data-svelte-h="svelte-1r2aqfp">If you\u2019re curious, this repository utilizes the following non-default packages:</p> <h2 data-svelte-h="svelte-1tdre91">\u{1F4CD} Demo</h2> <p data-svelte-h="svelte-rqo8om">To visit the live demo website, click <a href="https://svelte-netlify-demo.netlify.app" rel="nofollow">here</a>.</p> <h2 data-svelte-h="svelte-1stxylu">\u{1F468}\u200D\u{1F4BB} Contributing</h2> <p data-svelte-h="svelte-1amlnt">Feel free to fork the repository, make modifications, and submit a pull request. Here are some ways you can contribute:</p> <ul data-svelte-h="svelte-1o4vc0q"><li>Enhance existing features by fixing bugs and implementing improvements.</li> <li>Propose new features that you believe would be beneficial.</li> <li>Enhance the documentation to make it even more accessible and user-friendly.</li></ul> <h2 data-svelte-h="svelte-tzycul">Svelte</h2> <p data-svelte-h="svelte-v5hfzr">Media inside the <strong>static</strong> folder is served from.</p>`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/chunks/ cooperative defection.js
var cooperative_defection_exports = {};
__export(cooperative_defection_exports, {
  default: () => U20cooperativeu20defection,
  metadata: () => metadata3
});
var metadata3, U20cooperativeu20defection;
var init_cooperative_defection = __esm({
  ".svelte-kit/output/server/chunks/ cooperative defection.js"() {
    init_ssr();
    init_postLayout();
    metadata3 = {
      "title": "Quick-Start Guide",
      "description": "OverRED, a browser extension to create How-to Guides in Seconds launched",
      "date": "06.07.2024",
      "category": "news",
      "published": true,
      "authors": ["Moritz K."],
      "reading_time": 3
    };
    U20cooperativeu20defection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PostLayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata3), {}, {
        default: () => {
          return `<h1 data-svelte-h="svelte-tfvnkl">Svelte-Netlify-Demo</h1> <p data-svelte-h="svelte-1d6w0uf">Hello there, welcome to the OverRED offical <a href="https://overred.co" rel="nofollow">LAUNCH</a> Site. <a href="https://pagespeed.web.dev/analysis/https-svelte-netlify-demo-netlify-app/o8xryfd6zs?form_factor=desktop" rel="nofollow">PageSpeed</a> score of 100 in Performance/SEO, standard header-footer layout, extensive customization options, and advanced features for both Svelte and Netlify. Have fun building your project! \u{1F389}</p> <h2 data-svelte-h="svelte-a010b9">Table of Contents</h2> <ol data-svelte-h="svelte-x87ipa"><li><a href="#features">Features</a> <ul><li><a href="#in-short">In-Short</a></li> <li><a href="#in-detail">In-Detail</a></li></ul></li> <li><a href="#installation">Installation</a></li> <li><a href="#packages">Packages</a></li> <li><a href="#demo">Demo</a></li> <li><a href="#contributing">Contributing</a></li></ol> <h2 data-svelte-h="svelte-61ryoa">\u{1F31F} Features</h2> <h3 data-svelte-h="svelte-17rbzc0">In-Short</h3> <ul class="contains-task-list" data-svelte-h="svelte-1kddq9k"><li class="task-list-item"><input type="checkbox" checked disabled> \u26A1\uFE0F <strong>Performance</strong> performance-optimised from the start</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F440} <strong>SEO</strong> working Sitemap.xml, Robots.txt, page titles and descriptions</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F310} <strong>Netlify</strong> can be directly uploaded to Netlify</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F6E0}\uFE0F <strong>Tailwind</strong> nice looking modern UI, fully integrated Tailwind</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F3A8} <strong>Customizable</strong> custom error pages and custom reusable colors</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F4F1} <strong>Responsivess</strong> looks beautiful on all Viewports</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F4AC} <strong>Contact Form</strong> fully working Netlify contact form</li> <li class="task-list-item"><input type="checkbox" checked disabled> \u{1F973} <strong>FontAwesome Integration</strong> fully working FontAwesome integration</li></ul> <p data-svelte-h="svelte-tei1uq">Additional features:</p> <ul class="contains-task-list" data-svelte-h="svelte-znepgi"><li class="task-list-item"><input type="checkbox" checked disabled> custom Netlify 404 Page with _redirects</li> <li class="task-list-item"><input type="checkbox" checked disabled> custom local Google Font Integration</li> <li class="task-list-item"><input type="checkbox" checked disabled> standard header and footer structure</li> <li class="task-list-item"><input type="checkbox" checked disabled> enhanced:img and lazy loading</li> <li class="task-list-item"><input type="checkbox" checked disabled> Slug passing from the laod function</li> <li class="task-list-item"><input type="checkbox" checked disabled> device-specific Favicons / all Meta Tags</li> <li class="task-list-item"><input type="checkbox" checked disabled> local variables and store writables</li></ul> <h3 data-svelte-h="svelte-4knaw3">In-Detail</h3> <h4 data-svelte-h="svelte-652qdo">Performance</h4> <p data-svelte-h="svelte-soakar">The repository utilizes the @sveltejs/enhanced-img plugin, which boosts performance by optimizing image sizes and formats, reducing layout shifts, and decreasing loading times. We also implement lazy loading, delaying the loading of non-critical resources such as images or videos until they are needed, significantly accelerating the initial page load time. Additionally, the project uses local fonts, eliminating the need to download fonts from the web, thereby reducing webpage loading times and preventing display delays.</p> <h4 data-svelte-h="svelte-dlyu8l">SEO</h4> <p data-svelte-h="svelte-1xbn1o">The repository features a working Sitemap.xml, which is due to Netlify\u2019s handling of server-side JavaScript in the static folder. For now, the Sitemap.xml <url>tags need to be added manually. The current Robots.txt configuration allows all crawlers to index all pages. Inside the app.html, we have added title, description, and all relevant meta and Open Graph tags.</url></p> <h4 data-svelte-h="svelte-1egktl1">Netlify</h4> <p data-svelte-h="svelte-1xppme3">This repository can be directly uploaded and hosted by Netlify. We added the correctly working netlify.toml configuration and the Netlify adapter. All pages are prerendered to be hosted as static sites on Netlify. We also added the _redirects configuration, which redirects users in the event of a 404 status to the custom 404 page.</p> <h2 data-svelte-h="svelte-1t41g4a">\u{1F4E6} Packages</h2> <p data-svelte-h="svelte-1r2aqfp">If you\u2019re curious, this repository utilizes the following non-default packages:</p> <h2 data-svelte-h="svelte-1tdre91">\u{1F4CD} Demo</h2> <p data-svelte-h="svelte-rqo8om">To visit the live demo website, click <a href="https://svelte-netlify-demo.netlify.app" rel="nofollow">here</a>.</p> <h2 data-svelte-h="svelte-1stxylu">\u{1F468}\u200D\u{1F4BB} Contributing</h2> <p data-svelte-h="svelte-1amlnt">Feel free to fork the repository, make modifications, and submit a pull request. Here are some ways you can contribute:</p> <ul data-svelte-h="svelte-1o4vc0q"><li>Enhance existing features by fixing bugs and implementing improvements.</li> <li>Propose new features that you believe would be beneficial.</li> <li>Enhance the documentation to make it even more accessible and user-friendly.</li></ul> <h2 data-svelte-h="svelte-tzycul">Svelte</h2> <p data-svelte-h="svelte-v5hfzr">Media inside the <strong>static</strong> folder is served from.</p>`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/chunks/Screenshot 2024-11-08 at 18.17.45.js
var Screenshot_2024_11_08_at_18_17_45_exports = {};
__export(Screenshot_2024_11_08_at_18_17_45_exports, {
  default: () => Screenshot_20241108_at_18_17_45
});
var Screenshot_20241108_at_18_17_45;
var init_Screenshot_2024_11_08_at_18_17_45 = __esm({
  ".svelte-kit/output/server/chunks/Screenshot 2024-11-08 at 18.17.45.js"() {
    Screenshot_20241108_at_18_17_45 = "/_app/immutable/assets/Screenshot%202024-11-08%20at%2018.17.45.DmtHMRwt.png";
  }
});

// .svelte-kit/output/server/chunks/header.js
var header_exports = {};
__export(header_exports, {
  default: () => header
});
var header;
var init_header = __esm({
  ".svelte-kit/output/server/chunks/header.js"() {
    header = "/_app/immutable/assets/header.e3FJ8qVY.png";
  }
});

// .svelte-kit/output/server/entries/pages/docs/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
var load;
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_page.ts.js"() {
    init_functions();
    load = async () => {
      try {
        const allMarkdownFiles = /* @__PURE__ */ Object.assign({ "/src/posts/overred-vs-clueso/overred-vs-clueso.md": () => Promise.resolve().then(() => (init_overred_vs_clueso(), overred_vs_clueso_exports)), "/src/posts/overred-vs-scribe/overred-vs-scribe.md": () => Promise.resolve().then(() => (init_overred_vs_scribe(), overred_vs_scribe_exports)), "/src/posts/quick-start/ cooperative defection.md": () => Promise.resolve().then(() => (init_cooperative_defection(), cooperative_defection_exports)) });
        const allHeaderImages = /* @__PURE__ */ Object.assign({ "/src/posts/overred-vs-scribe/header/Screenshot 2024-11-08 at 18.17.45.png": () => Promise.resolve().then(() => (init_Screenshot_2024_11_08_at_18_17_45(), Screenshot_2024_11_08_at_18_17_45_exports)), "/src/posts/quick-start/header/header.png": () => Promise.resolve().then(() => (init_header(), header_exports)) });
        const iterableMarkdownFiles = Object.entries(allMarkdownFiles);
        const interableHeaderImages = Object.entries(allHeaderImages);
        const allPosts = await Promise.all(
          iterableMarkdownFiles.map(async ([path, resolver]) => {
            const blogArticle = await resolver();
            const theSlug = path.split("/src/posts/")[1].split("/")[0];
            if (blogArticle && blogArticle?.metadata) {
              const header_image = await getHeaderImage(theSlug, interableHeaderImages);
              const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../posts/overred-vs-clueso/overred-vs-clueso.md": () => Promise.resolve().then(() => (init_overred_vs_clueso(), overred_vs_clueso_exports)), "../../posts/overred-vs-scribe/overred-vs-scribe.md": () => Promise.resolve().then(() => (init_overred_vs_scribe(), overred_vs_scribe_exports)), "../../posts/quick-start/ cooperative defection.md": () => Promise.resolve().then(() => (init_cooperative_defection(), cooperative_defection_exports)) }), `../../posts/${theSlug}/${theSlug}.md`, 5);
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
  }
});

// .svelte-kit/output/server/chunks/PageHeading.js
var PageHeading;
var init_PageHeading = __esm({
  ".svelte-kit/output/server/chunks/PageHeading.js"() {
    init_ssr();
    PageHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title } = $$props;
      let { descrb } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
      if ($$props.descrb === void 0 && $$bindings.descrb && descrb !== void 0) $$bindings.descrb(descrb);
      return `<div class="flex flex-col jusitfy-center items-center mx-[5%] my-32 space-y-8"><h1 class="font-bold text-5xl text-overred-text-blue">${escape(title)}</h1> <p class="font-light text-xl text-center text-overred-variant-blue">${escape(descrb)}</p></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/docs/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_page.svelte.js"() {
    init_ssr();
    init_PageHeading();
    init_stores();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_ts_exports,
  universal_id: () => universal_id
});
var index3, component_cache3, component3, universal_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_page_ts();
    index3 = 7;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    universal_id = "src/routes/docs/+page.ts";
    imports3 = ["_app/immutable/nodes/7.Cpzr0OIc.js", "_app/immutable/chunks/preload-helper.D6kgxu3v.js", "_app/immutable/chunks/ProfilePictures.DGp7s7DG.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/chunks/index.CbhNv2OM.js", "_app/immutable/chunks/each.DV1TCby9.js", "_app/immutable/chunks/PageHeading.BlIsExcP.js", "_app/immutable/chunks/index.QWTMb9We.js", "_app/immutable/chunks/stores.Bf1sF5yy.js", "_app/immutable/chunks/entry.B04yrovI.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/docs/_slug_/_page.ts.js
var page_ts_exports2 = {};
__export(page_ts_exports2, {
  load: () => load2
});
var load2;
var init_page_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_slug_/_page.ts.js"() {
    init_functions();
    init_chunks();
    load2 = async ({ params }) => {
      try {
        const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/overred-vs-clueso/overred-vs-clueso.md": () => Promise.resolve().then(() => (init_overred_vs_clueso(), overred_vs_clueso_exports)), "../../../posts/overred-vs-scribe/overred-vs-scribe.md": () => Promise.resolve().then(() => (init_overred_vs_scribe(), overred_vs_scribe_exports)), "../../../posts/quick-start/ cooperative defection.md": () => Promise.resolve().then(() => (init_cooperative_defection(), cooperative_defection_exports)) }), `../../../posts/${params.slug}/${params.slug}.md`, 6);
        const allHeaderImages = /* @__PURE__ */ Object.assign({ "/src/posts/overred-vs-scribe/header/Screenshot 2024-11-08 at 18.17.45.png": () => Promise.resolve().then(() => (init_Screenshot_2024_11_08_at_18_17_45(), Screenshot_2024_11_08_at_18_17_45_exports)), "/src/posts/quick-start/header/header.png": () => Promise.resolve().then(() => (init_header(), header_exports)) });
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
  }
});

// .svelte-kit/output/server/entries/pages/docs/_slug_/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
function capitalize(x) {
  return x.charAt(0).toUpperCase() + x.slice(1);
}
var FallbackImage, profile_picture, fallback_profile, profile_pictures, css$42, ShareButton, css$32, Reddit, css$22, X, css$12, LinkedIn, config, Cliboard, OverredOgFallback, css2, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/docs/_slug_/_page.svelte.js"() {
    init_ssr();
    init_stores();
    FallbackImage = "/_app/immutable/assets/fallback_image.rvtRGLN4.jpg";
    profile_picture = "/_app/immutable/assets/profile_picture.D8SpmU-s.jpeg";
    fallback_profile = "/_app/immutable/assets/fallback_profile.pBWKwnIj.webp";
    profile_pictures = {
      "Moritz K.": profile_picture,
      x: fallback_profile
    };
    css$42 = {
      code: ".ssbc-button__link.svelte-iupir9,.ssbc-button__icon.svelte-iupir9{display:inline-block}.ssbc-button__link.svelte-iupir9{text-decoration:none;color:#fff}.ssbc-button.svelte-iupir9{transition:25ms ease-out;padding:0.75em}.ssbc-button__icon.svelte-iupir9 svg{width:1em;height:1em;margin:0;vertical-align:middle}.ssbc-button__icon--fill.svelte-iupir9{fill:#fff;stroke:none}.ssbc-button__icon--outline.svelte-iupir9{fill:none;stroke:#fff}",
      map: `{"version":3,"file":"ShareButton.svelte","sources":["ShareButton.svelte"],"sourcesContent":["<script>\\n\\texport let href;\\n\\texport let label = '';\\n\\texport let fill = true;\\n\\texport let ariaLabel = '';\\n\\tlet classes = '';\\n\\n\\texport { classes as class };\\n<\/script>\\n\\n<a\\n\\tclass=\\"ssbc-button__link\\"\\n\\t{href}\\n\\ttarget=\\"_blank\\"\\n\\trel=\\"noopener noreferrer\\"\\n\\taria-label={ariaLabel}\\n>\\n\\t<div class=\\"ssbc-button {classes}\\">\\n\\t\\t<div\\n\\t\\t\\taria-hidden=\\"true\\"\\n\\t\\t\\tclass=\\"ssbc-button__icon\\"\\n\\t\\t\\tclass:ssbc-button__icon--fill={fill}\\n\\t\\t\\tclass:ssbc-button__icon--outline={!fill}\\n\\t\\t>\\n\\t\\t\\t<slot></slot>\\n\\t\\t</div>\\n\\t\\t{label}\\n\\t</div>\\n</a>\\n\\n<style>\\n\\t.ssbc-button__link,\\n\\t.ssbc-button__icon {\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t.ssbc-button__link {\\n\\t\\ttext-decoration: none;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.ssbc-button {\\n\\t\\ttransition: 25ms ease-out;\\n\\t\\tpadding: 0.75em;\\n\\t}\\n\\n\\t.ssbc-button__icon :global(svg) {\\n\\t\\twidth: 1em;\\n\\t\\theight: 1em;\\n\\t\\tmargin: 0;\\n\\t\\tvertical-align: middle;\\n\\t}\\n\\n\\t.ssbc-button__icon--fill {\\n\\t\\tfill: #fff;\\n\\t\\tstroke: none;\\n\\t}\\n\\n\\t.ssbc-button__icon--outline {\\n\\t\\tfill: none;\\n\\t\\tstroke: #fff;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+BC,gCAAkB,CAClB,gCAAmB,CAClB,OAAO,CAAE,YACV,CAEA,gCAAmB,CAClB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IACR,CAEA,0BAAa,CACZ,UAAU,CAAE,IAAI,CAAC,QAAQ,CACzB,OAAO,CAAE,MACV,CAEA,gCAAkB,CAAS,GAAK,CAC/B,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,MACjB,CAEA,sCAAyB,CACxB,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IACT,CAEA,yCAA4B,CAC3B,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IACT"}`
    };
    ShareButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      $$result.css.add(css$42);
      return `<a class="ssbc-button__link svelte-iupir9"${add_attribute("href", href, 0)} target="_blank" rel="noopener noreferrer"${add_attribute("aria-label", ariaLabel, 0)}><div class="${"ssbc-button " + escape(classes, true) + " svelte-iupir9"}"><div aria-hidden="true" class="${[
        "ssbc-button__icon svelte-iupir9",
        (fill ? "ssbc-button__icon--fill" : "") + " " + (!fill ? "ssbc-button__icon--outline" : "")
      ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div> ${escape(label)}</div> </a>`;
    });
    css$32 = {
      code: ".ssbc-button--reddit{background-color:#5f99cf}.ssbc-button--reddit:active,.ssbc-button--reddit:hover{background-color:#3a80c1}",
      map: '{"version":3,"file":"Reddit.svelte","sources":["Reddit.svelte"],"sourcesContent":["<script>\\n\\t// @ts-ignore\\n\\timport ShareButton from \\"./ShareButton.svelte\\";\\n\\n\\texport let title;\\n\\texport let url;\\n\\texport let ariaLabel = \'Share on Reddit\';\\n\\tlet classes = \'\';\\n\\n\\texport { classes as class };\\n\\tlet href;\\n\\n\\t$: href = encodeURI(`https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`);\\n<\/script>\\n\\n<ShareButton class=\\"ssbc-button--reddit {classes}\\" {...$$restProps} {ariaLabel} {href}>\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t<path\\n\\t\\t\\td=\\"M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z\\"\\n\\t\\t/>\\n\\t</svg>\\n</ShareButton>\\n\\n<style>\\n\\t:global(.ssbc-button--reddit) {\\n\\t\\tbackground-color: #5f99cf;\\n\\t}\\n\\n\\t:global(.ssbc-button--reddit:active),\\n\\t:global(.ssbc-button--reddit:hover) {\\n\\t\\tbackground-color: #3a80c1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBS,oBAAsB,CAC7B,gBAAgB,CAAE,OACnB,CAEQ,2BAA4B,CAC5B,0BAA4B,CACnC,gBAAgB,CAAE,OACnB"}'
    };
    Reddit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      $$result.css.add(css$32);
      href = encodeURI(`https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`);
      return `${validate_component(ShareButton, "ShareButton").$$render($$result, Object.assign({}, { class: "ssbc-button--reddit " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
        default: () => {
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"></path></svg>`;
        }
      })}`;
    });
    css$22 = {
      code: ".ssbc-button--x{background-color:#14171a}.ssbc-button--x:active,.ssbc-button--x:hover{background-color:#000000}",
      map: `{"version":3,"file":"X.svelte","sources":["X.svelte"],"sourcesContent":["<script>\\n\\t// @ts-ignore\\n\\timport ShareButton from './ShareButton.svelte';\\n\\n\\texport let text;\\n\\texport let url;\\n\\texport let ariaLabel = 'Share on X';\\n\\texport let hashtags = '';\\n\\texport let via = '';\\n\\texport let related = '';\\n\\tlet classes = '';\\n\\n\\texport { classes as class };\\n\\n\\tlet href;\\n\\n\\t$: href = encodeURI(\\n\\t\\t\`https://x.com/intent/tweet/?text=\${text}&hashtags=\${hashtags}&via=\${via}&related=\${related}&url=\${url}\`\\n\\t);\\n<\/script>\\n\\n<ShareButton class=\\"ssbc-button--x {classes}\\" {...$$restProps} {ariaLabel} {href}>\\n\\t<svg width=\\"25\\" height=\\"23\\" viewBox=\\"0 0 25 23\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n\\t\\t<path\\n\\t\\t\\td=\\"M19.38 0.622803H23.06L14.98 9.79481L24.42 22.2368H17.012L11.212 14.6759L4.57199 22.2368H0.891987L9.45199 12.4268L0.411987 0.622803H8.00399L13.244 7.52972L19.38 0.622803ZM18.092 20.0834H20.132L6.93199 2.69647H4.73999L18.092 20.0834Z\\"\\n\\t\\t\\tfill=\\"white\\"\\n\\t\\t/>\\n\\t</svg>\\n</ShareButton>\\n\\n<style>\\n\\t:global(.ssbc-button--x) {\\n\\t\\tbackground-color: #14171a;\\n\\t}\\n\\n\\t:global(.ssbc-button--x:active),\\n\\t:global(.ssbc-button--x:hover) {\\n\\t\\tbackground-color: #000000;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+BS,eAAiB,CACxB,gBAAgB,CAAE,OACnB,CAEQ,sBAAuB,CACvB,qBAAuB,CAC9B,gBAAgB,CAAE,OACnB"}`
    };
    X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["text", "url", "ariaLabel", "hashtags", "via", "related", "class"]);
      let { text: text2 } = $$props;
      let { url } = $$props;
      let { ariaLabel = "Share on X" } = $$props;
      let { hashtags = "" } = $$props;
      let { via = "" } = $$props;
      let { related = "" } = $$props;
      let { class: classes = "" } = $$props;
      let href;
      if ($$props.text === void 0 && $$bindings.text && text2 !== void 0) $$bindings.text(text2);
      if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
      if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
      if ($$props.hashtags === void 0 && $$bindings.hashtags && hashtags !== void 0) $$bindings.hashtags(hashtags);
      if ($$props.via === void 0 && $$bindings.via && via !== void 0) $$bindings.via(via);
      if ($$props.related === void 0 && $$bindings.related && related !== void 0) $$bindings.related(related);
      if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
      $$result.css.add(css$22);
      href = encodeURI(`https://x.com/intent/tweet/?text=${text2}&hashtags=${hashtags}&via=${via}&related=${related}&url=${url}`);
      return `${validate_component(ShareButton, "ShareButton").$$render($$result, Object.assign({}, { class: "ssbc-button--x " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
        default: () => {
          return `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.38 0.622803H23.06L14.98 9.79481L24.42 22.2368H17.012L11.212 14.6759L4.57199 22.2368H0.891987L9.45199 12.4268L0.411987 0.622803H8.00399L13.244 7.52972L19.38 0.622803ZM18.092 20.0834H20.132L6.93199 2.69647H4.73999L18.092 20.0834Z" fill="white"></path></svg>`;
        }
      })}`;
    });
    css$12 = {
      code: ".ssbc-button--linkedin{background-color:#0077b5}.ssbc-button--linkedin:active,.ssbc-button--linkedin:hover{background-color:#046293}",
      map: `{"version":3,"file":"LinkedIn.svelte","sources":["LinkedIn.svelte"],"sourcesContent":["<script>\\n\\t// @ts-ignore\\n\\timport ShareButton from './ShareButton.svelte';\\n\\n\\texport let url;\\n\\texport let ariaLabel = 'Share on LinkedIn';\\n\\tlet classes = '';\\n\\n\\texport { classes as class };\\n\\n\\tlet href;\\n\\n\\t$: href = encodeURI(\`https://www.linkedin.com/sharing/share-offsite/?url=\${url}\`);\\n<\/script>\\n\\n<ShareButton class=\\"ssbc-button--linkedin {classes}\\" {...$$restProps} {ariaLabel} {href}>\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t<path\\n\\t\\t\\td=\\"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z\\"\\n\\t\\t/>\\n\\t</svg>\\n</ShareButton>\\n\\n<style>\\n\\t:global(.ssbc-button--linkedin) {\\n\\t\\tbackground-color: #0077b5;\\n\\t}\\n\\n\\t:global(.ssbc-button--linkedin:active),\\n\\t:global(.ssbc-button--linkedin:hover) {\\n\\t\\tbackground-color: #046293;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBS,sBAAwB,CAC/B,gBAAgB,CAAE,OACnB,CAEQ,6BAA8B,CAC9B,4BAA8B,CACrC,gBAAgB,CAAE,OACnB"}`
    };
    LinkedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["url", "ariaLabel", "class"]);
      let { url } = $$props;
      let { ariaLabel = "Share on LinkedIn" } = $$props;
      let { class: classes = "" } = $$props;
      let href;
      if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
      if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
      if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
      $$result.css.add(css$12);
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
    config = {
      siteUrl: "https://overred.co",
      siteName: "OverRED",
      siteDescription: "OverRED - create How-to guides in Seconds",
      twitterHandle: "@overred"
    };
    Cliboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
    OverredOgFallback = "/_app/immutable/assets/overred_og_fallback.Gbt4o3ka.png";
    css2 = {
      code: ".post_shadow.svelte-xrzh0v{box-shadow:10px 10px 40px 40px rgb(247, 94, 80, 0.15)}",
      map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import FallbackImage from \\"$lib/assets/fallback_image.jpg\\";\\nimport { profile_pictures } from \\"$lib/ProfilePictures\\";\\nimport Reddit from \\"$lib/share/Reddit.svelte\\";\\nimport X from \\"$lib/share/X.svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport LinkedIn from \\"$lib/share/LinkedIn.svelte\\";\\nimport { config } from \\"$lib/config\\";\\nimport Cliboard from \\"$lib/cliboard.svelte\\";\\nimport OverredOgFallback from \\"$lib/assets/overred_og_fallback.png\\";\\nexport let data;\\nconst metadata = data.props.meta;\\nconst category = capitalize(data.props.meta.category.toString());\\nconst profilePicture = profile_pictures[data.props.meta.authors[0] ?? \\"x\\"];\\nfunction capitalize(x) {\\n  return x.charAt(0).toUpperCase() + x.slice(1);\\n}\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{metadata.title}</title>\\n\\n\\t<meta content={metadata.description} name=\\"description\\" />\\n\\n\\t<meta content={metadata.title} property=\\"og:title\\" />\\n\\t<meta content={data.props?.header_image ?? OverredOgFallback} property=\\"og:image\\" />\\n\\t<meta content={config.siteUrl} property=\\"og:url\\" />\\n\\t<meta content={metadata.description} property=\\"og:description\\" />\\n\\t<meta content={config.siteName} property=\\"og:site_name\\" />\\n\\n\\t<meta content={config.twitterHandle} name=\\"twitter:creator\\" />\\n\\t<meta content=\\"summary_large_image\\" name=\\"twitter:card\\" />\\n\\t<meta content={metadata.title} name=\\"twitter:title\\" />\\n\\t<meta content={metadata.description} name=\\"twitter:description\\" />\\n\\t<meta content={data.props?.header_image ?? OverredOgFallback} name=\\"twitter:image\\" />\\n</svelte:head>\\n\\n<Cliboard />\\n\\n<div class=\\"w-full flex flex-col\\">\\n\\t<ol class=\\"breadcrumb justify-start items-center flex m-32 py-2 px-6 rounded-lg w-auto\\">\\n\\t\\t<li class=\\"crumb\\"><a class=\\"anchor\\" href=\\"/blog\\">Blog</a></li>\\n\\t\\t<li class=\\"crumb-separator\\" aria-hidden=\\"true\\">&rsaquo;</li>\\n\\t\\t<li class=\\"crumb\\">\\n\\t\\t\\t<a class=\\"anchor\\" href={`/blog?filter=${metadata.category}`}>{category}</a>\\n\\t\\t</li>\\n\\t\\t<li class=\\"crumb-separator\\" aria-hidden=\\"true\\">&rsaquo;</li>\\n\\t\\t<li>{metadata.title}</li>\\n\\t</ol>\\n\\n\\t<article\\n\\t\\tclass=\\"flex flex-col items-center justify-center mx-[15%] mb-3 mt-12 bg-background rounded-xl p-20 pt-0 post_shadow\\"\\n\\t>\\n\\t\\t<div class=\\"flex flex-col justify-start items-center space-y-4\\">\\n\\t\\t\\t<div class=\\"w-full flex m-5 flex-row items-center justify-between pt-6\\">\\n\\t\\t\\t\\t<!-- Profiles-->\\n\\t\\t\\t\\t<div class=\\"flex flex-row jusitfy-center items-center space-x-3 pt-2\\">\\n\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\tsrc={profilePicture}\\n\\t\\t\\t\\t\\t\\tclass=\\"h-12 w-12 border-2 border-white object-contain rounded-full\\"\\n\\t\\t\\t\\t\\t\\talt=\\"my_profile\\"\\n\\t\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex flex-col\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-sm text-overred-variant-blue text-opacity-80 italic font-semibold\\">\\n\\t\\t\\t\\t\\t\\t\\t{`${metadata.authors[0]}`}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<div class=\\"flex flex-row text-sm text-overred-variant-blue text-opacity-70\\">\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"italic\\">{`${metadata.date}`}</p>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"flex justify-center items-center px-1\\">&bull;</span>\\n\\t\\t\\t\\t\\t\\t\\t<p class=\\"italic\\">{`${metadata.reading_time} min`}</p>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<!-- Social Icons -->\\n\\t\\t\\t\\t<div class=\\"flex flex-row space-x-5 justify-center items-center\\">\\n\\t\\t\\t\\t\\t<X\\n\\t\\t\\t\\t\\t\\ttext={metadata.title}\\n\\t\\t\\t\\t\\t\\turl={$page.url}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-center items-center rounded-full\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<Reddit\\n\\t\\t\\t\\t\\t\\ttitle={metadata.title}\\n\\t\\t\\t\\t\\t\\turl={$page.url}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-center items-center rounded-full\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<LinkedIn\\n\\t\\t\\t\\t\\t\\ttext={metadata.title}\\n\\t\\t\\t\\t\\t\\turl={$page.url}\\n\\t\\t\\t\\t\\t\\tclass=\\"flex justify-center items-center rounded-full\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"w-full flex flex-col space-y-5 py-12 jusitfy-center items-center\\">\\n\\t\\t\\t\\t<h1 class=\\"text-overred-variant-blue text-center text-5xl font-bold\\">{metadata.title}</h1>\\n\\t\\t\\t\\t<p\\n\\t\\t\\t\\t\\tclass=\\"text-overred-variant-blue text-xl font-semidbold text-opacity-80 w-[95%] text-center\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{metadata.description}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<img\\n\\t\\t\\t\\tsrc={data.props?.header_image ?? FallbackImage}\\n\\t\\t\\t\\tclass=\\"h-96 w-full object-cover rounded-lg my-6 bg-overred-red\\"\\n\\t\\t\\t\\talt=\\"my_image\\"\\n\\t\\t\\t/>\\n\\n\\t\\t\\t<svelte:component this={data.props.content} />\\n\\t\\t</div>\\n\\t</article>\\n</div>\\n\\n<!-- <div use:tocCrawler={{ mode: \'generate\', prefix: \'-\' }} class=\\"bg-slate-200 p-5\\">\\n\\t<div class=\\"bg-slate-300\\">\\n\\n\\t</div>\\n\\t<h2>Heading 2</h2>\\n\\t<p>...</p>\\n\\t<h3>Heading 3</h3>\\n\\t<p>...</p>\\n</div> -->\\n\\n<style>\\n\\t.post_shadow {\\n\\t\\tbox-shadow: 10px 10px 40px 40px rgb(247, 94, 80, 0.15);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6HC,0BAAa,CACZ,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CACtD"}'
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { data } = $$props;
      const metadata4 = data.props.meta;
      const category = capitalize(data.props.meta.category.toString());
      const profilePicture = profile_pictures[data.props.meta.authors[0] ?? "x"];
      if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
      $$result.css.add(css2);
      $$unsubscribe_page();
      return `${$$result.head += `<!-- HEAD_svelte-1q4pbod_START -->${$$result.title = `<title>${escape(metadata4.title)}</title>`, ""}<meta${add_attribute("content", metadata4.description, 0)} name="description"><meta${add_attribute("content", metadata4.title, 0)} property="og:title"><meta${add_attribute("content", data.props?.header_image ?? OverredOgFallback, 0)} property="og:image"><meta${add_attribute("content", config.siteUrl, 0)} property="og:url"><meta${add_attribute("content", metadata4.description, 0)} property="og:description"><meta${add_attribute("content", config.siteName, 0)} property="og:site_name"><meta${add_attribute("content", config.twitterHandle, 0)} name="twitter:creator"><meta content="summary_large_image" name="twitter:card"><meta${add_attribute("content", metadata4.title, 0)} name="twitter:title"><meta${add_attribute("content", metadata4.description, 0)} name="twitter:description"><meta${add_attribute("content", data.props?.header_image ?? OverredOgFallback, 0)} name="twitter:image"><!-- HEAD_svelte-1q4pbod_END -->`, ""} ${validate_component(Cliboard, "Cliboard").$$render($$result, {}, {}, {})} <div class="w-full flex flex-col"><ol class="breadcrumb justify-start items-center flex m-32 py-2 px-6 rounded-lg w-auto"><li class="crumb" data-svelte-h="svelte-gx2ani"><a class="anchor" href="/blog">Blog</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">\u203A</li> <li class="crumb"><a class="anchor"${add_attribute("href", `/blog?filter=${metadata4.category}`, 0)}>${escape(category)}</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">\u203A</li> <li>${escape(metadata4.title)}</li></ol> <article class="flex flex-col items-center justify-center mx-[15%] mb-3 mt-12 bg-background rounded-xl p-20 pt-0 post_shadow svelte-xrzh0v"><div class="flex flex-col justify-start items-center space-y-4"><div class="w-full flex m-5 flex-row items-center justify-between pt-6"> <div class="flex flex-row jusitfy-center items-center space-x-3 pt-2"><img${add_attribute("src", profilePicture, 0)} class="h-12 w-12 border-2 border-white object-contain rounded-full" alt="my_profile"> <div class="flex flex-col"><p class="text-sm text-overred-variant-blue text-opacity-80 italic font-semibold">${escape(`${metadata4.authors[0]}`)}</p> <div class="flex flex-row text-sm text-overred-variant-blue text-opacity-70"><p class="italic">${escape(`${metadata4.date}`)}</p> <span class="flex justify-center items-center px-1" data-svelte-h="svelte-1h5ntg6">\u2022</span> <p class="italic">${escape(`${metadata4.reading_time} min`)}</p></div></div></div>  <div class="flex flex-row space-x-5 justify-center items-center">${validate_component(X, "X").$$render(
        $$result,
        {
          text: metadata4.title,
          url: $page.url,
          class: "flex justify-center items-center rounded-full"
        },
        {},
        {}
      )} ${validate_component(Reddit, "Reddit").$$render(
        $$result,
        {
          title: metadata4.title,
          url: $page.url,
          class: "flex justify-center items-center rounded-full"
        },
        {},
        {}
      )} ${validate_component(LinkedIn, "LinkedIn").$$render(
        $$result,
        {
          text: metadata4.title,
          url: $page.url,
          class: "flex justify-center items-center rounded-full"
        },
        {},
        {}
      )}</div></div> <div class="w-full flex flex-col space-y-5 py-12 jusitfy-center items-center"><h1 class="text-overred-variant-blue text-center text-5xl font-bold">${escape(metadata4.title)}</h1> <p class="text-overred-variant-blue text-xl font-semidbold text-opacity-80 w-[95%] text-center">${escape(metadata4.description)}</p></div> <img${add_attribute("src", data.props?.header_image ?? FallbackImage, 0)} class="h-96 w-full object-cover rounded-lg my-6 bg-overred-red" alt="my_image"> ${validate_component(data.props.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article></div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4,
  universal: () => page_ts_exports2,
  universal_id: () => universal_id2
});
var index4, component_cache4, component4, universal_id2, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_page_ts2();
    index4 = 8;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    universal_id2 = "src/routes/docs/[slug]/+page.ts";
    imports4 = ["_app/immutable/nodes/8.CPvyuAqZ.js", "_app/immutable/chunks/preload-helper.D6kgxu3v.js", "_app/immutable/chunks/ProfilePictures.DGp7s7DG.js", "_app/immutable/chunks/entry.B04yrovI.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/chunks/index.CbhNv2OM.js", "_app/immutable/chunks/spread.CgU5AtxT.js", "_app/immutable/chunks/stores.Bf1sF5yy.js"];
    stylesheets4 = ["_app/immutable/assets/8.CC6a6BaW.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/privacy-policy/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/privacy-policy/_page.svelte.js"() {
    init_ssr();
    init_PageHeading();
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="w-1/3 mx-auto flex flex-col">${validate_component(PageHeading, "PageHeading").$$render(
        $$result,
        {
          title: "Privacy Policy",
          descrb: " This Chrome extension is built with privacy by design. All data \u2014\n        including screenshots, user clicks, and how-to guides \u2014 is stored only\n        on your device. No data is sent to any server, cloud service, or third\n        party. We do not collect, track, or analyze your browsing behavior. The\n        extension works entirely offline and does not use any external APIs. All\n        permissions requested are strictly necessary for creating guides and\n        capturing screenshots, and are only activated through direct user\n        interaction. Your data stays yours \u2014 local, private, and under your full\n        control."
        },
        {},
        {}
      )} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component_cache5, component5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    index5 = 9;
    component5 = async () => component_cache5 ?? (component_cache5 = (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default);
    imports5 = ["_app/immutable/nodes/9.B-Wmc8kV.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/chunks/index.CbhNv2OM.js", "_app/immutable/chunks/PageHeading.BlIsExcP.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var base = "";
var assets = base;
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
var safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
var prerendering = false;
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0) $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0) $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page2);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body: body2, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n\n<head>\n	<!-- Responsive Meta Tag -->\n	<meta charset="utf-8" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n	<!-- SEO -->\n	<title>OverRED</title>\n	<meta name="description" content="OverRED - create How-to guides in Seconds" />\n\n	<!-- Status Bar: -->\n	<meta name="theme-color" content="#000000" />\n	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n\n	<!-- Language: -->\n	<meta name="language" content="en" />\n\n	<!-- Author: -->\n	<meta name="author" content="@mokollmar" />\n\n	<!-- Favicon -->\n	<link rel="icon" type="image/svg" href="/favicon.ico" />\n	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n	<link rel="manifest" href="/site.webmanifest">\n\n	<meta charset="utf-8" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	' + head + '\n</head>\n\n<body data-sveltekit-preload-data="hover" class="hide-scrollbar bg-black">\n	<div style="display: contents">' + body2 + "</div>\n</body>\n\n</html>",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "ccttme"
};
async function get_hooks() {
  return {};
}

// .svelte-kit/output/server/index.js
init_chunks();
init_exports();
init_index2();
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error2
  );
}
function get_status(error2) {
  return error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
}
function get_message(error2) {
  return error2 instanceof SvelteKitError ? error2.text : "Internal Error";
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = get_status(error2);
  const body2 = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  }
  const status = get_status(error2);
  const message = get_message(error2);
  return await options2.hooks.handleError({ error: error2, event, status, message }) ?? { message };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.push(`"search_params":${JSON.stringify(Array.from(node.uses.search_params))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent) uses.push('"parent":1');
  if (node.uses?.route) uses.push('"route":1');
  if (node.uses?.url) uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler2 = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler2(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive$1(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive$1(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive$1(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive$1(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index22 = p++;
    indexes.set(thing, index22);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index22] = `["${key2}",${flatten(value2)}]`;
        return index22;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index22] = str;
    return index22;
  }
  const index6 = flatten(value);
  if (index6 < 0) return `${index6}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      "POST method not allowed. No actions exist for this page"
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        "POST method not allowed. No actions exist for this page"
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "") message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      new URL(info instanceof Request ? info.url : info, event.url);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.params.add(key2);
        }
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      if (is_tracking) {
        uses.parent = true;
      }
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.route = true;
        }
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url,
    untrack(fn) {
      is_tracking = false;
      try {
        return fn();
      } finally {
        is_tracking = true;
      }
    }
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get2 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get2.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode$1(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _script_src_elem, _style_src, _style_src_attr, _style_src_elem, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src_elem);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_attr);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_elem);
    /** @type {string} */
    __privateAdd(this, _nonce);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _script_src_elem, []);
    __privateSet(this, _style_src, []);
    __privateSet(this, _style_src_attr, []);
    __privateSet(this, _style_src_elem, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0 || !!script_src_elem && script_src_elem.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0 || !!style_src_attr && style_src_attr.filter((value) => value !== "unsafe-inline").length > 0 || !!style_src_elem && style_src_elem.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      const d = __privateGet(this, _directives);
      if (__privateGet(this, _use_hashes)) {
        const hash2 = sha256(content);
        __privateGet(this, _script_src).push(`sha256-${hash2}`);
        if (d["script-src-elem"]?.length) {
          __privateGet(this, _script_src_elem).push(`sha256-${hash2}`);
        }
      } else {
        if (__privateGet(this, _script_src).length === 0) {
          __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["script-src-elem"]?.length) {
          __privateGet(this, _script_src_elem).push(`nonce-${__privateGet(this, _nonce)}`);
        }
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      const empty_comment_hash = "9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = __privateGet(this, _directives);
      if (__privateGet(this, _use_hashes)) {
        const hash2 = sha256(content);
        __privateGet(this, _style_src).push(`sha256-${hash2}`);
        if (d["style-src-attr"]?.length) {
          __privateGet(this, _style_src_attr).push(`sha256-${hash2}`);
        }
        if (d["style-src-elem"]?.length) {
          if (hash2 !== empty_comment_hash && !d["style-src-elem"].includes(`sha256-${empty_comment_hash}`)) {
            __privateGet(this, _style_src_elem).push(`sha256-${empty_comment_hash}`);
          }
          __privateGet(this, _style_src_elem).push(`sha256-${hash2}`);
        }
      } else {
        if (__privateGet(this, _style_src).length === 0 && !d["style-src"]?.includes("unsafe-inline")) {
          __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["style-src-attr"]?.length) {
          __privateGet(this, _style_src_attr).push(`nonce-${__privateGet(this, _nonce)}`);
        }
        if (d["style-src-elem"]?.length) {
          if (!d["style-src-elem"].includes(`sha256-${empty_comment_hash}`)) {
            __privateGet(this, _style_src_elem).push(`sha256-${empty_comment_hash}`);
          }
          __privateGet(this, _style_src_elem).push(`nonce-${__privateGet(this, _nonce)}`);
        }
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header2 = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _style_src_attr).length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...__privateGet(this, _style_src_attr)
      ];
    }
    if (__privateGet(this, _style_src_elem).length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...__privateGet(this, _style_src_elem)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    if (__privateGet(this, _script_src_elem).length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...__privateGet(this, _script_src_elem)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header2.push(directive.join(" "));
    }
    return header2.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_script_src_elem = new WeakMap();
_style_src = new WeakMap();
_style_src_attr = new WeakMap();
_style_src_elem = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets6 = new Set(client.stylesheets);
  const fonts6 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets6.add(url);
      for (const url of node.fonts) fonts6.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets6) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts6) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    if (client.uses_env_dynamic_public && state.prerendering) {
      modulepreloads.add(`${options2.app_dir}/env.js`);
    }
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate.join(`,
${indent}	`)}
${indent}}`);
    }
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${options2.app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						Promise.all([
							import(${s(prefixed(client.start))}),
							import(${s(prefixed(client.app))})
						]).then(([kit, app]) => {
							kit.start(${args.join(", ")});
						});
					});`);
    } else {
      blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      get_status(e),
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function load_page_nodes(page2, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
    manifest2._.nodes[page2.leaf]()
  ]);
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await load_page_nodes(page2, manifest2);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server?.load);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !(state.prerendering && should_prerender_data)) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index6 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index6]();
              let j = i;
              while (!branch[j]) j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    const ssr = get_option(nodes, "ssr") ?? true;
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options2) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options2 || {};
  var dec = opt.decode || decode;
  var index6 = 0;
  while (index6 < str.length) {
    var eqIdx = str.indexOf("=", index6);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index6);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index6 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index6, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index6 = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options2) {
  var opt = options2 || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url, trailing_slash) {
  const header2 = request.headers.get("cookie") ?? "";
  const initial_cookies = parse_1(header2, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = parse_1(header2, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = parse_1(header2, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        path = resolve(normalized_url, path);
      }
      return serialize_1(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header22) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header22) {
      const parsed = parse_1(header22, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, options2) {
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", serialize_1(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", serialize_1(name, value, { ...options2, path }));
    }
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options2) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  try {
    value = options2.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
function parse(input, options2) {
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  if (!input) {
    if (!options2.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      input = input.headers["set-cookie"];
    } else {
      var sch = input.headers[Object.keys(input.headers).find(function(key2) {
        return key2.toLowerCase() === "set-cookie";
      })];
      if (!sch && input.headers.cookie && !options2.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  if (!options2.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options2);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options2);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of splitCookiesString_1(set_cookie)) {
            const { name, value, ...options3 } = parseString_1(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ?? (body = `export const env=${JSON.stringify(public_env)}`);
  etag ?? (etag = `W/${Date.now()}`);
  headers ?? (headers = new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  }));
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
function get_page_config(nodes) {
  let current = {};
  for (const node of nodes) {
    if (!node?.universal?.config && !node?.server?.config) continue;
    current = {
      ...current,
      ...node?.universal?.config,
      ...node?.server?.config
    };
  }
  return Object.keys(current).length ? current : void 0;
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let rerouted_path;
  try {
    rerouted_path = options2.hooks.reroute({ url: new URL(url) }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  }
  let decoded;
  try {
    decoded = decode_pathname(rerouted_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  if (decoded === `/${options2.app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (decoded.startsWith(`/${options2.app_dir}`)) {
    return text("Not found", { status: 404 });
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers2 = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await load_page_nodes(route.page, manifest2);
        if (DEV) ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state.before_handle || state.emulator?.platform) {
        let config2 = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config2 = node.config ?? config2;
          prerender = node.prerender ?? prerender;
        } else if (route.page) {
          const nodes = await load_page_nodes(route.page, manifest2);
          config2 = get_page_config(nodes) ?? config2;
          prerender = get_option(nodes, "prerender") ?? false;
        }
        if (state.before_handle) {
          state.before_handle(event, config2, prerender);
        }
        if (state.emulator?.platform) {
          event.platform = await state.emulator.platform({ config: config2, prerender });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback) disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers2) {
          const value = headers2[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: __privateGet(this, _options).env_public_prefix,
      private_prefix: __privateGet(this, _options).env_private_prefix
    };
    const private_env = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          })
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/netlify-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".DS_Store", "android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "assets/overred_logo.svg", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "fonts/Rubik/OFL.txt", "fonts/Rubik/Rubik-Black.ttf", "fonts/Rubik/Rubik-BlackItalic.ttf", "fonts/Rubik/Rubik-Bold.ttf", "fonts/Rubik/Rubik-BoldItalic.ttf", "fonts/Rubik/Rubik-ExtraBold.ttf", "fonts/Rubik/Rubik-ExtraBoldItalic.ttf", "fonts/Rubik/Rubik-Italic.ttf", "fonts/Rubik/Rubik-Light.ttf", "fonts/Rubik/Rubik-LightItalic.ttf", "fonts/Rubik/Rubik-Medium.ttf", "fonts/Rubik/Rubik-MediumItalic.ttf", "fonts/Rubik/Rubik-Regular.ttf", "fonts/Rubik/Rubik-SemiBold.ttf", "fonts/Rubik/Rubik-SemiBoldItalic.ttf", "robots.txt", "site.webmanifest", "sitemap.xml"]),
    mimeTypes: { ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain", ".ttf": "font/ttf", ".webmanifest": "application/manifest+json", ".xml": "text/xml" },
    _: {
      client: { "start": "_app/immutable/entry/start.DaCJR2kN.js", "app": "_app/immutable/entry/app.Bhx56gAq.js", "imports": ["_app/immutable/entry/start.DaCJR2kN.js", "_app/immutable/chunks/entry.B04yrovI.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/entry/app.Bhx56gAq.js", "_app/immutable/chunks/preload-helper.D6kgxu3v.js", "_app/immutable/chunks/scheduler.ESG4J4As.js", "_app/immutable/chunks/index.CbhNv2OM.js"], "stylesheets": [], "fonts": [], "uses_env_dynamic_public": false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5)))
      ],
      routes: [
        {
          id: "/docs",
          pattern: /^\/docs\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/docs/[slug]",
          pattern: /^\/docs\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/privacy-policy",
          pattern: /^\/privacy-policy\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var initialized = server.init({
  // @ts-ignore
  env: Deno.env.toObject()
});
async function handler(request, context) {
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=render.js.map
