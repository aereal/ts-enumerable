import { range } from "./range";
describe("range", () => {
  test("natural", () => {
    const got = Array.from(range(0, 10, 1));
    expect(got).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
