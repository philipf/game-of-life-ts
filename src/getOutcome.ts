import { Neighbours } from "./Neighbours";


export function getOutcome(neighbours: Neighbours) : boolean {
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    
    const isActive = neighbours.myState;
    const count = neighbours.count;
    // Any live cell with two or three live neighbours survives.
    if (isActive && (count == 2 || count == 3)) {
        return true;
    }

    // Any dead cell with three live neighbours becomes a live cell.
    if (!isActive && count == 3) {
        return true;
    }

    // All other live cells die in the next generation. 
    // Similarly, all other dead cells stay dead.
    return false;
}


