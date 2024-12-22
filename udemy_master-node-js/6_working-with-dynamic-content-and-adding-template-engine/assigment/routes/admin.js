const express = require('express');

const routes = express.Router();
const users = [];

routes.get('/add-user', (req, resp, next) => {
    resp.render('add-user', {pageTitle: "Add User Page"});
})

routes.post('/add-user', (req, resp, next) => {
    users.push({username: req.body.username});

    resp.redirect('/');
})

exports.routes = routes;
exports.users = users;