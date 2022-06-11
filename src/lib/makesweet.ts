import FormData from "form-data";
import { Data } from "../data";
import { Pariah } from "../pariah";

export module MakeSweet {
    export const Url = new URL("https://makesweet.thowoee.me/api/");

    export interface Template {
        name: string;
        value: string;
        "image-count": number;
    }

    export class API extends Pariah {
        constructor() {
            super(Url);
        }

        public async templates(): Promise<Data<Array<Template>>> {
            return await this.get.json<Array<Template>>("/templates");
        }

        public async run(template: Template["value"], images: Array<Buffer>) {
            const form = new FormData();
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

        public async runUrls(
            template: Template["value"],
            images: Array<string>
        ) {
            const buffers: Array<Data<Buffer>> = [];

            for (let i = 0; i < images.length; i++) {
                const instance = new Pariah(new URL(images[i]!));
                const buffer = await instance.get.buffer("/");
                buffers.push(buffer);
            }

            return await this.run(
                template,
                buffers.map((x) => x.payload)
            );
        }
    }
}
