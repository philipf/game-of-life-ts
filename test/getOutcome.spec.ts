import { getOutcome } from '../src/getOutcome';
import { Neighbours } from '../src/Neighbours';
import { expect } from 'chai';
import 'mocha';

// Rule 1: Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Rule 2: Any live cell with two or three live neighbours lives on to the next generation.
// Rule 3: Any live cell with more than three live neighbours dies, as if by overpopulation.
// Rule 4: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function build(activeCell: boolean, neighbourCount: number) : Neighbours {
  let n : Neighbours = {
    count: neighbourCount,
    myState: activeCell,
    states: []
  };

  return n;
}

describe('getOutcome', function() {

  describe('Rule 1', function() {  
    it('Any live cell with fewer than two live neighbours dies, as if by underpopulation.', function() { 
      for (let cnt = 0; cnt < 2; cnt++) {
        expect(getOutcome(build(true, cnt))).to.equal(false);
      }
    });
  });

  describe('Rule 2', function() {  
    it('Any live cell with two or three live neighbours lives on to the next generation', function() { 
      expect(getOutcome(build(true, 2))).to.equal(true);
      expect(getOutcome(build(true, 3))).to.equal(true);
    });
  });  

  describe('Rule 3', function() {  
    it('Any live cell with more than three live neighbours dies, as if by overpopulation', function() { 
      for (let cnt = 4; cnt < 9; cnt++) {
        expect(getOutcome(build(true, cnt))).to.equal(false);
      }
    });
  }); 
  
  describe('Rule 4', function() {  
    it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function() { 
      for (let cnt = 4; cnt < 9; cnt++) {
        expect(getOutcome(build(false, 3))).to.equal(true);
      }
    });
  });  
});