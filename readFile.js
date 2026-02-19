const fs = require('fs');

// First create a file to read
fs.writeFileSync('file.txt', 'This is sample content.');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});