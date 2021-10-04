"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raw = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("./constants");
class Raw {
    async request(info, init) {
        return (0, node_fetch_1.default)(info, Object.assign({}, init));
    }
    async delete(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.DELETE });
        return this.request(info, init);
    }
    async get(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.GET });
        return this.request(info, init);
    }
    async head(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.HEAD });
        return this.request(info, init);
    }
    async options(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.OPTIONS });
        return this.request(info, init);
    }
    async patch(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.PATCH });
        return this.request(info, init);
    }
    async post(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.POST });
        return this.request(info, init);
    }
    async put(info, init) {
        init = Object.assign({}, init, { method: constants_1.HTTPMethods.PUT });
        return this.request(info, init);
    }
}
exports.Raw = Raw;
