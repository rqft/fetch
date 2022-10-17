import { Request, Response } from "node-fetch";

export class Payload<T> {
    constructor(
        public readonly request: Request,
        public readonly response: Response,
        public readonly payload?: T
    ) {}

    public clone<U = T>(payload?: U) {
        return new Payload<U>(
            this.request.clone(),
            this.response.clone(),
            (this.payload as U) || payload
        );
    }

    public async text(): Promise<Payload<string>> {
        return this.clone(await this.request.clone().text());
    }

    public async json<Z>(): Promise<Payload<Z>> {
        return this.clone(await this.request.clone().json());
    }   
}
