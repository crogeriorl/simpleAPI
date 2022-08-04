"use strict";

require("./infra/tracer");

var _app = require("./app");

var _Winston = require("./errors/Winston");

_app.app.listen(process.env.PORT, () => {
  _Winston.logger.info(`Server is running on PORT ${process.env.PORT}`);
});