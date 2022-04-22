import { Options } from "../constants";
import { Pariah } from "../pariah";
export module PxlAPI {
    export enum Eyes {
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
        RANDOM = "random",
    }
    export enum Flags {
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
        YEMEN = "yemen",
    }
    export interface Gif {
        count?: number;
        delay?: number;
    }
    export enum SnapchatFilters {
        DOG = "dog",
        DOG2 = "dog2",
        DOG3 = "dog3",
        PIG = "pig",
        FLOWERS = "flowers",
        CLOWN = "clown",
        RANDOM = "random",
    }
    export enum SafeSearch {
        OFF = "off",
        MODERATE = "moderate",
        STRICT = "strict",
    }
    export interface ImageSearchMeta {
        url: string;
        title: string;
        location: string;
    }
    export enum KlineInterval {
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
        ONE_MONTH = "1mo",
    }
    export enum ScreenshotBrowser {
        CHROMIUM = "chromium",
        FIREFOX = "firefox",
    }
    export enum ScreenshotTheme {
        DARK = "dark",
        LIGHT = "light",
    }
    export interface ScreenshotOptions {
        device?: string;
        locale?: string;
        blocklist?: Array<string>;
        defaultBlocklist?: boolean;
        browser?: ScreenshotBrowser;
        theme?: ScreenshotTheme;
        timeout?: number;
        fullPage?: boolean;
    }
    export interface WebSearchResult {
        results: Array<WebSearchResultItem>;
        news: Array<WebSearchNewsItem>;
        images: Array<string>;
        relatedQueries: Array<string>;
    }
    export interface WebSearchResultItem {
        title: string;
        description: string;
        url: string;
    }
    export interface WebSearchNewsItem {
        title: string;
        source: string;
        image?: string;
        url: string;
    }
    export const Url = new URL("https://api.pxlapi.dev/");
    export class API extends Pariah {
        public static: typeof API = API;
        constructor(token: string) {
            super(Url, { headers: { Authorization: `Bearer ${token}` } });
        }
        protected body(
            data: Array<string>,
            other: any = {},
            outer: Options = {}
        ): Options {
            return Object.assign(
                {
                    body: JSON.stringify(
                        Object.assign({ images: data }, other)
                    ),
                },
                outer
            );
        }
        public async ajit(data: Array<string>): Promise<ArrayBuffer> {
            return this.post.arrayBuffer("/ajit", this.body(data));
        }
        public async emojiMosaic(
            data: Array<string>,
            groupSize: number = 6,
            scale: boolean = false
        ): Promise<ArrayBuffer> {
            return this.post.arrayBuffer(
                "/emojimosaic",
                this.body(data, { groupSize, scale })
            );
        }
        public async eyes(
            data: Array<string>,
            type: Eyes = Eyes.DEFAULT,
            allowedTypes?: Array<Eyes>
        ): Promise<ArrayBuffer> {
            return this.post.arrayBuffer(
                `/eyes/${type}`,
                this.body(data, { allowedTypes })
            );
        }

        public async flag(
            data: Array<string>,
            flag: Flags = Flags.GAY,
            opacity: number = 128
        ): Promise<ArrayBuffer> {
            if (
                opacity > this.static.FLAG_OPACITY_MAX ||
                opacity < this.static.FLAG_OPACITY_MIN
            ) {
                throw new RangeError(
                    `Flag Opacity must be between ${this.static.FLAG_OPACITY_MIN} and ${this.static.FLAG_OPACITY_MAX}`
                );
            }
            return this.post.arrayBuffer(`/flag/${flag}`, this.body(data));
        }

        static FLAG_OPACITY_MIN = 64;
        static FLAG_OPACITY_MAX = 192;

        public async flash(data: Array<string>) {
            return this.post.arrayBuffer("/flash", this.body(data));
        }

        public async glitch(
            data: Array<string>,
            iterations: number = 10,
            amount: number = 5,
            gif: boolean | Gif = false
        ) {
            if (
                iterations > this.static.GLITCH_MAX ||
                iterations < this.static.GLITCH_MIN
            ) {
                throw new RangeError(
                    `Iterations must be between ${this.static.GLITCH_MAX} and ${this.static.GLITCH_MIN}`
                );
            }
            if (
                amount > this.static.GLITCH_MAX ||
                amount < this.static.GLITCH_MIN
            ) {
                throw new RangeError(
                    `Amount must be between ${this.static.GLITCH_MAX} and ${this.static.GLITCH_MIN}`
                );
            }
            if (typeof gif === "object") {
                if (gif.count) {
                    if (
                        gif.count > this.static.GLITCH_GIF_MAX ||
                        gif.count < this.static.GLITCH_GIF_MIN
                    ) {
                        throw new RangeError(
                            `Gif Count must be between ${this.static.GLITCH_GIF_MIN} and ${this.static.GLITCH_GIF_MAX}`
                        );
                    }
                }
                if (gif.delay) {
                    if (
                        gif.delay > this.static.GLITCH_GIF_MAX ||
                        gif.delay < this.static.GLITCH_GIF_MIN
                    ) {
                        throw new RangeError(
                            `Gif Delay must be between ${this.static.GLITCH_GIF_MIN} and ${this.static.GLITCH_GIF_MAX}`
                        );
                    }
                }
            }
            return this.post.arrayBuffer(
                "/glitch",
                this.body(data, { iterations, amount, gif })
            );
        }

