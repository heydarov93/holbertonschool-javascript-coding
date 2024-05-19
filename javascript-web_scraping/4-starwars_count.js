#!/usr/bin/node

const request = require('request');

const characterId = 18;
const parsedUrl = process.argv[2].replace(/films$/, 'people/');
const URL = `${parsedUrl}${characterId}`;

request(URL, { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  if (body.films)
    console.log(body.films.length);
  else
    console.log(0);
});
