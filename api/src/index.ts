import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

export function listenerCallback() {
  console.log(`App listening on port ${port}`)
}

app.listen(port, listenerCallback)