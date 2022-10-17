import fetch, { Request } from "node-fetch";
import { DefaultOptions, HTTPVerbs, Options, Params } from "../constants";
import { Payload } from "./payload";
import { deepObjectAssign, splitBy } from "./tools";

export class Requester {
    private _uri: URL;
    private _method: HTTPVerbs;
    constructor(
        id: `${HTTPVerbs} ${string}`,
        private options: Options = DefaultOptions
    ) {
        const [verb, uri] = id.split(" ", 1) as [HTTPVerbs, string];

        this._uri = new URL(uri);
        this._method = verb;
    }

    private init(options?: Options) {
        return deepObjectAssign(this.options, { method: this.method }, options);
    }

    private fillUrl<T extends string>(endpoint: T, params: Params<T>) {
        const { true: id, false: param } = splitBy(Object.keys(params), (x) =>
            x.startsWith(":")
        );

        let z: string = endpoint;

        for (const i of id) {
            z = z.split(i).join(params[i]);
        }

        z +=
            "?" +
            param.map((x) => `${x}=${encodeURIComponent(params[x])}`).join("&");

        return new URL(this.url.href.replace(/\/$/, "") + z);
    }

    public set url(uri: URL) {
        this._uri = uri;
    }

    public get url() {
        return this._uri;
    }

    public set method(method: HTTPVerbs) {
        this._method = method;
    }

    public get method() {
        return this._method;
    }

    public async request<T extends string>(
        endpoint: T,
        params: Params<T>,
        options?: Options
    ) {
        const request = new Request(
            this.fillUrl(endpoint, params),
            this.init(options)
        );
        const response = await fetch(request);

        return new Payload<null>(request, response);
    }

    public async text()
}
