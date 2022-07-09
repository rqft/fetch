import { Data } from "../data";
import { Pariah } from "../pariah";

export module Jonathan {
    export const Uri = new URL("https://api.clancy.lol/");

    export interface Choice {
        name: string;
        value: string;
    }

    export type Value =
        | string
        | number
        | boolean
        | null
        | ValueObject
        | ValueArray
        | undefined;

    export interface ValueObject {
        [property: string]: Value;
    }

    export interface ValueArray extends Array<Value> {}

    export type Entries = Record<string, Value>;

    export enum ConversionMethods {
        ENCODE = "encode",
        DECODE = "decode",
    }

    export enum Conversion {
        BASE64 = "base64",
        BINARY = "binary",
        HEX = "hex",
        CAESAR = "caesar",
    }

    export interface ConversionOptions {
        [Conversion.BASE64]: undefined;
        [Conversion.BINARY]: undefined;
        [Conversion.HEX]: undefined;
        [Conversion.CAESAR]: {
            shift: number;
        };
    }

    export enum MirrorMethods {
        LEFT = "LEFT",
        RIGHT = "RIGHT",
        TOP = "TOP",
        BOTTOM = "BOTTOM",
    }

    export enum InvertMethods {
        INVERT = "invert",
        INVERT_HUE = "hue",
        INVERT_SATURATION = "saturation",
        INVERT_VALUE = "value",
    }

    export enum ResultState {
        OK = "ok",
        ERROR = "error",
    }

    export interface Ok {
        message?: undefined;
        code?: undefined;
        state: ResultState.OK;
    }

    export interface Err {
        message: string;
        code: number;
        state: ResultState.ERROR;
    }

    export type Status = Ok | Err;

    export interface Result<T> {
        data: T;
        status: Status;
    }

    export class API extends Pariah {
        constructor() {
            super(Uri);
        }

        async authorized(): Promise<Data<Result<boolean>>> {
            return await this.get.json<Result<boolean>>("/authorized");
        }

        async origin(): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>("/origin");
        }

        async tagGet(key: string): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>(`/tags/${key}`);
        }

        async tagPost(key: string, value: string): Promise<Data<Result<true>>> {
            return await this.post.json<Result<true>>(`/tags/${key}`, {
                value,
            });
        }

        async tagDelete(key: string): Promise<Data<Result<string>>> {
            return await this.delete.json<Result<string>>(`/tags/${key}`);
        }

        async tagList(): Promise<Data<Result<Array<string>>>> {
            return await this.get.json<Result<Array<string>>>("/tags/list");
        }

        async tagInspect(): Promise<Data<Result<Entries>>> {
            return await this.get.json<Result<Entries>>("/tags/inspect");
        }

        async tagSearch(query?: string): Promise<Data<Result<Array<Choice>>>> {
            return await this.get.json<Result<Array<Choice>>>(
                "/tags/search/:query",
                {
                    ":query": query,
                }
            );
        }

        async todoGet(userId: string, id: string) {
            return await this.get.json<Result<string>>("/todos/:userId/:id", {
                ":userId": userId,
                ":id": id,
            });
        }

        async todoPost(userId: string, data: string) {
            return await this.post.json<Result<true>>("/todos/:userId", {
                ":userId": userId,
                data,
            });
        }

        async todoDelete(userId: string, id: string) {
            return await this.delete.json<Result<true>>("/todos/:userId/:id", {
                ":userId": userId,
                ":id": id,
            });
        }

        async todoList(userId: string) {
            return await this.get.json<Result<Array<string>>>(
                "/todos/:userId",
                {
                    ":userId": userId,
                }
            );
        }

        async todoPut(userId: string, id: string, data: string) {
            return await this.put.json<Result<true>>("/todos/:userId/:id", {
                ":userId": userId,
                ":id": id,
                data,
            });
        }

        async todoSearch(
            userId: string,
            query: string
        ): Promise<Data<Result<Array<Choice>>>> {
            return await this.get.json<Result<Array<Choice>>>(
                "/todos/search/:userId/:query",
                {
                    ":userId": userId,
                    ":query": query,
                }
            );
        }

        async imageMirror(
            url: string,
            method: MirrorMethods
        ): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/mirror", { url, method });
        }

        async imageSpin(url: string): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/spin", { url });
        }

        async imageColor(size: number, color: string): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/color/:size/:color", {
                ":size": size,
                ":color": color,
            });
        }

        async imageResize(url: string, size: string): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/resize/:size", {
                url,
                ":size": size,
            });
        }

        async imageRotate(url: string, angle: number): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/rotate/:angle", {
                url,
                ":angle": angle,
            });
        }

        async imageTilt(
            url: string,
            amount: number = 12
        ): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/tilt/:amount", {
                url,
                ":amount": amount,
            });
        }

        async imageTint(
            url: string,
            color: string,
            opacity: number = 0.5
        ): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/tint/:color", {
                url,
                opacity,
                ":color": color,
            });
        }

        async imageAverageColor(url: string): Promise<Data<Result<number>>> {
            return await this.get.json<Result<number>>("/image/average-color", {
                url,
            });
        }

        async imageBrightness(
            url: string,
            amount: number
        ): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/brightness/:amount", {
                url,
                ":amount": amount,
            });
        }

        async imageFisheye(url: string, amount: number): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/fisheye/:amount", {
                url,
                ":amount": amount,
            });
        }

        async imageInvert(
            url: string,
            method: InvertMethods
        ): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/invert/:method", {
                url,
                ":method": method,
            });
        }

        async imageSaturation(
            url: string,
            amount: number
        ): Promise<Data<Buffer>> {
            return await this.get.buffer("/image/saturation/:amount", {
                url,
                ":amount": amount,
            });
        }

        async audioVolume(url: string, amount: number): Promise<Data<Buffer>> {
            return await this.get.buffer("/audio/volume/:amount", {
                url,
                ":amount": amount,
            });
        }

        async audioPitch(url: string, amount: number): Promise<Data<Buffer>> {
            return await this.get.buffer("/audio/pitch/:amount", {
                url,
                ":amount": amount,
            });
        }

        async audioExtract(url: string): Promise<Data<Buffer>> {
            return await this.get.buffer("/audio/extract", { url });
        }

        async textConvert<T extends Conversion>(
            data: string,
            conversion: T,
            method: ConversionMethods,
            options?: ConversionOptions[T]
        ): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>(
                "/text/convert/:conversion/:method",
                {
                    data,
                    ":conversion": conversion,
                    ":method": method,
                    ...options,
                }
            );
        }
    }
}
