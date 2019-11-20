var express = require('express')
var mongodb = require('mongodb')

var url = 'mongodb+srv://Bello:Josh%40Master1@cluster0-fdog1.mongodb.net/test?retryWrites=true&w=majority'

class goalstruct {
    constructor(_name, _starttime, _datetime) {
        this.name = _name;
        this.starttime = _starttime;
        this.datetime = _datetime;
    }
}

class datestruct {
    constructor(_mm, _dd, _yyyy) {
        this.mm = _mm;
        this.dd = _dd;
        this.yyyy = _yyyy;
    }
}

var exdate_s = new datestruct(11,19,2019)
var exdate_e = new datestruct(5,11,2020)
var testgoal = new goalstruct("birthday prep",exdate_s,exdate_e)

var teststr;

var mongoClient = mongodb.connect(url, (err, db) => {
    console.log('data')
    var dbo = db.db('data')
    /*dbo.collection("goals").insertOne(testgoal, (obj, res) => {
        console.log('added')
        db.close()
    })*/
    dbo.collection("goals").find({}).toArray((err, res) => {
        teststr = res[1].name
        db.close()
    })
})

var app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {test: teststr})
})

app.listen(3000, () => {console.log('working.')})