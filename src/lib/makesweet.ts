// import FormData from "form-data";
// import { promisify } from "util";
// import { Data } from "../data";
// import { Pariah } from "../pariah";

// export module MakeSweet {
//     export const Url = new URL("https://makesweet.thowoee.me/api/");
//     export interface Template {
//         name: string;
//         value: string;
//         "image-count": number;
//     }
//     export interface Templates extends Array<Template> {}
//     export class API extends Pariah {
//         constructor() {
//             super(Url);
//         }

//         public async templates(): Promise<Data<Templates>> {
//             return await this.get.json<Templates>("/templates");
//         }

//         public async run(template: string, images: Array<[string, Buffer]>) {
//             const multipart = new FormData();

//             multipart.append("template", template, {
//                 contentType: "text/plain",
//             });

//             for (const [name, buffer] of images) {
//                 multipart.append("file", buffer, {
//                     contentType: "image/png",
//                     filename: name,
//                 });
//             }

//             return await promisify(multipart.submit)(this.uri("/run"));
//         }
//     }
// }
