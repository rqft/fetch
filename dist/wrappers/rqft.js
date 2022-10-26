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
        return this.json(Rqft.Methods.ImageAverageColor, { url });
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
    async imageDeepfry(url, threshold = 0x80) {
        return this.buffer(Rqft.Methods.ImageDeepfry, {
            ':threshold': threshold,
            url,
        });
    }
    async imageDualXor(source, target) {
        return this.buffer(Rqft.Methods.ImageDualXor, { source, target });
    }
    async imageDualAnd(source, target) {
        return this.buffer(Rqft.Methods.ImageDualAnd, { source, target });
    }
    async imageDualOr(source, target) {
        return this.buffer(Rqft.Methods.ImageDualOr, { source, target });
    }
    async imageDualAdd(source, target) {
        return this.buffer(Rqft.Methods.ImageDualAdd, { source, target });
    }
    async imageDualSub(source, target) {
        return this.buffer(Rqft.Methods.ImageDualSub, { source, target });
    }
    async imageDualMul(source, target) {
        return this.buffer(Rqft.Methods.ImageDualMul, { source, target });
    }
    async imageDualDiv(source, target) {
        return this.buffer(Rqft.Methods.ImageDualDiv, { source, target });
    }
    async imageDualComposite(source, target) {
        return this.buffer(Rqft.Methods.ImageDualComposite, { source, target });
    }
    async imageDualOverlay(source, target) {
        return this.buffer(Rqft.Methods.ImageDualOverlay, { source, target });
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
    async textEmojify(data) {
        return this.json(Rqft.Methods.TextEmojify, { data });
    }
    async todosList(userId) {
        return this.json(Rqft.Methods.TodosList, { ':userId': userId });
    }
    async todosGet(userId, id) {
        return this.json(Rqft.Methods.TodosGet, {
            ':userId': userId,
            ':id': id,
        });
    }
    async todosSearch(userId, query) {
        return this.json(Rqft.Methods.TodosSearch, {
            ':userId': userId,
            ':query': query,
        });
    }
    async todosPost(userId, data) {
        return this.json(Rqft.Methods.TodosPost, { ':userId': userId, data });
    }
    async todosDelete(userId, id) {
        return this.json(Rqft.Methods.TodosDelete, {
            ':userId': userId,
            ':id': id,
        });
    }
    async pixelInspect() {
        return this.arrayBuffer(Rqft.Methods.PixelInspect);
    }
    async pixelTimelapse(frames) {
        return this.arrayBuffer(Rqft.Methods.PixelTimelapse, {
            ':frame': frames,
        });
    }
    async graph(options) {
        return await this.arrayBuffer(Rqft.Methods.Graph, options);
    }
    async math(expr) {
        return await this.json(Rqft.Methods.Math, { expr });
    }
    async generateGif(frames) {
        return await this.arrayBuffer(Rqft.Methods.GenerateGif, {
            ':frames': frames,
        });
    }
    async kvRead(guildId) {
        return await this.json(Rqft.Methods.KvRead, { ':guildId': guildId });
    }
    async kvWrite(guildId, data) {
        return await this.json(Rqft.Methods.KvWrite, {
            ':guildId': guildId,
            data: JSON.stringify(data),
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
        Methods["ImageDeepfry"] = "GET /image/deepfry/:threshold";
        Methods["ImageDualXor"] = "GET /image/dual/xor";
        Methods["ImageDualAnd"] = "GET /image/dual/and";
        Methods["ImageDualOr"] = "GET /image/dual/or";
        Methods["ImageDualAdd"] = "GET /image/dual/add";
        Methods["ImageDualSub"] = "GET /image/dual/sub";
        Methods["ImageDualMul"] = "GET /image/dual/mul";
        Methods["ImageDualDiv"] = "GET /image/dual/div";
        Methods["ImageDualComposite"] = "GET /image/dual/composite";
        Methods["ImageDualOverlay"] = "GET /image/dual/overlay";
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
        Methods["PixelTimelapse"] = "GET /pixel/timelapse/:frame";
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
