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
    has_value() {
        return this.payload !== null;
    }
    unwrap() {
        if (!this.has_value()) {
            throw new Error("No value");
        }
        return this.payload;
    }
    clone(payload) {
        let x = new Payload(this.request.clone(), this.response.clone(), payload || this.payload);
        x._txt = this._txt;
        return x;
    }
    set_payload(payload) {
        let x = new Payload(this.request, this.response, payload);
        x._txt = this._txt;
        return x;
    }
    _txt = null;
    async text() {
        const clone = this.response.clone();
        if (this._txt === null) {
            this._txt = await clone.text();
        }
        return this.set_payload(this._txt);
    }
    async json() {
        const text = await this.text();
        return this.set_payload(JSON.parse(text.payload));
    }
    async blob() {
        const blob = await this.clone().response.blob();
        return this.set_payload(blob);
    }
    async buffer() {
        const text = await this.text();
        return this.set_payload(Buffer.from(text.payload));
    }
    async arrayBuffer() {
        const buffer = await this.buffer();
        return this.set_payload(buffer.payload.buffer);
    }
    outgoing_headers() {
        return new utils_1.BaseCollection(this.request.headers.entries());
    }
    headers() {
        return new utils_1.BaseCollection(this.response.headers.entries());
    }
    uri() {
        return new URL(this.request.url);
    }
    is_ok() {
        return this.response.ok;
    }
}
exports.Payload = Payload;
