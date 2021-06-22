const fs = require('fs');

function writeText(file, text) {
  fs.writeFileSync(file, text)
    return 'ok';
}

module.exports = writeText;
