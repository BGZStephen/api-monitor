import { parseIntOrThrow } from "../utils/parse-int-or-throw";

interface Config {
  PORT: number;
}

export const config: Config = {
  PORT: parseIntOrThrow(process.env["PORT"]),
};
