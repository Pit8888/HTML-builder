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
        
        const isFile = file.isFile();
        const filePath = path.join(__dirname, "secret-folder", file.name)
        const fileName = file.name.slice(0,file.name.indexOf('.'));
        const extname = path.extname(filePath).slice(1);
        
        fs.stat (filePath, (err, stats) => {
          if (err) throw err;
          if (isFile) {
            console.log(`${fileName} - ${extname} - ${stats.size}`)
          }
        })
        
      });
    }

  }

  
);
