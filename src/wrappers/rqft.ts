import { Payload } from '../lib/payload';
import { Requester } from '../lib/requester';
type Out<T> = Promise<Payload<Rqft.Result<T>>>;
export class Rqft extends Requester {
  constructor() {
    super(Rqft.Uri);
  }

  public async origin(): Out<string> {
    return this.json(Rqft.Methods.Origin);
  }

  public async endpoints(): Out<Array<string>> {
    return this.json(Rqft.Methods.Endpoints);
  }

  // wombo

  public async tagsList(): Out<Array<string>> {
    return this.json(Rqft.Methods.TagsList);
  }

  public async tagsInspect(): Out<Record<string, string>> {
    return this.json(Rqft.Methods.TagsInspect);
  }

  public async tagsGet(key: string) {
    return this.json(Rqft.Methods.TagsGet, { ':key': key });
  }

  public async tagsSearch(query: string): Out<Array<string>> {
    return this.json(Rqft.Methods.TagsSearch, { ':query': query });
  }

  public async tagsPost(key: string, value: string): Out<boolean> {
    return this.json(Rqft.Methods.TagsPost, { ':key': key, value });
  }

  public async tagsDelete(key: string): Out<boolean> {
    return this.json(Rqft.Methods.TagsDelete, { ':key': key });
  }

  public async imageAverageColor(url: string) {
    return this.buffer(Rqft.Methods.ImageAverageColor, { url });
  }

  public async imageBrightness(url: string, amount: number, scale = false) {
    return this.buffer(Rqft.Methods.ImageBrightness, {
      ':amount': amount,
      scale,
      url,
    });
  }

  public async imageColor(size: Rqft.Size, color: string) {
    return this.buffer(Rqft.Methods.ImageColor, {
      ':size': size,
      ':color': color,
    });
  }

  public async imageFisheye(url: string, amount: number) {
    return this.buffer(Rqft.Methods.ImageFisheye, {
      ':amount': amount,
      url,
    });
  }

  public async imageMirror(
    url: string,
    method: Rqft.MirrorMethods = Rqft.MirrorMethods.Left
  ) {
    return this.buffer(Rqft.Methods.ImageMirror, { url, method });
  }

  public imageInvert(
    url: string,
    method: Rqft.InvertMethods = Rqft.InvertMethods.Invert
  ) {
    return this.buffer(Rqft.Methods.ImageInvert, {
      ':method': method,
      url,
    });
  }

  public async imageResize(url: string, size: Rqft.Size) {
    return this.buffer(Rqft.Methods.ImageResize, { ':size': size, url });
  }

  public async imageRotate(url: string, deg: number) {
    return this.buffer(Rqft.Methods.ImageRotate, { ':deg': deg, url });
  }

  public async imageSaturation(url: string, amount: number, scale = false) {
    return this.buffer(Rqft.Methods.ImageSaturation, {
      ':amount': amount,
      url,
      scale,
    });
  }

  public async imageSpin(url: string) {
    return this.buffer(Rqft.Methods.ImageSpin, { url });
  }

  public async imageTilt(url: string, amount = 7) {
    return this.buffer(Rqft.Methods.ImageTilt, { ':amount': amount, url });
  }

  public async audioVolume(url: string, amount: number) {
    return this.buffer(Rqft.Methods.AudioVolume, {
      ':amount': amount,
      url,
    });
  }

  public async audioPitch(url: string, amount: number) {
    return this.buffer(Rqft.Methods.AudioPitch, {
      ':amount': amount,
      url,
    });
  }

  public async audioExtract(url: string) {
    return this.buffer(Rqft.Methods.AudioExtract, {
      url,
    });
  }

  public async textConvert(
    data: string,
    conversion: Rqft.Conversion,
    method: Rqft.ConversionMethods = Rqft.ConversionMethods.Encode
  ): Out<string> {
    return this.json(Rqft.Methods.TextConvert, {
      ':conversion': conversion,
      ':method': method,
      data,
    });
  }

  public async textEmojify(data: string): Out<string> {
    return this.json(Rqft.Methods.TextEmojify, { data });
  }

  public async todosList(userId: string) {
    return this.json(Rqft.Methods.TodosList, { ':userId': userId });
  }

  public async todosGet(userId: string, id: string) {
    return this.json(Rqft.Methods.TodosGet, {
      ':userId': userId,
      ':id': id,
    });
  }

  public async todosSearch(userId: string, query: string) {
    return this.json(Rqft.Methods.TodosSearch, {
      ':userId': userId,
      ':query': query,
    });
  }

