const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  if (!fs.existsSync(filePath) || path.extname(filePath).toLowerCase() !== '.csv') {
    throw new Error('Cannot load the database');
  }
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const rows = data.split('\n');
    // const headers = rows[0].split(',');
    const rowsData = rows.slice(1);

    let studentsCount = 0;
    const fieldCount = {};
    rowsData.forEach((student) => {
      if (student.trim()) {
        studentsCount += 1;
        const studentValues = student.split(',');
        if (studentValues[3] in fieldCount) {
          fieldCount[studentValues[3]].push(studentValues[0]);
        } else {
          fieldCount[studentValues[3]] = [studentValues[0]];
        }
      }
    });
    console.log(`Number of students: ${studentsCount}`);
    for (const [key, value] of Object.entries(fieldCount)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (error) {
    console.error(error);
  }
}
module.exports = countStudents;
