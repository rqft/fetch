"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pariah = void 0;
const constants_1 = require("./constants");
const requester_1 = require("./requester");
class Pariah {
    url;
    init;
    constructor(url, init = {}) {
        if (typeof url === "string") {
            this.url = new URL(url);
        }
        else {
            this.url = url;
        }
        this.init = init;
    }
    build(method) {
        const payload = new requester_1.Requester(this.url, method, this.init);
        return Object.assign(payload, payload.request);
    }
    buildReverse(key) {
        const payload = new Pariah(this.url, this.init);
        return Object.assign(payload, payload[key]);
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
