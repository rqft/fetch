import { Data } from "../data";
import { Pariah } from "../pariah";

export module Dictionary {
    export const Url = new URL("https://api.dictionaryapi.dev/api/");

    export interface Entry {
        word: string;
        phonetic: string;
        phonetics: Array<Phonetic>;
        meanings: Array<Meaning>;
        license: License;
        sourceUrls: Array<string>;
    }

    export interface Phonetic {
        text?: string;
        audio: string | "";
        sourceUrl?: string;
        license?: License;
    }

    export interface Meaning {
        partOfSpeech: string;
        definitions: Array<Definition>;
        synonyms: Array<string>;
        antonyms: Array<string>;
    }

    export interface Definition {
        definition: string;
        synonyms: Array<string>;
        antonyms: Array<string>;
        example: string;
    }

    export interface License {
        name: string;
        url: string;
    }

    export interface Err {
        title: string;
        message: string;
        resolution: string;
    }

    export class API extends Pariah {
        public readonly version: number;
        public readonly language: string;
        constructor(version: number = 2, language: string = "en") {
            super(Url);

            this.version = version;
            this.language = language;
        }

        public async entries(word: string): Promise<Data<Array<Entry> | Err>> {
            return await this.get.json<Array<Entry> | Err>(
                "/v:version/entries/:language/:word",
                {
                    ":version": this.version,
                    ":language": this.language,
                    ":word": word,
                }
            );
        }
    }
}
