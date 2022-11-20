const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
const product = require('./module/product');
const cart = require('./module/shoppingCart');
let cartMap = new Map();

let products = [new product("Mars", "Chocolate", 10, 123, 1),
                new product("Snickers", "Chocolate", 1, 234, 2),
                new product("Rice", "basmati", 20, 245, 0)];

app.get('/', (req, res) => {
    res.render("home", {prod: products});
});

//http://localhost:3000/product?id=123&name=kitkat&description=chocolat&price=10
app.get('/product', (req, res) => {
    let id = parseInt(req.query.id);
    console.log('id: ' + id)
    let prod = products.filter(x => x.id == id)[0];
    res.render("product", {prod: prod});
});

app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    console.log('name: '+name);
    console.log('price: '+price);
    console.log('quantity: '+quantity);
    let cartItem = products.find(p => p.name === name);
    let item = cartMap.get(name);

    if(cartItem){
        let item = {name, quantity: 1, price: parseInt(price)};
        cartMap.set(name, item);
    }
   
    console.log('cart size: ' + cartMap.size);
    res.render("shoppingCart", {cartItems: [...cartMap.values()]});
});

app.listen(3000);