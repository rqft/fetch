"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requester_1 = require("./lib/requester");
const r = new requester_1.Requester("https://httpbin.org/");
(async () => {
    const j = await r.json('GET /get', { t: 1 });
    console.log(j.headers().get('access-control-allow-credentials'));
})();
