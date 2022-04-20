import { Pariah } from "../pariah";

export namespace TimesAdder {
    export type Time =
        | `${number}:${number}:${number}`
        | `${number}:${number}`
        | `${number}`;
    export class API extends Pariah {
        constructor() {
            super("https://times-adder.herokuapp.com/api/v1/");
        }
        public times(times: Array<Time>) {
            return this.post(
                "times",
                {},
                {
                    body: JSON.stringify({ data: times }),
                }
            );
        }
    }
}
