const path = require('path')
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, resp, next) => {
    resp.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        isCSSProduct: true,
        isCSSForms: true,
        isAddProductPage: true
    })
})

router.post('/add-product', (req, resp, next)=> {
    products.push({title: req.body.title});

    resp.redirect('/');
})

exports.routes = router;
exports.products = products;