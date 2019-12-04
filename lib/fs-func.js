const fs = require('fs').promises;

async function mkdirp(path){
  return await fs.mkdir(path, { recursive: true }, (err) => {
    if(err) throw err;
  });
}

module.exports = {
  mkdirp
};
