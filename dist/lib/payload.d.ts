/// <reference types="node" />
/// <reference types="node" />
import { BaseCollection } from '@rqft/utils';
import { Blob, Request, Response } from 'node-fetch';
import { inspect } from 'util';
export declare class Payload<T> {
    readonly request: Request;
    readonly response: Response;
    private readonly payload;
    constructor(request: Request, response: Response, payload: T);
    hasValue(): boolean;
    unwrap(): T;
    clone<U = T>(payload?: U): Payload<U>;
    private setPayload;
    text(): Promise<Payload<string>>;
    json<Z>(): Promise<Payload<Z>>;
    blob(): Promise<Payload<Blob>>;
    buffer(): Promise<Payload<Buffer>>;
    arrayBuffer(): Promise<Payload<ArrayBuffer>>;
    outgoingHeaders(): BaseCollection<string, string>;
    headers(): BaseCollection<string, string>;
    uri(): URL;
    isOk(): boolean;
    [inspect.custom](): {};
}
