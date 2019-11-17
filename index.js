var express = require('express')

var app = express()
app.set('render engine', 'ejs')

app.get('/', (req, res) => {
    app.render('index')
})