"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rqft_1 = require("./wrappers/rqft");
const r = new rqft_1.Rqft();
(async () => {
    console.log(await r.textEmojify('yo'));
})();
