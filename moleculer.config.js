"use strict";

module.exports = {
  /* BISA DIGANTI SESUAI KEBUTUHAN */
  transporter: "amqp://root:12345678@localhost:5672",
  registry: {
    discoverer: "Redis",
  },
  cacher: "Redis",
}