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

    export enum MirrorMethods {
        LEFT = "LEFT",
        RIGHT = "RIGHT",
        TOP = "TOP",
        BOTTOM = "BOTTOM",
    }

    export interface ErrorOk {
        message?: undefined;
        code?: undefined;
        state: "ok";
    }
    export interface ErrorBad {
        message: string;
        code: number;
        state: "error";
    }
    export type Error = ErrorOk | ErrorBad;

    export interface Result<T> {
        data: T;
        status: Error;
    }

    export class API extends Pariah {
        public readonly token: string;
        constructor(token: string) {
            super(Uri, { headers: { Authorization: token } });
            this.token = token;
        }

        async authorized(): Promise<Data<Result<boolean>>> {
            return await this.get.json<Result<boolean>>("/authorized");
        }

        async origin(): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>("/origin");
        }

        async base64Encode(text: string): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>("/base64/encode", {
                text,
            });
        }

        async base64Decode(text: string): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>("/base64/decode", {
                text,
            });
        }

        async binaryEncode(text: string): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>("/binary/encode", {
                text,
            });
        }

        async binaryDecode(text: string): Promise<Data<Result<string>>> {
            return await this.get.json<Result<string>>("/binary/decode", {
                text,
            });
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
    }
}
