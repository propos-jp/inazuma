'use strict';
var assert = require('chai').assert;
var fileUtil = require('../app/lib/fileUtil');


describe('fileUtil', function() {
  describe('# fetchFileList', function () {
    it('err return null, get doc.txt', function (done) { 
      fileUtil.fetchFileList('./doc','txt',function(err,matches,pattern){
        assert.isNull(err);
        assert.deepEqual(matches,['./doc/doc.txt']);
        done();
      });
    });
    it('err return null, get test.md', function (done) { 
      fileUtil.fetchFileList('./doc','md',function(err,matches,pattern){
        assert.isNull(err);
        assert.deepEqual(matches,['./doc/test.md']);
        done();
      });
    });
    it('err return null, get doc.txt,test.md', function (done) { 
      fileUtil.fetchFileList('./doc',['md','txt'],function(err,matches,pattern){
        assert.isNull(err);
        assert.equal(pattern,'./doc/**/*.+(md|txt)');
        assert.deepEqual(matches,['./doc/doc.txt','./doc/test.md']);
        done();
      });
    });
  });
});


