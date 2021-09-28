import { BaseExtension } from "./base";
export interface Fact {
  fact: string;
}
export interface Image {
  image: string;
}
export interface Animal extends Fact, Image {}
export interface GeniusLyrics {
  genius: string;
}
export interface Lyrics {
  title: string;
  author: string;
  lyrics: string;
  thumbnail: GeniusLyrics;
  links: GeniusLyrics;
}
export interface Base64Encode {
  base64: string;
}
export interface Base64Decode {
  text: string;
}
export interface Joke {
  joke: string;
}
export interface Pokemon {
  name: string;
  id: string;
  type: Array<string>;
  species: Array<string>;
  abilities: Array<string>;
  height: string;
  weight: string;
  base_experience: string;
  gender: [`${number}% male`, `${number}% female`];
  egg_groupds: Array<string>;
  stats: PokemonStats;
  family: PokemonFamily;
  sprites: {
    normal: `http://i.some-random-api.ml/pokemon/${string}.png`;
    animated: `http://i.some-random-api.ml/pokemon/${string}.gif`;
  };
  description: string;
  generation: string;
}
export interface PokemonStats {
  hp: string;
  attack: string;
  defense: string;
  sp_atk: string;
  sp_def: string;
  speed: string;
  total: string;
}
export interface PokemonFamily {
  evolutionStage: number;
  evolutionLine: Array<string>;
}
export interface Minecraft {
  username: string;
  uuid: string;
  name_history: Array<MinecraftName>;
}
export interface MinecraftName {
  name: string;
  changedToAt: `${number}/${number}/${number}` | "Original Name";
}
export interface Meme {
  id: number;
  image: `https://i.some-random-api.ml/${string}.jpg`;
  caption: string;
  category: string;
}
export interface DiscordBotToken {
  token: string;
}
export class SomeRandomAPI {
  public raw: BaseExtension;
  constructor() {
    this.raw = new BaseExtension({ baseUrl: "https://some-random-api.ml" });
  }
  async animal(endpoint: string) {
    return this.raw.getJSON<Animal>(`/animal/${endpoint}`);
  }
  async animalFact(endpoint: string) {
    return this.raw.getJSON<Fact>(`/fact/${endpoint}`);
  }
  async animalImage(endpoint: string) {
    return this.raw.getJSON<Image>(`/img/${endpoint}`);
  }
  async dog() {
    return this.animal("/dog");
  }
  async cat() {
    return this.animal("/cat");
  }
  async panda() {
    return this.animal("/panda");
  }
  async fox() {
    return this.animal("/fox");
  }
  async redPanda() {
    return this.animal("/red_panda");
  }
  async koala() {
    return this.animal("/koala");
  }
  async bird() {
    return this.animal("/birb");
  }
  async raccoon() {
    return this.animal("/raccoon");
  }
  async kangaroo() {
    return this.animal("/kangaroo");
  }

  async dogFact() {
    return this.animalFact("/dog");
  }
  async catFact() {
    return this.animalFact("/cat");
  }
  async pandaFact() {
    return this.animalFact("/panda");
  }
  async foxFact() {
    return this.animalFact("/fox");
  }
  async redPandaFact() {
    return this.animalFact("/red_panda");
  }
  async koalaFact() {
    return this.animalFact("/koala");
  }
  async birdFact() {
    return this.animalFact("/birb");
  }
  async raccoonFact() {
    return this.animalFact("/raccoon");
  }
  async kangarooFact() {
    return this.animalFact("/kangaroo");
  }

  async dogImage() {
    return this.animalImage("/dog");
  }
  async catImage() {
    return this.animalImage("/cat");
  }
  async pandaImage() {
    return this.animalImage("/panda");
  }
  async foxImage() {
    return this.animalImage("/fox");
  }
  async redPandaImage() {
    return this.animalImage("/red_panda");
  }
  async koalaImage() {
    return this.animalImage("/koala");
  }
  async birdImage() {
    return this.animalImage("/birb");
  }
  async raccoonImage() {
    return this.animalImage("/raccoon");
  }
  async kangarooImage() {
    return this.animalImage("/kangaroo");
  }

  async animeImage(endpoint: string) {
    return this.raw.getJSON<Image>(`/animu${endpoint}`);
  }
  async wink() {
    return this.animeImage("/wink");
  }
  async pat() {
    return this.animeImage("/pat");
  }
  async hug() {
    return this.animeImage("/hug");
  }

  async lyrics(title: string) {
    return this.raw.getJSON<Lyrics>(`/lyrics${this.raw.toUrlParams(title)}`);
  }

  async base64Encode(encode: string) {
    return this.raw.getJSON<Base64Encode>(
      `/base64${this.raw.toUrlParams(encode)}`
    );
  }
  async base64Decode(decode: string) {
    return this.raw.getJSON<Base64Encode>(
      `/base64${this.raw.toUrlParams(decode)}`
    );
  }

  async joke() {
    return this.raw.getJSON<Joke>("/joke");
  }

  async pokedex(pokemon: string) {
    return this.raw.getJSON<Pokemon>(
      `/pokedex${this.raw.toUrlParams(pokemon)}`
    );
  }

  async minecraft(username: string) {
    return this.raw.getJSON<Minecraft>(`/mc${this.raw.toUrlParams(username)}`);
  }

  async meme() {
    return this.raw.getJSON<Meme>("/meme");
  }

  async discordBotToken(id?: string) {
    return this.raw.getJSON<DiscordBotToken>(
      `/bottoken${this.raw.toUrlParams(id)}`
    );
  }

  async chatbot(message: string, key: string) {
    return this.raw.getJSON<unknown>(
      `/chatbot${this.raw.toUrlParams({ message, key })}`
    );
  }

  async canvas(endpoint: string, avatar: string, ...others: any[]) {
    return this.raw.getArrayBuffer(
      `/canvas${endpoint}${this.raw.toUrlParams({ avatar, ...others })}`
    );
  }

  async gay(avatar: string) {
    return this.canvas(`/gay`, avatar);
  }
  async glass(avatar: string) {
    return this.canvas(`/glass`, avatar);
  }
  async wasted(avatar: string) {
    return this.canvas(`/wasted`, avatar);
  }
  async missionPassed(avatar: string) {
    return this.canvas(`/passed`, avatar);
  }
  async jail(avatar: string) {
    return this.canvas(`/jail`, avatar);
  }
  async comrade(avatar: string) {
    return this.canvas(`/comrade`, avatar);
  }
  async triggered(avatar: string) {
    return this.canvas(`/triggered`, avatar);
  }

  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async invert(avatar: string) {
    return this.canvas("/invert", avatar);
  }
  async brightness(avatar: string, brightness?: number) {
    return this.canvas("/greyscale", avatar, brightness);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
  async greyscale(avatar: string) {
    return this.canvas("/greyscale", avatar);
  }
}
