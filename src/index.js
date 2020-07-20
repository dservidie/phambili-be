require("dotenv").config();
import { server, options } from "./server";
import { connect } from "./database";

connect();

server.start(options, ({ port }) => {
   console.log("PHAMBILI SERVER listening: PORT ", port);
});
