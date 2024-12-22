const express = require('express');
const userData = require('./admin')

const routes = express.Router();

routes.get('/', (req, resp, next) => {
    resp.render('user', {pageTitle: "User Page", users: userData.users});
})

module.exports = routes;