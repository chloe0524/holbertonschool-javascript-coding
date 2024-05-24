/*eslint-disable*/
const express = require('express');
const fs = require('fs');
const readline = require('readline');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false,
  });

  let countCS = 0; let countSWE = 0; const namesCS = []; const namesSWE = [];
  rl.on('line', (line) => {
    const [firstName, , , field] = line.split(',').map((item) => item.trim());
    if (field === 'CS') { countCS++; namesCS.push(firstName); } 
    else if (field === 'SWE') { countSWE++; namesSWE.push(firstName); }
  });

  rl.on('close', () => {
    if (countCS + countSWE > 0) {
      res.send(`This is the list of our students
        Number of students: ${countCS + countSWE}
        Number of students in CS: ${countCS}. List: ${namesCS.join(', ')}
        Number of students in SWE: ${countSWE}. List: ${namesSWE.join(', ')}`);
    } else {
      res.send('This is the list of our students\nNumber of students: 0');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;