"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("./constants");
const data_1 = require("./data");
class Requester {
    url;
    method;
    _options;
    constructor(url, method = constants_1.Methods.GET, init = {}) {
        this.url = url;
        this.method = method;
        this._options = init;
    }
    uri(endpoint = "/") {
        const href = this.url.href;
        if (href.endsWith("/") && endpoint.startsWith("/")) {
            return href + endpoint.slice(1);
        }
        return `${this.url.href}${endpoint}`;
    }
    params(endpoint, params = {}) {
        endpoint = this.uri(endpoint);
        const entries = Object.entries(params);
        const queries = entries.filter(([key]) => !key.startsWith(":"));
        const path = entries.filter(([key]) => key.startsWith(":"));
        for (const [key, value] of path) {
            endpoint = endpoint.split(key).join(value);
        }
        if (queries.length) {
            endpoint += "?";
            endpoint += queries
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => `${key}=${value}`)
                .join("&");
        }
        return endpoint;
    }
    init(init = {}) {
        return Object.assign({ method: this.method }, this._options, init);
    }
    async request(endpoint = "/", params = {}, init = {}) {
        const payload = await (0, node_fetch_1.default)(this.params(endpoint, params), this.init(init));
        return new data_1.Data(payload);
    }
    async text(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.TransformMethods.TEXT);
    }
    async json(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.TransformMethods.JSON);
    }
    async buffer(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.TransformMethods.BUFFER);
    }
    async arrayBuffer(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.TransformMethods.ARRAY_BUFFER);
    }
    async blob(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.TransformMethods.BLOB);
    }
}
exports.Requester = Requester;
