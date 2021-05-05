export const cycle = function* <T>(
  base: Iterable<T>,
  maxIterations: number = Infinity
): Generator<T, void, unknown> {
  let iterations = 0;
  while (iterations < maxIterations) {
    for (const e of base) {
      yield e;
    }
    iterations++;
  }
};
