const express = require('express');
const expressVpn = express();

expressVpn.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
const port = 1245;
expressVpn.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/!`);
});

module.exports = expressVpn;
