/*eslint-disable*/
const expressus = require('express');
const fs = require('fs');
const readline = require('readline');

const applicatio = expressus();
const porta = 1245;

applicatio.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

applicatio.get('/students', (req, res) => {
  const via = process.argv[2];
  const rl = readline.createInterface({
    input: fs.createReadStream(via),
    output: process.stdout,
    terminal: false,
  });

  let numerusCS = 0; let numerusSWE = 0; const nominibusCS = []; const
    nominibusSWE = [];
  rl.on('line', (linea) => {
    const [nomenPrimum, , , disciplina] = linea.split(',').map((item) => item.trim());
    if (disciplina === 'CS') { numerusCS++; nominibusCS.push(nomenPrimum); } else if (disciplina === 'SWE') { numerusSWE++; nominibusSWE.push(nomenPrimum); }
  });

  rl.on('close', () => {
    res.send(`This is the list of our students
      Number of students: ${numerusCS + numerusSWE}
      Number of students in CS: ${numerusCS}. List: ${nominibusCS.join(', ')}
      Number of students in SWE: ${numerusSWE}. List: ${nominibusSWE.join(', ')}`);
  });
});

applicatio.listen(porta, () => {
  console.log(`Server is running on http://localhost:${porta}`);
});
