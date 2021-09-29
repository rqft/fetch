import { Pariah } from '../lib/base'
export interface Slip {
  slip: SlipMeta;
}
export interface SlipMeta {
  id: number;
  advice: string;
}
export class AdviceSlip {
  public raw: Pariah;
  constructor() {
    this.raw = new Pariah({ baseUrl: "https://api.adviceslip.com/" });
  }
  async random() {
    return this.raw.getJSON<Slip>("/advice");
  }
  async slip(id: number) {
    return this.raw.getJSON<Slip>(`/advice/${id}`);
  }
  async search(query: string) {
    return this.raw.getJSON<Array<Slip>>(`/advice/search/${query}`);
  }
}
