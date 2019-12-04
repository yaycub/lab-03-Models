const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON } = require('../lib/fs-func');

describe('fs-functions', () => {
  beforeAll(() => {
    return mkdirp('./test/test/');
  });

  afterAll(() => {
    return fs.unlink('./test/test/test.txt');
  });

  afterAll(() => {
    return fs.rmdir('./test/', { recursive: true });
  });

  it('can write an object to a file', async() => {
    const dog = { name: 'spot', age: 5 };
    await writeJSON('./test/test/test.txt', dog);
    fs.readFile('./test/test/test.txt', 'utf8')
      .then(result => {
        expect(JSON.parse(result)).toEqual(dog);
      });
  });

  it('can read an object from a file', async() => {
    const dog = { name: 'spot', age: 5 };
    const data = await readJSON('./test/test/test.txt', 'utf8');
    expect(data).toEqual(dog);
  });

  it('can read all files in a directory as objects', async() => {
    const data = await fs.readdir('./test/test/');
    const result = await readDirectoryJSON('./test/test/');
    expect(data).toEqual(result);
  });
});
