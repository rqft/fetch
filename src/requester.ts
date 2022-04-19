import fetch, { Blob, Response } from "node-fetch";
import { Methods, Options } from "./constants";

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
    protected init(init: Options = {}): Options {
        return Object.assign({ method: this.method }, this.options, init);
    }
    public async request(
        endpoint: string = "/",
        init: Options = {}
    ): Promise<Response> {
        return await fetch(this.uri(endpoint), this.init(init));
    }
    public async text(
        endpoint: string = "/",
        init: Options = {}
    ): Promise<string> {
        const payload = await this.request(endpoint, init);
        return await payload.text();
    }
    public async json<T>(
        endpoint: string = "/",
        init: Options = {}
    ): Promise<T> {
        const payload = await this.request(endpoint, init);
        return (await payload.json()) as T;
    }
    public async buffer(
        endpoint: string = "/",
        init: Options = {}
    ): Promise<Buffer> {
        const payload = await this.request(endpoint, init);
        return await payload.buffer();
    }
    public async arrayBuffer(
        endpoint: string = "/",
        init: Options = {}
    ): Promise<ArrayBuffer> {
        const payload = await this.request(endpoint, init);
        return await payload.arrayBuffer();
    }
    public async blob(
        endpoint: string = "/",
        init: Options = {}
    ): Promise<Blob> {
        const payload = await this.request(endpoint, init);
        return await payload.blob();
    }
}
