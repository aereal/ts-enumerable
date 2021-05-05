/**
 * Returns new Generator object that yields each element of _base_ repeatedly _maxIterations_ times.
 * If _maxIterations_ is Infinity, returned generator object is infinite.
 *
 * @param xs - source iterable object
 * @param maxIterations - max iterations count
 */
export const cycle = function* <T>(
  xs: Iterable<T>,
  maxIterations: number = Infinity
): Generator<T, void, unknown> {
  let iterations = 0;
  while (iterations < maxIterations) {
    for (const e of xs) {
      yield e;
    }
    iterations++;
  }
};
