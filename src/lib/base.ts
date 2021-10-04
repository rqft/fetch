import { RequestInit } from 'node-fetch';
import { Raw } from "./raw";
export interface ClientOptions {
  baseUrl: string | URL;
  headers?: HeadersInit;
}
export const defaultClientOptions: Omit<ClientOptions, "baseUrl"> = {
  headers: {
    "user-agent": "Pariah",
  },
};
export class Base {
  public readonly baseUrl: URL = new URL('https://example.com/');
  public headers: HeadersInit;
  public raw: Raw;
  constructor(options: ClientOptions) {
    this.raw = new Raw();
    options = Object.assign({}, defaultClientOptions, options);
    if (options.baseUrl) {
      if (options.baseUrl instanceof URL) {
        this.baseUrl = options.baseUrl;
      } else {
        this.baseUrl = new URL(options.baseUrl);
      }
    }
    this.headers = new Headers(options.headers);
    for (let key in defaultClientOptions.headers) {
      if (!this.headers.has(key)) {
        const value = defaultClientOptions.headers[key as keyof HeadersInit];
        this.headers.set(key, String(value));
      }
    }
  }
  url(endpoint: string) {
    return `https://${this.baseUrl.hostname}${endpoint}`;
  }
  request(endpoint: string, init?: RequestInit) {
    return this.raw.request(this.url(endpoint), init);
  }
  get(endpoint: string, init?: RequestInit) {
    return this.raw.get(this.url(endpoint), init);
  }
  post(endpoint: string, init?: RequestInit) {
    return this.raw.post(this.url(endpoint), init);
  }
  patch(endpoint: string, init?: RequestInit) {
    return this.raw.patch(this.url(endpoint), init);
  }
  delete(endpoint: string, init?: RequestInit) {
    return this.raw.delete(this.url(endpoint), init);
  }
  head(endpoint: string, init?: RequestInit) {
    return this.raw.head(this.url(endpoint), init);
  }
  options(endpoint: string, init?: RequestInit) {
    return this.raw.options(this.url(endpoint), init);
  }
  put(endpoint: string, init?: RequestInit) {
    return this.raw.put(this.url(endpoint), init);
  }
}
export class Pariah extends Base {
  constructor(options: ClientOptions) {
    super(options);
  }
  toUrlParams(object: any) {
    if (typeof object !== "object") object = { object };
    return `?${Object.entries(object)
      .filter(([_, v]) => v)
      .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
      .join("&")}`;
  }
  async requestJSON(endpoint: string, init?: RequestInit) {
    return (await this.request(endpoint, init)).json();
  }
  async getJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.get(endpoint, init)).json() as Promise<T>;
  }
  async postJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.post(endpoint, init)).json() as Promise<T>;
  }
  async patchJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.patch(endpoint, init)).json() as Promise<T>;
  }
  async deleteJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.delete(endpoint, init)).json() as Promise<T>;
  }
  async headJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.head(endpoint, init)).json() as Promise<T>;
  }
  async optionsJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.options(endpoint, init)).json() as Promise<T>;
  }
  async putJSON<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.put(endpoint, init)).json() as Promise<T>;
  }
  async requestText(endpoint: string, init?: RequestInit) {
    return (await this.request(endpoint, init)).text();
  }
  async getText(endpoint: string, init?: RequestInit) {
    return (await this.get(endpoint, init)).text();
  }
  async postText(endpoint: string, init?: RequestInit) {
    return (await this.post(endpoint, init)).text();
  }
  async patchText(endpoint: string, init?: RequestInit) {
    return (await this.patch(endpoint, init)).text();
  }
  async deleteText(endpoint: string, init?: RequestInit) {
    return (await this.delete(endpoint, init)).text();
  }
  async headText(endpoint: string, init?: RequestInit) {
    return (await this.head(endpoint, init)).text();
  }
  async optionsText(endpoint: string, init?: RequestInit) {
    return (await this.options(endpoint, init)).text();
  }
  async putText(endpoint: string, init?: RequestInit) {
    return (await this.put(endpoint, init)).text();
  }
  async requestBlob(endpoint: string, init?: RequestInit) {
    return (await this.request(endpoint, init)).blob();
  }
  async getBlob(endpoint: string, init?: RequestInit) {
    return (await this.get(endpoint, init)).blob();
  }
  async postBlob(endpoint: string, init?: RequestInit) {
    return (await this.post(endpoint, init)).blob();
  }
  async patchBlob(endpoint: string, init?: RequestInit) {
    return (await this.patch(endpoint, init)).blob();
  }
  async deleteBlob(endpoint: string, init?: RequestInit) {
    return (await this.delete(endpoint, init)).blob();
  }
  async headBlob(endpoint: string, init?: RequestInit) {
    return (await this.head(endpoint, init)).blob();
  }
  async optionsBlob(endpoint: string, init?: RequestInit) {
    return (await this.options(endpoint, init)).blob();
  }
  async putBlob(endpoint: string, init?: RequestInit) {
    return (await this.put(endpoint, init)).blob();
  }
  async requestArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.request(endpoint, init)).arrayBuffer();
  }
  async getArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.get(endpoint, init)).arrayBuffer();
  }
  async postArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.post(endpoint, init)).arrayBuffer();
  }
  async patchArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.patch(endpoint, init)).arrayBuffer();
  }
  async deleteArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.delete(endpoint, init)).arrayBuffer();
  }
  async headArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.head(endpoint, init)).arrayBuffer();
  }
  async optionsArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.options(endpoint, init)).arrayBuffer();
  }
  async putArrayBuffer(endpoint: string, init?: RequestInit) {
    return (await this.put(endpoint, init)).arrayBuffer();
  }
}
