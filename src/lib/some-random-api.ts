import { Pariah } from "../pariah";

export module SomeRandomApi {
    export const Url = new URL("https://some-random-api.ml/");

    export interface Fact {
        fact: string;
    }

    export interface Image {
        image: string;
    }

    export interface Animal extends Fact, Image { }

    export enum Animals {
        DOG = "dog",
        CAT = "cat",
        PANDA = "panda",
        FOX = "fox",
        RED_PANDA = "red_panda",
        KOALA = "koala",
        BIRD = "birb",
        RACCOON = "raccoon",
        KANGAROO = "kangaroo",
        WHALE = "whale",
        PIKACHU = "pikachu",
    }

    export interface AnimeImage {
        link: string;
    }

    export enum Animes {
        WINK = "wink",
        PAT = "pat",
        HUG = "hug",
        FACE_PALM = "face-palm",
    }

    export interface Lyrics {
        title: string;
        author: string;
        lyrics: string;
        thumbnail: GeniusLink;
        links: GeniusLink;
        disclaimer: string;
    }

    export interface GeniusLink {
        genius: string;
    }

    export interface Error {
        error: string;
    }

    export interface Base64Encode {
        base64: string;
    }

    export interface Base64Decode {
        text: string;
    }

    export interface BinaryEncode {
        binary: string;
    }

    export interface BinaryDecode {
        text: string;
    }

    export interface Joke {
        joke: string;
    }

    export interface Pokemon {
        name: string;
        id: string;
        type: Array<PokemonType>;
        species: Array<string>;
        abilities: Array<string>;
        height: string;
        weight: string;
        base_experience: string;
        gender: [`${number}% male`, `${number}% female`];
        egg_groups: Array<string>;
        stats: PokemonStats;
        family: PokemonFamily;
        sprites: PokemonSprites;
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

    export type PokemonSprite =
        `http://i.some-random-api.ml/pokemon/${string}.${"png" | "gif"}`;

    export interface PokemonSprites {
        normal: PokemonSprite;
        animated: PokemonSprite;
    }

    export enum PokemonType {
        NORMAL = "Normal",
        FIRE = "Fire",
        WATER = "Water",
        GRASS = "Grass",
        ELECTRIC = "Electric",
        ICE = "Ice",
        FIGHTING = "Fighting",
        POISON = "Poison",
        GROUND = "Ground",
        FLYING = "Flying",
        PSYCHIC = "Psychic",
        BUG = "Bug",
        ROCK = "Rock",
        GHOST = "Ghost",
        DARK = "Dark",
        DRAGON = "Dragon",
        STEEL = "Steel",
        FAIRY = "Fairy",
    }

    export interface Minecraft {
        username: string;
        uuid: string;
        name_history: Array<MinecraftName>;
    }

    export interface MinecraftName {
        name: string;
        changedToAt: "Original Name" | `${number}/${number}/${number}`;
    }

    export interface Meme extends Image {
        id: number;
        caption: string;
        category: MemeCategory;
    }

    export enum MemeCategory {
        MATH = "math",
        RANDOM = "random",
        SUPERHERO = "superhero",
        ANIME = "anime",
    }

    export interface DiscordBotToken {
        token: string;
    }

    export enum CanvasOverlay {
        GAY = "gay",
        GLASS = "glass",
        WASTED = "wasted",
        MISSION_PASSED = "passed",
        JAIL = "jail",
        COMRADE = "comrade",
        TRIGGERED = "triggered",
    }

    export enum CanvasFilter {
        GREYSCALE = "greyscale",
        INVERT = "invert",
        INVERT_GREYSCALE = "invertgreyscale",
        BRIGHTNESS = "brightness",
        THRESHOLD = "threshold",
        SEPIA = "sepia",
        RED = "red",
        GREEN = "green",
        BLUE = "blue",
        BLURPLE = "blurple",
        BLURPLE_NEW = "blurple2",
        COLOR = "color",
    }

    export enum CanvasMisc {
        PIXELATE = "pixelate",
        BLUR = "blur",
        FAKE_YOUTUBE_COMMENT = "youtube-comment",
        FAKE_TWEET = "tweet",
        ITS_SO_STUPID = "its-so-stupid",
        SIMP_CARD = "simpcard",
        HORNY = "horny",
        LOLI_POLICE = "lolice",
        COLOR_VIEWER = "colorviewer",
        RGB_TO_HEX = "hex",
        HEX_TO_RGB = "rgb",
        LGBT_BORDER = "lgbt",
        PANSEXUAL_BORDER = "pansexual",
        NONBINARY_BORDER = "nonbinary",
        LESBIAN_BORDER = "lesbian",
        BISEXUAL_BORDER = "bisexual",
        TRANSGENDER_BORDER = "transgender",
    }

    export type Canvas = CanvasOverlay | CanvasFilter | CanvasMisc;

