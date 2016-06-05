'use strict';

var express = require("express");
var app = express();
   
var server = app.listen(process.env.PORT, function(){
    console.log("Server is listening on " + process.env.PORT);
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', print);
      socket.on('start', print);
      socket.on('change', print);
});

function print(data){
    console.log(data);
}