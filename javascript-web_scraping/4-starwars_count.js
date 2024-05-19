#!/usr/bin/node

const request = require('request');

const characterId = 18;
const parsedUrl = process.argv[2].replace(/films\/$/, 'people/');
const URL = `${parsedUrl}${characterId}`;

request(URL, { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(body.films.length);
});
