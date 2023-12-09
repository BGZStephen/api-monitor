import dotenv from "dotenv";

import { parseIntOrThrow } from "../utils/parse-int-or-throw";

dotenv.config();

interface Config {
  PORT: number;
}

export const config: Config = {
  PORT: parseIntOrThrow(process.env["PORT"]),
};
