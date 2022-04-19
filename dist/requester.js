"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("./constants");
class Requester {
    url;
    method;
    options;
    constructor(url, method = constants_1.Methods.GET, init = {}) {
        if (typeof url === "string") {
            this.url = new URL(url);
        }
        else {
            this.url = url;
        }
        this.method = method;
        this.options = init;
    }
    uri(endpoint = "/") {
        return `${this.url.href}${endpoint}`;
    }
    init(init = {}) {
        return Object.assign({ method: this.method }, this.options, init);
    }
    async request(endpoint = "/", init = {}) {
        return await (0, node_fetch_1.default)(this.uri(endpoint), this.init(init));
    }
    async text(endpoint = "/", init = {}) {
        const payload = await this.request(endpoint, init);
        return await payload.text();
    }
    async json(endpoint = "/", init = {}) {
        const payload = await this.request(endpoint, init);
        return (await payload.json());
    }
    async buffer(endpoint = "/", init = {}) {
        const payload = await this.request(endpoint, init);
        return await payload.buffer();
    }
    async arrayBuffer(endpoint = "/", init = {}) {
        const payload = await this.request(endpoint, init);
        return await payload.arrayBuffer();
    }
    async blob(endpoint = "/", init = {}) {
        const payload = await this.request(endpoint, init);
        return await payload.blob();
    }
}
exports.Requester = Requester;
