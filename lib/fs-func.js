const fs = require('fs').promises;

async function mkdirp(path){
  return await fs.mkdir(path, { recursive: true });
}

async function writeJSON(path, obj){
  const stringData = JSON.stringify(obj);
  return await fs.writeFile(path, stringData);
}

async function readJSON(path){
  const data = await fs.readFile(path);
  return JSON.parse(data);
}

async function readDirectoryJSON(path){
  const data = await fs.readdir(path);
  return data;
}

async function updateJSON(path, content){
  const data = JSON.stringify(content);
  return await fs.appendFile(path, data);
}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON
};
