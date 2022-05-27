import { Methods, Options } from "./constants";
import { Requester } from "./requester";
export declare class Pariah extends Requester {
    protected _init: Options;
    constructor(url: URL, init?: Options);
    protected build(method: Methods): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get get(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get post(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get put(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get delete(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get patch(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get head(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get options(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get connect(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
    get trace(): Requester & ((endpoint?: string, params?: import("./requester").Params, init?: Options) => Promise<import("./data").Data<unknown>>);
}
