/// <reference types="node" />
import { Agent } from "http";
import { Headers, RequestRedirect } from "node-fetch";
import { AbortSignal } from "node-fetch/externals";
export declare enum HTTPVerbs {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    CONNECT = "CONNECT",
    TRACE = "TRACE",
    COPY = "COPY",
    LINK = "LINK",
    UNLINK = "UNLINK",
    PURGE = "PURGE",
    LOCK = "LOCK",
    UNLOCK = "UNLOCK",
    PROPFIND = "PROPFIND",
    VIEW = "VIEW"
}
export declare type Options = {
    method?: HTTPVerbs;
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
export declare type UrlParam<T> = T extends `:${string}` ? T : never;
export declare type UrlParams<T extends string> = T extends `/${infer Endpoint}/${infer Rest}` ? [UrlParam<Endpoint>, ...UrlParams<`/${Rest}`>] : T extends `/${infer Endpoint}` ? [UrlParam<Endpoint>] : [];
export declare type Params<T extends string> = {
    [K in UrlParams<T>[number]]: any;
} & Record<string, any>;
