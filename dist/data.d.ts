/// <reference types="node" />
import { Headers, Request, Response } from "node-fetch";
export declare enum TransformMethods {
    TEXT = "text",
    JSON = "json",
    BUFFER = "buffer",
    ARRAY_BUFFER = "arrayBuffer",
    BLOB = "blob"
}
export interface TransformReturnTypes {
    [TransformMethods.TEXT]: string;
    [TransformMethods.JSON]: any;
    [TransformMethods.BUFFER]: Buffer;
    [TransformMethods.ARRAY_BUFFER]: ArrayBuffer;
    [TransformMethods.BLOB]: Blob;
}
export declare class Data<T = Response> {
    readonly payload: T;
    readonly response: Response;
    readonly source: Request;
    constructor(source: Request, response: Response, payload?: T);
    clone<U>(payload: U): Data<U>;
    transform<U extends TransformMethods>(method: U): Promise<Data<TransformReturnTypes[U]>>;
    get ok(): boolean;
    get status(): number;
    get headers(): Headers;
    get url(): URL;
}
