"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagga = void 0;
const base_1 = require("./lib/base");
class Imagga {
    token;
    raw;
    constructor(token) {
        this.raw = new base_1.Pariah({
            baseUrl: "https://api.imagga.com/v2/",
            headers: {
                Authorization: token,
            },
        });
        this.token = token;
    }
    async tags(options, tagger_id) {
        return this.raw.getJSON(`/tags/${tagger_id}${this.raw.toUrlParams(options)}`);
    }
    async categorizers() {
        return this.raw.getJSON("/categorizers");
    }
    async categories(options, categorizer_id) {
        return this.raw.getJSON(`/categories/${categorizer_id}${this.raw.toUrlParams(options)}`);
    }
    async croppings(options) {
        return this.raw.getJSON(`/croppings/${this.raw.toUrlParams(options)}`);
    }
    async colors(options) {
        return this.raw.getJSON(`/colors/${this.raw.toUrlParams(options)}`);
    }
    async facesDetections(options) {
        return this.raw.getJSON(`/faces/detections/${this.raw.toUrlParams(options)}`);
    }
    async facesSimilarity(options) {
        return this.raw.getJSON(`/faces/similarity/${this.raw.toUrlParams(options)}`);
    }
    async facesGroupings(options) {
        return this.raw.postJSON("/faces/groupings", {
            body: JSON.stringify(options),
        });
    }
    async text(options) {
        return this.raw.getJSON(`/text/${this.raw.toUrlParams(options)}`);
    }
    async usage(options = {}) {
        return this.raw.getJSON(`/usage/${this.raw.toUrlParams(options)}`);
    }
    async barcodes(options) {
        return this.raw.getJSON(`/barcodes/${this.raw.toUrlParams(options)}`);
    }
}
exports.Imagga = Imagga;
