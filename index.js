var WebSocket = require('ws');

var wss = new WebSocket.Server({ port: 8888 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach((client) => {
      if (client === ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

