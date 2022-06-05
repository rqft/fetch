"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_OPTIONS = exports.Methods = void 0;
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
    Methods["DELETE"] = "DELETE";
    Methods["PATCH"] = "PATCH";
    Methods["HEAD"] = "HEAD";
    Methods["OPTIONS"] = "OPTIONS";
    Methods["CONNECT"] = "CONNECT";
    Methods["TRACE"] = "TRACE";
})(Methods = exports.Methods || (exports.Methods = {}));
exports.DEFAULT_OPTIONS = {
    method: Methods.GET,
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "Pariah",
    },
};
