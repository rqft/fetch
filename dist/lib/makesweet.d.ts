/// <reference types="node" />
import { Data } from "../data";
import { Pariah } from "../pariah";
export declare module MakeSweet {
    const Url: URL;
    interface Template {
        name: string;
        value: string;
        "image-count": number;
    }
    class API extends Pariah {
        constructor();
        templates(): Promise<Data<Array<Template>>>;
        run(template: Template["value"], images: Array<Buffer>): Promise<Data<Buffer>>;
        runUrls(template: Template["value"], images: Array<string>): Promise<Data<Buffer>>;
    }
}
