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
  async animalFact(animal: string) {
    return this.raw.getJSON<AnimalFact>(`/fact/${animal}`);
  }
  async animalImage(animal: string) {
    return this.raw.getJSON<AnimalImage>(`/img/${animal}`);
  }
  async dog() {
    return this.animal("dog");
  }
  async cat() {
    return this.animal("cat");
  }
  async panda() {
    return this.animal("panda");
  }
  async fox() {
    return this.animal("fox");
  }
  async redPanda() {
    return this.animal("red_panda");
  }
  async koala() {
    return this.animal("koala");
  }
  async bird() {
    return this.animal("birb");
  }
  async raccoon() {
    return this.animal("raccoon");
  }
  async kangaroo() {
    return this.animal("kangaroo");
  }

  async dogFact() {
    return this.animalFact("dog");
  }
  async catFact() {
    return this.animalFact("cat");
  }
  async pandaFact() {
    return this.animalFact("panda");
  }
  async foxFact() {
    return this.animalFact("fox");
  }
  async redPandaFact() {
    return this.animalFact("red_panda");
  }
  async koalaFact() {
    return this.animalFact("koala");
  }
  async birdFact() {
    return this.animalFact("birb");
  }
  async raccoonFact() {
    return this.animalFact("raccoon");
  }
  async kangarooFact() {
    return this.animalFact("kangaroo");
  }

  async dogImage() {
    return this.animalImage("dog");
  }
  async catImage() {
    return this.animalImage("cat");
  }
  async pandaImage() {
    return this.animalImage("panda");
  }
  async foxImage() {
    return this.animalImage("fox");
  }
  async redPandaImage() {
    return this.animalImage("red_panda");
  }
  async koalaImage() {
    return this.animalImage("koala");
  }
  async birdImage() {
    return this.animalImage("birb");
  }
  async raccoonImage() {
    return this.animalImage("raccoon");
  }
  async kangarooImage() {
    return this.animalImage("kangaroo");
  }
}
