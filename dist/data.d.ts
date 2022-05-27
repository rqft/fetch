/// <reference types="node" />
import { Headers, Response } from "node-fetch";
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
    constructor(response: Response, payload?: T);
    transform<U extends TransformMethods>(method: U): Promise<Data<TransformReturnTypes[U]>>;
    get ok(): boolean;
    get status(): number;
    get headers(): Headers;
    get url(): URL;
}
