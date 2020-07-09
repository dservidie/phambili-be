"use strict";

var jwt = require("express-jwt");

var jwks = require("jwks-rsa");

var jwtChecker = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://phambili.us.auth0.com/.well-known/jwks.json"
  }),
  audience: "http://localhost:5000/",
  issuer: "https://phambili.us.auth0.com/",
  algorithms: ["RS256"]
});
module.exports = jwtChecker;
//# sourceMappingURL=jwt-checker.js.map