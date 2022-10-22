/// <reference types="node" />
import { Payload } from '../lib/payload';
import { Requester } from '../lib/requester';
declare type Out<T> = Promise<Payload<Rqft.Result<T>>>;
export declare class Rqft extends Requester {
    constructor();
    origin(): Out<string>;
    endpoints(): Out<Array<string>>;
    tagsList(): Out<Array<string>>;
    tagsInspect(): Out<Record<string, string>>;
    tagsGet(key: string): Promise<Payload<unknown>>;
    tagsSearch(query: string): Out<Array<string>>;
    tagsPost(key: string, value: string): Out<boolean>;
    tagsDelete(key: string): Out<boolean>;
    imageAverageColor(url: string): Promise<Payload<Buffer>>;
    imageBrightness(url: string, amount: number, scale?: boolean): Promise<Payload<Buffer>>;
    imageColor(size: Rqft.Size, color: string): Promise<Payload<Buffer>>;
    imageFisheye(url: string, amount: number): Promise<Payload<Buffer>>;
    imageMirror(url: string, method?: Rqft.MirrorMethods): Promise<Payload<Buffer>>;
    imageInvert(url: string, method?: Rqft.InvertMethods): Promise<Payload<Buffer>>;
    imageResize(url: string, size: Rqft.Size): Promise<Payload<Buffer>>;
    imageRotate(url: string, deg: number): Promise<Payload<Buffer>>;
    imageSaturation(url: string, amount: number, scale?: boolean): Promise<Payload<Buffer>>;
    imageSpin(url: string): Promise<Payload<Buffer>>;
    imageTilt(url: string, amount?: number): Promise<Payload<Buffer>>;
    audioVolume(url: string, amount: number): Promise<Payload<Buffer>>;
    audioPitch(url: string, amount: number): Promise<Payload<Buffer>>;
    audioExtract(url: string): Promise<Payload<Buffer>>;
    textConvert(data: string, conversion: Rqft.Conversion, method?: Rqft.ConversionMethods): Out<string>;
    textEmojify(data: string): Out<string>;
    todosList(userId: string): Promise<Payload<unknown>>;
    todosGet(userId: string, id: string): Promise<Payload<unknown>>;
    todosSearch(userId: string, query: string): Promise<Payload<unknown>>;
    todosPost(userId: string, data: string): Promise<Payload<unknown>>;
    todosDelete(userId: string, id: string): Promise<Payload<unknown>>;
    pixelInspect(): Promise<Payload<ArrayBuffer>>;
    pixelTimelapse(frames: number): Promise<Payload<ArrayBuffer>>;
    graph(options: Rqft.GraphOptions): Promise<Payload<ArrayBuffer>>;
    math(expr: string): Out<string>;
    generateGif(frames: number): Promise<Payload<ArrayBuffer>>;
    kvRead(guildId: string): Out<Record<string, unknown>>;
    kvWrite(guildId: string, data: object): Out<Record<string, unknown>>;
}
export declare namespace Rqft {
    const Uri = "https://api.clancy.lol/";
    enum Methods {
        Wombo = "GET /wombo/:style/:query",
        Origin = "GET /origin",
        Endpoints = "GET /endpoints",
        TagsList = "GET /tags/list",
        TagsInspect = "GET /tags/inspect",
        TagsGet = "GET /tags/:key",
        TagsSearch = "GET /tags/search/:query",
        TagsPost = "GET /tags/post/:key",
        TagsDelete = "GET /tags/delete/:key",
        ImageAverageColor = "GET /image/average-color",
        ImageBrightness = "GET /image/brightness/:amount",
        ImageColor = "GET /image/color/:size/:color",
        ImageFisheye = "GET /image/fisheye/:amount",
        ImageMirror = "GET /image/mirror",
        ImageInvert = "GET /image/invert/:method",
        ImageResize = "GET /image/resize/:size",
        ImageRotate = "GET /image/rotate/:deg",
        ImageSaturation = "GET /image/saturation/:amount",
        ImageSpin = "GET /image/spin",
        ImageTilt = "GET /image/tilt/:amount",
        AudioVolume = "GET /audio/volume/:amount",
        AudioPitch = "GET /audio/pitch/:amount",
        AudioExtract = "GET /audio/extract",
        TextConvert = "GET /text/:conversion/:method",
        TextEmojify = "GET /text/emojify",
        TodosList = "GET /todos/list/:userId",
        TodosGet = "GET /todos/get/:userId/:id",
        TodosSearch = "GET /todos/search/:userId/:query",
        TodosPost = "GET /todos/post/:userId",
        TodosDelete = "GET /todos/delete/:userId/:id",
        PixelInspect = "GET /pixel/inspect",
        PixelTimelapse = "GET /pixel/timelapse/:frame",
        Graph = "/graph",
        Math = "/math",
        GenerateGif = "/generate/gif/:frames",
        KvRead = "/kv/r/:guildId",
        KvWrite = "/kv/w/:guildId"
    }
    interface GraphOptions {
        expr: string;
        dm?: string;
        dx?: string;
        rm?: string;
        rx?: string;
        size?: number;
        splot?: number;
        scale?: number;
    }
    enum MirrorMethods {
        Left = "LEFT",
        Right = "RIGHT",
        Top = "TOP",
        Bottom = "BOTTOM"
    }
    enum InvertMethods {
        Invert = "invert",
        Hue = "hue",
        Saturation = "saturation",
        Value = "value"
    }
    enum ConversionMethods {
        Encode = "encode",
        Decode = "decode"
    }
    enum Conversion {
        Base64 = "base64",
        Binary = "binary",
        Hex = "hex",
        Caesar = "caesar"
    }
    type Size = `${number}` | `${number}x${number}`;
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
}
export {};
