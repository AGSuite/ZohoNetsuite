const http = require('http');
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'public', 'images', 'lap', 'netsuite_cfo_consolidation_dashboard.png');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
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
        console.log("Successfully wrote cropped image to", targetPath);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
        
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

server.listen(3002, () => {
  console.log("Helper server listening on http://localhost:3002");
});
