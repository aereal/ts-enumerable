import { eachCons } from "./each-cons";
describe("eachCons", () => {
  test("2, 4", () => {
    const got = Array.from(eachCons(2, [1, 2, 3, 4]));
    expect(got).toStrictEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });
  test("2, 5", () => {
    const got = Array.from(eachCons(2, [1, 2, 3, 4, 5]));
    expect(got).toStrictEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]);
  });
  test("N > length", () => {
    const got = Array.from(eachCons(3, [1, 2]));
    expect(got).toStrictEqual([]);
  });
});
