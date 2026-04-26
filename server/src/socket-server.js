import http from 'http';
import { Server as SocketIO } from 'socket.io';
import app from './index.js'; // Express app
import setupChat from './controllers/chat.js';

const server = http.createServer(app);

const io = new SocketIO(server, {
    cors: {
        origin: 'http://localhost:5173',
        credentials: true,
    },
});

setupChat(io);

// server.listen(7777, () =>
//     console.log('✅ Server + Socket.IO running on http://localhost:7777')
// );

const PORT = process.env.PORT || 7777;

server.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
