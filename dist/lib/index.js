"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIs = void 0;
const base_io_1 = require("./base-io");
const pxlapi_1 = require("./pxlapi");
const times_adder_1 = require("./times-adder");
exports.APIs = {
    PxlAPI: pxlapi_1.PxlAPI,
    TimesAdder: times_adder_1.TimesAdder,
    BaseIO: base_io_1.BaseIO,
};
