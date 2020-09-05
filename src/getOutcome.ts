import { GridReader } from "./gridReader";


export function getOutcome(gridModel: GridReader, x: number, y: number) {
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

    // Any live cell with two or three live neighbours survives.
    // Any dead cell with three live neighbours becomes a live cell.
    // All other live cells die in the next generation. Similarly, all other dead cells stay dead.

}


