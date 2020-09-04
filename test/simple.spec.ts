import { helloTest } from '../src/hello';
import { expect } from 'chai';
import 'mocha';

describe('First test', 
  function() { 
    it('should return true', function() { 
      const result = helloTest();
      expect(result).to.equal(true); 
  }); 
});