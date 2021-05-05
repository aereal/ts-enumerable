/**
 * Returns new generator object that yields elements mapped with _fn_ results.
 *
 * @param xs
 * @param fn
 */
export const map = function* <T, U>(
  xs: Iterable<T>,
  fn: (t: T) => U
): Generator<U, unknown, unknown> {
  for (const t of xs) {
    yield fn(t);
  }
  return;
};
