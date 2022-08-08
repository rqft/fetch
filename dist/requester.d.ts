/// <reference types="node" />
import { Blob } from "node-fetch";
import { HTTPVerbs, Options, Params } from "./constants";
import { Data } from "./data";
export declare class Requester {
    url: URL;
    method: HTTPVerbs;
    protected _options: Options;
    constructor(url: URL, method?: HTTPVerbs, init?: Options);
    protected uri<T extends string = string>(endpoint?: T): string;
    protected params<T extends string = string>(endpoint?: string, params?: Params<T>): string;
    protected init(init?: Options): Options;
    request<T extends string = string>(endpoint?: T, params?: Params<T>, init?: Options): Promise<Data<unknown>>;
    text<T extends string = string>(endpoint?: T, params?: Params<T>, init?: Options): Promise<Data<string>>;
    json<T, U extends string = string>(endpoint?: U, params?: Params<U>, init?: Options): Promise<Data<T>>;
    buffer<T extends string = string>(endpoint?: T, params?: Params<T>, init?: Options): Promise<Data<Buffer>>;
    arrayBuffer<T extends string = string>(endpoint?: T, params?: Params<T>, init?: Options): Promise<Data<ArrayBuffer>>;
    blob<T extends string = string>(endpoint?: T, params?: Params<T>, init?: Options): Promise<Data<Blob>>;
}
