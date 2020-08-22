var express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
 app.listen(process.env.PORT || 3000);
 