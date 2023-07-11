/// <reference types="node" />
import { HTTPVerbs, Options, Params } from '../constants';
import { Payload } from './payload';
export declare class Requester {
    readonly options: Options;
    url: URL;
    constructor(uri: string | URL, options?: Options);
    private init;
    private fillUrl;
    request<T extends `/${string}`>(id: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<null>>;
    text<T extends `/${string}`>(endpoint: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<string>>;
    json<U, T extends `/${string}`>(endpoint: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<U>>;
    blob<T extends `/${string}`>(endpoint: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<import("node-fetch").Blob>>;
    buffer<T extends `/${string}`>(endpoint: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<Buffer>>;
    arrayBuffer<T extends `/${string}`>(endpoint: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<ArrayBuffer>>;
    private parseEndpoint;
}
export declare type Id<T extends `/${string}`> = `${HTTPVerbs} ${T}` | T;
