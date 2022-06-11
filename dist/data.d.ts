/// <reference types="node" />
import { Headers, Request, Response } from "node-fetch";
export declare enum Type {
    TEXT = "text",
    JSON = "json",
    BUFFER = "buffer",
    ARRAY_BUFFER = "arrayBuffer",
    BLOB = "blob"
}
export interface TransformReturnTypes {
    [Type.TEXT]: string;
    [Type.JSON]: any;
    [Type.BUFFER]: Buffer;
    [Type.ARRAY_BUFFER]: ArrayBuffer;
    [Type.BLOB]: Blob;
}
export declare class Data<T = Response> {
    readonly payload: T;
    readonly response: Response;
    readonly source: Request;
    constructor(source: Request, response: Response, payload?: T);
    clone<U>(payload: U): Data<U>;
    get type(): Type;
    transform<U extends Type>(method: U): Promise<Data<TransformReturnTypes[U]>>;
    get ok(): boolean;
    get status(): number;
    get headers(): Headers;
    get url(): URL;
}
