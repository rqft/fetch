// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepObjectAssign<T, U extends Array<any>>(
  target: T,
  ...sources: U
): T & UnionToIntersection<U[number]> {
  for (const source of sources) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.bind(source)(key)) {
        if (source[key] && typeof source[key] === 'object') {
          target[key as keyof typeof target] = deepObjectAssign(
            target[key as keyof typeof target] || {},
            source[key as keyof typeof source]
          );
        } else {
          target[key as keyof typeof target] =
                        source[key as keyof typeof source];
        }
      }
    }
  }
  return <never>target;
}

export interface SplitByCriteria<T> {
    true: Array<T>;
    false: Array<T>;
}

export function splitBy<T>(
  content: Array<T>,
  f: (
        value: T,
        index: number,
        array: Array<T>,
        current: SplitByCriteria<T>
    ) => boolean
) {
  const o: SplitByCriteria<T> = { true: [], false: [] };
  content.forEach((value, index, array) => {
    if (f(value, index, array, o)) {
      o.true.push(value);
    } else {
      o.false.push(value);
    }
  });

  return o;
}
