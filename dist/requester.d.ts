/// <reference types="node" />
import { Blob, Response } from "node-fetch";
import { Methods, Options } from "./constants";
export declare class Requester {
    url: URL;
    method: Methods;
    protected options: Options;
    constructor(url: URL | string, method?: Methods, init?: Options);
    protected uri(endpoint?: string): string;
    protected init(init?: Options): Options;
    request(endpoint?: string, init?: Options): Promise<Response>;
    text(endpoint?: string, init?: Options): Promise<string>;
    json<T>(endpoint?: string, init?: Options): Promise<T>;
    buffer(endpoint?: string, init?: Options): Promise<Buffer>;
    arrayBuffer(endpoint?: string, init?: Options): Promise<ArrayBuffer>;
    blob(endpoint?: string, init?: Options): Promise<Blob>;
}
