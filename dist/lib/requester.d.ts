import { HTTPVerbs, Options, Params } from "../constants";
import { Payload } from "./payload";
export declare class Requester {
    private options;
    private _uri;
    constructor(uri: string | URL, options?: Options);
    private init;
    private fillUrl;
    set url(uri: URL);
    get url(): URL;
    request<T extends `/${string}`>(id: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<null>>;
    text<T extends `/${string}`>(endpoint: Id<T>, params?: Params<T>, options?: Options): Promise<Payload<string>>;
    private parseEndpoint;
}
export declare type Id<T extends `/${string}`> = `${HTTPVerbs} ${T}`;
