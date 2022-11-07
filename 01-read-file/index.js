const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

fs.readFile(
  path.join(__dirname, 'text.txt'),
  'utf-8',
  (error, data) => {
    if (error) throw error;
    stdout.write(data);
  }
      
);