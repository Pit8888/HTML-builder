const path = require('path');
const fs = require('fs');
  
fs.readdir(path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    console.log('\nВывод информации о файлах: ');
    if (err)
      console.log(err);
    else{
    
      files.forEach(file => {
        console.log(file);
      });
    }
  }
);
