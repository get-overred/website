/** @typedef {typeof __propDef.props}  OpenGraphProps */
/** @typedef {typeof __propDef.events}  OpenGraphEvents */
/** @typedef {typeof __propDef.slots}  OpenGraphSlots */
export default class OpenGraph extends SvelteComponentTyped<{
    openGraph?: import("./types").OpenGraph | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OpenGraphProps = typeof __propDef.props;
export type OpenGraphEvents = typeof __propDef.events;
export type OpenGraphSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        openGraph?: import("./types").SvelteSeo['openGraph'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
