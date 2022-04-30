"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PxlAPI = void 0;
const pariah_1 = require("../pariah");
var PxlAPI;
(function (PxlAPI) {
    let Eyes;
    (function (Eyes) {
        Eyes["BIG"] = "big";
        Eyes["BLACK"] = "black";
        Eyes["BLOODSHOT"] = "bloodshot";
        Eyes["BLUE"] = "blue";
        Eyes["DEFAULT"] = "default";
        Eyes["GOOGLY"] = "googly";
        Eyes["GREEN"] = "green";
        Eyes["HORROR"] = "horror";
        Eyes["ILLUMINATI"] = "illuminati";
        Eyes["MONEY"] = "money";
        Eyes["PINK"] = "pink";
        Eyes["RED"] = "red";
        Eyes["SMALL"] = "small";
        Eyes["SPINNER"] = "spinner";
        Eyes["SPONGEBOB"] = "spongebob";
        Eyes["WHITE"] = "white";
        Eyes["YELLOW"] = "yellow";
        Eyes["RANDOM"] = "random";
    })(Eyes = PxlAPI.Eyes || (PxlAPI.Eyes = {}));
    let Flags;
    (function (Flags) {
        Flags["ASEXUAL"] = "asexual";
        Flags["AROMANTIC"] = "aromantic";
        Flags["BISEXUAL"] = "bisexual";
        Flags["PANSEXUAL"] = "pansexual";
        Flags["GAY"] = "gay";
        Flags["LESBIAN"] = "lesbian";
        Flags["TRANSGENDER"] = "transgender";
        Flags["NONBINARY"] = "nonbinary";
        Flags["GENDER_FLUID"] = "genderfluid";
        Flags["GENDER_QUEER"] = "genderqueer";
        Flags["POLYSEXUAL"] = "polysexual";
        Flags["AUSTRIA"] = "austria";
        Flags["BELGIUM"] = "belgium";
        Flags["BOTSWANA"] = "botswana";
        Flags["BULGARIA"] = "bulgaria";
        Flags["IVORY"] = "ivory";
        Flags["ESTONIA"] = "estonia";
        Flags["FRANCE"] = "france";
        Flags["GABON"] = "gabon";
        Flags["GAMBIA"] = "gambia";
        Flags["GERMANY"] = "germany";
        Flags["GUINEA"] = "guinea";
        Flags["HUNGARY"] = "hungary";
        Flags["INDONESIA"] = "indonesia";
        Flags["IRELANE"] = "ireland";
        Flags["ITALY"] = "italy";
        Flags["LUXEMBOURG"] = "luxembourg";
        Flags["MONACO"] = "monaco";
        Flags["NIGERIA"] = "nigeria";
        Flags["POLAND"] = "poland";
        Flags["RUSSIA"] = "russia";
        Flags["ROMANIA"] = "romania";
        Flags["SIERRA_LEONE"] = "sierraleone";
        Flags["THAILAND"] = "thailand";
        Flags["UKRAINE"] = "ukraine";
        Flags["YEMEN"] = "yemen";
    })(Flags = PxlAPI.Flags || (PxlAPI.Flags = {}));
    let SnapchatFilters;
    (function (SnapchatFilters) {
        SnapchatFilters["DOG"] = "dog";
        SnapchatFilters["DOG2"] = "dog2";
        SnapchatFilters["DOG3"] = "dog3";
        SnapchatFilters["PIG"] = "pig";
        SnapchatFilters["FLOWERS"] = "flowers";
        SnapchatFilters["CLOWN"] = "clown";
        SnapchatFilters["RANDOM"] = "random";
    })(SnapchatFilters = PxlAPI.SnapchatFilters || (PxlAPI.SnapchatFilters = {}));
    let SafeSearch;
    (function (SafeSearch) {
        SafeSearch["OFF"] = "off";
        SafeSearch["MODERATE"] = "moderate";
        SafeSearch["STRICT"] = "strict";
    })(SafeSearch = PxlAPI.SafeSearch || (PxlAPI.SafeSearch = {}));
    let KlineInterval;
    (function (KlineInterval) {
        KlineInterval["ONE_MINUTE"] = "1m";
        KlineInterval["THREE_MINUTES"] = "3m";
        KlineInterval["FIVE_MINUTES"] = "5m";
        KlineInterval["FIFTEN_MINUTES"] = "15m";
        KlineInterval["HALF_HOUR"] = "30m";
        KlineInterval["ONE_HOUR"] = "1h";
        KlineInterval["TWO_HOURS"] = "2h";
        KlineInterval["FOUR_HOURS"] = "4h";
        KlineInterval["SIX_HOURS"] = "6h";
        KlineInterval["EIGHT_HOURS"] = "8h";
        KlineInterval["TWELVE_HOURS"] = "12h";
        KlineInterval["ONE_DAY"] = "1d";
        KlineInterval["THREE_DAYS"] = "3d";
        KlineInterval["ONE_WEEK"] = "1w";
        KlineInterval["ONE_MONTH"] = "1mo";
    })(KlineInterval = PxlAPI.KlineInterval || (PxlAPI.KlineInterval = {}));
    let ScreenshotBrowser;
    (function (ScreenshotBrowser) {
        ScreenshotBrowser["CHROMIUM"] = "chromium";
        ScreenshotBrowser["FIREFOX"] = "firefox";
    })(ScreenshotBrowser = PxlAPI.ScreenshotBrowser || (PxlAPI.ScreenshotBrowser = {}));
    let ScreenshotTheme;
    (function (ScreenshotTheme) {
        ScreenshotTheme["DARK"] = "dark";
        ScreenshotTheme["LIGHT"] = "light";
    })(ScreenshotTheme = PxlAPI.ScreenshotTheme || (PxlAPI.ScreenshotTheme = {}));
    PxlAPI.Url = new URL("https://api.pxlapi.dev/");
    class API extends pariah_1.Pariah {
        static = API;
        constructor(token) {
            super(PxlAPI.Url, {
                headers: {
                    Authorization: `Application ${token}`,
                    "Content-Type": "application/json",
                },
            });
        }
        body(data, other = {}, outer = {}) {
            return Object.assign(this._init, {
                body: JSON.stringify(Object.assign({ images: data }, other)),
            }, outer);
        }
        async ajit(data) {
            return this.post.arrayBuffer("/ajit", {}, this.body(data));
        }
        async emojiMosaic(data, groupSize = 6, scale = false) {
            return this.post.arrayBuffer("/emojimosaic", {}, this.body(data, { groupSize, scale }));
        }
        async eyes(data, type = Eyes.DEFAULT, allowedTypes) {
            return this.post.arrayBuffer(`/eyes/${type}`, {}, this.body(data, { allowedTypes }));
        }
        async flag(data, flag = Flags.GAY, opacity = 128) {
            if (opacity > this.static.FLAG_OPACITY_MAX ||
                opacity < this.static.FLAG_OPACITY_MIN) {
                throw new RangeError(`Flag Opacity must be between ${this.static.FLAG_OPACITY_MIN} and ${this.static.FLAG_OPACITY_MAX}`);
            }
            return this.post.arrayBuffer(`/flag/${flag}`, {}, this.body(data));
        }
        static FLAG_OPACITY_MIN = 64;
        static FLAG_OPACITY_MAX = 192;
        async flash(data) {
            return this.post.arrayBuffer("/flash", {}, this.body(data));
        }
        async glitch(data, iterations = 10, amount = 5, gif = false) {
            if (iterations > this.static.GLITCH_MAX ||
                iterations < this.static.GLITCH_MIN) {
                throw new RangeError(`Iterations must be between ${this.static.GLITCH_MAX} and ${this.static.GLITCH_MIN}`);
            }
            if (amount > this.static.GLITCH_MAX ||
                amount < this.static.GLITCH_MIN) {
                throw new RangeError(`Amount must be between ${this.static.GLITCH_MAX} and ${this.static.GLITCH_MIN}`);
            }
            if (typeof gif === "object") {
                if (gif.count) {
                    if (gif.count > this.static.GLITCH_GIF_MAX ||
                        gif.count < this.static.GLITCH_GIF_MIN) {
                        throw new RangeError(`Gif Count must be between ${this.static.GLITCH_GIF_MIN} and ${this.static.GLITCH_GIF_MAX}`);
                    }
                }
                if (gif.delay) {
                    if (gif.delay > this.static.GLITCH_GIF_MAX ||
                        gif.delay < this.static.GLITCH_GIF_MIN) {
                        throw new RangeError(`Gif Delay must be between ${this.static.GLITCH_GIF_MIN} and ${this.static.GLITCH_GIF_MAX}`);
                    }
                }
            }
            return this.post.arrayBuffer("/glitch", {}, this.body(data, { iterations, amount, gif }));
        }
        static GLITCH_MIN = 1;
        static GLITCH_MAX = 100;
        static GLITCH_GIF_MIN = 1;
        static GLITCH_GIF_MAX = 30;
        static GLITCH_GIF_DELAY_MIN = 10;
        static GLITCH_GIF_DELAY_MAX = 1000;
        async imagescriptVersions() {
            return this.get.json("/imagescript/versions");
        }
        async imagescript(code, version = "latest", inject = {}, timeout = 10000) {
            return this.post.arrayBuffer(`/imagescript/${version}`, {}, this.body([], { code, inject, timeout }));
        }
        static IMAGESCRIPT_MIN_TIMEOUT = 1000;
        static IMAGESCRIPT_MAX_TIMEOUT = 20000;
        async jpeg(data, quality = 1) {
            if (quality > this.static.JPEG_QUALITY_MAX ||
                quality < this.static.JPEG_QUALITY_MIN) {
                throw new RangeError(`Quality must be between ${this.static.JPEG_QUALITY_MIN} and ${this.static.JPEG_QUALITY_MAX}`);
            }
            return this.post.arrayBuffer("/jpeg", {}, this.body(data, { quality }));
        }
        static JPEG_QUALITY_MIN = 1;
        static JPEG_QUALITY_MAX = 100;
        async lego(data, groupSize = 6, scale = false) {
            return this.post.arrayBuffer("/lego", {}, this.body(data, { groupSize, scale }));
        }
        async snapchat(data, filter = SnapchatFilters.DOG, filters = []) {
            return this.post.arrayBuffer(`/snapchat/${filter}`, {}, this.body(data, { filters }));
        }
        async sonic(text) {
            return this.post.arrayBuffer("/sonic", {}, this.body([], { text }));
        }
        async thonkify(text) {
            return this.post.arrayBuffer("/thonkify", {}, this.body([], { text }));
        }
        async imageSearch(query, safeSearch = SafeSearch.STRICT, meta = false) {
            return this.post.json(`/image_search`, {}, this.body([], { query, safeSearch, meta }));
        }
        async klines(ticks, interval = KlineInterval.ONE_MINUTE, limit = 90, pair) {
            if (limit > this.static.KLINES_MAX ||
                limit < this.static.KLINES_MIN) {
                throw new RangeError(`Limit must be between ${this.static.KLINES_MIN} and ${this.static.KLINES_MAX}`);
            }
            return this.post.arrayBuffer(`/klines/${typeof ticks === "string" ? ticks : ""}`, {}, this.body([], {
                interval,
                limit,
                pair,
                ticks: typeof ticks === "string" ? undefined : ticks,
            }));
        }
        static KLINES_MIN = 0;
        static KLINES_MAX = 1000;
        async screenshot(url, options = {}) {
            return this.post.arrayBuffer("/screenshot", {}, this.body([], Object.assign({ url }, options)));
        }
        async webSearch(query, safeSearch) {
            if (query.length > this.static.WEB_SEARCH_MAX_LENGTH ||
                query.length < this.static.WEB_SEARCH_MIN_LENGTH) {
                throw new RangeError(`Query length must be between ${this.static.WEB_SEARCH_MIN_LENGTH} and ${this.static.WEB_SEARCH_MAX_LENGTH}`);
            }
            return this.get.json("/web_search", {}, this.body([], { query, safeSearch }));
        }
        static WEB_SEARCH_MIN_LENGTH = 1;
        static WEB_SEARCH_MAX_LENGTH = 128;
    }
    PxlAPI.API = API;
})(PxlAPI = exports.PxlAPI || (exports.PxlAPI = {}));
