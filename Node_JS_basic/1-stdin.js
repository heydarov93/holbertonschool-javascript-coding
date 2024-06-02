const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  rl.write(`Your name is: ${answer}\r`);

  rl.write('This important software is now closing\n');
  rl.close();
});