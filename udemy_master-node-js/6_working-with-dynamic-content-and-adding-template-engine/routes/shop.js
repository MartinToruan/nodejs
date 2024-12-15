const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, resp, next) => {
    const products = adminData.products;
    resp.render('shop', {
        prds: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        isCSSProduct: true,
        isShopPage: true
    });
})

module.exports = router;