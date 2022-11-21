const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


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
    console.log(name+', '+price+', '+quantity);
    let cartItem = products.find(p => p.name === name && p.quantity > 0);

    if(cartItem){
        if(cartMap.has(name)){
            console.log('heeere')
            let item = cartMap.get(name);
            item.quantity +=1;
            item.price = parseInt(price);
        }else{
            console.log('theeere')
            let item = {name, quantity: 1, price: parseInt(price)};
            cartMap.set(name, item);
        }
        item.quantity--;
        
    }else{
        console.log('cart size: ' + cartMap.size);
    }
    console.log('redirect the page.....')
    res.redirect(303, "/cart");
});

app.get("/cart", (req, res) => {
    console.log('redirecteeeed');
    res.render('shoppingCart', {cartItems: [...cartMap.values()]});
});

app.listen(3000);