"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PxlApi = void 0;
const base_1 = require("./lib/base");
class PxlApi {
    token;
    raw;
    constructor(token) {
        this.raw = new base_1.Pariah({
            baseUrl: "https://api.pxlapi.dev/",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Application ${token}`,
            },
        });
        this.token = token;
    }
    body(body) {
        return { body: JSON.stringify(body) };
    }
    async ajit(images) {
        return this.raw.postArrayBuffer("ajit", {
            body: JSON.stringify({ images }),
        });
    }
    async emojimosaic(images, options = {}) {
        return this.raw.postArrayBuffer("emojimosaic", this.body({ images, ...options }));
    }
    async eyes(images, type) {
        return this.raw.postArrayBuffer(`eyes/${type}`, this.body({ images }));
    }
    async flag(images, flag = "gay", opacity = 128) {
        return this.raw.postArrayBuffer(`flag/${flag}`, this.body({ images, opacity }));
    }
    async flash(images) {
        return this.raw.postArrayBuffer("flag", this.body({ images }));
    }
    async ganimal(images) {
        return this.raw.postArrayBuffer("ganimal", this.body({ images }));
    }
    async glitch(images, options = {}) {
        return this.raw.postArrayBuffer("glitch", this.body({ images, ...options }));
    }
    async imagescript(code, inject = {}, version = "latest", timeout = 10000) {
        return this.raw.postArrayBuffer(`imagescript/${version}`, this.body({ code, inject, timeout }));
    }
    async jpeg(images, quality = 1) {
        return this.raw.postArrayBuffer("jpeg", this.body({ images, quality }));
    }
    async lego(images, options) {
        return this.raw.postArrayBuffer("lego", this.body({ images, ...options }));
    }
    async snapchat(images, filter = "dog") {
        return this.raw.postArrayBuffer(`snapchat/${filter}`, this.body({ images }));
    }
    async sonic(text) {
        return this.raw.postArrayBuffer("sonic", this.body({ text }));
    }
    async thonkify(text) {
        return this.raw.postArrayBuffer("thonkify", this.body({ text }));
    }
    async imageSearch(query, safeSearch = "strict", meta = false) {
        return this.raw.postJSON("image_search", this.body({ query, safeSearch, meta }));
    }
    async klines(pair, options) {
        return this.raw.postArrayBuffer(`klines/${pair}`, this.body({ ...options }));
    }
    async screenshot(url, options) {
        return this.raw.postArrayBuffer("screenshot", this.body({ url, ...options }));
    }
    async webSearch(query, safeSearch = "strict") {
        return this.raw.postJSON("web_search", this.body({ query, safeSearch }));
    }
}
exports.PxlApi = PxlApi;
