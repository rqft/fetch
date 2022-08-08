import { DEFAULT_OPTIONS, HTTPVerbs, Options } from "./constants";
import { Data, TransformReturnTypes, Type } from "./data";
import { Pariah } from "./pariah";
type Grab = `${HTTPVerbs} ${string}`;

async function fetchee(uri: Grab, options: Options = DEFAULT_OPTIONS) {
    const [method, path] = uri.split(" ") as [HTTPVerbs, string];

    let url: URL;
    try {
        url = new URL(path);
    } catch (e) {
        throw new Error(`Invalid URL: ${path}`);
    }

    const f = new Pariah(url);

    return f[method.toLowerCase() as Lowercase<typeof method>].request(
        "/",
        undefined,
        options
    );
}

type R = {
    [K in Type]: (
        url: Grab,

        options?: Options
    ) => Promise<Data<TransformReturnTypes[K]>>;
};

const fetchers: R = {
    [Type.TEXT]: async (
        url: Grab,

        options: Options = DEFAULT_OPTIONS
    ) => {
        const response = await fetchee(url, options);
        return response.transform(Type.TEXT);
    },
    [Type.JSON]: async (url: Grab, options: Options = DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(Type.JSON);
    },
    [Type.BLOB]: async (url: Grab, options: Options = DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(Type.BLOB);
    },
    [Type.ARRAY_BUFFER]: async (
        url: Grab,
        options: Options = DEFAULT_OPTIONS
    ) => {
        const response = await fetchee(url, options);
        return response.transform(Type.ARRAY_BUFFER);
    },
    [Type.BUFFER]: async (url: Grab, options: Options = DEFAULT_OPTIONS) => {
        const response = await fetchee(url, options);
        return response.transform(Type.BUFFER);
    },
};

export const fetch = Object.assign(fetchee, fetchers);
fetch.json("GET https://google.com");
