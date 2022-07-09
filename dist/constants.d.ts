/// <reference types="node" />
import { Agent } from "http";
import { Headers, RequestRedirect } from "node-fetch";
import { AbortSignal } from "node-fetch/externals";
export declare enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    CONNECT = "CONNECT",
    TRACE = "TRACE"
}
export declare type Options = {
    method?: Methods;
    body?: any;
    headers?: Record<string, string> | Array<Array<string>> | Headers;
    redirect?: RequestRedirect;
    signal?: AbortSignal;
    agent?: Agent | ((parsedUrl: URL) => Agent);
    compress?: boolean;
    follow?: number;
    size?: number;
    timeout?: number;
};
export declare const DEFAULT_OPTIONS: Options;
