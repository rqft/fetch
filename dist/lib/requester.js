"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const node_fetch_1 = __importStar(require("node-fetch"));
const constants_1 = require("../constants");
const payload_1 = require("./payload");
const tools_1 = require("./tools");
class Requester {
    options;
    puri;
    constructor(uri, options = constants_1.DefaultOptions) {
        this.options = options;
        this.puri = new URL(uri);
    }
    init(method, options) {
        const out = (0, tools_1.deepObjectAssign)(this.options, { method }, options);
        if (out.body &&
            (!(out.body instanceof node_fetch_1.Body) || typeof out.body !== 'string')) {
            out.body = JSON.stringify(out.body);
        }
        return out;
    }
    fillUrl(endpoint, params = {}) {
        const { true: id, false: param } = (0, tools_1.splitBy)(Object.keys(params), (x) => x.startsWith(':'));
        let z = endpoint;
        for (const i of id) {
            z = z.split(i).join(encodeURIComponent(String(params[i])));
        }
        if (param.length) {
            z +=
                '?' +
                    param
                        .map((x) => `${x}=${encodeURIComponent(String(params[x]))}`)
                        .join('&');
        }
        return new URL(this.url.href.replace(/\/$/, '') + z);
    }
    set url(uri) {
        this.puri = uri;
    }
    get url() {
        return this.puri;
    }
    async request(id, params, options) {
        const [verb, endpoint] = this.parseEndpoint(id);
        const request = new node_fetch_1.Request(this.fillUrl(endpoint, params), this.init(verb, options));
        const response = await (0, node_fetch_1.default)(request);
        return new payload_1.Payload(request, response, null);
    }
    async text(endpoint, params, options) {
        return await (await this.request(endpoint, params, options)).text();
    }
    async json(endpoint, params, options) {
        return await (await this.request(endpoint, params, options)).json();
    }
    async blob(endpoint, params, options) {
        return await (await this.request(endpoint, params, options)).blob();
    }
    async buffer(endpoint, params, options) {
        return await (await this.request(endpoint, params, options)).buffer();
    }
    async arrayBuffer(endpoint, params, options) {
        return await (await this.request(endpoint, params, options)).arrayBuffer();
    }
    parseEndpoint(id) {
        const verb = id.substring(0, id.indexOf(' '));
        if (constants_1.HTTPVerbs[verb] === undefined) {
            return [constants_1.HTTPVerbs.GET, id];
        }
        return [
            id.substring(0, id.indexOf(' ')),
            id.substring(id.indexOf(' ') + 1),
        ];
    }
}
exports.Requester = Requester;
