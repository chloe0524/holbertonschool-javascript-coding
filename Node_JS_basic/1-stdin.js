/*eslint-disable*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Welcome to Holberton School, what is your name?\n', name => {
    process.stdout.write(`Your name is: ${name}`);
    readline.close();
  });
  
  readline.on('close', () => {
    process.stdout.write('This important software is now closing\n');
  });