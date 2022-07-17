const express = require('express')
const hollyapi = require('../Api/Hollywood');

const holly = express.Router();
holly.route("/tech").get(hollyapi.apiController)

module.exports = holly;