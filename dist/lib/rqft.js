"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jonathan = void 0;
const pariah_1 = require("../pariah");
var Jonathan;
(function (Jonathan) {
    Jonathan.Uri = new URL("https://api.clancy.lol/");
    let ConversionMethods;
    (function (ConversionMethods) {
        ConversionMethods["ENCODE"] = "encode";
        ConversionMethods["DECODE"] = "decode";
    })(ConversionMethods = Jonathan.ConversionMethods || (Jonathan.ConversionMethods = {}));
    let Conversion;
    (function (Conversion) {
        Conversion["BASE64"] = "base64";
        Conversion["BINARY"] = "binary";
        Conversion["HEX"] = "hex";
        Conversion["CAESAR"] = "caesar";
    })(Conversion = Jonathan.Conversion || (Jonathan.Conversion = {}));
    let MirrorMethods;
    (function (MirrorMethods) {
        MirrorMethods["LEFT"] = "LEFT";
        MirrorMethods["RIGHT"] = "RIGHT";
        MirrorMethods["TOP"] = "TOP";
        MirrorMethods["BOTTOM"] = "BOTTOM";
    })(MirrorMethods = Jonathan.MirrorMethods || (Jonathan.MirrorMethods = {}));
    let InvertMethods;
    (function (InvertMethods) {
        InvertMethods["INVERT"] = "invert";
        InvertMethods["INVERT_HUE"] = "hue";
        InvertMethods["INVERT_SATURATION"] = "saturation";
        InvertMethods["INVERT_VALUE"] = "value";
    })(InvertMethods = Jonathan.InvertMethods || (Jonathan.InvertMethods = {}));
    Jonathan.WomboStyles = {
        psychedelic: 21,
        surreal: 23,
        synthwave: 1,
        ghibli: 22,
        steampunk: 4,
        fantasy: 5,
        vibrant: 6,
        hd: 7,
        psychic: 9,
        darkfantasy: 10,
        mystical: 11,
        baroque: 13,
        etching: 14,
        sdali: 15,
        wuhtercuhler: 16,
        provenance: 17,
        moonwalker: 19,
        blacklight: 20,
        none: 3,
        ukiyoe: 2,
        rosegold: 18,
    };
    let ResultState;
    (function (ResultState) {
        ResultState["OK"] = "ok";
        ResultState["ERROR"] = "error";
    })(ResultState = Jonathan.ResultState || (Jonathan.ResultState = {}));
    class API extends pariah_1.Pariah {
        constructor() {
            super(Jonathan.Uri);
        }
        async authorized() {
            return await this.get.json("/authorized");
        }
        async origin() {
            return await this.get.json("/origin");
        }
        async tagGet(key) {
            return await this.get.json(`/tags/${key}`);
        }
        async tagPost(key, value) {
            return await this.post.json(`/tags/${key}`, {
                value,
            });
        }
        async tagDelete(key) {
            return await this.delete.json(`/tags/${key}`);
        }
        async tagList() {
            return await this.get.json("/tags/list");
        }
        async tagInspect() {
            return await this.get.json("/tags/inspect");
        }
        async tagSearch(query) {
            return await this.get.json("/tags/search/:query", {
                ":query": query,
            });
        }
        async todoGet(userId, id) {
            return await this.get.json("/todos/:userId/:id", {
                ":userId": userId,
                ":id": id,
            });
        }
        async todoPost(userId, data) {
            return await this.post.json("/todos/:userId", {
                ":userId": userId,
                data,
            });
        }
        async todoDelete(userId, id) {
            return await this.delete.json("/todos/:userId/:id", {
                ":userId": userId,
                ":id": id,
            });
        }
        async todoList(userId) {
            return await this.get.json("/todos/:userId", {
                ":userId": userId,
            });
        }
        async todoPut(userId, id, data) {
            return await this.put.json("/todos/:userId/:id", {
                ":userId": userId,
                ":id": id,
                data,
            });
        }
        async todoSearch(userId, query) {
            return await this.get.json("/todos/search/:userId/:query", {
                ":userId": userId,
                ":query": query,
            });
        }
        async imageMirror(url, method) {
            return await this.get.buffer("/image/mirror", { url, method });
        }
        async imageSpin(url) {
            return await this.get.buffer("/image/spin", { url });
        }
        async imageColor(size, color) {
            return await this.get.buffer("/image/color/:size/:color", {
                ":size": size,
                ":color": color,
            });
        }
        async imageResize(url, size) {
            return await this.get.buffer("/image/resize/:size", {
                url,
                ":size": size,
            });
        }
        async imageRotate(url, angle) {
            return await this.get.buffer("/image/rotate/:angle", {
                url,
                ":angle": angle,
            });
        }
        async imageTilt(url, amount = 12) {
            return await this.get.buffer("/image/tilt/:amount", {
                url,
                ":amount": amount,
            });
        }
        async imageTint(url, color, opacity = 0.5) {
            return await this.get.buffer("/image/tint/:color", {
                url,
                opacity,
                ":color": color,
            });
        }
        async imageAverageColor(url) {
            return await this.get.json("/image/average-color", {
                url,
            });
        }
        async imageBrightness(url, amount) {
            return await this.get.buffer("/image/brightness/:amount", {
                url,
                ":amount": amount,
            });
        }
        async imageFisheye(url, amount) {
            return await this.get.buffer("/image/fisheye/:amount", {
                url,
                ":amount": amount,
            });
        }
        async imageInvert(url, method) {
            return await this.get.buffer("/image/invert/:method", {
                url,
                ":method": method,
            });
        }
        async imageSaturation(url, amount) {
            return await this.get.buffer("/image/saturation/:amount", {
                url,
                ":amount": amount,
            });
        }
        async audioVolume(url, amount) {
            return await this.get.buffer("/audio/volume/:amount", {
                url,
                ":amount": amount,
            });
        }
        async audioPitch(url, amount) {
            return await this.get.buffer("/audio/pitch/:amount", {
                url,
                ":amount": amount,
            });
        }
        async audioExtract(url) {
            return await this.get.buffer("/audio/extract", { url });
        }
        async textConvert(data, conversion, method, options) {
            return await this.get.json("/text/convert/:conversion/:method", {
                data,
                ":conversion": conversion,
                ":method": method,
                ...options,
            });
        }
        async wombo(style, query) {
            return await this.get.json("/wombo/:style/:query", {
                ":style": style,
                ":query": query,
            });
        }
        async textEmojify(data) {
            return await this.get.json("/text/emojify", {
                data,
            });
        }
    }
    Jonathan.API = API;
})(Jonathan = exports.Jonathan || (exports.Jonathan = {}));
