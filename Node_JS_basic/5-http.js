const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
}).listen(port);

module.exports = app;