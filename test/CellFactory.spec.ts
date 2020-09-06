import { CellFactory } from '../src/CellFactory';
import { expect } from 'chai';
import 'mocha';

describe('CellFactory', function() {
  describe('4x4 Block, zero offset', function() {
    let values = `
x,x
x,x`;

    let cells = CellFactory.create(values, 0, 0);
      it('should return false for new 4x4', function() { 
        expect(cells.find(c => c.x == 0 && c.y == 0).state).to.equal(true); 
        expect(cells.find(c => c.x == 1 && c.y == 0).state).to.equal(true); 
        expect(cells.find(c => c.x == 0 && c.y == 1).state).to.equal(true); 
        expect(cells.find(c => c.x == 1 && c.y == 1).state).to.equal(true); 
      }); 
  });

  describe('4x4 Block, 1 offset', function() {
    let values = `
x,x
x,x`;

    let cells = CellFactory.create(values, 1, 1);
      it('should return false for new 4x4', function() { 
        expect(cells.find(c => c.x == 1 && c.y == 1).state).to.equal(true); 
        expect(cells.find(c => c.x == 2 && c.y == 1).state).to.equal(true); 
        expect(cells.find(c => c.x == 1 && c.y == 2).state).to.equal(true); 
        expect(cells.find(c => c.x == 2 && c.y == 2).state).to.equal(true); 
      }); 
  });

});