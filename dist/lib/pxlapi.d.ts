import { Options } from "../constants";
import { Pariah } from "../pariah";
export declare enum Eyes {
    BIG = "big",
    BLACK = "black",
    BLOODSHOT = "bloodshot",
    BLUE = "blue",
    DEFAULT = "default",
    GOOGLY = "googly",
    GREEN = "green",
    HORROR = "horror",
    ILLUMINATI = "illuminati",
    MONEY = "money",
    PINK = "pink",
    RED = "red",
    SMALL = "small",
    SPINNER = "spinner",
    SPONGEBOB = "spongebob",
    WHITE = "white",
    YELLOW = "yellow",
    RANDOM = "random"
}
export declare enum Flags {
    ASEXUAL = "asexual",
    AROMANTIC = "aromantic",
    BISEXUAL = "bisexual",
    PANSEXUAL = "pansexual",
    GAY = "gay",
    LESBIAN = "lesbian",
    TRANSGENDER = "transgender",
    NONBINARY = "nonbinary",
    GENDER_FLUID = "genderfluid",
    GENDER_QUEER = "genderqueer",
    POLYSEXUAL = "polysexual",
    AUSTRIA = "austria",
    BELGIUM = "belgium",
    BOTSWANA = "botswana",
    BULGARIA = "bulgaria",
    IVORY = "ivory",
    ESTONIA = "estonia",
    FRANCE = "france",
    GABON = "gabon",
    GAMBIA = "gambia",
    GERMANY = "germany",
    GUINEA = "guinea",
    HUNGARY = "hungary",
    INDONESIA = "indonesia",
    IRELANE = "ireland",
    ITALY = "italy",
    LUXEMBOURG = "luxembourg",
    MONACO = "monaco",
    NIGERIA = "nigeria",
    POLAND = "poland",
    RUSSIA = "russia",
    ROMANIA = "romania",
    SIERRA_LEONE = "sierraleone",
    THAILAND = "thailand",
    UKRAINE = "ukraine",
    YEMEN = "yemen"
}
export interface Gif {
    count?: number;
    delay?: number;
}
export declare enum SnapchatFilters {
    DOG = "dog",
    DOG2 = "dog2",
    DOG3 = "dog3",
    PIG = "pig",
    FLOWERS = "flowers",
    CLOWN = "clown",
    RANDOM = "random"
}
export declare enum SafeSearch {
    OFF = "off",
    MODERATE = "moderate",
    STRICT = "strict"
}
export interface ImageSearchMeta {
    url: string;
    title: string;
    location: string;
}
export declare const PXLAPI_URL = "https://api.pxlapi.dev/";
export declare class PxlAPI extends Pariah {
    static: typeof PxlAPI;
    constructor(token: string);
    protected body(data: Array<string>, other?: any, outer?: Options): Options;
    ajit(data: Array<string>): Promise<ArrayBuffer>;
    emojiMosaic(data: Array<string>, groupSize?: number, scale?: boolean): Promise<ArrayBuffer>;
    eyes(data: Array<string>, type?: Eyes, allowedTypes?: Array<Eyes>): Promise<ArrayBuffer>;
    flag(data: Array<string>, flag?: Flags, opacity?: number): Promise<ArrayBuffer>;
    static FLAG_OPACITY_MIN: number;
    static FLAG_OPACITY_MAX: number;
    flash(data: Array<string>): Promise<ArrayBuffer>;
    glitch(data: Array<string>, iterations?: number, amount?: number, gif?: boolean | Gif): Promise<ArrayBuffer>;
    static GLITCH_MIN: number;
    static GLITCH_MAX: number;
    static GLITCH_GIF_MIN: number;
    static GLITCH_GIF_MAX: number;
    static GLITCH_GIF_DELAY_MIN: number;
    static GLITCH_GIF_DELAY_MAX: number;
    imagescriptVersions(): Promise<Array<string>>;
    imagescript(code: string, version?: string | "latest", inject?: any, timeout?: number): Promise<ArrayBuffer>;
    static IMAGESCRIPT_MIN_TIMEOUT: number;
    static IMAGESCRIPT_MAX_TIMEOUT: number;
    jpeg(data: Array<string>, quality?: number): Promise<ArrayBuffer>;
    static JPEG_QUALITY_MIN: number;
    static JPEG_QUALITY_MAX: number;
    lego(data: Array<string>, groupSize?: number, scale?: boolean): Promise<ArrayBuffer>;
    snapchat(data: Array<string>, filter?: SnapchatFilters, filters?: Array<SnapchatFilters>): Promise<ArrayBuffer>;
    sonic(text: string): Promise<ArrayBuffer>;
    thonkify(text: string): Promise<ArrayBuffer>;
    imageSearch(query: string, safeSearch: SafeSearch, meta: true): Promise<Array<ImageSearchMeta>>;
    imageSearch(query: string, safeSearch: SafeSearch, meta: false): Promise<Array<string>>;
}
