declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare function deepObjectAssign<T, U extends Array<any>>(target: T, ...sources: U): T & UnionToIntersection<U[number]>;
export interface SplitByCriteria<T> {
    true: Array<T>;
    false: Array<T>;
}
export declare function splitBy<T>(content: Array<T>, f: (value: T, index: number, array: Array<T>, current: SplitByCriteria<T>) => boolean): SplitByCriteria<T>;
export {};
