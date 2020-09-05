import { GridModel } from '../src/gridModel';
import { GridReader } from '../src/gridReader';
import { expect } from 'chai';
import 'mocha';

describe('GridReader', function() {

  describe('Basic', function() {  
    const grid = new GridModel(40,40);

    //   0 1 2 3 4 5 6
    // 0
    // 1 X X
    // 2 X
    // 3
    // 4
    // 5
    // 6

    grid.setValue(0,1, true);
    grid.setValue(0,2, true);
    grid.setValue(1,1, true);

    it('should return 2n for new 0,0', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(0,0).count).to.equal(2); 
    }); 

    it('should return 3n for new 1,2', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(1,2).count).to.equal(3); 
    });     

    it('should return 2n for new 1,1', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(1,1).count).to.equal(2); 
    });   

    it('should return 3n for new 2,1', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(2,1).count).to.equal(1); 
    });      
    
    it('should return 0n for new 5,5', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(5,5).count).to.equal(0); 
    });     

  })
});