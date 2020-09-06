import { Cell } from "./Cell";

export class CellFactory {

    public static create(values: string,
        offsetX: number = 0, 
        offsetY: number = 0): Cell[] {

        values = values.trim();

        let result = new Array<Cell>();

        let lines = values.split(/\r?\n/);

        let y = 0;
        lines.forEach(l => {
            let tcells = l.trim().split(",");
            let x = 0;
            tcells.forEach(tc => {
                if (tc.toLowerCase() == "x") {
                    result.push(new Cell(offsetX + x, offsetY + y, true));
                }
                x++;
            });

            y++;
        });

        return result;
    }
}