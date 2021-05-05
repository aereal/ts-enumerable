import { map } from "./map";
describe("map", () => {
  test("numbers", () => {
    const nums: number[] = [1, 2, 3];
    const got = Array.from(map(nums, (n) => n * 2));
    expect(got).toStrictEqual([2, 4, 6]);
  });
  test("empty", () => {
    const nums: number[] = [];
    const got = Array.from(map(nums, (n) => `${n}`));
    expect(got).toStrictEqual([]);
  });
});
