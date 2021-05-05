import { cycle } from "./cycle";
describe("cycle", () => {
  test("finite", () => {
    const got = Array.from(cycle([1, 2, 3], 2));
    expect(got).toStrictEqual([1, 2, 3, 1, 2, 3]);
  });
});
