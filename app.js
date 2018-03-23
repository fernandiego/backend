const express = require('express');
const msg = require('./mod_test');

const app = express();

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render("home/index");
    console.log('Portal index')
})
app.get('/admin/formaddnoticia', function (req, res) {
    res.render("admin/formAddNoticia");
    console.log('Portal admin noticia')
})
app.get('/noticias/tecnologia', function (req, res) {
    res.render("noticias/tecnologia");
    console.log('Portal tec')
})

app.listen(3000, function () {
    console.log('servidor no ar, powered by express');
    console.log(msg);
})