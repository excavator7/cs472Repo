const express = require('express');
const app = express();

const path = require('path');
const product = require('./module/product');
const cart = require('./module/shoppingCart');

let products = [{id: 1, name: "Mars", description: "Chocolate", price: 2, quantity: 1},
                {id: 2, name: "Twix", description: "Chocolate", price: 3, quantity: 3},
                {id: 3, name: "Maltesers", description: "Chocolate", price: 4, quantity: 0}];
            
let cartMap = new Map();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("home", {products});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    console.log('id: ' + id)
    const item = products.filter(x => x.id === id)[0];
    res.render("product", {item});
});

app.post('/addToCart', (req, res) => {
    const {name, price} = req.body;
    //let price = req.body.price;
    //let quantity = req.body.quantity;
    console.log(name+', '+price);
    let item = products.find(p => p.name === name && p.quantity > 0);

    if(item){
        if(cartMap.has(name)){
            let item = cartMap.get(name);
            item.quantity +=1;
            item.price = parseInt(price);
        }else{
            let item = {name, quantity: 1, price: parseInt(price)};
            cartMap.set(name, item);
        }
        item.quantity--;
        res.redirect(303, "/cart");
    }else{
        console.log('cart size: ' + cartMap.size);
    }    
});

app.get("/cart", (req, res) => {
    console.log('redirecteeeed');
    res.render('shoppingCart', {item: [...cartMap.values()]});
});

app.listen(3000);