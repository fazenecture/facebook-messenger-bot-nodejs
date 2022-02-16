const express = require('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());;


app.set('view engine', 'ejs');
app.set('views', 'views');





app.get('/', (req,res,next) => {
    res.send('Hello');
});

app.listen(5000);