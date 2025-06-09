/** @typedef {typeof __propDef.props}  IndexProps */
/** @typedef {typeof __propDef.events}  IndexEvents */
/** @typedef {typeof __propDef.slots}  IndexSlots */
export default class Index extends SvelteComponentTyped<{
    openGraph?: import("./types").OpenGraph | undefined;
    title?: string | undefined;
    description?: string | undefined;
    keywords?: string | undefined;
    base?: string | undefined;
    applicationName?: string | undefined;
    themeColor?: string | undefined;
    nofollow?: Boolean | undefined;
    noindex?: Boolean | undefined;
    nositelinkssearchbox?: Boolean | undefined;
    notranslate?: Boolean | undefined;
    canonical?: string | undefined;
    amp?: string | undefined;
    manifest?: string | undefined;
    languageAlternates?: {
        hreflang: string;
        href: string;
    }[] | undefined;
    twitter?: import("./types").Twitter | undefined;
    facebook?: import("./types").Facebook | undefined;
    jsonLd?: import("schema-dts").Thing | import("schema-dts").WithContext<import("schema-dts").Thing> | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        openGraph?: import('./types').SvelteSeo['openGraph'];
        title?: import("./types").SvelteSeo['title'];
        description?: import("./types").SvelteSeo["description"];
        keywords?: import("./types").SvelteSeo["keywords"];
        base?: import("./types").SvelteSeo["base"];
        applicationName?: import("./types").SvelteSeo["applicationName"];
        themeColor?: import("./types").SvelteSeo["themeColor"];
        nofollow?: Boolean | undefined;
        noindex?: Boolean | undefined;
        nositelinkssearchbox?: Boolean | undefined;
        notranslate?: Boolean | undefined;
        canonical?: import("./types").SvelteSeo["canonical"];
        amp?: import("./types").SvelteSeo["amp"];
        manifest?: import("./types").SvelteSeo["manifest"];
        languageAlternates?: import("./types").SvelteSeo["languageAlternates"];
        twitter?: import("./types").SvelteSeo['twitter'];
        facebook?: import("./types").SvelteSeo['facebook'];
        jsonLd?: import("./types").SvelteSeo['jsonLd'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
