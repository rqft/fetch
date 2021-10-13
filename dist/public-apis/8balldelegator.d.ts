import { Pariah } from "../lib/base";
export interface Magic {
    magic: {
        question: string;
        answer: string;
        type: MagicType;
    };
}
export declare type MagicType = "Affirmative" | "Contrary" | "Neutral";
export declare class EightBallDelegator {
    raw: Pariah;
    constructor();
    json(query: string): Promise<Magic>;
    xml(query: string): Promise<string>;
}
