"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const node_fetch_1 = __importStar(require("node-fetch"));
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
        const request = new node_fetch_1.Request(this.params(endpoint, params), this.init(init));
        const response = await (0, node_fetch_1.default)(request);
        return new data_1.Data(request, response);
    }
    async text(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.Type.TEXT);
    }
    async json(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return (await payload.transform(data_1.Type.JSON));
    }
    async buffer(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.Type.BUFFER);
    }
    async arrayBuffer(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.Type.ARRAY_BUFFER);
    }
    async blob(endpoint = "/", params = {}, init = {}) {
        const payload = await this.request(endpoint, params, init);
        return await payload.transform(data_1.Type.BLOB);
    }
}
exports.Requester = Requester;
