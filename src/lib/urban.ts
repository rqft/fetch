import { Pariah } from "../pariah";

export module Urban {
    export const Url = new URL("https://api.urbandictionary.com/v0");

    export interface Definition {
        definition: string;
        permalink: string;
        thumbs_up: number;
        sound_urls: Array<string>;
        author: string;
        word: string;
        defid: number;
        current_vote: string;
        written_on: string;
        example: string;
        thumbs_down: number;
    }

    export interface List {
        list: Array<Definition>;
    }

    export class API extends Pariah {
        constructor() {
            super(Url);
        }
        public async define(term: string) {
            return await this.get.json<List>("/define", { term });
        }
    }
}
