import fetch, { Body, Request } from "node-fetch";
import { DefaultOptions, HTTPVerbs, Options, Params } from "../constants";
import { Payload } from "./payload";
import { deepObjectAssign, splitBy } from "./tools";

export class Requester {
    private _uri: URL;
    constructor(uri: string | URL, private options: Options = DefaultOptions) {
        this._uri = new URL(uri);
    }

    private init(method: HTTPVerbs, options?: Options) {
        const out: Options = deepObjectAssign(
            this.options,
            { method },
            options
        );

        if (
            out.body &&
            (!(out.body instanceof Body) || typeof out.body !== "string")
        ) {
            out.body = JSON.stringify(out.body);
        }

        return out;
    }

    private fillUrl<T extends string>(endpoint: T, params: Params<T> = {}) {
        const { true: id, false: param } = splitBy(Object.keys(params), (x) =>
            x.startsWith(":")
        );

        let z: string = endpoint;

        for (const i of id) {
            z = z.split(i).join(params[i]);
        }

        if (param.length) {
            z +=
                "?" +
                param
                    .map((x) => `${x}=${encodeURIComponent(params[x])}`)
                    .join("&");
        }

        return new URL(this.url.href.replace(/\/$/, "") + z);
    }

    public set url(uri: URL) {
        this._uri = uri;
    }

    public get url() {
        return this._uri;
    }

    public async request<T extends `/${string}`>(
        id: Id<T>,
        params?: Params<T>,
        options?: Options
    ) {
        const [verb, endpoint] = this.parseEndpoint(id);
        const request = new Request(
            this.fillUrl(endpoint, params),
            this.init(verb, options)
        );
        const response = await fetch(request);

        return new Payload<null>(request, response, null);
    }

    public async text<T extends `/${string}`>(
        endpoint: Id<T>,
        params?: Params<T>,
        options?: Options
    ) {
        return await (await this.request(endpoint, params, options)).text();
    }

    public async json<U, T extends `/${string}`>(
        endpoint: Id<T>,
        params?: Params<T>,
        options?: Options
    ) {
        return await (await this.request(endpoint, params, options)).json<U>();
    }

    public async blob<T extends `/${string}`>(
        endpoint: Id<T>,
        params?: Params<T>,
        options?: Options
    ) {
        return await (await this.request(endpoint, params, options)).blob();
    }

    public async buffer<T extends `/${string}`>(
        endpoint: Id<T>,
        params?: Params<T>,
        options?: Options
    ) {
        return await (await this.request(endpoint, params, options)).buffer();
    }

    public async arrayBuffer<T extends `/${string}`>(
        endpoint: Id<T>,
        params?: Params<T>,
        options?: Options
    ) {
        return await (
            await this.request(endpoint, params, options)
        ).arrayBuffer();
    }

    private parseEndpoint<T extends `/${string}`>(id: Id<T>): [HTTPVerbs, T] {
        const verb = id.substring(0, id.indexOf(" ")) as HTTPVerbs;
        if (HTTPVerbs[verb] === undefined) {
            return [HTTPVerbs.GET, id as T];
        }

        return [
            id.substring(0, id.indexOf(" ")) as HTTPVerbs,
            id.substring(id.indexOf(" ") + 1) as T,
        ];
    }
}

export type Id<T extends `/${string}`> = `${HTTPVerbs} ${T}` | T;
