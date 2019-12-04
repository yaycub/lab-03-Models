const fs = require('fs').promises;
const { mkdirp } = require('../lib/fs-func');

describe('fs-functions to test', () => {
  it('make a directory and all parent directories', () => {
    expect(fs.mkdir('./hi/hi')).toEqual(mkdirp('./hi/hi'));
  });
});
