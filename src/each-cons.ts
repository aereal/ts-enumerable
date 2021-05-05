/**
 * Returns new generator object that yields a tuple of consecutive _consSize_ elements of _xs_.
 *
 * @param consSize - tuple size
 * @param xs - source iterable object
 */
export const eachCons = function* <T>(
  consSize: number,
  xs: Iterable<T>
): Generator<T[], void, unknown> {
  let accum: T[] = [];
  for (const e of xs) {
    accum.push(e);
    if (accum.length >= consSize) {
      yield accum;
      accum = tail(accum);
    }
  }
};

const tail = <T>(xs: T[]): T[] => {
  const [_, ...rest] = xs;
  return rest;
};
