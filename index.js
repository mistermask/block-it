//TODO: organize code.
//TODO: make object for all the times
//TODO: make the times clickable to create new goals

var express = require('express')
var mongodb = require('mongodb')

var url = 'mongodb+srv://Bello:Josh%40Master1@cluster0-fdog1.mongodb.net/test?retryWrites=true&w=majority'

class goalstruct {
    constructor(_name, _starttime, _endtime) {
        this.name = _name;
        this.starttime = _starttime;
        this.endtime = _endtime;
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

/*var mongoClient = mongodb.connect(url, (err, db) => {
    console.log('data')
    var dbo = db.db('data')
    dbo.collection("goals").insertOne(testgoal, (obj, res) => {
        console.log('added')
        db.close()
    })
    dbo.collection("goals").find({}).toArray((err, res) => {
        teststr = res[0].endtime.yyyy
        db.close()
    })
})*/

var app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {am1: null,
        am1: null,
        am2: null,
        am3: null,
        am4: null,
        am5: null,
        am6: null,
        am7: null,
        am8: null,
        am9: null,
        am10: null,
        am11: null,
        am12: testgoal.name,
        pm1: null,
        pm2: null,
        pm3: null,
        pm4: null,
        pm5: null,
        pm6: null,
        pm7: null,
        pm8: null,
        pm9: null,
        pm10: null,
        pm11: null,
        pm12: null,})
})

app.listen(3000, () => {console.log('working.')})