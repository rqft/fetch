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
    return x;
  }

  private setPayload<U = T>(payload: U) {
    const x = new Payload<U>(this.request, this.response, payload);
    return x;
  }

  public async text(): Promise<Payload<string>> {
    return this.setPayload(await this.response.text());
  }

  public async json<Z>(): Promise<Payload<Z>> {
    return this.setPayload(await this.response.json());
  }

  public async blob(): Promise<Payload<Blob>> {
    return this.setPayload(await this.response.blob());
  }

  public async buffer(): Promise<Payload<Buffer>> {
    return this.setPayload(await this.response.buffer());
  }

  public async arrayBuffer(): Promise<Payload<ArrayBuffer>> {
    return this.setPayload(await this.response.arrayBuffer());
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
