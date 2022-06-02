"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Urban = void 0;
const pariah_1 = require("../pariah");
var Urban;
(function (Urban) {
    Urban.Url = new URL("https://api.urbandictionary.com/v0");
    class API extends pariah_1.Pariah {
        constructor() {
            super(Urban.Url);
        }
        async define(term) {
            return await this.get.json("/define", { term });
        }
    }
    Urban.API = API;
})(Urban = exports.Urban || (exports.Urban = {}));
