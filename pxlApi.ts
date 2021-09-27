import { Base, BaseExtension } from "./base";
export type EyesType =
  | "big"
  | "black"
  | "bloodshot"
  | "blue"
  | "default"
  | "googly"
  | "green"
  | "horror"
  | "illuminati"
  | "money"
  | "pink"
  | "red"
  | "small"
  | "spinner"
  | "spongebob"
  | "white"
  | "yellow"
  | "random";
export type FlagType =
  | "asexual"
  | "aromantic"
  | "bisexual"
  | "pansexual"
  | "gay"
  | "lesbian"
  | "trans"
  | "nonbinary"
  | "genderfluid"
  | "genderqueer"
  | "polysexual"
  | "austria"
  | "belgium"
  | "botswana"
  | "bulgaria"
  | "ivory"
  | "estonia"
  | "france"
  | "gabon"
  | "gambia"
  | "germany"
  | "guinea"
  | "hungary"
  | "indonesia"
  | "ireland"
  | "italy"
  | "luxembourg"
  | "monaco"
  | "nigeria"
  | "poland"
  | "russia"
  | "romania"
  | "sierraleone"
  | "thailand"
  | "ukraine"
  | "yemen";
export type SnapchatFilterType =
  | "dog"
  | "dog2"
  | "dog3"
  | "pig"
  | "flowers"
  | "clown"
  | "random";
export type SafeSearchTypes = "off" | "moderate" | "strict";
export interface MosaicOptions {
  groupSize?: number;
  scale?: boolean;
}
export interface GlitchOptions {
  iterations?: number;
  amount?: number;
  gif?: boolean | GlitchGifOptions;
}
export interface GlitchGifOptions {
  count?: number;
  delay?: number;
}
export interface ImageScriptInject {
  [injection: string]: any;
}
export type ImageSearchResponse = Array<string>;
export interface ImageSearchMetaResponse {
  url: string;
  title: string;
  location: string;
}
export type KLinesInterval =
  | "1m"
  | "3m"
  | "5m"
  | "15m"
  | "30m"
  | "1h"
  | "2h"
  | "4h"
  | "6h"
  | "8h"
  | "12h"
  | "1d"
  | "3d"
  | "1w"
  | "1mo";
export type BrowserType = "chromium" | "firefox";
export type BrowserTheme = "dark" | "light";
export interface KLinesOptions {
  interval?: KLinesInterval;
  limit?: number;
  ticks?: Array<Array<number>>;
  pair?: KLinesPair;
}
export interface KLinesPair {
  baseAsset?: string;
  quoteAsset?: string;
}
export interface ScreenshotOptions {
  device?: string;
  locale?: string;
  blocklist?: Array<string>;
  defaultBlocklist?: boolean;
  browser?: BrowserType;
  theme?: BrowserTheme;
  timeout?: number;
  fullpage?: boolean;
}
export interface WebSearchResponse {
  results: Array<WebSearchResult>;
  news: Array<WebSearchNewsResult>;
  images: Array<string>;
  relatedQueries: Array<string>;
}
export interface WebSearchResult {
  title: string;
  description: string;
  url: string;
}
export interface WebSearchNewsResult {
  title: string;
  description: string;
  url: string;
  source: string;
  image?: string;
}

export class PxlApi {
  public readonly token: string;
  public raw: BaseExtension;
  constructor(token: string) {
    this.raw = new BaseExtension({
      baseUrl: "https://api.pxlapi.dev/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Application ${token}`,
      },
    });
    this.token = token;
  }
  body(body: any) {
    return { body: JSON.stringify(body) };
  }
  async ajit(images: Array<string>) {
    return this.raw.postArrayBuffer("ajit", {
      body: JSON.stringify({ images }),
    });
  }
  async emojimosaic(images: Array<string>, options: MosaicOptions = {}) {
    return this.raw.postArrayBuffer(
      "emojimosaic",
      this.body({ images, ...options })
    );
  }
  async eyes(images: Array<string>, type?: EyesType) {
    return this.raw.postArrayBuffer(`eyes/${type}`, this.body({ images }));
  }
  async flag(
    images: Array<string>,
    flag: FlagType = "gay",
    opacity: number = 128
  ) {
    return this.raw.postArrayBuffer(
      `flag/${flag}`,
      this.body({ images, opacity })
    );
  }
  async flash(images: Array<string>) {
    return this.raw.postArrayBuffer("flag", this.body({ images }));
  }
  async ganimal(images: Array<string>) {
    return this.raw.postArrayBuffer("ganimal", this.body({ images }));
  }
  async glitch(images: Array<string>, options: GlitchOptions = {}) {
    return this.raw.postArrayBuffer(
      "glitch",
      this.body({ images, ...options })
    );
  }
  async imagescript(
    code: string,
    inject: ImageScriptInject = {},
    version: string = "latest",
    timeout: number = 10000
  ) {
    return this.raw.postArrayBuffer(
      `imagescript/${version}`,
      this.body({ code, inject, timeout })
    );
  }
  async jpeg(images: Array<string>, quality: number = 1) {
    return this.raw.postArrayBuffer("jpeg", this.body({ images, quality }));
  }
  async lego(images: Array<string>, options: MosaicOptions) {
    return this.raw.postArrayBuffer("lego", this.body({ images, ...options }));
  }
  async snapchat(images: Array<string>, filter: SnapchatFilterType = "dog") {
    return this.raw.postArrayBuffer(
      `snapchat/${filter}`,
      this.body({ images })
    );
  }
  async sonic(text: string) {
    return this.raw.postArrayBuffer("sonic", this.body({ text }));
  }
  async thonkify(text: string) {
    return this.raw.postArrayBuffer("thonkify", this.body({ text }));
  }
  async imageSearch(
    query: string,
    safeSearch: SafeSearchTypes,
    meta: false
  ): Promise<ImageSearchResponse>;
  async imageSearch(
    query: string,
    safeSearch: SafeSearchTypes,
    meta: true
  ): Promise<Array<ImageSearchMetaResponse>>;

  async imageSearch(
    query: string,
    safeSearch: SafeSearchTypes = "strict",
    meta: boolean = false
  ): Promise<ImageSearchResponse | Array<ImageSearchMetaResponse>> {
    return this.raw.postJSON(
      "image_search",
      this.body({ query, safeSearch, meta })
    );
  }
  async klines(pair: string, options: KLinesOptions) {
    return this.raw.postArrayBuffer(
      `klines/${pair}`,
      this.body({ ...options })
    );
  }
  async screenshot(url: string, options: ScreenshotOptions) {
    return this.raw.postArrayBuffer(
      "screenshot",
      this.body({ url, ...options })
    );
  }
  async webSearch(
    query: string,
    safeSearch: SafeSearchTypes = "strict"
  ): Promise<WebSearchResponse> {
    return this.raw.postJSON("web_search", this.body({ query, safeSearch }));
  }
}
