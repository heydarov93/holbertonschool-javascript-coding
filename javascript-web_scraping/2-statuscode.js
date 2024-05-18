#!/usr/bin/node
import request from 'request';
import process from 'process';

const URL = process.argv[2];

request(URL, function (err, response, body) {
  console.log(`code: ${response.statusCode}`);
});
