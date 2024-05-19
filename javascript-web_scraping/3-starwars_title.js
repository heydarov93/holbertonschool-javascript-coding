#!/usr/bin/node

const request = require('request');

const id = process.argv[2];

const URL = `https://swapi-api.hbtn.io/api/films/${id}`;

request(URL, { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(body.title);
});
