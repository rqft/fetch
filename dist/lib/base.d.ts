import { RequestInit } from 'node-fetch';
import { Raw } from "./raw";
export interface ClientOptions {
    baseUrl: string | URL;
    headers?: HeadersInit;
}
export declare const defaultClientOptions: Omit<ClientOptions, "baseUrl">;
export declare class Base {
    readonly baseUrl: URL;
    headers: HeadersInit;
    raw: Raw;
    constructor(options: ClientOptions);
    url(endpoint: string): string;
    request(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    get(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    post(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    patch(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    delete(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    head(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    options(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
    put(endpoint: string, init?: RequestInit): Promise<import("node-fetch").Response>;
}
export declare class Pariah extends Base {
    constructor(options: ClientOptions);
    toUrlParams(object: any): string;
    requestJSON(endpoint: string, init?: RequestInit): Promise<unknown>;
    getJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    postJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    patchJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    deleteJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    headJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    optionsJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    putJSON<T>(endpoint: string, init?: RequestInit): Promise<T>;
    requestText(endpoint: string, init?: RequestInit): Promise<string>;
    getText(endpoint: string, init?: RequestInit): Promise<string>;
    postText(endpoint: string, init?: RequestInit): Promise<string>;
    patchText(endpoint: string, init?: RequestInit): Promise<string>;
    deleteText(endpoint: string, init?: RequestInit): Promise<string>;
    headText(endpoint: string, init?: RequestInit): Promise<string>;
    optionsText(endpoint: string, init?: RequestInit): Promise<string>;
    putText(endpoint: string, init?: RequestInit): Promise<string>;
    requestBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    getBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    postBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    patchBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    deleteBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    headBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    optionsBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    putBlob(endpoint: string, init?: RequestInit): Promise<Blob>;
    requestArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    getArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    postArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    patchArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    deleteArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    headArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    optionsArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
    putArrayBuffer(endpoint: string, init?: RequestInit): Promise<ArrayBuffer>;
}
