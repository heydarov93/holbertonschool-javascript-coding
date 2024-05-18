#!/usr/bin/node
import request from 'request';
import process from 'process';

const URL = process.argv[2];

request(URL, (err, response, body) => {
  if (!err)
    console.log(`code: ${response.statusCode}`);
});
