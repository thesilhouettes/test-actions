import { capitalize } from "../src/index";

describe("testing capitalization", () => {
  test("empty string returns empty string", () => {
    expect(capitalize("")).toEqual("");
  });

  test("single word", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });

  test("multiple words", () => {
    expect(capitalize("hello world my friend")).toEqual(
      "Hello World My Friend"
    );
  });
});
