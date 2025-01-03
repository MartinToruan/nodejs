const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
  Product.fetchAll(products => {
    
  });
};

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

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (prod of products) {
        const cartProductData = cart.products.find(p => p.id === prod.id);
        if (cartProductData) {
          cartProducts.push({productData: prod, qty : cartProductData.qty})
        }
      }

      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts,
        totalPrice: cart.totalPrice,
      });
    })
    
  });
};

exports.postCart = (req, res, next) => {
  const prodID = req.body.prodId;

  Product.findById(prodID, product => {
    Cart.addProduct(prodID, product.price);
  });

  res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
  const pID = req.body.productId;

  Product.findById(pID, product => {
    Cart.deleteProduct(pID, product.price);
    res.redirect('/cart');
  })  
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
