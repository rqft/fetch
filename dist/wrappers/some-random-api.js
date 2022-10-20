"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeRandomApi = exports.Url = void 0;
const requester_1 = require("../lib/requester");
exports.Url = "https://some-random-api.ml/";
class SomeRandomApi extends requester_1.Requester {
    constructor() {
        super(exports.Url);
    }
    animal_dog() {
        return this.json("GET /animal/dog");
    }
    animal_cat() {
        return this.json("GET /animal/cat");
    }
    animal_panda() {
        return this.json("GET /animal/panda");
    }
    animal_fox() {
        return this.json("GET /animal/fox");
    }
    animal_red_panda() {
        return this.json("GET /animal/red_panda");
    }
    animal_koala() {
        return this.json("GET /animal/koala");
    }
    animal_bird() {
        return this.json("GET /animal/birb");
    }
    animal_raccoon() {
        return this.json("GET /animal/raccoon");
    }
    animal_kangaroo() {
        return this.json("GET /animal/kangaroo");
    }
    fact_dog() {
        return this.json("GET /facts/dog");
    }
    fact_cat() {
        return this.json("GET /facts/cat");
    }
    fact_panda() {
        return this.json("GET /facts/panda");
    }
    fact_fox() {
        return this.json("GET /facts/fox");
    }
    fact_bird() {
        return this.json("GET /facts/birb");
    }
    fact_koala() {
        return this.json("GET /facts/koala");
    }
}
exports.SomeRandomApi = SomeRandomApi;
