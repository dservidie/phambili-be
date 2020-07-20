require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import jwtChecker from "./security/jwt-checker";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

// import routes from "./routes";
// console.log("typeDefs: ", typeDefs);
export const server = new GraphQLServer({
   typeDefs,
   resolvers,
});

// TODO: Activate this checker
//server.use(jwtChecker);

export const options = {
   port: 3100,
   //  endpoint: "/",
   //  subscriptions: "/subscriptions",
   //  playground: "/playground",
};
