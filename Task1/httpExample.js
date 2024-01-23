// The http module in Node.js allows you to create a web server and make requests to other servers. It's like a special tool that 
// helps your program talk to other programs over the internet.

// The events module in Node.js is like a messenger that helps different parts of your program talk to each other. For example,
// when something important happens, like a user clicking a button, the events module can let other parts of your program know about it.

const http = require('http');
const { EventEmitter } = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

const server = http.createServer((req, res) => {
  // Get the URL path
  const url = req.url;

  // Handle different routes
  if (url === '/') {
    // Home route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the home page!');
    
    // Emit 'home' event
    eventEmitter.emit('home', { message: 'User visited the home page' });
  } else if (url === '/about') {
    // About route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page.');
    
    // Emit 'about' event
    eventEmitter.emit('about', { message: 'User visited the about page' });
  } else if (url === '/contact') {
    // Contact route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us at contact@example.com');
    
    // Emit 'contact' event
    eventEmitter.emit('contact', { message: 'User visited the contact page' });
  }
});

// Listen for the 'home' event
eventEmitter.on('home', (data) => {
  console.log('Event - Home:', data.message);
});

// Listen for the 'about' event
eventEmitter.on('about', (data) => {
  console.log('Event - About:', data.message);
});

// Listen for the 'contact' event
eventEmitter.on('contact', (data) => {
  console.log('Event - Contact:', data.message);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
