import { getOutcome } from './getOutcome';
import { GridReader } from './GridReader';
import { GridModel } from "./GridModel";

export class GameService
{
    currentState: GridModel;
    gridReader: GridReader;

    activityMap: { [key: string]: { x: number, y: number}} = {};

    constructor(height: number, width: number) {
        this.currentState = new GridModel(height, width);
        this.gridReader   = new GridReader(this.currentState);
    }

    // TODO Optimise, only read active map
    public tick() : Array<ChangeResult> {
        let changes = new Array<ChangeResult>();

        for(let key in this.activityMap) {
            console.log(key);
            let v = this.activityMap[key];
            let x: number = v.x;
            let y: number = v.y;

            let neighbours = this.gridReader.getNeighbours(x, y);

            let currentState: boolean = neighbours.myState;
            let newState: boolean = getOutcome(neighbours);

            if (currentState != newState) {
                changes.push(new ChangeResult(x, y, newState));
            }            
        }
    


        this.applyChanges(changes);

        return changes;
    }

    public applyChanges(changes: Array<ChangeResult>) {
        changes.forEach(c => {
            if (c.state) {
                this.activityMap[`${c.x},${c.y}`] = { x: c.x, y: c.y};
            } else {
                delete this.activityMap[`${c.x},${c.y}`];
            }
            this.currentState.setValue(c.x, c.y, c.state);
        });
    }
}

export class ChangeResult
{
    constructor(public x: number, public y: number, public state: boolean) {}
}