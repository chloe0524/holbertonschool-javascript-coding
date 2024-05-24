/*eslint-disable*/
const http = require('http');
const fs = require('fs');
const readline = require('readline');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.argv[2];
    const rl = readline.createInterface({
      input: fs.createReadStream(path),
      output: process.stdout,
      terminal: false,
    });

    let csCount = 0; let sweCount = 0; const csList = []; const
      sweList = [];
    rl.on('line', (line) => {
      const [firstName, , , field] = line.split(',').map((item) => item.trim());
      if (field === 'CS') { csCount++; csList.push(firstName); } else if (field === 'SWE') { sweCount++; sweList.push(firstName); }
    });

    rl.on('close', () => {
      res.end(`This is the list of our students
        Number of students: ${csCount + sweCount}
        Number of students in CS: ${csCount}. List: ${csList.join(', ')}
        Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
    });
  }
});

server.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});
