# What's Inside

## Templating Engines
Available template engine for NodeJS are:
- EJS
  -  
  Use Normal HTML and plain JavaScript in your templates
  ```
  <p><%= name %></p>
  ```
  Install
  ```
  npm install ejs --save-dev
  ```
  Set the view engine to use 'ejs' on your app.js (this is similar with Pug)
  ```
  const app = express();
  app.set('view engine', 'ejs');
  ```
  Create your view file (ejs file) under the views folder. For example <b>404.ejs</b>

  Lastly you can follow Pug & Handlers bars on how to render the template and pass data.

  How to add conditions and loop data can be seen on **shop.ejs**

  By default EJS doesn't support Layouts, but we can use includes mechanism.
  
  First, you need to decomposed your html file into several parts (in this example: head.ejs, nav.ejs, and end.ejs)

  Second, you can import those decomposed files into your HTML Page like the following code.

  ```angular2html
  [file: views/404.ejs]
  
  <%- include('includes/head.ejs') %>
  ```

- Pug (Jade)
    - 
  Use minimal HTML and custom template engine
  ```
  p #{name}
  ``` 
  Install
  ```
  npm install pug --save-dev
  ```
  Set the view engine to use 'Pug' on your app.js
  ```
  const app = express();
  app.set('view engine', 'pug');
  ```
  Create your view file (pug file) under the views folder. For example <b>shop.pug</b>

  Lastly, you can render it with the following code.
  ```
  router.get('/', (req, resp, next) => {
    resp.render('shop');
    })
  ```
  NodeJS will automatically look for the <b>shop.pug</b> under the views folder.

  To send data to the pug view template, simply add it as the second parameter of the render method.
  ```
  resp.render('shop', {prods: adminData.products, docTitle: 'Shop'})
  ```
  And, to access the variable on the template, you can use the pug format like the following code.
  ```
  doctype html
  html(lang="en")
    head
        meta(charset="UTF-8")
        title #{docTitle}
  ```
  You can also create layouts to make your web more consistent. For example, if you have navigation menu on all of your pages, you can simply speficy the navigation html code on the layout and 'import' it into all of your pages. You can see the different between non-layout html code (shop_backup.pug) vs layout html code (shop.pug).

  What you need to know about the layout is the <b>block</b> code and <b>extend</b>. This is the bridge between your <b>Layout HTML Code</b> and the <b>Child Page HTML Code</b>

- Handlebars
  -
  Use Normal HTML and custom template engine
  ```
  <p>{{ name }}</p>
  ```
  Install
  ```
  npm install express-handlebars --save-dev
  ```
   Set the view engine to use 'Express Handlebads' on your app.js
  ```
  const expressHbs = require('express-handlebars');


  const app = express();

  // Using Express Handlebars template engine
  app.engine('handlebars', expressHbs());
  app.set('view engine', 'handlebars');
  ```
  As you see, the <b>handlebars</b> will be the extension of your HTML Code file. So, you can define anything you want.

  After that, create your view file (file with extension handlebars) under the views folder. For example <b>404.handlebars</b>

  Lastly, you can render the template and pass data into the template similar with how pug template engine do above. The difference is only how to use the variable inside the template.

  Several things to note when using express-handlebards
  ```
  1. Handlebars template enginee doesn't support logic, for example (if a > b, a == b). So, you need to move the logic into your backend logic and send a boolean to the template. Example:

    <shop.js>
    resp.render('shop', {prds: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0});

    <shop.handlebars>
    {{#if hasProducts }}
      Your View Code...
    {{/if}}
  
  2. If Else
    {{#if hasProducts}}
      Your code...
    {{ else }}
      Your code...
    {{/if}}

  3. Loop
    {{#each prds}}
      <h1>this.title</h1> <-- 'this' is a special variable that store the data in each loop
    {{/each}}
  ```
  To use layouts, you need to adjust the initialization of the engine.
  ```
    app.engine(
      'handlebars', 
      expressHbs({
          layoutsDir: 'views/layouts/', <-- The folder of your layout
          defaultLayout: 'main-layout', <-- Default layout file (main-layout.handlebars)
          extname: 'handlebars' <-- The extention of you template file, in this case we use '.handlebars'
      })
    );
  ```
  After that, you can create your layout file, for example:
  ```
  <layouts/main-layout.handlebars>
  <!DOCTYPE html>
  <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>{{ pageTitle }}</title>
        <link rel="stylesheet" href="/css/main.css">
        {{#if isCSSForms}}  <-- Remember, we can't put logic on handlebars template, so you need to send the boolean from your backend code.
            <link rel="stylesheet" href="/css/forms.css">
        {{/if}} <-- don't forget to close the if statements... :)
        {{#if isCSSProduct}}
            <link rel="stylesheet" href="/css/product.css">
        {{/if}}
        
    </head>

    <body>
        <header class="main-header">
            <nav class="main-header__nav">
                <ul class="main-header__item-list">
                  // This is how to add dynamic value/class
                  <li class="main-header__item"><a class="{{#if isShopPage}}active{{/if}}"href="/">Shop</a></li>  
                </ul>
            </nav>
        </header>

        {{{ body }}} <-- The most important part, this will be the content of your child page
    </body>
  </html>
  ```

  Lastly, you can create your child page HTML file that will be filled into the <b>{{{ body }}} </b> section of the layout.
  ```
  <404.handlebars>
  <h1>Page Not Found!</h1>
  ```


## Managing Data (Without a Database)

## Render Dynamic Content in our Views

## Understanding Templating Engines