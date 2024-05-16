const http = require("http");
const app = require("./app");
const port = require("./config.json").port || 6041;
const server = http.createServer(app);
const version = require("./package.json").version;
const io = require("socket.io")();

io.attach(server, {
  maxHttpBufferSize: 1e9,
});

io.on("connection", (socket) => {
  socket.on("sampleEndpoint", (params, callback) => {
    // Do something
    console.log("sampleEndpoint");
    callback("response");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server@${version} running on: ${port}`);
});

//my code
// server.listen(port, '127.0.0.1', () => {
//   console.log(`Server listening at http://127.0.0.1:${port}`);
// });
