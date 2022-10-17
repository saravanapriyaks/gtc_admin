const express = require('express');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/admin', function (req, res) {
    res.render('admin');
})

app.get('/vendor', function (req, res) {
    res.render('vendor');
})

app.get('/reg', function (req, res) {
    res.render('reg');
})

app.get('/user', function (req, res) {
    res.render('user');
})

app.get('/product', function (req, res) {
    res.render('product');
})

app.get('/ad', function (req, res) {
    res.render('ad');
})

app.get('/tickets', function (req, res) {
    res.render('ticket');
})

app.get('/', function (req, res) {
    res.render('login');
})

app.listen(8081, function(){
    console.log("The server is up on Port 8081");
})