  public async todosPost(userId: string, data: string) {
    return this.json(Rqft.Methods.TodosPost, { ':userId': userId, data });
  }

  public async todosDelete(userId: string, id: string) {
    return this.json(Rqft.Methods.TodosDelete, {
      ':userId': userId,
      ':id': id,
    });
  }

  public async pixelInspect() {
    return this.arrayBuffer(Rqft.Methods.PixelInspect);
  }

  public async pixelTimelapse(frames: number) {
    return this.arrayBuffer(Rqft.Methods.PixelTimelapse, {
      ':frame': frames,
    });
  }

  public async graph(options: Rqft.GraphOptions) {
    return await this.arrayBuffer(Rqft.Methods.Graph, options as object);
  }

  public async math(expr: string): Out<string> {
    return await this.json(Rqft.Methods.Math, { expr });
  }

  public async generateGif(frames: number) {
    return await this.arrayBuffer(Rqft.Methods.GenerateGif, {
      ':frames': frames,
    });
  }

  public async kvRead(guildId: string): Out<Record<string, unknown>> {
    return await this.json(Rqft.Methods.KvRead, { ':guildId': guildId });
  }

  public async kvWrite(
    guildId: string,
    data: object
  ): Out<Record<string, unknown>> {
    return await this.json(Rqft.Methods.KvWrite, {
      ':guildId': guildId,
      data: JSON.stringify(data),
    });
  }
}

export namespace Rqft {
    export const Uri = 'https://api.clancy.lol/';

    export enum Methods {
        Wombo = 'GET /wombo/:style/:query',
        Origin = 'GET /origin',
        Endpoints = 'GET /endpoints',

        TagsList = 'GET /tags/list',
        TagsInspect = 'GET /tags/inspect',
        TagsGet = 'GET /tags/:key',
        TagsSearch = 'GET /tags/search/:query',
        TagsPost = 'GET /tags/post/:key',
        TagsDelete = 'GET /tags/delete/:key',

        ImageAverageColor = 'GET /image/average-color',
        ImageBrightness = 'GET /image/brightness/:amount',
        ImageColor = 'GET /image/color/:size/:color',
        ImageFisheye = 'GET /image/fisheye/:amount',
        ImageMirror = 'GET /image/mirror',
        ImageInvert = 'GET /image/invert/:method',
        ImageResize = 'GET /image/resize/:size',
        ImageRotate = 'GET /image/rotate/:deg',
        ImageSaturation = 'GET /image/saturation/:amount',
        ImageSpin = 'GET /image/spin',
        ImageTilt = 'GET /image/tilt/:amount',

        AudioVolume = 'GET /audio/volume/:amount',
        AudioPitch = 'GET /audio/pitch/:amount',
        AudioExtract = 'GET /audio/extract',

        TextConvert = 'GET /text/:conversion/:method',
        TextEmojify = 'GET /text/emojify',

        TodosList = 'GET /todos/list/:userId',
        TodosGet = 'GET /todos/get/:userId/:id',
        TodosSearch = 'GET /todos/search/:userId/:query',
        TodosPost = 'GET /todos/post/:userId',
        TodosDelete = 'GET /todos/delete/:userId/:id',

        PixelInspect = 'GET /pixel/inspect',
        PixelTimelapse = 'GET /pixel/timelapse/:frame',

        Graph = '/graph',
        Math = '/math',

        GenerateGif = '/generate/gif/:frames',

        KvRead = '/kv/r/:guildId',
        KvWrite = '/kv/w/:guildId',
    }

    export interface GraphOptions {
        expr: string;
        dm?: number;
        dx?: number;
        rm?: number;
        rx?: number;
        size?: number;
        splot?: number;
        scale?: number;
    }

    export enum MirrorMethods {
        Left = 'LEFT',
        Right = 'RIGHT',
        Top = 'TOP',
        Bottom = 'BOTTOM',
    }

    export enum InvertMethods {
        Invert = 'invert',
        Hue = 'hue',
        Saturation = 'saturation',
        Value = 'value',
    }

    export enum ConversionMethods {
        Encode = 'encode',
        Decode = 'decode',
    }

    export enum Conversion {
        Base64 = 'base64',
        Binary = 'binary',
        Hex = 'hex',
        Caesar = 'caesar',
    }

    export type Size = `${number}` | `${number}x${number}`;

    export enum ResultState {
        OK = 'ok',
        ERROR = 'error',
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
}
