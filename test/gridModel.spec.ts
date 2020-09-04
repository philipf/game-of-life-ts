import { GridModel } from '../src/gridModel';
import { expect } from 'chai';
import 'mocha';

describe('GridModel', function() {

  describe('Initialisations', function() {  

      it('should return false for new 4x4', function() { 
        const grid = new GridModel(4,4);

        expect(false).to.equal(grid.getValue(0, 0)); 
      }); 

      it('should allow setting 1,1 and reading 1,1 for 2x2', function() { 
        const grid = new GridModel(2,2);

        grid.setValue(1,1, true);
        expect(true).to.equal(grid.getValue(1, 1));
        
        expect(false).to.equal(grid.getValue(0, 0));
        expect(false).to.equal(grid.getValue(0, 1));
        expect(false).to.equal(grid.getValue(1, 0));
      }); 

      it('Throw out of bound errors', function() { 
        const grid = new GridModel(2,2);
        expect(() => grid.setValue(2,2, true)).to.throw('boundary')
      });       
  })
});