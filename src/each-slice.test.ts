import { eachSlice } from "./each-slice";
describe("eachSlice", () => {
  test("2, 4", () => {
    const got = Array.from(eachSlice(2, [1, 2, 3, 4]));
    expect(got).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  test("2, 5", () => {
    const got = Array.from(eachSlice(2, [1, 2, 3, 4, 5]));
    expect(got).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
