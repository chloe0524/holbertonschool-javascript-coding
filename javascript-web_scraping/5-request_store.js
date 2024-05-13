#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const U_R_L = process.argv[2];
const filePath = process.argv[3];

request(U_R_L, (err, response, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile(filePath, data, 'utf-8', function (err) {
    if (err) throw err;
  });
});
