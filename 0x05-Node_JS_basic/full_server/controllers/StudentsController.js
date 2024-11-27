import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(databaseFile)
      .then((data) => {
        let output = 'This is the list of our students\n';
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        fields.forEach((field) => {
          output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        response.status(200).send(output.trim());
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'SWE' && major !== 'CS') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
      readDatabase(databaseFile)
        .then((data) => {
          const studentsList = data[major].join(', ');
          response.status(200).send(`List: ${studentsList}`);
        })
        .catch((error) => {
          response.status(500).send(error.message);
        });
    }
  }
}
