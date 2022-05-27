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
    constructor(response, payload) {
        this.payload = payload || response;
        this.response = response;
    }
    async transform(method) {
        switch (method) {
            case TransformMethods.TEXT:
                return new Data(this.response, this.response.text());
            case TransformMethods.JSON:
                return new Data(this.response, await this.response.json());
            case TransformMethods.BUFFER:
                return new Data(this.response, await this.response.buffer());
            case TransformMethods.ARRAY_BUFFER:
                return new Data(this.response, await this.response.arrayBuffer());
            case TransformMethods.BLOB:
                return new Data(this.response, await this.response.blob());
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
