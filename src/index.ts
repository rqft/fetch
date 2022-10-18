import { Requester } from "./lib/requester";

const r = new Requester("https://httpbin.org/");

(async () => {
    const j = await r.request('GET /ip')
    console.log(j)
})();
