# What's in this Module

## Passing Route Params
### Pass Param to Route
1. Pass the query param from your HTML Page
```javascript
<div class="card__actions">
   <a class="btn" href="/products/<%= product.id %>">Details</a>
</div>
```
2. Define the routes and your Controller
```javascript
router.get('/products/:productId', shopController.getProduct);
```
3. You can then get the value of the query parameter on your Controller using this code
```javascript
const prodId  = req.params.productId;
```

### Pass Param to Request Body
1. Define the value you want to put on the request body on the form. Example the **prodID** 
```javascript
<form action="/cart" method="POST">
   <input type="hidden" name="prodId" value="<%= product.id %>">
   <button class="btn" type="submit">Add to Cart</button>
</form>
```
2. You can then read the body param on your controller like the following code:
```javascript
const prodID = req.body.prodId;
```

### Pass Variable to template/include file
1. Define your include/template file. On the following code, you can see that we need a product variable.
```javascript
# views/includes/add-to-card.ejs
<form action="/cart" method="POST">
    <input type="hidden" name="prodId" value="<%= product.id %>">
    <button class="btn" type="submit">Add to Cart</button>
</form>
```
2. Pass the variable from your EJS file using the following statement. 
```javascript
# views/shop/product-details.ejs
<%- include('../includes/add-to-cart.ejs', {product: product}) %>
```

## Using Query Params


## Enhance our Models