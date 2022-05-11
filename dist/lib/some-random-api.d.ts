import { Pariah } from "../pariah";
export declare module SomeRandomApi {
    const Url: URL;
    interface Fact {
        fact: string;
    }
    interface Image {
        image: string;
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
        animal(animal: Animals): Promise<Animal>;
        animalImage(animal: Animals): Promise<string>;
        animalFact(animal: Animals): Promise<string>;
        dog(): Promise<Animal>;
        dogImage(): Promise<string>;
        dogFact(): Promise<string>;
        cat(): Promise<Animal>;
        catImage(): Promise<string>;
        catFact(): Promise<string>;
        panda(): Promise<Animal>;
        pandaImage(): Promise<string>;
        pandaFact(): Promise<string>;
        fox(): Promise<Animal>;
        foxImage(): Promise<string>;
        foxFact(): Promise<string>;
        redPanda(): Promise<Animal>;
        redPandaImage(): Promise<string>;
        redPandaFact(): Promise<string>;
        koala(): Promise<Animal>;
        koalaImage(): Promise<string>;
        koalaFact(): Promise<string>;
        bird(): Promise<Animal>;
        birdImage(): Promise<string>;
        birdFact(): Promise<string>;
        raccoon(): Promise<Animal>;
        raccoonImage(): Promise<string>;
        raccoonFact(): Promise<string>;
        kangaroo(): Promise<Animal>;
        kangarooImage(): Promise<string>;
        kangarooFact(): Promise<string>;
        whale(): Promise<Animal>;
        whaleFact(): Promise<string>;
        whaleImage(): Promise<string>;
        anime(anime: Animes): Promise<AnimeImage>;
        animeImage(anime: Animes): Promise<string>;
        animeWink(): Promise<AnimeImage>;
        animeWinkImage(): Promise<string>;
        animePat(): Promise<AnimeImage>;
        animePatImage(): Promise<string>;
        animeHug(): Promise<AnimeImage>;
        animeHugImage(): Promise<string>;
        animeFacePalm(): Promise<AnimeImage>;
        animeFacePalmImage(): Promise<string>;
        lyrics(title: string, cancer?: unknown): Promise<Lyrics | Error>;
        base64Encode(encode: string): Promise<Base64Encode>;
        base64Decode(decode: string): Promise<Base64Decode>;
        binaryEncode(encode: string): Promise<BinaryEncode>;
        binaryDecode(decode: string): Promise<BinaryDecode>;
        joke(): Promise<Joke>;
        pokemon(pokemon: string): Promise<Error | Pokemon>;
        minecraft(username: string): Promise<Error | Minecraft>;
        meme(): Promise<Meme>;
        discordBotToken(id: string): Promise<DiscordBotToken>;
        canvas(action: Canvas, avatar?: string, options?: Record<string, any>): Promise<ArrayBuffer>;
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
        color(avatar: string, color: number): Promise<ArrayBuffer>;
        pixelate(avatar: string): Promise<ArrayBuffer>;
        blur(avatar: string): Promise<ArrayBuffer>;
        fakeYoutubeComment(username: string, comment: string, avatar: string): Promise<ArrayBuffer>;
        fakeTweet(username: string, displayname: string, avatar: string, comment: string): Promise<ArrayBuffer>;
        itsSoStupid(avatar: string, text: string): Promise<ArrayBuffer>;
        simpCard(avatar: string): Promise<ArrayBuffer>;
        horny(avatar: string): Promise<ArrayBuffer>;
        lolice(avatar: string): Promise<ArrayBuffer>;
        colorViewer(hex: number): Promise<ArrayBuffer>;
        rgbToHex(r: number, g: number, b: number): Promise<ArrayBuffer>;
        hexToRgb(hex: number): Promise<ArrayBuffer>;
        lgbtBorder(avatar: string): Promise<ArrayBuffer>;
        pansexualBorder(avatar: string): Promise<ArrayBuffer>;
        lesbianBorder(avatar: string): Promise<ArrayBuffer>;
        bisexualBorder(avatar: string): Promise<ArrayBuffer>;
        transgenderBorder(avatar: string): Promise<ArrayBuffer>;
    }
}
