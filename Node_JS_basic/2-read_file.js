const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const parsedData = data.trim().split('\n').slice(1).map((str) => str.split(','));
    const numberOfStudents = parsedData.length;
    const fieldNames = Array.from(new Set(parsedData.map((row) => row.at(-1))));
    const studentsByFields = {};

    fieldNames.forEach((field) => {
      studentsByFields[field] = [];
    });

    parsedData.forEach((studentInfo) => {
      studentsByFields[studentInfo.at(-1)].push(studentInfo[0]);
    });

    console.log(`Number of students: ${numberOfStudents}`);

    Object.keys(studentsByFields).forEach((data) => {
      const output = `Number of students in ${data}: ${studentsByFields[data].length}. `
      + `List: ${studentsByFields[data].join(', ')}`;

      console.log(output);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
