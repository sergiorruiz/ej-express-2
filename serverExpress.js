const libExpress = require('express');

const app = libExpress();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(3100);
