import { HTTPVerbs, Options } from "./constants";
import { Data, TransformReturnTypes, Type } from "./data";
declare type Grab = `${HTTPVerbs} ${string}`;
declare function fetchee(uri: Grab, options?: Options): Promise<Data<unknown>>;
declare type R = {
    [K in Type]: (url: Grab, options?: Options) => Promise<Data<TransformReturnTypes[K]>>;
};
export declare const fetch: typeof fetchee & R;
export {};
