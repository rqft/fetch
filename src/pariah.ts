import { Methods, Options } from "./constants";
import { Requester } from "./requester";

export class Pariah {
    public url: URL;
    protected init: Options;
    constructor(url: URL | string, init: Options = {}) {
        if (typeof url === "string") {
            this.url = new URL(url);
        } else {
            this.url = url;
        }
        this.init = init;
    }
    protected build(method: Methods) {
        const payload = new Requester(this.url, method, this.init);
        return Object.assign(payload, payload.request);
    }
    protected buildReverse(key: Lowercase<Methods>) {
        const payload = new Pariah(this.url, this.init);
        return Object.assign(payload, payload[key]);
    }
    public get = this.build(Methods.GET);
    public post = this.build(Methods.POST);
    public put = this.build(Methods.PUT);
    public delete = this.build(Methods.DELETE);
    public patch = this.build(Methods.PATCH);
    public head = this.build(Methods.HEAD);
    public options = this.build(Methods.OPTIONS);
    public connect = this.build(Methods.CONNECT);
    public trace = this.build(Methods.TRACE);
}
