import { Data } from "../data";
import { Pariah } from "../pariah";
export declare module Dictionary {
    const Url: URL;
    interface Entry {
        word: string;
        phonetic: string;
        phonetics: Array<Phonetic>;
        meanings: Array<Meaning>;
        license: License;
        sourceUrls: Array<string>;
    }
    interface Phonetic {
        text?: string;
        audio: string | "";
        sourceUrl?: string;
        license?: License;
    }
    interface Meaning {
        partOfSpeech: string;
        definitions: Array<Definition>;
        synonyms: Array<string>;
        antonyms: Array<string>;
    }
    interface Definition {
        definition: string;
        synonyms: Array<string>;
        antonyms: Array<string>;
        example: string;
    }
    interface License {
        name: string;
        url: string;
    }
    interface Err {
        title: string;
        message: string;
        resolution: string;
    }
    class API extends Pariah {
        readonly version: number;
        readonly language: string;
        constructor(version?: number, language?: string);
        entries(word: string): Promise<Data<Array<Entry> | Err>>;
    }
}
