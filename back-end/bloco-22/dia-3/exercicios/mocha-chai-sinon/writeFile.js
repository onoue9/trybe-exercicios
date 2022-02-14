const fs = require('fs').promises;

function write (fileName, fileContent) {
  try {
    fs.writeFile(fileName, fileContent, { flag: "wx" });
    return 'ok';
  } catch(err) {
    return err.message;
  }
}

module.exports = write;