        static GLITCH_MIN = 1;
        static GLITCH_MAX = 100;
        static GLITCH_GIF_MIN = 1;
        static GLITCH_GIF_MAX = 30;
        static GLITCH_GIF_DELAY_MIN = 10;
        static GLITCH_GIF_DELAY_MAX = 1000;

        public async imagescriptVersions(): Promise<Array<string>> {
            return this.get.json<Array<string>>("/imagescript/versions");
        }

        public async imagescript(
            code: string,
            version: string | "latest" = "latest",
            inject: any = {},
            timeout: number = 10000
        ) {
            return this.post.arrayBuffer(
                `/imagescript/${version}`,
                this.body([], { code, inject, timeout })
            );
        }

        static IMAGESCRIPT_MIN_TIMEOUT = 1000;
        static IMAGESCRIPT_MAX_TIMEOUT = 20000;

        public async jpeg(
            data: Array<string>,
            quality: number = 1
        ): Promise<ArrayBuffer> {
            if (
                quality > this.static.JPEG_QUALITY_MAX ||
                quality < this.static.JPEG_QUALITY_MIN
            ) {
                throw new RangeError(
                    `Quality must be between ${this.static.JPEG_QUALITY_MIN} and ${this.static.JPEG_QUALITY_MAX}`
                );
            }
            return this.post.arrayBuffer("/jpeg", this.body(data, { quality }));
        }

        static JPEG_QUALITY_MIN = 1;
        static JPEG_QUALITY_MAX = 100;

        public async lego(
            data: Array<string>,
            groupSize: number = 6,
            scale: boolean = false
        ): Promise<ArrayBuffer> {
            return this.post.arrayBuffer(
                "/lego",
                this.body(data, { groupSize, scale })
            );
        }

        public async snapchat(
            data: Array<string>,
            filter: SnapchatFilters = SnapchatFilters.DOG,
            filters: Array<SnapchatFilters> = []
        ): Promise<ArrayBuffer> {
            return this.post.arrayBuffer(
                `/snapchat/${filter}`,
                this.body(data, { filters })
            );
        }

        public async sonic(text: string): Promise<ArrayBuffer> {
            return this.post.arrayBuffer("/sonic", this.body([], { text }));
        }

        public async thonkify(text: string): Promise<ArrayBuffer> {
            return this.post.arrayBuffer("/thonkify", this.body([], { text }));
        }
        public async imageSearch(
            query: string,
            safeSearch: SafeSearch,
            meta: true
        ): Promise<Array<ImageSearchMeta>>;
        public async imageSearch(
            query: string,
            safeSearch: SafeSearch,
            meta: false
        ): Promise<Array<string>>;

        public async imageSearch(
            query: string,
            safeSearch: SafeSearch = SafeSearch.STRICT,
            meta: boolean = false
        ) {
            return this.get.json<Array<ImageSearchMeta | string>>(
                `/image_search`,
                this.body([], { query, safeSearch, meta })
            );
        }

        public async klines(
            ticks: string | Array<Array<string>>,
            interval: KlineInterval = KlineInterval.ONE_MINUTE,
            limit: number = 90,
            pair: { baseAsset?: string; quoteAsset?: string }
        ): Promise<ArrayBuffer> {
            if (
                limit > this.static.KLINES_MAX ||
                limit < this.static.KLINES_MIN
            ) {
                throw new RangeError(
                    `Limit must be between ${this.static.KLINES_MIN} and ${this.static.KLINES_MAX}`
                );
            }

            return this.post.arrayBuffer(
                `/klines/${typeof ticks === "string" ? ticks : ""}`,
                this.body([], {
                    interval,
                    limit,
                    pair,
                    ticks: typeof ticks === "string" ? undefined : ticks,
                })
            );
        }

        static KLINES_MIN = 0;
        static KLINES_MAX = 1000;

        public async screenshot(
            url: string,
            options: ScreenshotOptions = {}
        ): Promise<ArrayBuffer> {
            return this.post.arrayBuffer(
                "/screenshot",
                this.body([], Object.assign({ url }, options))
            );
        }

        public async webSearch(
            query: string,
            safeSearch: SafeSearch
        ): Promise<Array<WebSearchResult>> {
            if (
                query.length > this.static.WEB_SEARCH_MAX_LENGTH ||
                query.length < this.static.WEB_SEARCH_MIN_LENGTH
            ) {
                throw new RangeError(
                    `Query length must be between ${this.static.WEB_SEARCH_MIN_LENGTH} and ${this.static.WEB_SEARCH_MAX_LENGTH}`
                );
            }
            return this.get.json<Array<WebSearchResult>>(
                "/web_search",
                this.body([], { query, safeSearch })
            );
        }

        static WEB_SEARCH_MIN_LENGTH = 1;
        static WEB_SEARCH_MAX_LENGTH = 128;
    }
}
