#!/usr/bin/node

const request = require('request');
const apiURL = process.argv[2];

request(apiURL, (err, response, body) => {
  if (err) {
    console.error(err);
  } 
    const todos = JSON.parse(body);
    const doneTodos = todos.filter(todo => todo.completed);
    const doneTasks = {};

    for (const todo of doneTodos) {
      doneTasks[todo.userId] = (doneTasks[todo.userId] || 0) + 1;
    }

    console.log(doneTasks);
});
