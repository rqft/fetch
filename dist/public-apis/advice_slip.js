"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdviceSlip = void 0;
const base_1 = require("../lib/base");
class AdviceSlip {
    raw;
    constructor() {
        this.raw = new base_1.Pariah({ baseUrl: "https://api.adviceslip.com/" });
    }
    async random() {
        return this.raw.getJSON("/advice");
    }
    async slip(id) {
        return this.raw.getJSON(`/advice/${id}`);
    }
    async search(query) {
        return this.raw.getJSON(`/advice/search/${query}`);
    }
}
exports.AdviceSlip = AdviceSlip;
