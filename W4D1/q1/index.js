const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('Top Secret'));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let cookiesList = [];
    for(const c in req.cookies){
        cookiesList.push({key: c, value: req.cookies[c]});
    }

    console.log('arr length: '+cookiesList.length)
    res.render('addCookies', {cookiesList});
});

app.post('/', (req, res) => {
    const {key, value} = req.body;
    console.log('key: ' + key + ' value: ' + value);
    res.cookie(key, value);
    
    res.redirect(303, '/');
});

app.listen(3000);