"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeRandomApi = void 0;
const pariah_1 = require("../pariah");
var SomeRandomApi;
(function (SomeRandomApi) {
    SomeRandomApi.Url = new URL("https://some-random-api.ml/");
    let Animals;
    (function (Animals) {
        Animals["DOG"] = "dog";
        Animals["CAT"] = "cat";
        Animals["PANDA"] = "panda";
        Animals["FOX"] = "fox";
        Animals["RED_PANDA"] = "red_panda";
        Animals["KOALA"] = "koala";
        Animals["BIRD"] = "birb";
        Animals["RACCOON"] = "raccoon";
        Animals["KANGAROO"] = "kangaroo";
        Animals["WHALE"] = "whale";
        Animals["PIKACHU"] = "pikachu";
    })(Animals = SomeRandomApi.Animals || (SomeRandomApi.Animals = {}));
    let Animes;
    (function (Animes) {
        Animes["WINK"] = "wink";
        Animes["PAT"] = "pat";
        Animes["HUG"] = "hug";
        Animes["FACE_PALM"] = "face-palm";
    })(Animes = SomeRandomApi.Animes || (SomeRandomApi.Animes = {}));
    let PokemonType;
    (function (PokemonType) {
        PokemonType["NORMAL"] = "Normal";
        PokemonType["FIRE"] = "Fire";
        PokemonType["WATER"] = "Water";
        PokemonType["GRASS"] = "Grass";
        PokemonType["ELECTRIC"] = "Electric";
        PokemonType["ICE"] = "Ice";
        PokemonType["FIGHTING"] = "Fighting";
        PokemonType["POISON"] = "Poison";
        PokemonType["GROUND"] = "Ground";
        PokemonType["FLYING"] = "Flying";
        PokemonType["PSYCHIC"] = "Psychic";
        PokemonType["BUG"] = "Bug";
        PokemonType["ROCK"] = "Rock";
        PokemonType["GHOST"] = "Ghost";
        PokemonType["DARK"] = "Dark";
        PokemonType["DRAGON"] = "Dragon";
        PokemonType["STEEL"] = "Steel";
        PokemonType["FAIRY"] = "Fairy";
    })(PokemonType = SomeRandomApi.PokemonType || (SomeRandomApi.PokemonType = {}));
    let MemeCategory;
    (function (MemeCategory) {
        MemeCategory["MATH"] = "math";
        MemeCategory["RANDOM"] = "random";
        MemeCategory["SUPERHERO"] = "superhero";
        MemeCategory["ANIME"] = "anime";
    })(MemeCategory = SomeRandomApi.MemeCategory || (SomeRandomApi.MemeCategory = {}));
    let CanvasOverlay;
    (function (CanvasOverlay) {
        CanvasOverlay["GAY"] = "gay";
        CanvasOverlay["GLASS"] = "glass";
        CanvasOverlay["WASTED"] = "wasted";
        CanvasOverlay["MISSION_PASSED"] = "passed";
        CanvasOverlay["JAIL"] = "jail";
        CanvasOverlay["COMRADE"] = "comrade";
        CanvasOverlay["TRIGGERED"] = "triggered";
    })(CanvasOverlay = SomeRandomApi.CanvasOverlay || (SomeRandomApi.CanvasOverlay = {}));
    let CanvasFilter;
    (function (CanvasFilter) {
        CanvasFilter["GREYSCALE"] = "greyscale";
        CanvasFilter["INVERT"] = "invert";
        CanvasFilter["INVERT_GREYSCALE"] = "invertgreyscale";
        CanvasFilter["BRIGHTNESS"] = "brightness";
        CanvasFilter["THRESHOLD"] = "threshold";
        CanvasFilter["SEPIA"] = "sepia";
        CanvasFilter["RED"] = "red";
        CanvasFilter["GREEN"] = "green";
        CanvasFilter["BLUE"] = "blue";
        CanvasFilter["BLURPLE"] = "blurple";
        CanvasFilter["BLURPLE_NEW"] = "blurple2";
        CanvasFilter["COLOR"] = "color";
    })(CanvasFilter = SomeRandomApi.CanvasFilter || (SomeRandomApi.CanvasFilter = {}));
    let CanvasMisc;
    (function (CanvasMisc) {
        CanvasMisc["PIXELATE"] = "pixelate";
        CanvasMisc["BLUR"] = "blur";
        CanvasMisc["FAKE_YOUTUBE_COMMENT"] = "youtube-comment";
        CanvasMisc["FAKE_TWEET"] = "tweet";
        CanvasMisc["ITS_SO_STUPID"] = "its-so-stupid";
        CanvasMisc["SIMP_CARD"] = "simpcard";
        CanvasMisc["HORNY"] = "horny";
        CanvasMisc["LOLI_POLICE"] = "lolice";
        CanvasMisc["COLOR_VIEWER"] = "colorviewer";
        CanvasMisc["RGB_TO_HEX"] = "hex";
        CanvasMisc["HEX_TO_RGB"] = "rgb";
        CanvasMisc["LGBT_BORDER"] = "lgbt";
        CanvasMisc["PANSEXUAL_BORDER"] = "pansexual";
        CanvasMisc["NONBINARY_BORDER"] = "nonbinary";
        CanvasMisc["LESBIAN_BORDER"] = "lesbian";
        CanvasMisc["BISEXUAL_BORDER"] = "bisexual";
        CanvasMisc["TRANSGENDER_BORDER"] = "transgender";
    })(CanvasMisc = SomeRandomApi.CanvasMisc || (SomeRandomApi.CanvasMisc = {}));
    class API extends pariah_1.Pariah {
        constructor() {
            super(SomeRandomApi.Url);
        }
        async animal(animal) {
            const { payload: { fact } } = await this.get.json('/fact/:animal', { ":animal": animal });
            const { payload: { image } } = await this.get.json('/img/:animal', { ":animal": animal });
            return {
                fact,
                image,
            };
        }
        async animalImage(animal) {
            const payload = await this.animal(animal);
            return payload.image;
        }
        async animalFact(animal) {
            const payload = await this.animal(animal);
            return payload.fact;
        }
        async dog() {
            return this.animal(Animals.DOG);
        }
        async dogImage() {
            return this.animalImage(Animals.DOG);
        }
        async dogFact() {
            return this.animalFact(Animals.DOG);
        }
        async cat() {
            return this.animal(Animals.CAT);
        }
        async catImage() {
            return this.animalImage(Animals.CAT);
        }
        async catFact() {
            return this.animalFact(Animals.CAT);
        }
        async panda() {
            return this.animal(Animals.PANDA);
        }
        async pandaImage() {
            return this.animalImage(Animals.PANDA);
        }
        async pandaFact() {
            return this.animalFact(Animals.PANDA);
        }
        async fox() {
            return this.animal(Animals.FOX);
        }
        async foxImage() {
            return this.animalImage(Animals.FOX);
        }
        async foxFact() {
            return this.animalFact(Animals.FOX);
        }
        async redPanda() {
            return this.animal(Animals.RED_PANDA);
        }
        async redPandaImage() {
            return this.animalImage(Animals.RED_PANDA);
        }
        async redPandaFact() {
            return this.animalFact(Animals.RED_PANDA);
        }
        async koala() {
            return this.animal(Animals.KOALA);
        }
        async koalaImage() {
            return this.animalImage(Animals.KOALA);
        }
        async koalaFact() {
            return this.animalFact(Animals.KOALA);
        }
        async bird() {
            return this.animal(Animals.BIRD);
        }
        async birdImage() {
            return this.animalImage(Animals.BIRD);
        }
        async birdFact() {
            return this.animalFact(Animals.BIRD);
        }
        async raccoon() {
            return this.animal(Animals.RACCOON);
        }
        async raccoonImage() {
            return this.animalImage(Animals.RACCOON);
        }
        async raccoonFact() {
            return this.animalFact(Animals.RACCOON);
        }
        async kangaroo() {
            return this.animal(Animals.KANGAROO);
        }
        async kangarooImage() {
            return this.animalImage(Animals.KANGAROO);
        }
        async kangarooFact() {
            return this.animalFact(Animals.KANGAROO);
        }
        async whale() {
            return this.animal(Animals.WHALE);
        }
        async whaleFact() {
            return this.animalFact(Animals.WHALE);
        }
        async whaleImage() {
            return this.animalImage(Animals.WHALE);
        }
        async anime(anime) {
            return this.get.json("/animu/:anime", {
                ":anime": anime,
            });
        }
        async animeWink() {
            return this.anime(Animes.WINK);
        }
        async animePat() {
            return this.anime(Animes.PAT);
        }
        async animeHug() {
            return this.anime(Animes.HUG);
        }
        async animeFacePalm() {
            return this.anime(Animes.FACE_PALM);
        }
        async lyrics(title, cancer) {
            return this.get.json("/lyrics", {
                title,
                cancer,
            });
        }
        async base64Encode(encode) {
            return this.get.json("/base64", {
                encode,
            });
        }
        async base64Decode(decode) {
            return this.get.json("/base64", {
                decode,
            });
        }
        async binaryEncode(encode) {
            return this.get.json("/binary", {
                encode,
            });
        }
        async binaryDecode(decode) {
            return this.get.json("/binary", {
                decode,
            });
        }
        async joke() {
            return this.get.json("/joke");
        }
        async pokemon(pokemon) {
            return this.get.json("/pokemon", {
                pokemon,
            });
        }
        async minecraft(username) {
            return this.get.json("/minecraft", {
                username,
            });
        }
        async meme() {
            return this.get.json("/meme");
        }
        async discordBotToken(id) {
            return this.get.json("/bottoken", {
                id,
            });
        }
        async canvas(action, avatar, options = {}) {
            return this.get.arrayBuffer("/canvas/:action", {
                ":action": action,
                avatar,
                ...options,
            });
        }
        async gay(avatar) {
            return this.canvas(CanvasOverlay.GAY, avatar);
        }
        async glass(avatar) {
            return this.canvas(CanvasOverlay.GLASS, avatar);
        }
        async wasted(avatar) {
            return this.canvas(CanvasOverlay.WASTED, avatar);
        }
        async missionPassed(avatar) {
            return this.canvas(CanvasOverlay.MISSION_PASSED, avatar);
        }
        async jail(avatar) {
            return this.canvas(CanvasOverlay.JAIL, avatar);
        }
        async comrade(avatar) {
            return this.canvas(CanvasOverlay.COMRADE, avatar);
        }
        async triggered(avatar) {
            return this.canvas(CanvasOverlay.TRIGGERED, avatar);
        }
        async greyscale(avatar) {
            return this.canvas(CanvasFilter.GREYSCALE, avatar);
        }
        async invert(avatar) {
            return this.canvas(CanvasFilter.INVERT, avatar);
        }
        async invertGreyscale(avatar) {
            return this.canvas(CanvasFilter.INVERT_GREYSCALE, avatar);
        }
        async brightness(avatar, brightness) {
            return this.canvas(CanvasFilter.BRIGHTNESS, avatar, {
                brightness,
            });
        }
        async threshold(avatar, threshold) {
            return this.canvas(CanvasFilter.THRESHOLD, avatar, {
                threshold,
            });
        }
        async sepia(avatar) {
            return this.canvas(CanvasFilter.SEPIA, avatar);
        }
        async red(avatar) {
            return this.canvas(CanvasFilter.RED, avatar);
        }
        async green(avatar) {
            return this.canvas(CanvasFilter.GREEN, avatar);
        }
        async blue(avatar) {
            return this.canvas(CanvasFilter.BLUE, avatar);
        }
        async blurple(avatar) {
            return this.canvas(CanvasFilter.BLURPLE, avatar);
        }
        async blurpleNew(avatar) {
            return this.canvas(CanvasFilter.BLURPLE_NEW, avatar);
        }
        async color(avatar, color) {
            return this.canvas(CanvasFilter.COLOR, avatar, {
                color,
            });
        }
        async pixelate(avatar) {
            return this.canvas(CanvasMisc.PIXELATE, avatar);
        }
        async blur(avatar) {
            return this.canvas(CanvasMisc.BLUR, avatar);
        }
        async fakeYoutubeComment(username, comment, avatar) {
            return this.canvas(CanvasMisc.FAKE_YOUTUBE_COMMENT, avatar, {
                username,
                comment,
            });
        }
        async fakeTweet(username, displayname, avatar, comment) {
            return this.canvas(CanvasMisc.FAKE_TWEET, avatar, {
                username,
                displayname,
                comment,
            });
        }
        async itsSoStupid(avatar, text) {
            return this.canvas(CanvasMisc.ITS_SO_STUPID, avatar, {
                dog: text,
            });
        }
        async simpCard(avatar) {
            return this.canvas(CanvasMisc.SIMP_CARD, avatar);
        }
        async horny(avatar) {
            return this.canvas(CanvasMisc.HORNY, avatar);
        }
        async lolice(avatar) {
            return this.canvas(CanvasMisc.LOLI_POLICE, avatar);
        }
        async colorViewer(hex) {
            return this.canvas(CanvasMisc.COLOR_VIEWER, undefined, {
                hex,
            });
        }
        async rgbToHex(r, g, b) {
            return this.canvas(CanvasMisc.RGB_TO_HEX, undefined, {
                rgb: `${r},${g},${b}`,
            });
        }
        async hexToRgb(hex) {
            return this.canvas(CanvasMisc.HEX_TO_RGB, undefined, {
                hex,
            });
        }
        async lgbtBorder(avatar) {
            return this.canvas(CanvasMisc.LGBT_BORDER, avatar);
        }
        async pansexualBorder(avatar) {
            return this.canvas(CanvasMisc.PANSEXUAL_BORDER, avatar);
        }
        async lesbianBorder(avatar) {
            return this.canvas(CanvasMisc.LESBIAN_BORDER, avatar);
        }
        async bisexualBorder(avatar) {
            return this.canvas(CanvasMisc.BISEXUAL_BORDER, avatar);
        }
        async transgenderBorder(avatar) {
            return this.canvas(CanvasMisc.TRANSGENDER_BORDER, avatar);
        }
    }
    SomeRandomApi.API = API;
})(SomeRandomApi = exports.SomeRandomApi || (exports.SomeRandomApi = {}));
