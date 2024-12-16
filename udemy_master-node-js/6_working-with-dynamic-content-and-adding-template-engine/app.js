const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const expressHbs = require('express-handlebars');


const app = express();

// Using EJS Template Enginee
app.set('view engine', 'ejs');

// Works for Pug Template Engine
// app.set('view engine', 'pug'); 

// Using Express Handlebars template engine
// app.engine(
//     'handlebars',
//     expressHbs({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'handlebars'
//     })
// );
//
// app.set('view engine', 'handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Default Route
app.use('/', (req, resp, next) => {
    resp.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);
