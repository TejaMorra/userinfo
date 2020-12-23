// const http = require('http');
// const socket = require('socket.io');
// var connect = require('connect');

// var app = connect()

//     .use(function(req, res){

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.end('hello world\n');

//  });

// const server = http.createServer(app);
// const io = socket(server);

// io.on('connection', socket => {
//   console.log('A new user has joined the chat')

//   socket.emit('message', 'You have successfully joined the chat')

//   socket.on('message', (msg) => {
//     io.emit('message', msg)
//   })

// })

// server.listen(8080, () => console.log(`Server Running`))

var express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io'),
    server, io;

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(3000);

io = socketIO(server);

io.on('connection', function (socket) {
  console.log('Socket Connected')
  socket.emit('send-message', {
      message: 'Hi from server'
  });
  socket.on('greeting-from-client', function (message) {
    console.log(message);
  });
});