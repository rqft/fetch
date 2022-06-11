"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeSweet = void 0;
const form_data_1 = __importDefault(require("form-data"));
const pariah_1 = require("../pariah");
var MakeSweet;
(function (MakeSweet) {
    MakeSweet.Url = new URL("https://makesweet.thowoee.me/api/");
    class API extends pariah_1.Pariah {
        constructor() {
            super(MakeSweet.Url);
        }
        async templates() {
            return await this.get.json("/templates");
        }
        async run(template, images) {
            const form = new form_data_1.default();
            form.append("template", template);
            for (let i = 0; i < images.length; i++) {
                form.append("file", images[i], {
                    filename: `image-${i}.png`,
                });
            }
            console.log(form);
            const data = await this.post.buffer("/run", {}, { body: form });
            console.log(data);
            return data;
        }
        async runUrls(template, images) {
            const buffers = [];
            for (let i = 0; i < images.length; i++) {
                const instance = new pariah_1.Pariah(new URL(images[i]));
                const buffer = await instance.get.buffer("/");
                buffers.push(buffer);
            }
            return await this.run(template, buffers.map((x) => x.payload));
        }
    }
    MakeSweet.API = API;
})(MakeSweet = exports.MakeSweet || (exports.MakeSweet = {}));
