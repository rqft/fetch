import { Methods, Options } from "./constants";
import { Requester } from "./requester";
export declare class Pariah extends Requester {
    url: URL;
    protected _init: Options;
    constructor(url: URL | string, init?: Options);
    protected build(method: Methods): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    get: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    post: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    put: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    delete: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    patch: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    head: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    options: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    connect: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
    trace: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("node-fetch").Response>);
}
