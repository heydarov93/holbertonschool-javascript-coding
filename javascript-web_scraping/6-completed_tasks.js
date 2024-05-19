#!/usr/bin/node

const request = require('request');

const URL = process.argv[2];

request(URL, { json: true }, (err, res, todos) => {
  if (err) {
    console.log(err);
    return;
  }

  const outputObject = {};

  const completedTasks = todos.filter(task => task.completed);

  completedTasks.forEach(task => {
    outputObject[task.userId] = outputObject[task.userId] ? outputObject[task.userId] + 1 : 1;
    // if (outputObject[task.userId]) {
    //   outputObject[task.userId]++;
    // } else {
    //   outputObject[task.userId] = 1;
    // }
  });

  console.log(outputObject);
});
