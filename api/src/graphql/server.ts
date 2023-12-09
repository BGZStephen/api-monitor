import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import path from "path";

const typeDefs = readFileSync(path.join(__dirname, "./schema.graphql"), {
  encoding: "utf-8",
});

const resolvers = {
  Query: {
    ok: () => true,
  },
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
