"use strict";

const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

module.exports = {
  name: "companies",
  mixins: [DbService],
  adapter: new SqlAdapter(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  }),
  model: {
    name: "company",
    define: {
      companyName: Sequelize.STRING,
    },
    options: {
      tableName: "companies",
      underscored: true,
    },
  },
}