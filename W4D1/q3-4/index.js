'use strict'
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Secret'
}));

let products = [{id: 1, name: "Mars", description: "Chocolate", price: 2, quantity: 1},
                {id: 2, name: "Twix", description: "Chocolate", price: 3, quantity: 3},
                {id: 3, name: "Maltesers", description: "Chocolate", price: 4, quantity: 0}];
            
let cartMap = new Map();

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
    console.log('name: '+name);
    let item = products.find(p => p.name === name && p.quantity > 0);
    console.log('item: '+item);

    if(item){
        req.session[name] = {name, quantity: 1, price: parseInt(price)};
        item.quantity--;
        res.redirect(303, "/cart");
    }   
});

app.get('/cart', (req, res) => {
    const sessionArray = [];
    for(const s in req.session){
        sessionArray.push(req.session[s]);
    }
    res.render('shoppingCart', {item: sessionArray});
});

app.listen(3000);