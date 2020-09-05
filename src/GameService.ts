import { getOutcome } from './getOutcome';
import { GridReader } from './GridReader';
import { GridModel } from "./GridModel";

export class GameService
{
    currentState: GridModel;
    gridReader: GridReader;

    constructor(height: number, width: number) {
        this.currentState = new GridModel(height, width);
        this.gridReader   = new GridReader(this.currentState);
    }

    // TODO Optimise, only read active map
    public tick() : Array<ChangeResult> {
        let changes = new Array<ChangeResult>();
    
        for(let y = 0; y < this.currentState.height; y++) {
            for(let x = 0; x < this.currentState.width; x++) {
                let neighbours = this.gridReader.getNeighbours(x, y);

                let currentState: boolean = neighbours.myState;
                let newState: boolean = getOutcome(neighbours);

                if (currentState != newState) {
                    changes.push(new ChangeResult(x, y, newState));
                }
            }
        }

        this.applyChanges(changes);

        return changes;
    }

    public applyChanges(changes: Array<ChangeResult>) {
        changes.forEach(c => {
            this.currentState.setValue(c.x, c.y, c.state);
        });
    }
}

export class ChangeResult
{
    constructor(public x: number, public y: number, public state: boolean) {}
}