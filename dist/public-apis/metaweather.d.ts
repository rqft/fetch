import { Pariah } from "../lib/base";
export declare class MetaWeather {
    raw: Pariah;
    constructor();
    locationSearch(query: string): Promise<Location[]>;
    locationSearchLatLong(lat: number, long: string): Promise<Location[]>;
    locationId(id: number): Promise<Location[]>;
}
