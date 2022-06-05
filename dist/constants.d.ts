import { RequestInit } from "node-fetch";
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
export declare type Options = RequestInit & {
    method?: Methods;
};
export declare const DEFAULT_OPTIONS: Options;
