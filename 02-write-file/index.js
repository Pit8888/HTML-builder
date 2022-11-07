const path = require('path');
const { stdout } = process;
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

fs.writeFile(
  path.join(__dirname, 'hello.txt'), '',
  (err) => {
    if (err) throw err;
  }
);
stdout.write('Введите техт ...\n');
rl.on('line', (data) => {

  if (data === 'exit') {
    console.log('Пока!');
    process.exit(0);

  } else {
    fs.appendFile(path.join(__dirname, 'hello.txt'), data + '\n', (error) => {
      if (error) console.log(error.message);
    });
  }
});
rl.on('SIGINT', () => {
  console.log('exit - то же работает)');
  process.exit(0);
});