    export class API extends Pariah {
        constructor() {
            super(Url);
        }

        public async animal(animal: Animals): Promise<Partial<Animal>> {
            const { payload: { fact } } = await this.get.json<Partial<Fact>>('/fact/:animal', { ":animal": animal });
            const { payload: { image } } = await this.get.json<Partial<Image>>('/img/:animal', { ":animal": animal });

            return {
                fact,
                image,
            }
        }

        public async animalImage(animal: Animals) {
            const payload = await this.animal(animal);
            return payload.image;
        }

        public async animalFact(animal: Animals) {
            const payload = await this.animal(animal);
            return payload.fact;
        }

        public async dog() {
            return this.animal(Animals.DOG);
        }

        public async dogImage() {
            return this.animalImage(Animals.DOG);
        }

        public async dogFact() {
            return this.animalFact(Animals.DOG);
        }

        public async cat() {
            return this.animal(Animals.CAT);
        }

        public async catImage() {
            return this.animalImage(Animals.CAT);
        }

        public async catFact() {
            return this.animalFact(Animals.CAT);
        }

        public async panda() {
            return this.animal(Animals.PANDA);
        }

        public async pandaImage() {
            return this.animalImage(Animals.PANDA);
        }

        public async pandaFact() {
            return this.animalFact(Animals.PANDA);
        }

        public async fox() {
            return this.animal(Animals.FOX);
        }

        public async foxImage() {
            return this.animalImage(Animals.FOX);
        }

        public async foxFact() {
            return this.animalFact(Animals.FOX);
        }

        public async redPanda() {
            return this.animal(Animals.RED_PANDA);
        }

        public async redPandaImage() {
            return this.animalImage(Animals.RED_PANDA);
        }

        public async redPandaFact() {
            return this.animalFact(Animals.RED_PANDA);
        }

        public async koala() {
            return this.animal(Animals.KOALA);
        }

        public async koalaImage() {
            return this.animalImage(Animals.KOALA);
        }

        public async koalaFact() {
            return this.animalFact(Animals.KOALA);
        }

        public async bird() {
            return this.animal(Animals.BIRD);
        }

        public async birdImage() {
            return this.animalImage(Animals.BIRD);
        }

        public async birdFact() {
            return this.animalFact(Animals.BIRD);
        }

        public async raccoon() {
            return this.animal(Animals.RACCOON);
        }

        public async raccoonImage() {
            return this.animalImage(Animals.RACCOON);
        }

        public async raccoonFact() {
            return this.animalFact(Animals.RACCOON);
        }

        public async kangaroo() {
            return this.animal(Animals.KANGAROO);
        }

        public async kangarooImage() {
            return this.animalImage(Animals.KANGAROO);
        }

        public async kangarooFact() {
            return this.animalFact(Animals.KANGAROO);
        }

        public async whale() {
            return this.animal(Animals.WHALE);
        }

        public async whaleFact() {
            return this.animalFact(Animals.WHALE);
        }

        public async whaleImage() {
            return this.animalImage(Animals.WHALE);
        }

        public async anime(anime: Animes) {
            return this.get.json<AnimeImage>("/animu/:anime", {
                ":anime": anime,
            });
        }

        public async animeWink() {
            return this.anime(Animes.WINK);
        }

        public async animePat() {
            return this.anime(Animes.PAT);
        }

        public async animeHug() {
            return this.anime(Animes.HUG);
        }

        public async animeFacePalm() {
            return this.anime(Animes.FACE_PALM);
        }

        public async lyrics(title: string, cancer?: unknown) {
            return this.get.json<Lyrics | Error>("/lyrics", {
                title,
                cancer,
            });
        }

        public async base64Encode(encode: string) {
            return this.get.json<Base64Encode>("/base64", {
                encode,
            });
        }

        public async base64Decode(decode: string) {
            return this.get.json<Base64Decode>("/base64", {
                decode,
            });
        }

        public async binaryEncode(encode: string) {
            return this.get.json<BinaryEncode>("/binary", {
                encode,
            });
        }

        public async binaryDecode(decode: string) {
            return this.get.json<BinaryDecode>("/binary", {
                decode,
            });
        }

        public async joke() {
            return this.get.json<Joke>("/joke");
        }

        public async pokemon(pokemon: string) {
            return this.get.json<Pokemon | Error>("/pokemon", {
                pokemon,
            });
        }

        public async minecraft(username: string) {
            return this.get.json<Minecraft | Error>("/minecraft", {
                username,
            });
        }

        public async meme() {
            return this.get.json<Meme>("/meme");
        }

        public async discordBotToken(id: string) {
            return this.get.json<DiscordBotToken>("/bottoken", {
                id,
            });
        }

        public async canvas(
            action: Canvas,
            avatar?: string,
            options: Record<string, any> = {}
        ) {
            return this.get.arrayBuffer("/canvas/:action", {
                ":action": action,
                avatar,
                ...options,
            });
        }

