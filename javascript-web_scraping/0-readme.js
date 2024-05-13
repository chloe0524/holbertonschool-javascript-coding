#!/usr/bin/node

const fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;
const filePath = argv._[0];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
