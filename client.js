const net = require('net');

const option = {
  port: 4000,
  host: '127.0.0.1'
}

const client = net.createConnection(option);

client.on("connect", (socket) => {
  console.log("client connected");
  client.write('test');
})