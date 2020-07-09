require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import helmet from "helmet";
import cors from "cors";
import jwtChecker from "./security/jwt-checker";
import routes from "./routes";
import schema from "./schema";
import { connect } from "./database";

const app = express();
connect();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Unsecure endpoints
// Set up Plugins and providers
//var root = { hello: () => 'Hello world!' }
app.use(
   "/graphql",
   graphqlHTTP({
      schema: schema,
      //  rootValue: root,
      graphiql: true,
      context: {
         messageId: "test",
      },
   })
);

// API authentication
app.use(jwtChecker);

// Adding the routes
routes(app);

/*
app.use('/graphql', graphqlHTTP({

}));

*/

app.listen(5000, () => {
   console.log("PHAMBILI SERVER listening: PORT 5000");
});
