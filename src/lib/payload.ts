import { BaseCollection } from "@rqft/utils";
import { Blob, Request, Response } from "node-fetch";

export class Payload<T> {
    constructor(
        public readonly request: Request,
        public readonly response: Response,
        private readonly payload: T
    ) {}

    public has_value() {
        return this.payload !== null;
    }

    public unwrap(): T {
        if (!this.has_value()) {
            throw new Error("No value");
        }
        return this.payload!;
    }

    public clone<U = T>(payload?: U) {
        let x = new Payload<U>(
            this.request.clone(),
            this.response.clone(),
            payload || (this.payload as never)
        );
        x._txt = this._txt;
        return x;
    }

    private set_payload<U = T>(payload: U) {
        let x = new Payload<U>(this.request, this.response, payload);
        x._txt = this._txt;
        return x;
    }

    private _txt: string | null = null;

    public async text(): Promise<Payload<string>> {
        const clone = this.response.clone();
        if (this._txt === null) {
            this._txt = await clone.text();
        }

        return this.set_payload(this._txt);
    }

    public async json<Z>(): Promise<Payload<Z>> {
        const text = await this.text();
        return this.set_payload(JSON.parse(text.payload));
    }

    public async blob(): Promise<Payload<Blob>> {
        const blob = await this.clone().response.blob();
        return this.set_payload(blob);
    }

    public async buffer(): Promise<Payload<Buffer>> {
        const text = await this.text();
        return this.set_payload(Buffer.from(text.payload));
    }

    public async arrayBuffer(): Promise<Payload<ArrayBuffer>> {
        const buffer = await this.buffer();

        return this.set_payload(buffer.payload.buffer);
    }

    public outgoing_headers() {
        return new BaseCollection(this.request.headers.entries());
    }

    public headers() {
        return new BaseCollection(this.response.headers.entries());
    }

    public uri() {
        return new URL(this.request.url);
    }

    public is_ok() {
        return this.response.ok;
    }
}
