//TODO: organize code.
//TODO: make button to create new goals
//todo: add date menu
//todo: 

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

class timestruct {
    constructor(_mm, _dd, _yyyy,_mmmm) {
        this.mm = _mm;
        this.dd = _dd;
        this.yyyy = _yyyy;
        this.mmmm = _mmmm;
    }
}


var randGoal = () => {
    return new goalstruct(
        Math.round(Math.random() * 1000).toString(),
        new timestruct(Math.round(Math.random() * 12),Math.round(Math.random() * 30),2020,Math.round(Math.random() * 24)),
        new timestruct(Math.round(Math.random() * 12),Math.round(Math.random() * 30),2020,Math.round(Math.random() * 24))
    )
}

var goals = [randGoal(),randGoal(),randGoal(),randGoal(),randGoal()]
var times = ['','','','','','','','','','','','','','','','','','','','','','','','']

for (let i = 0; i < goals.length; i++) {
    times[goals[i].starttime.mmmm - 1] += ' ' + goals[i].name
    times[goals[i].endtime.mmmm - 1] += ' ' + goals[i].name
    console.log(goals[i].name + ' ' + (goals[i].starttime.mmmm).toString() + ' ' + (goals[i].endtime.mmmm).toString())
}

/*var mongoClient = mongodb.connect(url, (err, db) => {
    console.log('data')
    var dbo = db.db('data')
    dbo.collection("goals").insertOne(goals[0], (obj, res) => {
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
    res.render('index', {
        am1: times[0],
        am2: times[1],
        am3: times[2],
        am4: times[3],
        am5: times[4],
        am6: times[5],
        am7: times[6],
        am8: times[7],
        am9: times[8],
        am10: times[9],
        am11: times[10],
        am12: times[11],
        pm1: times[12],
        pm2: times[13],
        pm3: times[14],
        pm4: times[15],
        pm5: times[16],
        pm6: times[17],
        pm7: times[18],
        pm8: times[19],
        pm9: times[20],
        pm10: times[21],
        pm11: times[22],
        pm12: times[23]})
})

app.listen(3000, () => {console.log('working.')})