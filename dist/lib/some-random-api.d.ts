import { Pariah } from "../pariah";
export declare module SomeRandomApi {
    const Url: URL;
    interface Fact {
        fact: string;
    }
    interface Image {
        link: string;
    }
    interface Animal extends Fact, Image {
    }
    enum Animals {
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
        PIKACHU = "pikachu"
    }
    interface AnimeImage {
        link: string;
    }
    enum Animes {
        WINK = "wink",
        PAT = "pat",
        HUG = "hug",
        FACE_PALM = "face-palm"
    }
    interface Lyrics {
        title: string;
        author: string;
        lyrics: string;
        thumbnail: GeniusLink;
        links: GeniusLink;
        disclaimer: string;
    }
    interface GeniusLink {
        genius: string;
    }
    interface Error {
        error: string;
    }
    interface Base64Encode {
        base64: string;
    }
    interface Base64Decode {
        text: string;
    }
    interface BinaryEncode {
        binary: string;
    }
    interface BinaryDecode {
        text: string;
    }
    interface Joke {
        joke: string;
    }
    interface Pokemon {
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
    interface PokemonStats {
        hp: string;
        attack: string;
        defense: string;
        sp_atk: string;
        sp_def: string;
        speed: string;
        total: string;
    }
    interface PokemonFamily {
        evolutionStage: number;
        evolutionLine: Array<string>;
    }
    type PokemonSprite = `http://i.some-random-api.ml/pokemon/${string}.${"png" | "gif"}`;
    interface PokemonSprites {
        normal: PokemonSprite;
        animated: PokemonSprite;
    }
    enum PokemonType {
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
        FAIRY = "Fairy"
    }
    interface Minecraft {
        username: string;
        uuid: string;
        name_history: Array<MinecraftName>;
    }
    interface MinecraftName {
        name: string;
        changedToAt: "Original Name" | `${number}/${number}/${number}`;
    }
    interface Meme extends Image {
        id: number;
        caption: string;
        category: MemeCategory;
    }
    enum MemeCategory {
        MATH = "math",
        RANDOM = "random",
        SUPERHERO = "superhero",
        ANIME = "anime"
    }
    interface DiscordBotToken {
        token: string;
    }
    enum CanvasOverlay {
        GAY = "gay",
        GLASS = "glass",
        WASTED = "wasted",
        MISSION_PASSED = "passed",
        JAIL = "jail",
        COMRADE = "comrade",
        TRIGGERED = "triggered"
    }
    enum CanvasFilter {
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
        COLOR = "color"
    }
    enum CanvasMisc {
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
        TRANSGENDER_BORDER = "transgender"
    }
    type Canvas = CanvasOverlay | CanvasFilter | CanvasMisc;
    class API extends Pariah {
        constructor();
        animal(animal: Animals): Promise<Partial<Animal>>;
        animalImage(animal: Animals): Promise<string | undefined>;
        animalFact(animal: Animals): Promise<string | undefined>;
        dog(): Promise<Partial<Animal>>;
        dogImage(): Promise<string | undefined>;
        dogFact(): Promise<string | undefined>;
        cat(): Promise<Partial<Animal>>;
        catImage(): Promise<string | undefined>;
        catFact(): Promise<string | undefined>;
        panda(): Promise<Partial<Animal>>;
        pandaImage(): Promise<string | undefined>;
        pandaFact(): Promise<string | undefined>;
        fox(): Promise<Partial<Animal>>;
        foxImage(): Promise<string | undefined>;
        foxFact(): Promise<string | undefined>;
        redPanda(): Promise<Partial<Animal>>;
        redPandaImage(): Promise<string | undefined>;
        redPandaFact(): Promise<string | undefined>;
        koala(): Promise<Partial<Animal>>;
        koalaImage(): Promise<string | undefined>;
        koalaFact(): Promise<string | undefined>;
        bird(): Promise<Partial<Animal>>;
        birdImage(): Promise<string | undefined>;
        birdFact(): Promise<string | undefined>;
        raccoon(): Promise<Partial<Animal>>;
        raccoonImage(): Promise<string | undefined>;
        raccoonFact(): Promise<string | undefined>;
        kangaroo(): Promise<Partial<Animal>>;
        kangarooImage(): Promise<string | undefined>;
        kangarooFact(): Promise<string | undefined>;
        whale(): Promise<Partial<Animal>>;
        whaleFact(): Promise<string | undefined>;
        whaleImage(): Promise<string | undefined>;
        anime(anime: Animes): Promise<import("..").Data<AnimeImage>>;
        animeWink(): Promise<import("..").Data<AnimeImage>>;
        animePat(): Promise<import("..").Data<AnimeImage>>;
        animeHug(): Promise<import("..").Data<AnimeImage>>;
        animeFacePalm(): Promise<import("..").Data<AnimeImage>>;
        lyrics(title: string, cancer?: unknown): Promise<import("..").Data<Lyrics | Error>>;
        base64Encode(encode: string): Promise<import("..").Data<Base64Encode>>;
        base64Decode(decode: string): Promise<import("..").Data<Base64Decode>>;
        binaryEncode(encode: string): Promise<import("..").Data<BinaryEncode>>;
        binaryDecode(decode: string): Promise<import("..").Data<BinaryDecode>>;
        joke(): Promise<import("..").Data<Joke>>;
        pokemon(pokemon: string): Promise<import("..").Data<Error | Pokemon>>;
        minecraft(username: string): Promise<import("..").Data<Error | Minecraft>>;
        meme(): Promise<import("..").Data<Meme>>;
        discordBotToken(id: string): Promise<import("..").Data<DiscordBotToken>>;
        canvas(action: Canvas, avatar?: string, options?: Record<string, any>): Promise<import("..").Data<ArrayBuffer>>;
        gay(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        glass(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        wasted(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        missionPassed(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        jail(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        comrade(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        triggered(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        greyscale(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        invert(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        invertGreyscale(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        brightness(avatar: string, brightness?: number): Promise<import("..").Data<ArrayBuffer>>;
        threshold(avatar: string, threshold?: number): Promise<import("..").Data<ArrayBuffer>>;
        sepia(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        red(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        green(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        blue(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        blurple(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        blurpleNew(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        color(avatar: string, color: number): Promise<import("..").Data<ArrayBuffer>>;
        pixelate(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        blur(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        fakeYoutubeComment(username: string, comment: string, avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        fakeTweet(username: string, displayname: string, avatar: string, comment: string): Promise<import("..").Data<ArrayBuffer>>;
        itsSoStupid(avatar: string, text: string): Promise<import("..").Data<ArrayBuffer>>;
        simpCard(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        horny(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        lolice(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        colorViewer(hex: number): Promise<import("..").Data<ArrayBuffer>>;
        rgbToHex(r: number, g: number, b: number): Promise<import("..").Data<ArrayBuffer>>;
        hexToRgb(hex: number): Promise<import("..").Data<ArrayBuffer>>;
        lgbtBorder(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        pansexualBorder(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        lesbianBorder(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        bisexualBorder(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
        transgenderBorder(avatar: string): Promise<import("..").Data<ArrayBuffer>>;
    }
}
