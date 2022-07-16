import { HTTPVerbs, Options } from "./constants";
import { Requester } from "./requester";
export declare class Pariah extends Requester {
    protected _init: Options;
    constructor(url: URL, init?: Options);
    protected build(method: HTTPVerbs): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    post: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    put: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    delete: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    patch: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    head: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    options: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    connect: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    trace: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    copy: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    link: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    unlink: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    purge: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    lock: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    unlock: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    propfind: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    view: Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
}
