import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

import { config } from "./config";
import { apolloServer } from "./graphql/server";

const app = express();
const port = config.PORT;

app.use(cors());
app.use(express.json());
app.use("/graphql", expressMiddleware(apolloServer, {}));

export function listenerCallback() {
  console.log(`App listening on port ${port}`);
}

app.listen(port, listenerCallback);
