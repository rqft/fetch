"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pariah = exports.Base = exports.defaultClientOptions = void 0;
const raw_1 = require("./raw");
exports.defaultClientOptions = {
    headers: {
        "user-agent": "Pariah",
    },
};
class Base {
    baseUrl = new URL("https://example.com/");
    headers = {};
    raw;
    constructor(options) {
        this.raw = new raw_1.Raw();
        options = Object.assign({}, exports.defaultClientOptions, options);
        if (options.baseUrl) {
            if (options.baseUrl instanceof URL) {
                this.baseUrl = options.baseUrl;
            }
            else {
                this.baseUrl = new URL(options.baseUrl);
            }
        }
        this.headers = options.headers ?? {};
    }
    url(endpoint) {
        return `https://${this.baseUrl.hostname}${endpoint}`;
    }
    request(endpoint, init) {
        return this.raw.request(this.url(endpoint), Object.assign(this.headers, init));
    }
    get(endpoint, init) {
        return this.raw.get(this.url(endpoint), Object.assign(this.headers, init));
    }
    post(endpoint, init) {
        return this.raw.post(this.url(endpoint), Object.assign(this.headers, init));
    }
    patch(endpoint, init) {
        return this.raw.patch(this.url(endpoint), Object.assign(this.headers, init));
    }
    delete(endpoint, init) {
        return this.raw.delete(this.url(endpoint), Object.assign(this.headers, init));
    }
    head(endpoint, init) {
        return this.raw.head(this.url(endpoint), Object.assign(this.headers, init));
    }
    options(endpoint, init) {
        return this.raw.options(this.url(endpoint), Object.assign(this.headers, init));
    }
    put(endpoint, init) {
        return this.raw.put(this.url(endpoint), Object.assign(this.headers, init));
    }
}
exports.Base = Base;
class Pariah extends Base {
    constructor(options) {
        super(options);
    }
    toUrlParams(object) {
        if (typeof object !== "object")
            object = { object };
        return `?${Object.entries(object)
            .filter(([_, v]) => v)
            .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
            .join("&")}`;
    }
    async requestJSON(endpoint, init) {
        return (await this.request(endpoint, init)).json();
    }
    async getJSON(endpoint, init) {
        return (await this.get(endpoint, init)).json();
    }
    async postJSON(endpoint, init) {
        return (await this.post(endpoint, init)).json();
    }
    async patchJSON(endpoint, init) {
        return (await this.patch(endpoint, init)).json();
    }
    async deleteJSON(endpoint, init) {
        return (await this.delete(endpoint, init)).json();
    }
    async headJSON(endpoint, init) {
        return (await this.head(endpoint, init)).json();
    }
    async optionsJSON(endpoint, init) {
        return (await this.options(endpoint, init)).json();
    }
    async putJSON(endpoint, init) {
        return (await this.put(endpoint, init)).json();
    }
    async requestText(endpoint, init) {
        return (await this.request(endpoint, init)).text();
    }
    async getText(endpoint, init) {
        return (await this.get(endpoint, init)).text();
    }
    async postText(endpoint, init) {
        return (await this.post(endpoint, init)).text();
    }
    async patchText(endpoint, init) {
        return (await this.patch(endpoint, init)).text();
    }
    async deleteText(endpoint, init) {
        return (await this.delete(endpoint, init)).text();
    }
    async headText(endpoint, init) {
        return (await this.head(endpoint, init)).text();
    }
    async optionsText(endpoint, init) {
        return (await this.options(endpoint, init)).text();
    }
    async putText(endpoint, init) {
        return (await this.put(endpoint, init)).text();
    }
    async requestBlob(endpoint, init) {
        return (await this.request(endpoint, init)).blob();
    }
    async getBlob(endpoint, init) {
        return (await this.get(endpoint, init)).blob();
    }
    async postBlob(endpoint, init) {
        return (await this.post(endpoint, init)).blob();
    }
    async patchBlob(endpoint, init) {
        return (await this.patch(endpoint, init)).blob();
    }
    async deleteBlob(endpoint, init) {
        return (await this.delete(endpoint, init)).blob();
    }
    async headBlob(endpoint, init) {
        return (await this.head(endpoint, init)).blob();
    }
    async optionsBlob(endpoint, init) {
        return (await this.options(endpoint, init)).blob();
    }
    async putBlob(endpoint, init) {
        return (await this.put(endpoint, init)).blob();
    }
    async requestArrayBuffer(endpoint, init) {
        return (await this.request(endpoint, init)).arrayBuffer();
    }
    async getArrayBuffer(endpoint, init) {
        return (await this.get(endpoint, init)).arrayBuffer();
    }
    async postArrayBuffer(endpoint, init) {
        return (await this.post(endpoint, init)).arrayBuffer();
    }
    async patchArrayBuffer(endpoint, init) {
        return (await this.patch(endpoint, init)).arrayBuffer();
    }
    async deleteArrayBuffer(endpoint, init) {
        return (await this.delete(endpoint, init)).arrayBuffer();
    }
    async headArrayBuffer(endpoint, init) {
        return (await this.head(endpoint, init)).arrayBuffer();
    }
    async optionsArrayBuffer(endpoint, init) {
        return (await this.options(endpoint, init)).arrayBuffer();
    }
    async putArrayBuffer(endpoint, init) {
        return (await this.put(endpoint, init)).arrayBuffer();
    }
}
exports.Pariah = Pariah;
