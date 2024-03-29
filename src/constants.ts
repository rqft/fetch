import { Agent } from 'http';
import { RequestRedirect } from 'node-fetch';
import { AbortSignal } from 'node-fetch/externals';

export enum HTTPVerbs {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    CONNECT = 'CONNECT',
    TRACE = 'TRACE',
    COPY = 'COPY',
    LINK = 'LINK',
    UNLINK = 'UNLINK',
    PURGE = 'PURGE',
    LOCK = 'LOCK',
    UNLOCK = 'UNLOCK',
    PROPFIND = 'PROPFIND',
    VIEW = 'VIEW',
}

export type Options = {
    method?: HTTPVerbs;
    body?: unknown;
    headers?: Record<string, unknown>;
    redirect?: RequestRedirect;
    signal?: AbortSignal;
    agent?: Agent | ((parsedUrl: URL) => Agent);
    compress?: boolean;
    follow?: number;
    size?: number;
    timeout?: number;
};

export const DefaultOptions: Options = {
  method: HTTPVerbs.GET,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': '@rqft/fetch',
  },
};

export type UrlParam<T> = T extends `:${string}` ? T : never;
export type UrlParams<T extends string> =
    T extends `/${infer Endpoint}/${infer Rest}`
        ? [UrlParam<Endpoint>, ...UrlParams<`/${Rest}`>]
        : T extends `/${infer Endpoint}`
        ? [UrlParam<Endpoint>]
        : [];
export type Params<T extends string> = {
    [K in UrlParams<T>[number]]: unknown;
} & Partial<Record<string, unknown>>;

export type PascalToCamel<T extends string> = T extends `${infer U}${infer R}`
    ? `${Lowercase<U>}${R}`
    : T;
