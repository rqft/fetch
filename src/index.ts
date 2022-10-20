import { Requester } from "./lib/requester";

const r = new Requester("https://httpbin.org/");

(async () => {
    const j = await r.json('GET /get', { t: 1 })
    console.log(j.headers().get('access-control-allow-credentials'))
})();
