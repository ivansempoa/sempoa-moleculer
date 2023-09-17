"use strict";

const ApiService = require("moleculer-web");

module.exports = {
  mixins: [ApiService],
  settings: {
    routes: [{
      path: "api",
      aliases: {
        "REST companies": "companies",
        "REST users": "users",
      }
    }]
  }
}