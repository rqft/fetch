/// <reference types="node" />
import { Data } from "../data";
import { Pariah } from "../pariah";
export declare module Jonathan {
    const Uri: URL;
    interface Choice {
        name: string;
        value: string;
    }
    type Value = string | number | boolean | null | ValueObject | ValueArray | undefined;
    interface ValueObject {
        [property: string]: Value;
    }
    interface ValueArray extends Array<Value> {
    }
    type Entries = Record<string, Value>;
    enum ConversionMethods {
        ENCODE = "encode",
        DECODE = "decode"
    }
    enum Conversion {
        BASE64 = "base64",
        BINARY = "binary",
        HEX = "hex",
        CAESAR = "caesar"
    }
    interface ConversionOptions {
        [Conversion.BASE64]: undefined;
        [Conversion.BINARY]: undefined;
        [Conversion.HEX]: undefined;
        [Conversion.CAESAR]: {
            shift: number;
        };
    }
    enum MirrorMethods {
        LEFT = "LEFT",
        RIGHT = "RIGHT",
        TOP = "TOP",
        BOTTOM = "BOTTOM"
    }
    enum InvertMethods {
        INVERT = "invert",
        INVERT_HUE = "hue",
        INVERT_SATURATION = "saturation",
        INVERT_VALUE = "value"
    }
    const WomboStyles: {
        psychedelic: number;
        surreal: number;
        synthwave: number;
        ghibli: number;
        steampunk: number;
        fantasy: number;
        vibrant: number;
        hd: number;
        psychic: number;
        darkfantasy: number;
        mystical: number;
        baroque: number;
        etching: number;
        sdali: number;
        wuhtercuhler: number;
        provenance: number;
        moonwalker: number;
        blacklight: number;
        none: number;
        ukiyoe: number;
        rosegold: number;
    };
    enum ResultState {
        OK = "ok",
        ERROR = "error"
    }
    interface Ok {
        message?: undefined;
        code?: undefined;
        state: ResultState.OK;
    }
    interface Err {
        message: string;
        code: number;
        state: ResultState.ERROR;
    }
    type Status = Ok | Err;
    interface Result<T> {
        data: T;
        status: Status;
    }
    interface GraphOptions {
        size?: number;
        splot?: number;
        scale?: number;
    }
    class API extends Pariah {
        constructor();
        origin(): Promise<Data<Result<string>>>;
        tagGet(key: string): Promise<Data<Result<string>>>;
        tagPost(key: string, value: string): Promise<Data<Result<true>>>;
        tagDelete(key: string): Promise<Data<Result<string>>>;
        tagList(): Promise<Data<Result<Array<string>>>>;
        tagInspect(): Promise<Data<Result<Entries>>>;
        tagSearch(query?: string): Promise<Data<Result<Array<Choice>>>>;
        todoGet(userId: string, id: string): Promise<Data<Result<string>>>;
        todoPost(userId: string, data: string): Promise<Data<Result<true>>>;
        todoDelete(userId: string, id: string): Promise<Data<Result<true>>>;
        todoList(userId: string): Promise<Data<Result<string[]>>>;
        todoPut(userId: string, id: string, data: string): Promise<Data<Result<true>>>;
        todoSearch(userId: string, query: string): Promise<Data<Result<Array<Choice>>>>;
        imageMirror(url: string, method: MirrorMethods): Promise<Data<Buffer>>;
        imageSpin(url: string): Promise<Data<Buffer>>;
        imageColor(size: number, color: string): Promise<Data<Buffer>>;
        imageResize(url: string, size: string): Promise<Data<Buffer>>;
        imageRotate(url: string, angle: number): Promise<Data<Buffer>>;
        imageTilt(url: string, amount?: number): Promise<Data<Buffer>>;
        imageTint(url: string, color: string, opacity?: number): Promise<Data<Buffer>>;
        imageAverageColor(url: string): Promise<Data<Result<number>>>;
        imageBrightness(url: string, amount: number): Promise<Data<Buffer>>;
        imageFisheye(url: string, amount: number): Promise<Data<Buffer>>;
        imageInvert(url: string, method: InvertMethods): Promise<Data<Buffer>>;
        imageSaturation(url: string, amount: number): Promise<Data<Buffer>>;
        audioVolume(url: string, amount: number): Promise<Data<Buffer>>;
        audioPitch(url: string, amount: number): Promise<Data<Buffer>>;
        audioExtract(url: string): Promise<Data<Buffer>>;
        textConvert<T extends Conversion>(data: string, conversion: T, method: ConversionMethods, options?: ConversionOptions[T]): Promise<Data<Result<string>>>;
        wombo(style: keyof typeof WomboStyles, query: string): Promise<Data<Result<string>>>;
        textEmojify(data: string): Promise<Data<Result<string>>>;
        graph(expr: string, options?: GraphOptions): Promise<Data<Buffer>>;
    }
}
