var express = require('express')
var mongodb = require('mongodb')

var url = 'mongodb+srv://Bello:Josh%40Master1@cluster0-fdog1.mongodb.net/test?retryWrites=true&w=majority'

var mongoClient = mongodb.connect(url, (err, db) => {
    console.log('data')
    var dbo = db.db('data')
    dbo.collection("goals").insertOne(testobj, (obj, res) => {
        console.log('added')
        db.close()
    })
})

/*var app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {test: 'i swear this works'})
})

app.listen(3000, () => {console.log('working.')})*/