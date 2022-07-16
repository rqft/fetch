/// <reference types="node" />
import { Blob } from "node-fetch";
import { HTTPVerbs, Options } from "./constants";
import { Data } from "./data";
export declare type Param = string | `:${string}`;
export interface Params extends Record<Param, any> {
}
export declare class Requester {
    url: URL;
    method: HTTPVerbs;
    protected _options: Options;
    constructor(url: URL, method?: HTTPVerbs, init?: Options);
    protected uri(endpoint?: string): string;
    protected params(endpoint: string, params?: Params): string;
    protected init(init?: Options): Options;
    request(endpoint?: string, params?: Params, init?: Options): Promise<Data<unknown>>;
    text(endpoint?: string, params?: Params, init?: Options): Promise<Data<string>>;
    json<T>(endpoint?: string, params?: Params, init?: Options): Promise<Data<T>>;
    buffer(endpoint?: string, params?: Params, init?: Options): Promise<Data<Buffer>>;
    arrayBuffer(endpoint?: string, params?: Params, init?: Options): Promise<Data<ArrayBuffer>>;
    blob(endpoint?: string, params?: Params, init?: Options): Promise<Data<Blob>>;
}