        public async gay(avatar: string) {
            return this.canvas(CanvasOverlay.GAY, avatar);
        }

        public async glass(avatar: string) {
            return this.canvas(CanvasOverlay.GLASS, avatar);
        }

        public async wasted(avatar: string) {
            return this.canvas(CanvasOverlay.WASTED, avatar);
        }

        public async missionPassed(avatar: string) {
            return this.canvas(CanvasOverlay.MISSION_PASSED, avatar);
        }

        public async jail(avatar: string) {
            return this.canvas(CanvasOverlay.JAIL, avatar);
        }

        public async comrade(avatar: string) {
            return this.canvas(CanvasOverlay.COMRADE, avatar);
        }

        public async triggered(avatar: string) {
            return this.canvas(CanvasOverlay.TRIGGERED, avatar);
        }

        public async greyscale(avatar: string) {
            return this.canvas(CanvasFilter.GREYSCALE, avatar);
        }

        public async invert(avatar: string) {
            return this.canvas(CanvasFilter.INVERT, avatar);
        }

        public async invertGreyscale(avatar: string) {
            return this.canvas(CanvasFilter.INVERT_GREYSCALE, avatar);
        }

        public async brightness(avatar: string, brightness?: number) {
            return this.canvas(CanvasFilter.BRIGHTNESS, avatar, {
                brightness,
            });
        }

        public async threshold(avatar: string, threshold?: number) {
            return this.canvas(CanvasFilter.THRESHOLD, avatar, {
                threshold,
            });
        }

        public async sepia(avatar: string) {
            return this.canvas(CanvasFilter.SEPIA, avatar);
        }

        public async red(avatar: string) {
            return this.canvas(CanvasFilter.RED, avatar);
        }

        public async green(avatar: string) {
            return this.canvas(CanvasFilter.GREEN, avatar);
        }

        public async blue(avatar: string) {
            return this.canvas(CanvasFilter.BLUE, avatar);
        }

        public async blurple(avatar: string) {
            return this.canvas(CanvasFilter.BLURPLE, avatar);
        }

        public async blurpleNew(avatar: string) {
            return this.canvas(CanvasFilter.BLURPLE_NEW, avatar);
        }

        public async color(avatar: string, color: number) {
            return this.canvas(CanvasFilter.COLOR, avatar, {
                color,
            });
        }

        public async pixelate(avatar: string) {
            return this.canvas(CanvasMisc.PIXELATE, avatar);
        }

        public async blur(avatar: string) {
            return this.canvas(CanvasMisc.BLUR, avatar);
        }

        public async fakeYoutubeComment(
            username: string,
            comment: string,
            avatar: string
        ) {
            return this.canvas(CanvasMisc.FAKE_YOUTUBE_COMMENT, avatar, {
                username,
                comment,
            });
        }

        public async fakeTweet(
            username: string,
            displayname: string,
            avatar: string,
            comment: string
        ) {
            return this.canvas(CanvasMisc.FAKE_TWEET, avatar, {
                username,
                displayname,
                comment,
            });
        }

        public async itsSoStupid(avatar: string, text: string) {
            return this.canvas(CanvasMisc.ITS_SO_STUPID, avatar, {
                dog: text,
            });
        }

        public async simpCard(avatar: string) {
            return this.canvas(CanvasMisc.SIMP_CARD, avatar);
        }

        public async horny(avatar: string) {
            return this.canvas(CanvasMisc.HORNY, avatar);
        }

        public async lolice(avatar: string) {
            return this.canvas(CanvasMisc.LOLI_POLICE, avatar);
        }

        public async colorViewer(hex: number) {
            return this.canvas(CanvasMisc.COLOR_VIEWER, undefined, {
                hex,
            });
        }

        public async rgbToHex(r: number, g: number, b: number) {
            return this.canvas(CanvasMisc.RGB_TO_HEX, undefined, {
                rgb: `${r},${g},${b}`,
            });
        }

        public async hexToRgb(hex: number) {
            return this.canvas(CanvasMisc.HEX_TO_RGB, undefined, {
                hex,
            });
        }

        public async lgbtBorder(avatar: string) {
            return this.canvas(CanvasMisc.LGBT_BORDER, avatar);
        }

        public async pansexualBorder(avatar: string) {
            return this.canvas(CanvasMisc.PANSEXUAL_BORDER, avatar);
        }

        public async lesbianBorder(avatar: string) {
            return this.canvas(CanvasMisc.LESBIAN_BORDER, avatar);
        }

        public async bisexualBorder(avatar: string) {
            return this.canvas(CanvasMisc.BISEXUAL_BORDER, avatar);
        }

        public async transgenderBorder(avatar: string) {
            return this.canvas(CanvasMisc.TRANSGENDER_BORDER, avatar);
        }
    }
}
