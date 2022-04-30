"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagga = void 0;
const pariah_1 = require("../pariah");
var Imagga;
(function (Imagga) {
    Imagga.Url = new URL("https://api.imagga.com/v2");
    class API extends pariah_1.Pariah {
        token;
        constructor(token) {
            super(Imagga.Url, { headers: { Authorization: `Basic ${token}` } });
            this.token = token;
        }
        async tags(imageUrl, options = {}) {
            return this.get.json("/tags/:taggerId", {
                ":taggerId": options.taggerId,
                image_url: imageUrl,
                ...options,
            });
        }
        async categorizers() {
            return this.get.json("/categorizers");
        }
        async categories(imageUrl, categorizerId) {
            return this.get.json("/categories/:categorizerId", {
                ":categorizerId": categorizerId,
                image_url: imageUrl,
            });
        }
        async croppings(imageUrl, options = {}) {
            return this.get.json("/croppings", {
                image_url: imageUrl,
                ...options,
            });
        }
        async colors(imageUrl, options) {
            return this.get.json("/colors", {
                image_url: imageUrl,
                ...options,
            });
        }
        async readText(imageUrl) {
            return this.get.json("/text", {
                image_url: imageUrl,
            });
        }
    }
    Imagga.API = API;
})(Imagga = exports.Imagga || (exports.Imagga = {}));
