const net = require('net');

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    console.log(data);
    console.log(data.toString());
    console.log(data);
  })

  socket.on("close", () => {
    console.log("Disconnected");
  })

  socket.on("error", (err) => {
    console.log(err.message);
  })
})

server.listen(4000, () => {
  console.log(server.address().port);
})