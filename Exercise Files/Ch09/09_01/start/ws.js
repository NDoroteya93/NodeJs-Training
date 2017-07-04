// websocket server

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3000 });

// connected end-point
// this cb function to fire 

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        if (message === 'exit') {
            ws.close();
        } else {
            wss.clients.forEach((client) => {
                // broadcats all message 
                // send message back
                client.send(message);
            });
        }
    });
    ws.send('Welcome to cyber chat');
});