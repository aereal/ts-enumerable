export const eachSlice = function* <T>(
  sliceSize: number,
  from: Iterable<T>
): Generator<T[], void, unknown> {
  let accum: T[] = [];
  for (const e of from) {
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
