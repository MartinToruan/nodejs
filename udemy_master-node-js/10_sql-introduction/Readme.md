# What's in this Module

## Installing dependencies
```
npm install mysql2
```

## Connecting to Mysql Database
```
# util/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'test'
});

module.exports = pool.promise();
```
The above code will return Mysql client in promise mode. Promise will allow you to make your code more redeable and reduce callback parameters on you code.

Next, you can use the Client on your Model. 
```
# model/product.js
const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products(title, price, description, imageUrl) VALUES(?, ?, ?, ?)', 
      [this.title, this.price, this.description, this.imageUrl]);
  }

  static fetchAll() {
      return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE id = ?', [id]);
  }
};
```

Lastly, you can use the Model in your Controller like the following code
```
# controllers/product.js
exports.getProduct = (req, res, next) => {
  const prodId  = req.params.productId;

  Product.findById(prodId)
    .then(([product]) => {
      res.render('shop/product-detail', {
        product: product[0],
        pageTitle: product[0].title,
        path: '/products'
      })
    })
    .catch(err => console.log(err));
}
```