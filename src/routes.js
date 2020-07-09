const test = require('./routes/test.js');

module.exports = function (app) {
  app.use(test);
};
