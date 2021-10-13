import { Pariah } from "../lib/base";
export interface Magic {
  magic: {
    question: string;
    answer: string;
    type: MagicType;
  };
}
export type MagicType = "Affirmative" | "Contrary" | "Neutral";
export class AdviceSlip {
  public raw: Pariah;
  constructor() {
    this.raw = new Pariah({ baseUrl: " https://8ball.delegator.com/magic/" });
  }
  async json(query: string) {
    return this.raw.getJSON<Magic>(`/JSON/${encodeURIComponent(query)}`);
  }
  async xml(query: string) {
    return this.raw.getText(`/XML/${encodeURIComponent(query)}`);
  }
}
