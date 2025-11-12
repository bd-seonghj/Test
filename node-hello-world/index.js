const http = require('http');
const url = require('url');

// Define the port
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL and query parameters
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  
  // Get the name from query parameter, default to 'World'
  const name = query.name || 'World';
  
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });
  
  // Send personalized Hello response
  res.end(`Hello ${name}!\n`);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});