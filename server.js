'use strict';

var express = require("express");
var app = express();
   
app.use('/public', express.static(process.cwd() + '/app/public'));

var server = app.listen(process.env.PORT, function(){
    console.log("Server is listening on " + process.env.PORT);
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });
});