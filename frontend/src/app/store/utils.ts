/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

const typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[label as string]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[label as string] = true;

  return label as T;
}

export class ImmutableArrayUtils {
  public static insertItem<T>(array: Array<T>, item: T): Array<T> {
    const newArray = array.slice();
    newArray.splice(array.length, 0, item);
    return newArray;
  }

  public static insertItemInBeginning<T>(array: Array<T>, item: T): Array<T> {
    return [item, ...array];
  }

  public static removeItem<T>(array: Array<T>, item: T): Array<T> {
    return array.filter(it => !Object.is(it, item));
  }

  public static updateItem<T>(array: Array<T>, item: T): Array<T> {
    return array.map(it => !Object.is(it, item) ? it : { ...item });
  }
}
