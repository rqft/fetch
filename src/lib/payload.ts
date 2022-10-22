import { BaseCollection } from '@rqft/utils';
import { Blob, Request, Response } from 'node-fetch';
import { inspect } from 'util';

export class Payload<T> {
  constructor(
        public readonly request: Request,
        public readonly response: Response,
        private readonly payload: T
  ) {}

  public hasValue() {
    return this.payload !== null;
  }

  public unwrap(): T {
    if (!this.hasValue()) {
      throw new Error('No value');
    }

    return this.payload;
  }

  public clone<U = T>(payload?: U) {
    const x = new Payload<U>(
      this.request.clone(),
      this.response.clone(),
      payload || (this.payload as never)
    );
    x.ptxt = this.ptxt;
    return x;
  }

  private setPayload<U = T>(payload: U) {
    const x = new Payload<U>(this.request, this.response, payload);
    x.ptxt = this.ptxt;
    return x;
  }

  private ptxt: string | null = null;

  public async text(): Promise<Payload<string>> {
    if (this.ptxt === null || !this.response.bodyUsed) {
      this.ptxt = await this.response.text();
    }

    return this.setPayload(this.ptxt);
  }

  public async json<Z>(): Promise<Payload<Z>> {
    const text = await this.text();
    return this.setPayload(JSON.parse(text.payload));
  }

  public async blob(): Promise<Payload<Blob>> {
    const blob = await this.clone().response.blob();
    return this.setPayload(blob);
  }

  public async buffer(): Promise<Payload<Buffer>> {
    const text = await this.text();
    return this.setPayload(Buffer.from(text.payload));
  }

  public async arrayBuffer(): Promise<Payload<ArrayBuffer>> {
    const buffer = await this.buffer();

    return this.setPayload(buffer.payload.buffer);
  }

  public outgoingHeaders() {
    return new BaseCollection(this.request.headers.entries());
  }

  public headers() {
    return new BaseCollection(this.response.headers.entries());
  }

  public uri() {
    return new URL(this.request.url);
  }

  public isOk() {
    return this.response.ok;
  }

  [inspect.custom]() {
    const shield = this;
    class Payload {
      constructor() {
        Object.assign(this, shield.payload);
      }
    }
    return new Payload();
  }
}
