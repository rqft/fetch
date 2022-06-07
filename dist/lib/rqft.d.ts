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
    interface ErrorOk {
        message?: undefined;
        code?: undefined;
        state: "ok";
    }
    interface ErrorBad {
        message: string;
        code: number;
        state: "error";
    }
    type Error = ErrorOk | ErrorBad;
    interface Result<T> {
        data: T;
        status: Error;
    }
    class API extends Pariah {
        readonly token: string;
        constructor(token: string);
        authorized(): Promise<Data<Result<boolean>>>;
        origin(): Promise<Data<Result<string>>>;
        base64Encode(text: string): Promise<Data<Result<string>>>;
        base64Decode(text: string): Promise<Data<Result<string>>>;
        binaryEncode(text: string): Promise<Data<Result<string>>>;
        binaryDecode(text: string): Promise<Data<Result<string>>>;
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
    }
}
