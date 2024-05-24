const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');

    const students = { CS: [], SWE: [] };

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (firstName && students[field]) {
        students[field].push(firstName);
      }
    });

    console.log(`Number of students: ${students.CS.length + students.SWE.length}`);
    ['CS', 'SWE'].forEach((field) => {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
