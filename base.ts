import { Raw } from "./raw";
export interface ClientOptions {
  baseUrl: string | URL;
  headers?: HeadersInit | Record<string, string | undefined>;
}
export const defaultClientOptions: Omit<ClientOptions, "baseUrl"> = {
  headers: {
    "user-agent": "Pariah",
  },
};
export class Base {
  public readonly baseUrl: URL;
  public headers: Headers;
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
        const value = defaultClientOptions.headers[key];
        this.headers.set(key, value);
      }
    }
  }
  url(endpoint: string) {
    return `https://${this.baseUrl.hostname}/${endpoint}`;
  }
  request(endpoint: string, init?: RequestInit) {
    return this.raw.request(this.url(endpoint));
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
