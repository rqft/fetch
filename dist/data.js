"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.Type = void 0;
var Type;
(function (Type) {
    Type["TEXT"] = "text";
    Type["JSON"] = "json";
    Type["BUFFER"] = "buffer";
    Type["ARRAY_BUFFER"] = "arrayBuffer";
    Type["BLOB"] = "blob";
})(Type = exports.Type || (exports.Type = {}));
class Data {
    payload;
    response;
    source;
    constructor(source, response, payload) {
        this.payload = payload ?? response;
        this.response = response;
        this.source = source;
    }
    clone(payload) {
        return new Data(this.source, this.response, payload);
    }
    get type() {
        if ("constructor" in this.payload) {
            switch (this.payload.constructor) {
                case String:
                    return Type.TEXT;
                case Buffer:
                    return Type.BUFFER;
                case ArrayBuffer:
                    return Type.ARRAY_BUFFER;
                case Blob:
                    return Type.BLOB;
                case Object:
                default:
                    return Type.JSON;
            }
        }
        throw new Error("Payload has no constructor");
    }
    async transform(method) {
        switch (method) {
            case Type.TEXT:
                return this.clone(await this.response.text());
            case Type.JSON:
                return this.clone(await this.response.json());
            case Type.BUFFER:
                return this.clone(await this.response.buffer());
            case Type.ARRAY_BUFFER:
                return this.clone(await this.response.arrayBuffer());
            case Type.BLOB:
                return this.clone(await this.response.blob());
            default:
                return this;
        }
    }
    get ok() {
        return this.response.ok;
    }
    get status() {
        return this.response.status;
    }
    get headers() {
        return this.response.headers;
    }
    get url() {
        return new URL(this.response.url);
    }
}
exports.Data = Data;
