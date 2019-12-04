const fs = require('fs').promises;

async function mkdirp(path){
  return await fs.mkdir(path, { recursive: true }, (err) => {
    if(err) throw err;
  });
}

async function writeJSON(path, obj){
  const stringData = JSON.stringify(obj);
  return await fs.writeFile(path, stringData);
}

async function readJSON(path){
  const data = await fs.readFile(path);
  return JSON.parse(data);
}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON
};
