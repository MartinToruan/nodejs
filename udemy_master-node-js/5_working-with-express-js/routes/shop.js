const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

router.get('/', (req, resp, next) => {
    resp.sendFile(path.join(rootDir, "views", "shop.html"))
    
    // // This is going to be the default response for any paths except '/add-product'
    // resp.send('<h1>Hello from Express.js Page</h1>'); // Send the response to client
})

module.exports = router;