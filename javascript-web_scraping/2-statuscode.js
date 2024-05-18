#!/usr/bin/node
import request from 'request';
import process from 'process';

const URL = process.argv[2];

request(URL, (err, response) => {
  if (err) { console.log(err); } else { console.log(`code: ${response.statusCode}`); }
});
