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
app.use('/product', (req, resp, next)=> {
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

## Filtering Path
If you want to add prefix for a routes, for example '/admin', you can add it on the app.js file like the following
```
app.use('/admin', adminRoutes);
```
By doing so, all the url on the adminRoutes will be accessible by adding the prefix 'admin', for example
```
localhost:3000/admin/add-product
``` 

## Returning HTML Pages (Files)
You can server an HTML File to the client with the following code.
```
router.get('/add-product', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
})
```
The path.join will return the correct html file which is stored under views folder. 

<b>__dirname</b> will return the path to the current file (which is ../routes/admin.js for example).


'<b>..</b>' means to go up 1 folder


## Serving Static File (css | js)
You can serve your static files by adding this on your app.js file. In this example, we place all of our static files inside <b>public</b> folder.
```
app.use(express.static(path.join(__dirname, "public")))
```

Next, you can use the static files on your html pages like this:
```
<link rel="stylesheet" href="/css/main.css">
```
By doing that, nodejs will automatically looks into the public folder, and continue look for <b>css</b> folder, and lastly find the <b>main.css</b> file