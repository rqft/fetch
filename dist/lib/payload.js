"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = void 0;
class Payload {
    request;
    response;
    payload;
    constructor(request, response, payload) {
        this.request = request;
        this.response = response;
        this.payload = payload;
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
}
exports.Payload = Payload;
