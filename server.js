const path = require('path');
let mongoose = require('mongoose')
let Pic = require('./src/datasets/pics')
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let http = require('http').Server(app);


 //mongoose.connect("mongodb://androiddev:android123@ds127883.mlab.com:27883/instafake")

/*
 let picture = new Pic();
 picture.name = "REACT TEST"
 picture.description= "REACT TEST"
 picture.url= "react.png"
 picture.save();

 */

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/build/index.html'));

});

app.use(bodyParser.json());

//post endpoints

app.post('/share', function(req, res){
    console.log(req.body)
});



http.listen(process.env.PORT || 5000, function(){
    console.log('SERVER RUNNING');
});