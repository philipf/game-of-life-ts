import { GridModel } from "./GridModel";
import { Neighbours } from "./Neighbours";

export class GridReader
{
    constructor(private gridModel: GridModel) {}

    getNeighbours(x: number, y: number) : Neighbours {
        let n : Neighbours = { 
            count: 0, 
            states: [], 
            myState: this.read(x, y)
        };

        let arrayIdx = 0;
        for (let yn = -1; yn < 2; yn++) {
            for (let xn = -1; xn < 2; xn++) {

                // Apply neighbour offsets
                const xr = x + xn;
                const yr = y + yn;

                const value: boolean = this.read(xr, yr);
                
                n.states[arrayIdx] = value

                const isCurrentCell = (x === xr && y === yr);

                if (!isCurrentCell && value)
                {
                    n.count++;
                }

                arrayIdx++;
            }
        }

        return n;
    }

    read(x: number, y: number) : boolean {
        // TODO: add read strategy

        if (x < 0 || x >= this.gridModel.width)
            return false;

        if (y < 0 || y >= this.gridModel.height)
            return  false;

        return this.gridModel.getValue(x ,y);
    }
}
