import { GridModel } from '../src/GridModel';
import { GridReader } from '../src/GridReader';
import { expect } from 'chai';
import 'mocha';

describe('GridReader', function() {

  describe('3 Active', function() {  
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

    it('should return 2n for new 0,1', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(0,1).count).to.equal(2); 
    });     

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

  describe('8/9 Active', function() {  
    const grid = new GridModel(40,40);

    //   0 1 2 3 4 5 6
    // 0
    // 1 X X X
    // 2 X   X
    // 3 X X X
    // 4
    // 5
    // 6

    grid.setValue(0,1, true);
    grid.setValue(1,1, true);
    grid.setValue(2,1, true);

    grid.setValue(0,2, true);
    //grid.setValue(1,2, true);
    grid.setValue(2,2, true);
    
    grid.setValue(0,3, true);
    grid.setValue(1,3, true);
    grid.setValue(2,3, true);    

    it('should return 4n for new 1,2', function() { 
      let r = new GridReader(grid);
      expect(r.getNeighbours(1,2).count).to.equal(4); 
    });     

    it('should return 4n for new 1,2 (active)', function() { 
      let r = new GridReader(grid);
      grid.setValue(1,2, true);

      expect(r.getNeighbours(1,2).count).to.equal(4); 
    });       
  })  
});