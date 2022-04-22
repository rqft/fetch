import { Methods, Options } from "./constants";
import { Requester } from "./requester";
export declare class Pariah extends Requester {
    protected _init: Options;
    constructor(url: URL, init?: Options);
    protected build(method: Methods): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get get(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get post(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get put(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get delete(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get patch(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get head(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get options(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get connect(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get trace(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
}
