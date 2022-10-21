"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitBy = exports.deepObjectAssign = void 0;
function deepObjectAssign(target, ...sources) {
    for (const source of sources) {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.bind(source)(key)) {
                if (source[key] && typeof source[key] === 'object') {
                    target[key] = deepObjectAssign(target[key] || {}, source[key]);
                }
                else {
                    target[key] =
                        source[key];
                }
            }
        }
    }
    return target;
}
exports.deepObjectAssign = deepObjectAssign;
function splitBy(content, f) {
    const o = { true: [], false: [] };
    content.forEach((value, index, array) => {
        if (f(value, index, array, o)) {
            o.true.push(value);
        }
        else {
            o.false.push(value);
        }
    });
    return o;
}
exports.splitBy = splitBy;
