export const eachCons = function* <T>(
  consSize: number,
  from: Iterable<T>
): Generator<T[], void, unknown> {
  let accum: T[] = [];
  for (const e of from) {
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
