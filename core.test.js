const assert = require('assert');
const FileChecksum = require('./core');

const res = FileChecksum.verifyChecksum('5eb63bbbe01eeed093cb22bb8f5acdc3', '5EB63BBBE01EEED093CB22BB8F5ACDC3');
assert.strictEqual(res.match, true);
console.log('ok, all FileChecksum assertions passed');
