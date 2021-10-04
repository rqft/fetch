import { Pariah } from '../lib/base';
export interface Password {
    data: string;
}
export declare class Passwordinator {
    raw: Pariah;
    constructor();
    run(): Promise<Password>;
}
