#!/usr/bin/node

import request from 'request'

const url = process.argv[2];

request(url, (error, response) => {
  if (error) console.log(error);
  console.log(response && `code: ${response.statusCode}`);
});
