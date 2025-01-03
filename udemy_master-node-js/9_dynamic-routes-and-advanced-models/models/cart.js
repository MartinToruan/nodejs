const fs = require('fs');
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, price) {
        // Fetch the previous Cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // Analyze the cart => Find existing Product
            const cartProductIdx = cart.products.findIndex(prod => prod.id === id);

            if (cartProductIdx !== -1) {
                cart.products[cartProductIdx].qty += 1;
            } else {
                cart.products.push({id: id, qty: 1});
            }
            cart.totalPrice += +price;

            // Add new product / increase quantity
            fs.writeFile(p, JSON.stringify(cart), err => {
                if (err) {
                    console.log("error while inserting product into cart: ", err);
                }
            });
        });
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const product = cart.products.find(prod => prod.id === id);
            if (!product) {
                return;
            }
            
            const updated_cart = { ...cart };
            updated_cart.products = cart.products.filter(prod => prod.id !== id);
            updated_cart.totalPrice -= (+productPrice * product.qty);

            fs.writeFile(p, JSON.stringify(updated_cart), err => {
                if (err){
                    console.log("error while updating into cart: ", err);
                }
                
            })
        })
    }

    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
            let cart = JSON.parse(fileContent);
            if (err) {
                cb(null);
            } else {
                cb(cart);
            }
        })
    }
}