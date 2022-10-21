"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = void 0;
const utils_1 = require("@rqft/utils");
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
        x.ptxt = this.ptxt;
        return x;
    }
    setPayload(payload) {
        const x = new Payload(this.request, this.response, payload);
        x.ptxt = this.ptxt;
        return x;
    }
    ptxt = null;
    async text() {
        const clone = this.response.clone();
        if (this.ptxt === null) {
            this.ptxt = await clone.text();
        }
        return this.setPayload(this.ptxt);
    }
    async json() {
        const text = await this.text();
        return this.setPayload(JSON.parse(text.payload));
    }
    async blob() {
        const blob = await this.clone().response.blob();
        return this.setPayload(blob);
    }
    async buffer() {
        const text = await this.text();
        return this.setPayload(Buffer.from(text.payload));
    }
    async arrayBuffer() {
        const buffer = await this.buffer();
        return this.setPayload(buffer.payload.buffer);
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
}
exports.Payload = Payload;
