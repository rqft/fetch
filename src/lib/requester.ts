import fetch, { Body, Request, RequestInit } from 'node-fetch';
import { DefaultOptions, HTTPVerbs, Options, Params } from '../constants';
import { Payload } from './payload';
import { deepObjectAssign, splitBy } from './tools';

export class Requester {
  private puri: URL;
  constructor(uri: string | URL, private options: Options = DefaultOptions) {
    this.puri = new URL(uri);
  }

  private init(method: HTTPVerbs, options?: Options): RequestInit {
    const out: Options = deepObjectAssign(
      this.options,
      { method },
      options
    );

    if (
      out.body &&
            (!(out.body instanceof Body) || typeof out.body !== 'string')
    ) {
      out.body = JSON.stringify(out.body);
    }

    return out as RequestInit;
  }

  private fillUrl<T extends `/${string}`>(
    endpoint: T,
    params: Params<T> = {}
  ) {
    const { true: id, false: param } = splitBy(Object.keys(params), (x) =>
      x.startsWith(':')
    );

    let z: string = endpoint;

    for (const i of id) {
      z = z.split(i).join(encodeURIComponent(String(params[i])));
    }

    if (param.length) {
      z +=
                '?' +
                param
                  .map((x) => `${x}=${encodeURIComponent(String(params[x]))}`)
                  .join('&');
    }

    return new URL(
      (this.url.href.replace(/\/$/, '') + z).replace(/\/$/, '')
    );
  }

  public set url(uri: URL) {
    this.puri = uri;
  }

  public get url() {
    return this.puri;
  }

  public async request<T extends `/${string}`>(
    id: Id<T>,
    params?: Params<T>,
    options?: Options
  ) {
    const [verb, endpoint] = this.parseEndpoint(id);
    const request = new Request(
      this.fillUrl(endpoint, params),
      this.init(verb, options)
    );
    const response = await fetch(request);

    return new Payload(request, response, null);
  }

  public async text<T extends `/${string}`>(
    endpoint: Id<T>,
    params?: Params<T>,
    options?: Options
  ) {
    return await (await this.request(endpoint, params, options)).text();
  }

  public async json<U, T extends `/${string}`>(
    endpoint: Id<T>,
    params?: Params<T>,
    options?: Options
  ) {
    return await (await this.request(endpoint, params, options)).json<U>();
  }

  public async blob<T extends `/${string}`>(
    endpoint: Id<T>,
    params?: Params<T>,
    options?: Options
  ) {
    return await (await this.request(endpoint, params, options)).blob();
  }

  public async buffer<T extends `/${string}`>(
    endpoint: Id<T>,
    params?: Params<T>,
    options?: Options
  ) {
    return await (await this.request(endpoint, params, options)).buffer();
  }

  public async arrayBuffer<T extends `/${string}`>(
    endpoint: Id<T>,
    params?: Params<T>,
    options?: Options
  ) {
    return await (
      await this.request(endpoint, params, options)
    ).arrayBuffer();
  }

  private parseEndpoint<T extends `/${string}`>(id: Id<T>): [HTTPVerbs, T] {
    const verb = id.substring(0, id.indexOf(' ')) as HTTPVerbs;
    if (HTTPVerbs[verb] === undefined) {
      return [HTTPVerbs.GET, id as T];
    }

    return [
            id.substring(0, id.indexOf(' ')) as HTTPVerbs,
            id.substring(id.indexOf(' ') + 1) as T,
    ];
  }
}

export type Id<T extends `/${string}`> = `${HTTPVerbs} ${T}` | T;
