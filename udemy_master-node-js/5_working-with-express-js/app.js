const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

// Default Route
app.use('/', (req, resp, next) => {
    resp.status(404).send('<h1>Page is not found</h1>');
})

app.listen(3000);
