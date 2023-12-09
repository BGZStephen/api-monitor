import { parseIntOrThrow } from "../utils/parse-int-or-throw";

jest.mock("../utils/parse-int-or-throw");

describe("config", () => {
  test("config returns an object with defaults", () => {
    jest.mocked(parseIntOrThrow).mockReturnValue(3000);

    const { config } = require(".");

    expect(config).toEqual({
      PORT: 3000,
    });
  });
});
