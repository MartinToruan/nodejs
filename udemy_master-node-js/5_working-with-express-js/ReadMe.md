# What's Inside

## What is Express.js
Express.js is a framework for Node.js that contains functions, rules, libraries to support you building your website. Alternatives to Express.js are:
- Vanilla Node.js
- Adonis.js
- Koa
- Sails.js

### How to install
```
npm install express --save
```

## Using Middleware
In Express.js, we can define the middleware using the <b>use()</b> method. Here's the example.
```
const app = express();

app.use((req, resp, next) => {
    console.log("In the middleware!");

    next(); // Allow the request to continue to the next middleware in line
})

app.use((req, resp, next) => {
    console.log("In another middleware");
})
```

## Working with Request & Responses (Elegantly)
### Parsing Request Body
To parse request body, we can use third party library called <b>body-parser</b>
```
npm install body-parser --save-dev
```
The, we can import the bodyParser library and register it to the middleware on top of every middleware.
```
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

```
Lastly, we can read the body in our code.
```
consoleapp.use('/product', (req, resp, next)=> {
    console.log(req.body);

    resp.redirect('/')
})
```

## Routing
You can route your request by defining the path before the middleware function.
```
const app = express();

app.use('/add-product', (req, resp, next) => {
    resp.send('<h1>The "add-product" page</h1>'); // Send the response to client
})
```

Route by http method. 
```
# GET Request only to /add-product
app.get('/add-product', (req, resp, next)=> {
    resp.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Send the response to client
})

# POST Request only to /product
app.post('/product', (req, resp, next)=> {
    console.log(req.body);

    resp.redirect('/');
})
```

### Using Express.js Router
You can create a folder called <b>routes</b>, and create a file that will contain the routes. 
```
const express = require('express');

const router = express.Router();

router.post('/product', (req, resp, next)=> {
    console.log(req.body);

    resp.redirect('/');
})

module.exports = router;
```
Next, you can import the routes file in your app.js, and register the imported routes to the main app.
```
const app = express();

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);
```

## Returning HTML Pages (Files)