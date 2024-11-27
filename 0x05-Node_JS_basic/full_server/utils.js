const fs = require('fs');
const path = require('path');

export default function readDatabase(filePath) {
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
        const rows = data.split('\n').filter((row) => row.trim() !== ''); // Filter out empty lines
        const rowsData = rows.slice(1); // Exclude the header row

        const fieldCount = {};

        rowsData.forEach((student) => {
          const studentValues = student.split(',');
          if (studentValues.length > 3) { // Ensure proper structure
            const field = studentValues[3];
            const name = studentValues[0];

            if (field in fieldCount) {
              fieldCount[field].push(name);
            } else {
              fieldCount[field] = [name];
            }
          }
        });
        resolve(fieldCount); // Resolve the promise on success
      } catch (error) {
        reject(new Error('Cannot load the database')); // Reject the promise on failure
      }
    });
  });
}
