import { Headers, Request, Response } from "node-fetch";
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
    public readonly source: Request;
    constructor(source: Request, response: Response, payload?: T) {
        this.payload = payload || (response as unknown as T);
        this.response = response;
        this.source = source;
    }

    public clone<U>(payload: U) {
        return new Data(this.source, this.response, payload);
    }

    async transform<U extends TransformMethods>(
        method: U
    ): Promise<Data<TransformReturnTypes[U]>> {
        switch (method) {
            case TransformMethods.TEXT:
                return this.clone(await this.response.text());
            case TransformMethods.JSON:
                return this.clone(await this.response.json());
            case TransformMethods.BUFFER:
                return this.clone(await this.response.buffer());
            case TransformMethods.ARRAY_BUFFER:
                return this.clone(await this.response.arrayBuffer());
            case TransformMethods.BLOB:
                return this.clone(await this.response.blob());
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
