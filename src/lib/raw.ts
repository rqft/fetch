import fetch, { RequestInfo, RequestInit } from 'node-fetch';
import { HTTPMethods } from "./constants";
export class Raw {
  async request(info: RequestInfo, init?: RequestInit) {
    return fetch(info, Object.assign({}, init));
  }
  async delete(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.DELETE });
    return this.request(info, init);
  }
  async get(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.GET });
    return this.request(info, init);
  }
  async head(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.HEAD });
    return this.request(info, init);
  }
  async options(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.OPTIONS });
    return this.request(info, init);
  }
  async patch(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.PATCH });
    return this.request(info, init);
  }
  async post(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.POST });
    return this.request(info, init);
  }
  async put(info: RequestInfo, init?: RequestInit) {
    init = Object.assign({}, init, { method: HTTPMethods.PUT });
    return this.request(info, init);
  }
}
