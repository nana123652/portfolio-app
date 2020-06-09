
const express= require('express');


//init app
const app= express();

//set the view engine to ejs
app.set('view engine', 'ejs');
const bodyParser= require('body-parser');
app.use(bodyParser.json()) //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})) //to support URL-encoded bodies


app.get('/', function(req, res){
    res.render("index");
})

app.get('/resume', function(req,res){
    res.render("resume");
})

//static images
app.use("lib",express.static('lib'))
app.use(express.static('lib'))


//static files
app.get('/style', function(req,res){
    res.sendFile(__dirname+"/lib/css/style.css");
})
var listener= app.listen(8000, function(){
    console.log('Portfolio app is running live at Port: '+ listener.address().port);
})

process.on('exit', (code)=>{
    console.log(`About to exit with code: ${code}`);
})