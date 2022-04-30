"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIs = void 0;
const base_io_1 = require("./base-io");
const imagga_1 = require("./imagga");
const pxlapi_1 = require("./pxlapi");
const some_random_api_1 = require("./some-random-api");
exports.APIs = {
    PxlAPI: pxlapi_1.PxlAPI,
    BaseIO: base_io_1.BaseIO,
    SomeRandomApi: some_random_api_1.SomeRandomApi,
    Imagga: imagga_1.Imagga,
};
