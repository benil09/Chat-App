import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
    }
});
export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
  }
  

// used to store online users
const userSocketMap ={}; //{userId:socketId}


io.on('connection', (socket) => {
    console.log('A new client connected', socket.id);
    // store the socket id in the userSocketMap
    const userId = socket.handshake.query.userId;
    if(userId){
        userSocketMap[userId]=socket.id;
    }


    io.emit("get-online-users",Object.keys(userSocketMap));



    socket.on('disconnect', () => {
        console.log('A client disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit("get-online-users",Object.keys(userSocketMap));

    });
});
export { io, server, app };
