#!/usr/bin/node
import fs from 'fs';
import process from 'process';

const filename = process.argv[2];

fs.readFile(filename, 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
