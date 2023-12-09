import cors from "cors";
import express from "express";

import { config } from "./config";

const app = express();
const port = config.PORT;

app.use(cors());
app.use(express.json());

export function listenerCallback() {
  console.log(`App listening on port ${port}`);
}

app.listen(port, listenerCallback);
