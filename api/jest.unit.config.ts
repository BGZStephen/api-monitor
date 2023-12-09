import { baseConfig } from "./jest.config";

export default {
  ...baseConfig,
  testRegex: "\\.unit.test\\.(js|ts)$",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: ["/src/test-utils", "/*.integration.test.ts"],
};
