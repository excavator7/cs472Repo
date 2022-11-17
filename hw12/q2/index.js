const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/result" method="post">
            <label>Name</label>
            <input type="text" name="fullName">
            <label>Age</label>
            <input type="text" name="age">
            <input type="submit" value="Submit Query">
        </form> 
    `);
});

app.listen(3000);