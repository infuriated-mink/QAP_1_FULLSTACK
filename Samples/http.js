//The http module in Node.js allows you to create a web server and make requests to other servers. It's like a special tool that helps your program talk to other programs over the internet.
// // The fs module in Node.js is like a file manager for your computer. It helps your program read and write files, create new folders, and delete old files. It's really useful for working with text files, images, and other types of data

const http = require('http');
const fs = require('fs');

// Serve JSON on port 3004
serveJson('user.json', 3004);

function serveJson(jsonfile, port) {
  http.createServer(function (req, res) {
    fs.readFile(jsonfile, 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading JSON file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        return res.end();
      }

      try {
        const jsonData = JSON.parse(data);
        console.log('JSON file ' + jsonfile + ' was served.')
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(jsonData));
        return res.end();
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error parsing JSON');
        return res.end();
      }
    });
  }).listen(port, function () {
    console.log('Server listening on port ' + port + ' for JSON');
  });
}
