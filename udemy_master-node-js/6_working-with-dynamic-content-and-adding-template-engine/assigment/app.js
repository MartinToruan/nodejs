const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const userRoutes = require('./routes/users');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminData.routes);

app.use(userRoutes);

app.use('/', (req, resp, next) => {
    resp.status(404).render('404', {pageTitle: "Page is Not Found!"});
})

app.listen(3000);