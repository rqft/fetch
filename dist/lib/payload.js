"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = void 0;
const utils_1 = require("@rqft/utils");
const util_1 = require("util");
class Payload {
    request;
    response;
    payload;
    constructor(request, response, payload) {
        this.request = request;
        this.response = response;
        this.payload = payload;
    }
    hasValue() {
        return this.payload !== null;
    }
    unwrap() {
        if (!this.hasValue()) {
            throw new Error('No value');
        }
        return this.payload;
    }
    clone(payload) {
        const x = new Payload(this.request.clone(), this.response.clone(), payload || this.payload);
        return x;
    }
    setPayload(payload) {
        const x = new Payload(this.request, this.response, payload);
        return x;
    }
    async text() {
        return this.setPayload(await this.response.text());
    }
    async json() {
        return this.setPayload(await this.response.json());
    }
    async blob() {
        return this.setPayload(await this.response.blob());
    }
    async buffer() {
        return this.setPayload(await this.response.buffer());
    }
    async arrayBuffer() {
        return this.setPayload(await this.response.arrayBuffer());
    }
    outgoingHeaders() {
        return new utils_1.BaseCollection(this.request.headers.entries());
    }
    headers() {
        return new utils_1.BaseCollection(this.response.headers.entries());
    }
    uri() {
        return new URL(this.request.url);
    }
    isOk() {
        return this.response.ok;
    }
    [util_1.inspect.custom]() {
        const shield = this;
        class Payload {
            constructor() {
                Object.assign(this, shield.payload);
            }
        }
        return new Payload();
    }
}
exports.Payload = Payload;
