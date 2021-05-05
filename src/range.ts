export const range = function* (from = 0, max = Infinity, step = 1) {
  let counter = from;
  while (counter < max) {
    yield counter;
    counter += step;
  }
};
