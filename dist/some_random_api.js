"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeRandomAPI = void 0;
const base_1 = require("./lib/base");
class SomeRandomAPI {
    raw;
    constructor() {
        this.raw = new base_1.Pariah({ baseUrl: "https://some-random-api.ml" });
    }
    async animal(endpoint) {
        return this.raw.getJSON(`/animal/${endpoint}`);
    }
    async animalFact(endpoint) {
        return this.raw.getJSON(`/fact/${endpoint}`);
    }
    async animalImage(endpoint) {
        return this.raw.getJSON(`/img/${endpoint}`);
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
    async animeImage(endpoint) {
        return this.raw.getJSON(`/animu${endpoint}`);
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
    async lyrics(title) {
        return this.raw.getJSON(`/lyrics${this.raw.toUrlParams(title)}`);
    }
    async base64Encode(encode) {
        return this.raw.getJSON(`/base64${this.raw.toUrlParams(encode)}`);
    }
    async base64Decode(decode) {
        return this.raw.getJSON(`/base64${this.raw.toUrlParams(decode)}`);
    }
    async joke() {
        return this.raw.getJSON("/joke");
    }
    async pokedex(pokemon) {
        return this.raw.getJSON(`/pokedex${this.raw.toUrlParams(pokemon)}`);
    }
    async minecraft(username) {
        return this.raw.getJSON(`/mc${this.raw.toUrlParams(username)}`);
    }
    async meme() {
        return this.raw.getJSON("/meme");
    }
    async discordBotToken(id) {
        return this.raw.getJSON(`/bottoken${this.raw.toUrlParams(id)}`);
    }
    async chatbot(message, key) {
        return this.raw.getJSON(`/chatbot${this.raw.toUrlParams({ message, key })}`);
    }
    async canvas(endpoint, params = {}) {
        return this.raw.getArrayBuffer(`/canvas${endpoint}${this.raw.toUrlParams(params)}`);
    }
    async gay(avatar) {
        return this.canvas(`/gay`, { avatar });
    }
    async glass(avatar) {
        return this.canvas(`/glass`, { avatar });
    }
    async wasted(avatar) {
        return this.canvas(`/wasted`, { avatar });
    }
    async missionPassed(avatar) {
        return this.canvas(`/passed`, { avatar });
    }
    async jail(avatar) {
        return this.canvas(`/jail`, { avatar });
    }
    async comrade(avatar) {
        return this.canvas(`/comrade`, { avatar });
    }
    async triggered(avatar) {
        return this.canvas(`/triggered`, { avatar });
    }
    async greyscale(avatar) {
        return this.canvas("/greyscale", { avatar });
    }
    async invert(avatar) {
        return this.canvas("/invert", { avatar });
    }
    async invertGreyscale(avatar) {
        return this.canvas("/invertgreyscale", { avatar });
    }
    async brightness(avatar, brightness) {
        return this.canvas("/brightness", { avatar, brightness });
    }
    async threshold(avatar, threshold) {
        return this.canvas("/threshold", { avatar, threshold });
    }
    async sepia(avatar) {
        return this.canvas("/sepia", { avatar });
    }
    async red(avatar) {
        return this.canvas("/red", { avatar });
    }
    async green(avatar) {
        return this.canvas("/green", { avatar });
    }
    async blue(avatar) {
        return this.canvas("/blue", { avatar });
    }
    async blurple(avatar) {
        return this.canvas("/blurple", { avatar });
    }
    async blurpleNew(avatar) {
        return this.canvas("/blurple2", { avatar });
    }
    async color(avatar, color) {
        return this.canvas("/color", { avatar, color });
    }
    async pixelate(avatar) {
        return this.canvas("/pixelate", { avatar });
    }
    async blur(avatar) {
        return this.canvas("/blur", { avatar });
    }
    async fakeYoutubeComment(username, comment, avatar) {
        return this.canvas("/youtube-comment", { username, comment, avatar });
    }
    async fakeTweet(username, displayname, avatar, comment) {
        return this.canvas("/tweet", { username, displayname, avatar, comment });
    }
    async itsSoStupid(avatar, dog) {
        return this.canvas("/its-so-stupid", { avatar, dog });
    }
    async simpCard(avatar) {
        return this.canvas("/simpcard", { avatar });
    }
    async horny(avatar) {
        return this.canvas("/horny", { avatar });
    }
    async loliPolice(avatar) {
        return this.canvas("/lolice", { avatar });
    }
    async colorViewer(color) {
        return this.canvas("/colorviewer", { color });
    }
    async hex(r, g, b) {
        return this.raw.getJSON(`/hex?rgb=${[r, g, b].join(",")}`);
    }
    async rgb(color) {
        this.raw.getJSON(`/rgb${this.raw.toUrlParams(color)}`);
    }
}
exports.SomeRandomAPI = SomeRandomAPI;
