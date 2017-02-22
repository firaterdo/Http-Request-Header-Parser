var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {

// res.send('Welcome larca <br>' + req.ip)

var ahadres = req.headers['x-forwarded-for']

// en-US,en;q=0.8,tr;q=0.6
var dillerce = req.headers['accept-language']
var arrayOfDiller = dillerce.split(',')
var ahadil = arrayOfDiller[0]



// Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
var yazilimlarca = req.headers['user-agent']

var arrayOfYazilimlar = yazilimlarca.split(')')

var yeniArray = arrayOfYazilimlar[0].split('(')

var ahaYazilim = yeniArray[1]


var yanit =
{
"ipaddress": ahadres,
"language": ahadil,
"software": ahaYazilim
}



// res.send('Welcome larca <br>' + ahadil + " " + ahadres + " " + ahaYazilim)

res.send(yanit)



//


})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});