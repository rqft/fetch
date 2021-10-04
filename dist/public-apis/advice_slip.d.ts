import { Pariah } from '../lib/base';
export interface Slip {
    slip: SlipMeta;
}
export interface SlipMeta {
    id: number;
    advice: string;
}
export declare class AdviceSlip {
    raw: Pariah;
    constructor();
    random(): Promise<Slip>;
    slip(id: number): Promise<Slip>;
    search(query: string): Promise<Slip[]>;
}
