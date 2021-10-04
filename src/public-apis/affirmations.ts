import { Pariah } from '../lib/base'
export interface Affirmation {
  affirmation: string;
}
export class Affirmations {
  public raw: Pariah;
  constructor() {
    this.raw = new Pariah({ baseUrl: "https://www.affirmations.dev/" });
  }
  async run() {
    return this.raw.getJSON<Affirmation>("/");
  }
}
