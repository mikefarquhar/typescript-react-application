import { add } from "./add";

describe("add", () => {
  test("it should add two numbers", () => {
    expect(add(12, 13)).toBe(25);
  });
});
