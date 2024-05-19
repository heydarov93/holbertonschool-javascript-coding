#!/usr/bin/node

const request = require('request');

const characterId = 18;
const URL = `${process.argv[2]}`;

request(URL, { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  let countFilms = 0;

  body.results.forEach(episode => {
    episode.characters.forEach((characterUrl) => {
      if (characterUrl.endsWith(`${characterId}/`)) { countFilms += 1; }
    });
  });

  console.log(countFilms);
});
