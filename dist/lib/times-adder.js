"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesAdder = void 0;
const pariah_1 = require("../pariah");
var TimesAdder;
(function (TimesAdder) {
    class API extends pariah_1.Pariah {
        constructor() {
            super("https://times-adder.herokuapp.com/api/v1/");
        }
        times(times) {
            return this.post("times", {}, {
                body: JSON.stringify({ data: times }),
            });
        }
    }
    TimesAdder.API = API;
})(TimesAdder = exports.TimesAdder || (exports.TimesAdder = {}));
