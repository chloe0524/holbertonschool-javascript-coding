#!/usr/bin/node

const request = require('request');
const U_R_L = process.argv[2];
const charID = 18;
let count = 0;

request(U_R_L, function (err, response, data) {
  if (err) {
    console.error(err);
  } else {
    const movieData = JSON.parse(data).results;
    movieData.forEach((movie) => {
      if (movie.characters.some((character) => character.includes(`/people/${charID}/`))) {
        count++;
      }
    });
    console.log(count);
  }
});
