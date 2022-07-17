const express = require('express')
const techapi = require('../Api/Technology');

const tech = express.Router();
tech.route("/tech").get(techapi.apiController)

module.exports = tech;