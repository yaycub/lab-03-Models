const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON, updateJSON } = require('../lib/fs-func');

describe('fs-functions', () => {
  beforeAll(() => {
    return mkdirp('./test/test/');
  });

  // afterAll(() => {
  //   return fs.unlink('./test/test/test.txt');
  // });

  afterAll(() => {
    return fs.rmdir('./test/', { recursive: true });
  });

  it('can write an object to a file', async() => {
    const dog = { name: 'spot', age: 5 };
    await writeJSON('./test/test/test.js', dog);
    fs.readFile('./test/test/test.js', 'utf8')
      .then(result => {
        expect(JSON.parse(result)).toEqual(dog);
      });
  });

  it('can read an object from a file', async() => {
    const dog = { name: 'spot', age: 5 };
    const data = await readJSON('./test/test/test.js', 'utf8');
    expect(data).toEqual(dog);
  });

  it('can read all files in a directory as objects', async() => {
    const data = await fs.readdir('./test/test/');
    const result = await readDirectoryJSON('./test/test/');
    expect(data).toEqual(result);
  });

  it('can update a files JSON', async() => {
    const result = { name: 'spot', age: 5, weight: '20 lbs' };
    await updateJSON('./test/test/test.js', { weight: '20 lbs' });
    const file = await readJSON('./test/test/test.js');
    expect(file).toEqual(result);
  });
});
