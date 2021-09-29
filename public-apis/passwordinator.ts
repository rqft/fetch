import { Pariah } from '../lib/base'
export interface Password {
  data: string;
}
export class Passwordinator {
  public raw: Pariah;
  constructor() {
    this.raw = new Pariah({ baseUrl: "https://passwordinator.herokuapp.com/" });
  }
  async run() {
    return this.raw.getJSON<Password>("/generate");
  }
}
