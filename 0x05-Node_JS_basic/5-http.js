const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  if (res.url === '/') {
    res.end('Hello Holberton School!');
  } else if (res.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        console.log('Done!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.listen(1245);

module.exports = app;
