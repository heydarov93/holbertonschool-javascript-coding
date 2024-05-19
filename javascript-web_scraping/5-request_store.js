#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const destFile = process.argv[3];

request(URL, { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.writeFile(destFile, body, 'utf-8', (err) => {
    if (err) { console.log(err); }
  });
});
