import { Methods, Options } from "./constants";
import { Requester } from "./requester";

export class Pariah extends Requester {
    protected _init: Options;
    constructor(url: URL, init: Options = {}) {
        super(url, undefined, init);

        this._init = init;
    }
    protected build(method: Methods) {
        const payload = new Requester(this.url, method, this._init);
        return Object.assign(payload, payload.request);
    }
    public get get() {
        return this.build(Methods.GET);
    }
    public get post() {
        return this.build(Methods.POST);
    }
    public get put() {
        return this.build(Methods.PUT);
    }
    public get delete() {
        return this.build(Methods.DELETE);
    }
    public get patch() {
        return this.build(Methods.PATCH);
    }
    public get head() {
        return this.build(Methods.HEAD);
    }
    public get options() {
        return this.build(Methods.OPTIONS);
    }
    public get connect() {
        return this.build(Methods.CONNECT);
    }
    public get trace() {
        return this.build(Methods.TRACE);
    }
}
