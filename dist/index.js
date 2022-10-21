"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rqft_1 = require("./wrappers/rqft");
const r = new rqft_1.Rqft();
(async () => {
    const req = await r.origin();
    const { data } = req.unwrap();
    console.log(data);
})();
