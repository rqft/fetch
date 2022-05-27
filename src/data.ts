import { Headers, Response } from "node-fetch";
export enum TransformMethods {
    TEXT = "text",
    JSON = "json",
    BUFFER = "buffer",
    ARRAY_BUFFER = "arrayBuffer",
    BLOB = "blob",
}
export interface TransformReturnTypes {
    [TransformMethods.TEXT]: string;
    [TransformMethods.JSON]: any;
    [TransformMethods.BUFFER]: Buffer;
    [TransformMethods.ARRAY_BUFFER]: ArrayBuffer;
    [TransformMethods.BLOB]: Blob;
}
export class Data<T = Response> {
    public readonly payload!: T;
    public readonly response: Response;
    constructor(response: Response, payload?: T) {
        this.payload = payload || response as unknown as T;
        this.response = response;
    }
    async transform<U extends TransformMethods>(method: U): Promise<Data<TransformReturnTypes[U]>> {
        switch (method) {
            case TransformMethods.TEXT:
                return new Data(this.response, this.response.text())
            case TransformMethods.JSON:
                return new Data(this.response, await this.response.json())
            case TransformMethods.BUFFER:
                return new Data(this.response, await this.response.buffer())
            case TransformMethods.ARRAY_BUFFER:
                return new Data(this.response, await this.response.arrayBuffer())
            case TransformMethods.BLOB:
                return new Data(this.response, await this.response.blob())
            default:
                return this;
        }
    }

    get ok(): boolean {
        return this.response.ok;
    }

    get status(): number {
        return this.response.status;
    }

    get headers(): Headers {
        return this.response.headers;
    }

    get url(): URL {
        return new URL(this.response.url);
    }
}