const io = require("socket.io");
const socket = {};
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

function connect(server) {
    socket.io = io(server, {
        cors: {
            origin: config.frontendBasicEndpoint,
            methods: ["GET", "POST"]
        }
    });
    /* socket.io.on("connection", () => { console.log("New client connected") }) */
}

module.exports = {
    connect,
    socket,
}