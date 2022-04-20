/// <reference types="node" />
import { Blob, Response } from "node-fetch";
import { Methods, Options } from "./constants";
export declare type Param = string | `:${string}`;
export interface Params extends Record<Param, any> {
}
export declare class Requester {
    url: URL;
    method: Methods;
    protected options: Options;
    constructor(url: URL | string, method?: Methods, init?: Options);
    protected uri(endpoint?: string): string;
    protected params(endpoint: string, params?: Params): string;
    protected init(init?: Options): Options;
    request(endpoint?: string, params?: Params, init?: Options): Promise<Response>;
    text(endpoint?: string, params?: Params, init?: Options): Promise<string>;
    json<T>(endpoint?: string, params?: Params, init?: Options): Promise<T>;
    buffer(endpoint?: string, params?: Params, init?: Options): Promise<Buffer>;
    arrayBuffer(endpoint?: string, params?: Params, init?: Options): Promise<ArrayBuffer>;
    blob(endpoint?: string, params?: Params, init?: Options): Promise<Blob>;
}
