import fetch, { Blob, Request } from "node-fetch";
import { HTTPVerbs, Options, Params } from "./constants";
import { Data, Type } from "./data";

export class Requester {
    public url: URL;
    public method: HTTPVerbs;
    protected _options: Options;
    constructor(
        url: URL,
        method: HTTPVerbs = HTTPVerbs.GET,
        init: Options = {}
    ) {
        this.url = url;
        this.method = method;
        this._options = init;
    }
    protected uri<T extends string = string>(endpoint: T = "/" as T): string {
        const href = this.url.href;
        if (href.endsWith("/") && endpoint.startsWith("/")) {
            return href + endpoint.slice(1);
        }
        return `${this.url.href}${endpoint}`;
    }
    protected params<T extends string = string>(
        endpoint: string = "/" as T,
        params: Params<T> = {} as Params<T>
    ): string {
        endpoint = this.uri(endpoint) as T;
        const entries = Object.entries(params);
        const queries = entries.filter(([key]) => !key.startsWith(":"));
        const path = entries.filter(([key]) => key.startsWith(":"));
        for (const [key, value] of path) {
            endpoint = endpoint
                .split(key)
                .join(encodeURIComponent(String(value))) as T;
        }
        if (queries.length) {
            endpoint += "?";
            endpoint += queries
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => `${key}=${value}`)
                .join("&");
        }
        return endpoint;
    }
    protected init(init: Options = {}): Options {
        if (typeof this._options.body === "object") {
            this._options.body = JSON.stringify(this._options.body);
        }

        return deepObjectAssign({ method: this.method }, this._options, init);
    }
    public async request<T extends string = string>(
        endpoint: T = "/" as T,
        params: Params<T> = {} as Params<T>,
        init: Options = {}
    ): Promise<Data<unknown>> {
        const request = new Request(
            this.params(endpoint, params),
            this.init(init)
        );
        const response = await fetch(request);
        return new Data(request, response);
    }
    public async text<T extends string = string>(
        endpoint: T = "/" as T,
        params: Params<T> = {} as Params<T>,
        init: Options = {}
    ): Promise<Data<string>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.TEXT);
    }
    public async json<T, U extends string = string>(
        endpoint: U = "/" as U,
        params: Params<U> = {} as Params<U>,
        init: Options = {}
    ): Promise<Data<T>> {
        const payload = await this.request(endpoint, params, init);
        return (await payload.transform(Type.JSON)) as Data<T>;
    }
    public async buffer<T extends string = string>(
        endpoint: T = "/" as T,
        params: Params<T> = {} as Params<T>,
        init: Options = {}
    ): Promise<Data<Buffer>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.BUFFER);
    }
    public async arrayBuffer<T extends string = string>(
        endpoint: T = "/" as T,
        params: Params<T> = {} as Params<T>,
        init: Options = {}
    ): Promise<Data<ArrayBuffer>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.ARRAY_BUFFER);
    }
    public async blob<T extends string = string>(
        endpoint: T = "/" as T,
        params: Params<T> = {} as Params<T>,
        init: Options = {}
    ): Promise<Data<Blob>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.BLOB);
    }
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;

function deepObjectAssign<T, U extends Array<any>>(
    target: T,
    ...sources: U
): T & UnionToIntersection<U[number]> {
    for (const source of sources) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                if (source[key] && typeof source[key] === "object") {
                    target[<never>key] = <never>(
                        deepObjectAssign(target[<never>key] || {}, source[key])
                    );
                } else {
                    target[<never>key] = <never>source[key];
                }
            }
        }
    }
    return <never>target;
}
