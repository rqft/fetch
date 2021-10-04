import { Pariah } from "./lib/base";
export interface Fact {
    fact: string;
}
export interface Image {
    image: string;
}
export interface Animal extends Fact, Image {
}
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
export interface Hex {
    hex: string;
}
export interface RGB {
    r: number;
    g: number;
    b: number;
}
export declare class SomeRandomAPI {
    raw: Pariah;
    constructor();
    animal(endpoint: string): Promise<Animal>;
    animalFact(endpoint: string): Promise<Fact>;
    animalImage(endpoint: string): Promise<Image>;
    dog(): Promise<Animal>;
    cat(): Promise<Animal>;
    panda(): Promise<Animal>;
    fox(): Promise<Animal>;
    redPanda(): Promise<Animal>;
    koala(): Promise<Animal>;
    bird(): Promise<Animal>;
    raccoon(): Promise<Animal>;
    kangaroo(): Promise<Animal>;
    dogFact(): Promise<Fact>;
    catFact(): Promise<Fact>;
    pandaFact(): Promise<Fact>;
    foxFact(): Promise<Fact>;
    redPandaFact(): Promise<Fact>;
    koalaFact(): Promise<Fact>;
    birdFact(): Promise<Fact>;
    raccoonFact(): Promise<Fact>;
    kangarooFact(): Promise<Fact>;
    dogImage(): Promise<Image>;
    catImage(): Promise<Image>;
    pandaImage(): Promise<Image>;
    foxImage(): Promise<Image>;
    redPandaImage(): Promise<Image>;
    koalaImage(): Promise<Image>;
    birdImage(): Promise<Image>;
    raccoonImage(): Promise<Image>;
    kangarooImage(): Promise<Image>;
    animeImage(endpoint: string): Promise<Image>;
    wink(): Promise<Image>;
    pat(): Promise<Image>;
    hug(): Promise<Image>;
    lyrics(title: string): Promise<Lyrics>;
    base64Encode(encode: string): Promise<Base64Encode>;
    base64Decode(decode: string): Promise<Base64Encode>;
    joke(): Promise<Joke>;
    pokedex(pokemon: string): Promise<Pokemon>;
    minecraft(username: string): Promise<Minecraft>;
    meme(): Promise<Meme>;
    discordBotToken(id?: string): Promise<DiscordBotToken>;
    chatbot(message: string, key: string): Promise<unknown>;
    canvas(endpoint: string, params?: object): Promise<ArrayBuffer>;
    gay(avatar: string): Promise<ArrayBuffer>;
    glass(avatar: string): Promise<ArrayBuffer>;
    wasted(avatar: string): Promise<ArrayBuffer>;
    missionPassed(avatar: string): Promise<ArrayBuffer>;
    jail(avatar: string): Promise<ArrayBuffer>;
    comrade(avatar: string): Promise<ArrayBuffer>;
    triggered(avatar: string): Promise<ArrayBuffer>;
    greyscale(avatar: string): Promise<ArrayBuffer>;
    invert(avatar: string): Promise<ArrayBuffer>;
    invertGreyscale(avatar: string): Promise<ArrayBuffer>;
    brightness(avatar: string, brightness?: number): Promise<ArrayBuffer>;
    threshold(avatar: string, threshold?: number): Promise<ArrayBuffer>;
    sepia(avatar: string): Promise<ArrayBuffer>;
    red(avatar: string): Promise<ArrayBuffer>;
    green(avatar: string): Promise<ArrayBuffer>;
    blue(avatar: string): Promise<ArrayBuffer>;
    blurple(avatar: string): Promise<ArrayBuffer>;
    blurpleNew(avatar: string): Promise<ArrayBuffer>;
    color(avatar: string, color: string): Promise<ArrayBuffer>;
    pixelate(avatar: string): Promise<ArrayBuffer>;
    blur(avatar: string): Promise<ArrayBuffer>;
    fakeYoutubeComment(username: string, comment: string, avatar: string): Promise<ArrayBuffer>;
    fakeTweet(username: string, displayname: string, avatar: string, comment: string): Promise<ArrayBuffer>;
    itsSoStupid(avatar: string, dog: string): Promise<ArrayBuffer>;
    simpCard(avatar: string): Promise<ArrayBuffer>;
    horny(avatar: string): Promise<ArrayBuffer>;
    loliPolice(avatar: string): Promise<ArrayBuffer>;
    colorViewer(color: number): Promise<ArrayBuffer>;
    hex(r: number, g: number, b: number): Promise<Hex>;
    rgb(color: number): Promise<void>;
}
