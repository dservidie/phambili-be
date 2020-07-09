"use strict";

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _jwtChecker = _interopRequireDefault(require("./security/jwt-checker"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // API authentication

app.use(_jwtChecker["default"]); // Set up Plugins and providers
// Adding the routes

(0, _routes["default"])(app);
app.listen(5000, function () {
  console.log("PHAMBILI SERVER listening: PORT 5000");
});
//# sourceMappingURL=server.js.map