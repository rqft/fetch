import { Options } from "../constants";
import { Pariah } from "../pariah";
export declare module PxlAPI {
    enum Eyes {
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
    enum Flags {
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
    interface Gif {
        count?: number;
        delay?: number;
    }
    enum SnapchatFilters {
        DOG = "dog",
        DOG2 = "dog2",
        DOG3 = "dog3",
        PIG = "pig",
        FLOWERS = "flowers",
        CLOWN = "clown",
        RANDOM = "random"
    }
    enum SafeSearch {
        OFF = "off",
        MODERATE = "moderate",
        STRICT = "strict"
    }
    interface ImageSearchMeta {
        url: string;
        title: string;
        location: string;
    }
    enum KlineInterval {
        ONE_MINUTE = "1m",
        THREE_MINUTES = "3m",
        FIVE_MINUTES = "5m",
        FIFTEN_MINUTES = "15m",
        HALF_HOUR = "30m",
        ONE_HOUR = "1h",
        TWO_HOURS = "2h",
        FOUR_HOURS = "4h",
        SIX_HOURS = "6h",
        EIGHT_HOURS = "8h",
        TWELVE_HOURS = "12h",
        ONE_DAY = "1d",
        THREE_DAYS = "3d",
        ONE_WEEK = "1w",
        ONE_MONTH = "1mo"
    }
    enum ScreenshotBrowser {
        CHROMIUM = "chromium",
        FIREFOX = "firefox"
    }
    enum ScreenshotTheme {
        DARK = "dark",
        LIGHT = "light"
    }
    interface ScreenshotOptions {
        device?: string;
        locale?: string;
        blocklist?: Array<string>;
        defaultBlocklist?: boolean;
        browser?: ScreenshotBrowser;
        theme?: ScreenshotTheme;
        timeout?: number;
        fullPage?: boolean;
    }
    interface WebSearchResult {
        results: Array<WebSearchResultItem>;
        news: Array<WebSearchNewsItem>;
        images: Array<string>;
        relatedQueries: Array<string>;
    }
    interface WebSearchResultItem {
        title: string;
        description: string;
        url: string;
    }
    interface WebSearchNewsItem {
        title: string;
        source: string;
        image?: string;
        url: string;
    }
    const Url: URL;
    class API extends Pariah {
        static: typeof API;
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
        klines(ticks: string | Array<Array<string>>, interval: KlineInterval | undefined, limit: number | undefined, pair: {
            baseAsset?: string;
            quoteAsset?: string;
        }): Promise<ArrayBuffer>;
        static KLINES_MIN: number;
        static KLINES_MAX: number;
        screenshot(url: string, options?: ScreenshotOptions): Promise<ArrayBuffer>;
        webSearch(query: string, safeSearch: SafeSearch): Promise<Array<WebSearchResult>>;
        static WEB_SEARCH_MIN_LENGTH: number;
        static WEB_SEARCH_MAX_LENGTH: number;
    }
}
