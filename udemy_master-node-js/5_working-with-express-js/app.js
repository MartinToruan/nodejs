const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Default Route
app.use('/', (req, resp, next) => {
    resp.status(404).sendFile(path.join(rootDir, "views", "404.html"));

    // resp.status(404).send('<h1>Page is not found</h1>');
})

app.listen(3000);
