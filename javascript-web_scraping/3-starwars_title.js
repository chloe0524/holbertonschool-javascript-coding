#!/usr/bin/node

const request = require('request');
const showId = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${showId}/`, (err, response, data) => {
  if (err) {
    console.error(err);
  }
  const film = JSON.parse(data);
  console.log(`${film.title}`);
});
