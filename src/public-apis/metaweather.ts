import { Pariah } from "../lib/base";

export class MetaWeather {
    public raw: Pariah;
    constructor() {
        this.raw = new Pariah({ baseUrl: "https://www.metaweather.com/api/" });
    }
    async locationSearch(query: string) {
        return this.raw.getJSON<Array<Location>>(`/location/search${this.raw.toUrlParams({ query })}`)
    }
    async locationSearchLatLong(lat: number, long: string) {
        return this.raw.getJSON<Array<Location>>(`/location/search${this.raw.toUrlParams({ lattlong: [lat, long].join(',') })}`)
    }
    async locationId(id: number) {
        return this.raw.getJSON<Array<Location>>(`/location/${id}`)
    }
    
}