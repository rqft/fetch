import { Pariah } from '../lib/base';
export interface Affirmation {
    affirmation: string;
}
export declare class Affirmations {
    raw: Pariah;
    constructor();
    run(): Promise<Affirmation>;
}
