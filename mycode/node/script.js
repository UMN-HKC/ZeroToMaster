const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrooor');
  }
  else {
    console.log(data.toString());
  }
})