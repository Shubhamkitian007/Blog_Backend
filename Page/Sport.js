const express = require('express')
const sportapi = require('../Api/Sport');

const sport = express.Router();
sport.route("/tech").get(sportapi.apiController)

module.exports = sport;