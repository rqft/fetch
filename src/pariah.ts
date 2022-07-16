import { HTTPVerbs, Options } from "./constants";
import { Requester } from "./requester";

export class Pariah extends Requester {
    protected _init: Options;
    constructor(url: URL, init: Options = {}) {
        super(url, undefined, init);

        this._init = init;
    }
    protected build(method: HTTPVerbs) {
        const payload = new Requester(this.url, method, this._init);
        return Object.assign(payload, payload.request);
    }

    public get = this.build(HTTPVerbs.GET);
    public post = this.build(HTTPVerbs.POST);
    public put = this.build(HTTPVerbs.PUT);
    public delete = this.build(HTTPVerbs.DELETE);
    public patch = this.build(HTTPVerbs.PATCH);
    public head = this.build(HTTPVerbs.HEAD);
    public options = this.build(HTTPVerbs.OPTIONS);
    public connect = this.build(HTTPVerbs.CONNECT);
    public trace = this.build(HTTPVerbs.TRACE);

    // non-standard
    public copy = this.build(HTTPVerbs.COPY);
    public link = this.build(HTTPVerbs.LINK);
    public unlink = this.build(HTTPVerbs.UNLINK);
    public purge = this.build(HTTPVerbs.PURGE);
    public lock = this.build(HTTPVerbs.LOCK);
    public unlock = this.build(HTTPVerbs.UNLOCK);
    public propfind = this.build(HTTPVerbs.PROPFIND);
    public view = this.build(HTTPVerbs.VIEW);
}
