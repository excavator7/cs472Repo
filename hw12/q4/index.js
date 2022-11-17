const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const style = (hour > 6 && hour < 18) ? 'day' : 'night';
    console.log('Hour is: '+hour)
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Person</title>
            <link rel="stylesheet" href="/css/${style}.css">
        </head>
        <body>
            <form action="/result" method="post">
                    <label>Name</label>
                    <input type="text" name="fullName">
                    <label>Age</label>
                    <input type="text" name="age">
                    <input type="submit" value="Submit Query">
                </div>
            </form>   
        </body>
    </html>
    `);
});

app.post('/result', (req, res) => {
    res.redirect(404, `/output`);
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name = "person";
    } 
    if(!age){
        age = 30;
    }
    res.send(`Welcome ${name} with age ${age}`);
});

app.listen(3000);