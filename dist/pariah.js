"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pariah = void 0;
const constants_1 = require("./constants");
const requester_1 = require("./requester");
class Pariah extends requester_1.Requester {
    url;
    _init;
    constructor(url, init = {}) {
        super(url, undefined, init);
        if (typeof url === "string") {
            this.url = new URL(url);
        }
        else {
            this.url = url;
        }
        this._init = init;
    }
    build(method) {
        const payload = new requester_1.Requester(this.url, method, this._init);
        return Object.assign(payload, payload.request);
    }
    get = this.build(constants_1.Methods.GET);
    post = this.build(constants_1.Methods.POST);
    put = this.build(constants_1.Methods.PUT);
    delete = this.build(constants_1.Methods.DELETE);
    patch = this.build(constants_1.Methods.PATCH);
    head = this.build(constants_1.Methods.HEAD);
    options = this.build(constants_1.Methods.OPTIONS);
    connect = this.build(constants_1.Methods.CONNECT);
    trace = this.build(constants_1.Methods.TRACE);
}
exports.Pariah = Pariah;
