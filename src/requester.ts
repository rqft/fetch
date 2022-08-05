import fetch, { Blob, Request } from "node-fetch";
import { HTTPVerbs, Options } from "./constants";
import { Data, Type } from "./data";
export type Param = string | `:${string}`;
export interface Params extends Record<Param, any> {}
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
    protected uri(endpoint: string = "/"): string {
        const href = this.url.href;
        if (href.endsWith("/") && endpoint.startsWith("/")) {
            return href + endpoint.slice(1);
        }
        return `${this.url.href}${endpoint}`;
    }
    protected params(endpoint: string, params: Params = {}): string {
        endpoint = this.uri(endpoint);
        const entries = Object.entries(params);
        const queries = entries.filter(([key]) => !key.startsWith(":"));
        const path = entries.filter(([key]) => key.startsWith(":"));
        for (const [key, value] of path) {
            endpoint = endpoint.split(key).join(value);
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
    public async request(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Data<unknown>> {
        const request = new Request(
            this.params(endpoint, params),
            this.init(init)
        );
        const response = await fetch(request);
        return new Data(request, response);
    }
    public async text(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Data<string>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.TEXT);
    }
    public async json<T>(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Data<T>> {
        const payload = await this.request(endpoint, params, init);
        return (await payload.transform(Type.JSON)) as Data<T>;
    }
    public async buffer(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Data<Buffer>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.BUFFER);
    }
    public async arrayBuffer(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Data<ArrayBuffer>> {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(Type.ARRAY_BUFFER);
    }
    public async blob(
        endpoint: string = "/",
        params: Params = {},
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
