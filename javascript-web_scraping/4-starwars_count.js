#!/usr/bin/node

const request = require('request');
const actorID = 18; // 'Star Wars: Episode IV - A New Hope' on top <3

request(`https://swapi-api.hbtn.io/api/people/${actorID}`, (err, response, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const actorData = JSON.parse(data);
  const filmCount = actorData.films.length;
  console.log(filmCount);
});
