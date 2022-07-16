"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pariah = void 0;
const constants_1 = require("./constants");
const requester_1 = require("./requester");
class Pariah extends requester_1.Requester {
    _init;
    constructor(url, init = {}) {
        super(url, undefined, init);
        this._init = init;
    }
    build(method) {
        const payload = new requester_1.Requester(this.url, method, this._init);
        return Object.assign(payload, payload.request);
    }
    get = this.build(constants_1.HTTPVerbs.GET);
    post = this.build(constants_1.HTTPVerbs.POST);
    put = this.build(constants_1.HTTPVerbs.PUT);
    delete = this.build(constants_1.HTTPVerbs.DELETE);
    patch = this.build(constants_1.HTTPVerbs.PATCH);
    head = this.build(constants_1.HTTPVerbs.HEAD);
    options = this.build(constants_1.HTTPVerbs.OPTIONS);
    connect = this.build(constants_1.HTTPVerbs.CONNECT);
    trace = this.build(constants_1.HTTPVerbs.TRACE);
    copy = this.build(constants_1.HTTPVerbs.COPY);
    link = this.build(constants_1.HTTPVerbs.LINK);
    unlink = this.build(constants_1.HTTPVerbs.UNLINK);
    purge = this.build(constants_1.HTTPVerbs.PURGE);
    lock = this.build(constants_1.HTTPVerbs.LOCK);
    unlock = this.build(constants_1.HTTPVerbs.UNLOCK);
    propfind = this.build(constants_1.HTTPVerbs.PROPFIND);
    view = this.build(constants_1.HTTPVerbs.VIEW);
}
exports.Pariah = Pariah;
