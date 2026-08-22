;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FileChecksum = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function verifyChecksum(expectedHash, actualHash) {
    expectedHash = (expectedHash || '').trim().toLowerCase();
    actualHash = (actualHash || '').trim().toLowerCase();
    return {
      match: expectedHash === actualHash,
      expected: expectedHash,
      actual: actualHash
    };
  }

  return { verifyChecksum: verifyChecksum };
});
