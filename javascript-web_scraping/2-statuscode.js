#!/usr/bin/node

const request = require('request');

const URL = process.argv[2];

request(URL, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(response && `code: ${response.statusCode}`);
});
