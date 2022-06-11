import { Headers, Request, Response } from "node-fetch";
export enum Type {
    TEXT = "text",
    JSON = "json",
    BUFFER = "buffer",
    ARRAY_BUFFER = "arrayBuffer",
    BLOB = "blob",
}
export interface TransformReturnTypes {
    [Type.TEXT]: string;
    [Type.JSON]: any;
    [Type.BUFFER]: Buffer;
    [Type.ARRAY_BUFFER]: ArrayBuffer;
    [Type.BLOB]: Blob;
}
export class Data<T = Response> {
    public readonly payload: T;
    public readonly response: Response;
    public readonly source: Request;
    constructor(source: Request, response: Response, payload?: T) {
        this.payload = payload ?? (response as unknown as T);
        this.response = response;
        this.source = source;
    }

    public clone<U>(payload: U) {
        return new Data(this.source, this.response, payload);
    }

    get type(): Type {
        if ("constructor" in this.payload) {
            switch ((this.payload as any).constructor) {
                case String:
                    return Type.TEXT;
                case Buffer:
                    return Type.BUFFER;
                case ArrayBuffer:
                    return Type.ARRAY_BUFFER;
                case Blob:
                    return Type.BLOB;
                case Object:
                default:
                    return Type.JSON;
            }
        }
        throw new Error("Payload has no constructor");
    }

    async transform<U extends Type>(
        method: U
    ): Promise<Data<TransformReturnTypes[U]>> {
        switch (method) {
            case Type.TEXT:
                return this.clone(await this.response.text());
            case Type.JSON:
                return this.clone(await this.response.json());
            case Type.BUFFER:
                return this.clone(await this.response.buffer());
            case Type.ARRAY_BUFFER:
                return this.clone(await this.response.arrayBuffer());
            case Type.BLOB:
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
