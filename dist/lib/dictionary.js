"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
const pariah_1 = require("../pariah");
var Dictionary;
(function (Dictionary) {
    Dictionary.Url = new URL("https://api.dictionaryapi.dev/api/");
    class API extends pariah_1.Pariah {
        version;
        language;
        constructor(version = 2, language = "en") {
            super(Dictionary.Url);
            this.version = version;
            this.language = language;
        }
        async entries(word) {
            return await this.get.json("/v:version/entries/:language/:word", {
                ":version": this.version,
                ":language": this.language,
                ":word": word,
            });
        }
    }
    Dictionary.API = API;
})(Dictionary = exports.Dictionary || (exports.Dictionary = {}));
