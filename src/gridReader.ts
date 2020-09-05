import { GridModel } from "./gridModel";

export class GridReader
{
    constructor(private gridModel: GridModel) {}

    getNeighbours(x: number, y: number) : Neighbours {
        let n : Neighbours = { count: 0, state: []};

        let arrayIdx = 0;
        for (let yn = -1; yn < 2; yn++) {
            for (let xn = -1; xn < 2; xn++) {

                // Apply neighbour offsets
                const xr = x + xn;
                const yr = y + yn;

                const value: boolean = this.read(xr, yr);
                
                n.state[arrayIdx] = value

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

export interface Neighbours {
    count : number;

    // 0 1 2
    // 3 4 5
    // 6 7 8
    state : boolean[];

}
