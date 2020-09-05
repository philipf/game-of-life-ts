import { GameService, ChangeResult } from '../src/GameService';
import { expect } from 'chai';
import 'mocha';


describe('Patterns', function() {

  describe('Blinker', function() {  

    it('Blinker - Period 1', function() { 
        const service = new GameService(3,3)
        const gm = service.currentState;
    
        it('Blinker - Init', function() { 
          for(let x = 0; x < gm.width; x++) {
            for(let y = 0; y < gm.width; y++) {
              expect(gm.getValue(x, y)).to.equal(false);
            }
          }
        });
              
        let changes: Array<ChangeResult> = [
          new ChangeResult(0, 1, true),
          new ChangeResult(1, 1, true),
          new ChangeResult(2, 1, true),
        ];

        service.applyChanges(changes);

        expect(gm.getValue(0,1), "0,0").to.equal(true);
        expect(gm.getValue(1,1), "0,1").to.equal(true);
        expect(gm.getValue(2,1), "0,2").to.equal(true);

        expect(gm.getValue(0,0), "1,0").to.equal(false);
        expect(gm.getValue(1,0), "1,1").to.equal(false);
        expect(gm.getValue(2,0), "1,2").to.equal(false);

        expect(gm.getValue(0,2), "2,0").to.equal(false);
        expect(gm.getValue(1,2), "2,1").to.equal(false);
        expect(gm.getValue(2,2), "2,2").to.equal(false);
    });

    it('Blinker - Period 2', function() { 
      const service = new GameService(3,3)
      const gm = service.currentState;

      let changes: Array<ChangeResult> = [
        new ChangeResult(0, 1, true),
        new ChangeResult(1, 1, true),
        new ChangeResult(2, 1, true),
      ];

      service.applyChanges(changes);
      
      let period1 = service.tick();

      expect(period1.length).to.equal(4);

      expect(gm.getValue(0,1), "0,0").to.equal(false);
      expect(gm.getValue(1,1), "0,1").to.equal(true);
      expect(gm.getValue(2,1), "0,2").to.equal(false);

      expect(gm.getValue(0,0), "1,0").to.equal(false);
      expect(gm.getValue(1,0), "1,1").to.equal(true);
      expect(gm.getValue(2,0), "1,2").to.equal(false);

      expect(gm.getValue(0,2), "2,0").to.equal(false);
      expect(gm.getValue(1,2), "2,1").to.equal(true);
      expect(gm.getValue(2,2), "2,2").to.equal(false);      

    });    

    it('Blinker - Period 3', function() {
      const service = new GameService(3,3)
      const gm = service.currentState;

      let changes: Array<ChangeResult> = [
        new ChangeResult(0, 1, true),
        new ChangeResult(1, 1, true),
        new ChangeResult(2, 1, true),
      ];

      service.applyChanges(changes);
      
      let period1 = service.tick();
      let period2 = service.tick();

      expect(period2.length).to.equal(4);      

      expect(gm.getValue(0,1), "0,0").to.equal(true);
      expect(gm.getValue(1,1), "0,1").to.equal(true);
      expect(gm.getValue(2,1), "0,2").to.equal(true);

      expect(gm.getValue(0,0), "1,0").to.equal(false);
      expect(gm.getValue(1,0), "1,1").to.equal(false);
      expect(gm.getValue(2,0), "1,2").to.equal(false);

      expect(gm.getValue(0,2), "2,0").to.equal(false);
      expect(gm.getValue(1,2), "2,1").to.equal(false);
      expect(gm.getValue(2,2), "2,2").to.equal(false);
    });    
  });


  describe('Glider', function() {  

    it('Glider - Period 1', function() { 
        const service = new GameService(50,50)
        const gm = service.currentState;
    
        it('Glider - Init', function() { 
          for(let x = 0; x < gm.width; x++) {
            for(let y = 0; y < gm.width; y++) {
              expect(gm.getValue(x, y)).to.equal(false);
            }
          }
        });
              
        let changes: Array<ChangeResult> = [
          new ChangeResult(10, 10, true),
          new ChangeResult(12, 10, true),
          new ChangeResult(11, 11, true),        
          new ChangeResult(12, 11, true),                
          new ChangeResult(11, 12, true), 
        ];

        service.applyChanges(changes);
    });

    it('Glider - Period 2', function() { 
      const service = new GameService(50,50)
      const gm = service.currentState;

      let changes: Array<ChangeResult> = [
        new ChangeResult(10, 10, true),
        new ChangeResult(12, 10, true),
        new ChangeResult(11, 11, true),        
        new ChangeResult(12, 11, true),                
        new ChangeResult(11, 12, true), 
      ];

      service.applyChanges(changes);
      
      let period1 = service.tick();

      expect(period1.length).to.equal(5);

      expect(gm.getValue(10, 10)).to.equal(false);
      expect(gm.getValue(11, 10)).to.equal(false);
      expect(gm.getValue(12, 10)).to.equal(true);

      expect(gm.getValue(10, 11)).to.equal(true);
      expect(gm.getValue(11, 11)).to.equal(false);
      expect(gm.getValue(12, 11)).to.equal(true);

      expect(gm.getValue(10, 12)).to.equal(false);
      expect(gm.getValue(11, 12)).to.equal(true);
      expect(gm.getValue(12, 12)).to.equal(true);
    });    

  
  });  
});