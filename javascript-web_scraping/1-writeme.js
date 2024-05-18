#!/usr/bin/node
import fs from 'fs';
import process from 'process';

const filename = process.argv[2];
const text = process.argv[3];

fs.writeFile(filename, text, 'utf-8', (error) => {
  if (error) { console.log(error); }
});
