const http = require('http');
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'public', 'images', 'Dashboard', 'netsuite Ai dashboard.png');

const server = http.createServer((req, res) => {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/upload') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const base64Data = payload.image.replace(/^data:image\/png;base64,/, "");
        
        fs.writeFileSync(targetPath, base64Data, 'base64');
        console.log("Successfully wrote processed transparent image to", targetPath);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
        
        // Gracefully shut down after a short delay
        setTimeout(() => {
          console.log("Shutting down helper server...");
          process.exit(0);
        }, 1000);
      } catch (err) {
        console.error("Error writing file:", err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Helper server listening on http://localhost:3001");
});
