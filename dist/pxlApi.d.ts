import { Pariah } from "./lib/base";
export declare type EyesType = "big" | "black" | "bloodshot" | "blue" | "default" | "googly" | "green" | "horror" | "illuminati" | "money" | "pink" | "red" | "small" | "spinner" | "spongebob" | "white" | "yellow" | "random";
export declare type FlagType = "asexual" | "aromantic" | "bisexual" | "pansexual" | "gay" | "lesbian" | "trans" | "nonbinary" | "genderfluid" | "genderqueer" | "polysexual" | "austria" | "belgium" | "botswana" | "bulgaria" | "ivory" | "estonia" | "france" | "gabon" | "gambia" | "germany" | "guinea" | "hungary" | "indonesia" | "ireland" | "italy" | "luxembourg" | "monaco" | "nigeria" | "poland" | "russia" | "romania" | "sierraleone" | "thailand" | "ukraine" | "yemen";
export declare type SnapchatFilterType = "dog" | "dog2" | "dog3" | "pig" | "flowers" | "clown" | "random";
export declare type SafeSearchTypes = "off" | "moderate" | "strict";
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
export declare type ImageSearchResponse = Array<string>;
export interface ImageSearchMetaResponse {
    url: string;
    title: string;
    location: string;
}
export declare type KLinesInterval = "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1mo";
export declare type BrowserType = "chromium" | "firefox";
export declare type BrowserTheme = "dark" | "light";
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
export declare class PxlApi {
    readonly token: string;
    raw: Pariah;
    constructor(token: string);
    body(body: any): {
        body: string;
    };
    ajit(images: Array<string>): Promise<ArrayBuffer>;
    emojimosaic(images: Array<string>, options?: MosaicOptions): Promise<ArrayBuffer>;
    eyes(images: Array<string>, type?: EyesType): Promise<ArrayBuffer>;
    flag(images: Array<string>, flag?: FlagType, opacity?: number): Promise<ArrayBuffer>;
    flash(images: Array<string>): Promise<ArrayBuffer>;
    ganimal(images: Array<string>): Promise<ArrayBuffer>;
    glitch(images: Array<string>, options?: GlitchOptions): Promise<ArrayBuffer>;
    imagescript(code: string, inject?: ImageScriptInject, version?: string, timeout?: number): Promise<ArrayBuffer>;
    jpeg(images: Array<string>, quality?: number): Promise<ArrayBuffer>;
    lego(images: Array<string>, options: MosaicOptions): Promise<ArrayBuffer>;
    snapchat(images: Array<string>, filter?: SnapchatFilterType): Promise<ArrayBuffer>;
    sonic(text: string): Promise<ArrayBuffer>;
    thonkify(text: string): Promise<ArrayBuffer>;
    imageSearch(query: string, safeSearch: SafeSearchTypes, meta: false): Promise<ImageSearchResponse>;
    imageSearch(query: string, safeSearch: SafeSearchTypes, meta: true): Promise<Array<ImageSearchMetaResponse>>;
    klines(pair: string, options: KLinesOptions): Promise<ArrayBuffer>;
    screenshot(url: string, options: ScreenshotOptions): Promise<ArrayBuffer>;
    webSearch(query: string, safeSearch?: SafeSearchTypes): Promise<WebSearchResponse>;
}
