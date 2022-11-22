const express = require('express');
const app = express();

const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Secret'
}));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const style = (hour > 6 && hour < 18) ? 'day' : 'night';
    console.log('Hour is: '+hour+' style: '+style);
    
    res.render('person', {style});
});

app.post('/result', (req, res) => {
    const {name, age} = req.body;
    
    console.log('name from body: '+name);
    console.log('age from body: '+age);
    
    req.session['name'] = name;
    req.session['age'] = age;
    res.redirect('/output');
});

app.get('/output', (req, res) => {
    let sessionMap = new Map();

    for(const s in req.session){
        sessionMap.set(s, req.session[s]);
    }
    console.log('Map size: ' + sessionMap.size);
    console.log([...sessionMap]);
    console.log('age in map: '+sessionMap.get('age'));
    res.send('Welcome ' + sessionMap.get('name') + ' with age ' + sessionMap.get('age'));
});

app.listen(3000);