const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtChecker = jwt({
   secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://phambili.us.auth0.com/.well-known/jwks.json",
   }),
   audience: "http://localhost:5000/",
   issuer: "https://phambili.us.auth0.com/",
   algorithms: ["RS256"],
});

module.exports = jwtChecker;
