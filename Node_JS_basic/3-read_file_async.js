const fs = require('fs');

const countStudents = path => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    } else {
      const students = { 'CS': [], 'SWE': [] };
      data.trim().split('\n').forEach(line => {
        const [firstName, , , field] = line.split(',');
        if (firstName && students[field]) {
          students[field].push(firstName);
        }
      });

      console.log(`Number of students: ${students.CS.length + students.SWE.length}`);
      ['CS', 'SWE'].forEach(field => {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      });

      resolve();
    }
  });
});
module.exports = countStudents;