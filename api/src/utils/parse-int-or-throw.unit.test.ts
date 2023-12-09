import { parseIntOrThrow } from "./parse-int-or-throw";

describe("parseIntOrThrow", () => {
  test("It throws an error if the value provided isn't a string", () => {
    const value = null;

    expect(() => parseIntOrThrow(value)).toThrow(new Error(`Expected value to be a string, got ${typeof value}`))
  })

  test("It throws an error if the value provided isn't a valid number string", () => {
    const value = "invalid";
    expect(() => parseIntOrThrow(value)).toThrow(new Error(`Provided value was not a valid number string ${value}`))
  })

  test("It returns the parsed value successfully", () => {
    const value = "1";
    expect(parseIntOrThrow(value)).toEqual(1)
  })
})