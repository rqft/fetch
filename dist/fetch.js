"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const constants_1 = require("./constants");
const data_1 = require("./data");
const pariah_1 = require("./pariah");
async function fetchee(uri, options = constants_1.DEFAULT_OPTIONS) {
    const [method, path] = uri.split(" ");
    let url;
    try {
        url = new URL(path);
    }
    catch (e) {
        throw new Error(`Invalid URL: ${path}`);
    }
    const f = new pariah_1.Pariah(url);
    return f[method.toLowerCase()].request("/", undefined, options);
}
const fetchers = {
    [data_1.Type.TEXT]: async (url, options = constants_1.DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(data_1.Type.TEXT);
    },
    [data_1.Type.JSON]: async (url, options = constants_1.DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(data_1.Type.JSON);
    },
    [data_1.Type.BLOB]: async (url, options = constants_1.DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(data_1.Type.BLOB);
    },
    [data_1.Type.ARRAY_BUFFER]: async (url, options = constants_1.DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(data_1.Type.ARRAY_BUFFER);
    },
    [data_1.Type.BUFFER]: async (url, options = constants_1.DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(data_1.Type.BUFFER);
    },
};
exports.fetch = Object.assign(fetchee, fetchers);
exports.fetch.json("GET https://google.com");
