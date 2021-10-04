"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaWeather = void 0;
const base_1 = require("../lib/base");
class MetaWeather {
    raw;
    constructor() {
        this.raw = new base_1.Pariah({ baseUrl: "https://www.metaweather.com/api/" });
    }
    async locationSearch(query) {
        return this.raw.getJSON(`/location/search${this.raw.toUrlParams({ query })}`);
    }
    async locationSearchLatLong(lat, long) {
        return this.raw.getJSON(`/location/search${this.raw.toUrlParams({ lattlong: [lat, long].join(',') })}`);
    }
    async locationId(id) {
        return this.raw.getJSON(`/location/${id}`);
    }
}
exports.MetaWeather = MetaWeather;
