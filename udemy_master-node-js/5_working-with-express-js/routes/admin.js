const path = require('path')
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, resp, next) => {
    resp.sendFile(path.join(rootDir, "views", "add-product.html"));
    // resp.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Send the response to client
})

router.post('/add-product', (req, resp, next)=> {
    console.log(req.body);

    resp.redirect('/');
})

module.exports = router;