const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB = process.argv[2] || '';

const counter = (path) => new Promise((res, rej) => {
  if (!path) rej(new Error('Cannot load the database'));
  fs.readFile(path, (err, data) => {
    if (err) rej(new Error('Cannot load the database'));
    const lines = data.toString('utf-8').trim().split('\n');
    const groups = {};
    const fields = lines[0].split(',');
    const props = fields.slice(0, fields.length - 1);
    lines.slice(1).forEach((line) => {
      const record = line.split(',');
      const lineLen = record[record.length - 1];
      groups[lineLen] = groups[lineLen] || [];
      const input = props.map((prop, idx) => [prop, record[idx]]);
      groups[lineLen].push(Object.fromEntries(input));
    });
    const reported = [`Number of students: ${lines.length - 1}`];
    for (const [lineLen, group] of Object.entries(groups)) {
      reported.push(`Number of students in ${lineLen}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
    }
    res(reported.join('\n'));
  });
});

const ROUTES = [
  {
    route: '/',
    handler: (_, res) => res.end('Hello Holberton School!'),
  },
  {
    route: '/students',
    handler: (_, res) => {
      counter(DB)
        .then((reported) => res.end(`This is the list of our students\n${reported}`))
        .catch((err) => res.end(`This is the list of our students\n${err.message}`));
    },
  },
];

app.on('request', (req, res) => {
  const handler = ROUTES.find((r) => r.route === req.url);
  if (handler) handler.handler(req, res);
});

app.listen(PORT, HOST, () => console.log(`Server listening at -> http://${HOST}:${PORT}`));
module.exports = app;
