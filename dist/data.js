"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.TransformMethods = void 0;
var TransformMethods;
(function (TransformMethods) {
    TransformMethods["TEXT"] = "text";
    TransformMethods["JSON"] = "json";
    TransformMethods["BUFFER"] = "buffer";
    TransformMethods["ARRAY_BUFFER"] = "arrayBuffer";
    TransformMethods["BLOB"] = "blob";
})(TransformMethods = exports.TransformMethods || (exports.TransformMethods = {}));
class Data {
    payload;
    response;
    source;
    constructor(source, response, payload) {
        this.payload = payload || response;
        this.response = response;
        this.source = source;
    }
    clone(payload) {
        return new Data(this.source, this.response, payload);
    }
    async transform(method) {
        switch (method) {
            case TransformMethods.TEXT:
                return this.clone(await this.response.text());
            case TransformMethods.JSON:
                return this.clone(await this.response.json());
            case TransformMethods.BUFFER:
                return this.clone(await this.response.buffer());
            case TransformMethods.ARRAY_BUFFER:
                return this.clone(await this.response.arrayBuffer());
            case TransformMethods.BLOB:
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
