const fs = require('fs').promises;
const { mkdirp, writeJSON } = require('../lib/fs-func');

describe('fs-functions', () => {
  beforeAll(() => {
    return mkdirp('./test/test/');
  });

  afterAll(() => {
    return fs.rmdir('./test/test/', { recursive: true });
  });

  it('can write an object to a file', async() => {
    const dog = { name: 'spot', age: 5 };
    await writeJSON('./test/test/test.txt', dog);
    fs.readFile('./test/test/test.txt', 'utf8')
      .then(result => {
        expect(JSON.parse(result)).toEqual(dog);
      });
  });
});
