const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
    // socket.on("send_message", (data) => {
    //     socket.broadcast.emit("receive_message", data);
    // });
    socket.on("send_ticker", (data) => {
        socket.broadcast.emit("receive_ticker", data);
    });
});

server.listen(4000, () => {
    console.log("Server is running");
});
