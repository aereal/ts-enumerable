/**
 * Returns new generator object that yields a slice of _sliceSize_ elements of _xs_.
 *
 * @param sliceSize - slice size
 * @param xs - source iterable object
 */
export const eachSlice = function* <T>(
  sliceSize: number,
  xs: Iterable<T>
): Generator<T[], void, unknown> {
  let accum: T[] = [];
  for (const e of xs) {
    accum.push(e);
    if (accum.length >= sliceSize) {
      yield accum;
      accum = [];
    }
  }
  if (accum.length > 0) {
    yield accum;
  }
};
