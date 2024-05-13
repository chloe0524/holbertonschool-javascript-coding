#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const strWrite = process.argv[3];

fs.appendFile(filePath, strWrite, 'utf8', function (err) {
  if (err) {
    console.error(err);
  }
  console.log(strWrite);
});
