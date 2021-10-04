"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affirmations = void 0;
const base_1 = require("../lib/base");
class Affirmations {
    raw;
    constructor() {
        this.raw = new base_1.Pariah({ baseUrl: "https://www.affirmations.dev/" });
    }
    async run() {
        return this.raw.getJSON("/");
    }
}
exports.Affirmations = Affirmations;
