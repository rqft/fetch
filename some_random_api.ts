import { BaseExtension } from "./base";
export interface AnimalFact {
  fact: string;
}
export interface AnimalImage {
  image: string;
}
export interface Animal extends AnimalFact, AnimalImage {}
export class SomeRandomAPI {
  public raw: BaseExtension;
  constructor() {
    this.raw = new BaseExtension({ baseUrl: "https://some-random-api.ml" });
  }
  async animal(animal: string) {
    return this.raw.getJSON<Animal>(`/animal/${animal}`);
  }
  async animalDog() {
    return this.animal("dog");
  }
  async animalCat() {
    return this.animal("cat");
  }
}
