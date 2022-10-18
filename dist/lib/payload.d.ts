/// <reference types="node" />
import { Blob, Request, Response } from "node-fetch";
export declare class Payload<T> {
    readonly request: Request;
    readonly response: Response;
    readonly payload: T;
    constructor(request: Request, response: Response, payload: T);
    clone<U = T>(payload?: U): Payload<U>;
    private set_payload;
    private _txt;
    text(): Promise<Payload<string>>;
    json<Z>(): Promise<Payload<Z>>;
    blob(): Promise<Payload<Blob>>;
    buffer(): Promise<Payload<Buffer>>;
    arrayBuffer(): Promise<Payload<ArrayBuffer>>;
}
