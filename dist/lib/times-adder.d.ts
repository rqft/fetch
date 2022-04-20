import { Pariah } from "../pariah";
export declare namespace TimesAdder {
    type Time = `${number}:${number}:${number}` | `${number}:${number}` | `${number}`;
    class API extends Pariah {
        constructor();
        times(times: Array<Time>): Promise<import("node-fetch").Response>;
    }
}
