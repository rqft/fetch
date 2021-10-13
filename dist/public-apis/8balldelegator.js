"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EightBallDelegator = void 0;
const base_1 = require("../lib/base");
class EightBallDelegator {
    raw;
    constructor() {
        this.raw = new base_1.Pariah({ baseUrl: " https://8ball.delegator.com/magic/" });
    }
    async json(query) {
        return this.raw.getJSON(`/JSON/${encodeURIComponent(query)}`);
    }
    async xml(query) {
        return this.raw.getText(`/XML/${encodeURIComponent(query)}`);
    }
}
exports.EightBallDelegator = EightBallDelegator;
