process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userData = process.stdin.read();

  if (userData !== null) {
    process.stdout.write(`Your name is: ${userData}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});