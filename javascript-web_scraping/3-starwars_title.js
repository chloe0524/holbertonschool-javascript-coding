#!/usr/bin/node

const request = require('request');
const showId = process.argv[2];

request(`https://swapi.dev/api/films/${showId}/`, function (err, response, data) {
  if (err) {
    console.error(err);
  }
  const film = JSON.parse(data);
  console.log(`${film.title}`);
});
