import { Agent } from "http";
import { Headers, RequestRedirect } from "node-fetch";
import { AbortSignal } from "node-fetch/externals";

export enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    CONNECT = "CONNECT",
    TRACE = "TRACE",
}

export type Options = {
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

export const DEFAULT_OPTIONS: Options = {
    method: Methods.GET,
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "Pariah",
    },
};
