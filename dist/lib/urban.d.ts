import { Pariah } from "../pariah";
export declare module Urban {
    const Url: URL;
    interface Definition {
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
    class API extends Pariah {
        define(term: string): Promise<import("..").Data<Definition[]>>;
    }
}
