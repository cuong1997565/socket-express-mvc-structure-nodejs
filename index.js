const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*"
  }
});
const port =  3000;
const SocketServices = require('./src/services/chat.service')

// can chu y toi khai niem global duoc gioi thieu trong video 
global.__basedir = __dirname;
global._io = io; // cach 2

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', msg => {
//     io.emit('chat message', msg);
//   });
// });

// cach 1: use middleware express 

// app.use( (req, res, next) => {
//   res.io = io;
//   next()
// })

app.use(require('./src/routes/chat.route'))

global._io.use((socket, next) => {
  const { token } = socket.handshake.headers
  console.log(11111111111)
  console.log(socket.headers)
  if(token && token === "bear::123") {
    return next()
  }
  next( new Error("Pls login anh gi oi"))
})

global._io.on('connection', SocketServices.connection)

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});