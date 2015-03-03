var exec = require('../node-spawn-util');
var expect = require('expect.js');

describe('node-spawn-util',function(){
  it('exec',function(done){
    exec('node',['-v'],function(err,stdout,stderr){
      expect(err).to.be(null);
      expect(stdout).to.be.a('string');
      expect(stdout).not.to.have.length(0);
      expect(stderr).to.be.a('string');
      expect(stderr).to.have.length(0);
      done();
    });
  });
});
