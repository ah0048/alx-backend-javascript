const http = require('http');
const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    // Check if file has the correct extension
    if (path.extname(filePath).toLowerCase() !== '.csv') {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        let response = 'This is the list of our students\n';
        const rows = data.split('\n').filter((row) => row.trim() !== ''); // Filter out empty lines
        const rowsData = rows.slice(1); // Exclude the header row

        let studentsCount = 0;
        const fieldCount = {};

        rowsData.forEach((student) => {
          const studentValues = student.split(',');
          if (studentValues.length > 3) { // Ensure proper structure
            studentsCount += 1;
            const field = studentValues[3];
            const name = studentValues[0];

            if (field in fieldCount) {
              fieldCount[field].push(name);
            } else {
              fieldCount[field] = [name];
            }
          }
        });

        response += `Number of students: ${studentsCount}\n`;
        for (const [key, value] of Object.entries(fieldCount)) {
          response += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }

        resolve(response); // Resolve the promise on success
      } catch (error) {
        reject(new Error('Cannot load the database')); // Reject the promise on failure
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
    countStudents(databaseFile)
      .then((response) => {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end(response.trim('\n'));
      })
      .catch((error) => {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        const resp = 'This is the list of our students\n';
        res.end(resp + error.message); // Send the error message
      });
  }
});

app.listen(1245);

module.exports = app;
