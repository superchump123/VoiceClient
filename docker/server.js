const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Client connected');
  
  ws.on('message', message => {
    ws.send(message);
  });

  ws.on('close', () => console.log('Client disconnected'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Audio server listening on port ${PORT}`);
});