"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rqft = void 0;
const requester_1 = require("../lib/requester");
class Rqft extends requester_1.Requester {
    constructor() {
        super(Rqft.Uri);
    }
    async origin() {
        return this.json(Rqft.Methods.Origin);
    }
    async endpoints() {
        return this.json(Rqft.Methods.Endpoints);
    }
    async tagsList() {
        return this.json(Rqft.Methods.TagsList);
    }
    async tagsInspect() {
        return this.json(Rqft.Methods.TagsInspect);
    }
    async tagsGet(key) {
        return this.json(Rqft.Methods.TagsGet, { ':key': key });
    }
    async tagsSearch(query) {
        return this.json(Rqft.Methods.TagsSearch, { ':query': query });
    }
    async tagsPost(key, value) {
        return this.json(Rqft.Methods.TagsPost, { ':key': key, value });
    }
    async tagsDelete(key) {
        return this.json(Rqft.Methods.TagsDelete, { ':key': key });
    }
    async imageAverageColor(url) {
        return this.buffer(Rqft.Methods.ImageAverageColor, { url });
    }
    async imageBrightness(url, amount, scale = false) {
        return this.buffer(Rqft.Methods.ImageBrightness, {
            ':amount': amount,
            scale,
            url,
        });
    }
    async imageColor(size, color) {
        return this.buffer(Rqft.Methods.ImageColor, {
            ':size': size,
            ':color': color,
        });
    }
    async imageFisheye(url, amount) {
        return this.buffer(Rqft.Methods.ImageFisheye, {
            ':amount': amount,
            url,
        });
    }
    async imageMirror(url, method = Rqft.MirrorMethods.Left) {
        return this.buffer(Rqft.Methods.ImageMirror, { url, method });
    }
    imageInvert(url, method = Rqft.InvertMethods.Invert) {
        return this.buffer(Rqft.Methods.ImageInvert, {
            ':method': method,
            url,
        });
    }
    async imageResize(url, size) {
        return this.buffer(Rqft.Methods.ImageResize, { ':size': size, url });
    }
    async imageRotate(url, deg) {
        return this.buffer(Rqft.Methods.ImageRotate, { ':deg': deg, url });
    }
    async imageSaturation(url, amount, scale = false) {
        return this.buffer(Rqft.Methods.ImageSaturation, {
            ':amount': amount,
            url,
            scale,
        });
    }
    async imageSpin(url) {
        return this.buffer(Rqft.Methods.ImageSpin, { url });
    }
    async imageTilt(url, amount = 7) {
        return this.buffer(Rqft.Methods.ImageTilt, { ':amount': amount, url });
    }
    async audioVolume(url, amount) {
        return this.buffer(Rqft.Methods.AudioVolume, {
            ':amount': amount,
            url,
        });
    }
    async audioPitch(url, amount) {
        return this.buffer(Rqft.Methods.AudioPitch, {
            ':amount': amount,
            url,
        });
    }
    async audioExtract(url) {
        return this.buffer(Rqft.Methods.AudioExtract, {
            url,
        });
    }
    async textConvert(data, conversion, method = Rqft.ConversionMethods.Encode) {
        return this.json(Rqft.Methods.TextConvert, {
            ':conversion': conversion,
            ':method': method,
            data,
        });
    }
}
exports.Rqft = Rqft;
(function (Rqft) {
    Rqft.Uri = 'https://api.clancy.lol/';
    let Methods;
    (function (Methods) {
        Methods["Wombo"] = "GET /wombo/:style/:query";
        Methods["Origin"] = "GET /origin";
        Methods["Endpoints"] = "GET /endpoints";
        Methods["TagsList"] = "GET /tags/list";
        Methods["TagsInspect"] = "GET /tags/inspect";
        Methods["TagsGet"] = "GET /tags/:key";
        Methods["TagsSearch"] = "GET /tags/search/:query";
        Methods["TagsPost"] = "GET /tags/post/:key";
        Methods["TagsDelete"] = "GET /tags/delete/:key";
        Methods["ImageAverageColor"] = "GET /image/average-color";
        Methods["ImageBrightness"] = "GET /image/brightness/:amount";
        Methods["ImageColor"] = "GET /image/color/:size/:color";
        Methods["ImageFisheye"] = "GET /image/fisheye/:amount";
        Methods["ImageMirror"] = "GET /image/mirror";
        Methods["ImageInvert"] = "GET /image/invert/:method";
        Methods["ImageResize"] = "GET /image/resize/:size";
        Methods["ImageRotate"] = "GET /image/rotate/:deg";
        Methods["ImageSaturation"] = "GET /image/saturation/:amount";
        Methods["ImageSpin"] = "GET /image/spin";
        Methods["ImageTilt"] = "GET /image/tilt/:amount";
        Methods["AudioVolume"] = "GET /audio/volume/:amount";
        Methods["AudioPitch"] = "GET /audio/pitch/:amount";
        Methods["AudioExtract"] = "GET /audio/extract";
        Methods["TextConvert"] = "GET /text/:conversion/:method";
        Methods["TextEmojify"] = "GET /text/emojify";
        Methods["TodosList"] = "GET /todos/list/:userId";
        Methods["TodosGet"] = "GET /todos/get/:userId/:id";
        Methods["TodosSearch"] = "GET /todos/search/:userId/:query";
        Methods["TodosPost"] = "GET /todos/post/:userId";
        Methods["TodosDelete"] = "GET /todos/delete/:userId/:id";
        Methods["PixelInspect"] = "GET /pixel/inspect";
        Methods["PixelTimelapse"] = "GEt /pixel/timelapse/:frame";
        Methods["Graph"] = "/graph";
        Methods["Math"] = "/math";
        Methods["GenerateGif"] = "/generate/gif/:frames";
        Methods["KvRead"] = "/kv/r/:guildId";
        Methods["KvWrite"] = "/kv/w/:guildId";
    })(Methods = Rqft.Methods || (Rqft.Methods = {}));
    let MirrorMethods;
    (function (MirrorMethods) {
        MirrorMethods["Left"] = "LEFT";
        MirrorMethods["Right"] = "RIGHT";
        MirrorMethods["Top"] = "TOP";
        MirrorMethods["Bottom"] = "BOTTOM";
    })(MirrorMethods = Rqft.MirrorMethods || (Rqft.MirrorMethods = {}));
    let InvertMethods;
    (function (InvertMethods) {
        InvertMethods["Invert"] = "invert";
        InvertMethods["Hue"] = "hue";
        InvertMethods["Saturation"] = "saturation";
        InvertMethods["Value"] = "value";
    })(InvertMethods = Rqft.InvertMethods || (Rqft.InvertMethods = {}));
    let ConversionMethods;
    (function (ConversionMethods) {
        ConversionMethods["Encode"] = "encode";
        ConversionMethods["Decode"] = "decode";
    })(ConversionMethods = Rqft.ConversionMethods || (Rqft.ConversionMethods = {}));
    let Conversion;
    (function (Conversion) {
        Conversion["Base64"] = "base64";
        Conversion["Binary"] = "binary";
        Conversion["Hex"] = "hex";
        Conversion["Caesar"] = "caesar";
    })(Conversion = Rqft.Conversion || (Rqft.Conversion = {}));
    let ResultState;
    (function (ResultState) {
        ResultState["OK"] = "ok";
        ResultState["ERROR"] = "error";
    })(ResultState = Rqft.ResultState || (Rqft.ResultState = {}));
})(Rqft = exports.Rqft || (exports.Rqft = {}));
