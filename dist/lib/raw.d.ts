import { RequestInfo, RequestInit } from 'node-fetch';
export declare class Raw {
    request(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    delete(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    get(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    head(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    options(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    patch(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    post(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
    put(info: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
}
