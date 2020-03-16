const express = require("express");
const consolidate = require("consolidate");

class AppController {
  constructor() {
    this.express = express();

    this.views();
    this.middlewares();
    this.routes();
  }

  views() {
    this.express.engine("html", consolidate.htmling);
    this.express.set("view engine", "html");
    this.express.set("views", __dirname + "/app/html-reports");
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
