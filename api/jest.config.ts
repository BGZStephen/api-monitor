export const baseConfig = {
  testEnvironment: "node",
  modulePaths: ["<rootDir>/src"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "\\.test\\.(js|ts)$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  testPathIgnorePatterns: ["/_mocks_/", "/node_modules/", "/dist/"],
};
