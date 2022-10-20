/// <reference types="node" />
import { BaseCollection } from "@rqft/utils";
import { Blob, Request, Response } from "node-fetch";
export declare class Payload<T> {
    readonly request: Request;
    readonly response: Response;
    private readonly payload;
    constructor(request: Request, response: Response, payload: T);
    has_value(): boolean;
    unwrap(): T;
    clone<U = T>(payload?: U): Payload<U>;
    private set_payload;
    private _txt;
    text(): Promise<Payload<string>>;
    json<Z>(): Promise<Payload<Z>>;
    blob(): Promise<Payload<Blob>>;
    buffer(): Promise<Payload<Buffer>>;
    arrayBuffer(): Promise<Payload<ArrayBuffer>>;
    outgoing_headers(): BaseCollection<string, string>;
    headers(): BaseCollection<string, string>;
    uri(): URL;
    is_ok(): boolean;
}
