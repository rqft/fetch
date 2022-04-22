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
    get get() {
        return this.build(constants_1.Methods.GET);
    }
    get post() {
        return this.build(constants_1.Methods.POST);
    }
    get put() {
        return this.build(constants_1.Methods.PUT);
    }
    get delete() {
        return this.build(constants_1.Methods.DELETE);
    }
    get patch() {
        return this.build(constants_1.Methods.PATCH);
    }
    get head() {
        return this.build(constants_1.Methods.HEAD);
    }
    get options() {
        return this.build(constants_1.Methods.OPTIONS);
    }
    get connect() {
        return this.build(constants_1.Methods.CONNECT);
    }
    get trace() {
        return this.build(constants_1.Methods.TRACE);
    }
}
exports.Pariah = Pariah;
