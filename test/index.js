'use strict';

var should = require('chai').should();
var okcore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(okcore.crypto);
    should.exist(okcore.encoding);
    should.exist(okcore.util);
    should.exist(okcore.errors);
    should.exist(okcore.Address);
    should.exist(okcore.Block);
    should.exist(okcore.MerkleBlock);
    should.exist(okcore.BlockHeader);
    should.exist(okcore.HDPrivateKey);
    should.exist(okcore.HDPublicKey);
    should.exist(okcore.Networks);
    should.exist(okcore.Opcode);
    should.exist(okcore.PrivateKey);
    should.exist(okcore.PublicKey);
    should.exist(okcore.Script);
    should.exist(okcore.Transaction);
    should.exist(okcore.URI);
    should.exist(okcore.Unit);
  });
});
