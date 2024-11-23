const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on('connection', (ws) => {
  clients.push(ws);
  console.log('Client connected');

  ws.on('message', (message) => {
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clients = clients.filter((client) => client !== ws);
    console.log('Client disconnected');
  });
});
