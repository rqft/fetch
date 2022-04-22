import fetch, { Blob, Response } from "node-fetch";
import { Methods, Options } from "./constants";
export type Param = string | `:${string}`;
export interface Params extends Record<Param, any> {}
export class Requester {
    public url: URL;
    public method: Methods;
    protected options: Options;
    constructor(
        url: URL | string,
        method: Methods = Methods.GET,
        init: Options = {}
    ) {
        if (typeof url === "string") {
            this.url = new URL(url);
        } else {
            this.url = url;
        }
        this.method = method;
        this.options = init;
    }
    protected uri(endpoint: string = "/"): string {
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
        return Object.assign({ method: this.method }, this.options, init);
    }
    public async request(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Response> {
        return await fetch(this.params(endpoint, params), this.init(init));
    }
    public async text(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<string> {
        const payload = await this.request(endpoint, params, init);
        return await payload.text();
    }
    public async json<T>(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<T> {
        const payload = await this.request(endpoint, params, init);
        return (await payload.json()) as T;
    }
    public async buffer(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Buffer> {
        const payload = await this.request(endpoint, params, init);
        return await payload.buffer();
    }
    public async arrayBuffer(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<ArrayBuffer> {
        const payload = await this.request(endpoint, params, init);
        return await payload.arrayBuffer();
    }
    public async blob(
        endpoint: string = "/",
        params: Params = {},
        init: Options = {}
    ): Promise<Blob> {
        const payload = await this.request(endpoint, params, init);
        return await payload.blob();
    }
}
