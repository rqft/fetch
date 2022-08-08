import { HTTPVerbs, Options } from "./constants";
import { Requester } from "./requester";
export declare class Pariah extends Requester {
    protected _init: Options;
    constructor(url: URL, init?: Options);
    protected build(method: HTTPVerbs): Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    get: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    post: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    put: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    delete: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    patch: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    head: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    options: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    connect: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    trace: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    copy: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    link: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    unlink: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    purge: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    lock: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    unlock: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    propfind: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
    view: Requester & (<T extends string = string>(endpoint?: T, params?: import("./constants").Params<T>, init?: Options) => Promise<import("./data").Data<unknown>>);
}
