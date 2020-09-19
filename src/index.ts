import { GameService } from "./GameService";
import { Cell } from "./Cell";
import { CellFactory } from "./CellFactory";

const cellHeight = 10;
const cellWidth = cellHeight;
const cellBorder = 1;

function drawChanges(ctx: CanvasRenderingContext2D, 
    changes: Array<Cell>) {

    changes.forEach(c => {
        let xPos = c.x * cellWidth + (c.x * cellBorder);
        let yPos = c.y * cellWidth + (c.y * cellBorder);

        if (c.state) {
            ctx.fillRect(xPos, yPos, cellWidth, cellHeight);
        } else {
            ctx.clearRect(xPos, yPos, cellWidth, cellHeight);
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){
    const service = new GameService(50,100)

    const values = `
    ,,,,,,,X,X,X,X,X,X,,,,,,,,,X,X,X,X,X,X,X,,,,,,,,,,,,,,X,X,X,X,X,X,,,
    ,,,,,,X,,,,,,X,,,,,,,X,X,,,,,,,,X,X,,,,,,,,,,,X,,,,,,X,,,
    ,,,,,X,,,,,,,X,,,,,X,X,,,,,,,,,,,,X,X,,,,,,,,X,,,,,,,X,,,
    ,,,,X,,,,X,X,,,X,,,,X,,,,,,,X,X,X,,,,,,,X,,,,,,X,,,,X,X,,,X,,,
    ,,,X,,,,X,,X,,,X,,,,X,,,,,,X,,,,X,,,,,,X,,,,,X,,,,X,,X,,,X,,,
    ,,X,,,,X,,,X,,,X,,,,X,,,,,X,,,,,,X,,,,,X,,,,X,,,,X,,,X,,,X,,,
    ,X,,,,X,,,,X,,,X,,,,X,,,,,X,,,,,,X,,,,,X,,,X,,,,X,,,,X,,,X,,,
    X,,,,X,X,X,X,X,X,,,X,X,X,,X,,,,,X,,,,,,X,,,,,X,,X,,,,X,X,X,X,X,X,,,X,X,X,
    X,,,,,,,,,,,,,,X,,X,,,,,X,,,,,,X,,,,,X,,X,,,,,,,,,,,,,,X,
    X,,,,,,,,,,,,,,x,,X,,,,,X,,,,,,X,,,,,X,,X,,,,,,,,,,,,,,x,
    X,X,X,X,X,X,X,X,X,,,,X,X,X,,X,,,,,X,,,,,,X,,,,,X,,X,X,X,X,X,X,X,X,X,,,,X,X,X,
    ,,,,,,,,X,,,,X,,,,X,,,,,X,,,,,,X,,,,,X,,,,,,,,,,X,,,,X,,,
    ,,,,,,,,X,,,,X,,,,X,,,,,,X,,,,X,,,,,,X,,,,,,,,,,X,,,,X,,,
    ,,,,,,,,X,,,,X,,,,X,,,,,,,X,X,X,,,,,,,X,,,,,,,,,,X,,,,X,,,
    ,,,,,,,X,X,,,,X,X,,,,X,X,,,,,,,,,,,,X,X,,,,,,,,,,X,X,,,,X,X,,
    ,,,,,,,X,,,,,,X,,,,,,X,X,,,,,,,,X,X,,,,,,,,,,,,X,,,,,,X,,
    ,,,,,,,X,X,X,X,X,X,X,,,,,,,,X,X,X,X,X,X,X,,,,,,,,,,,,,,X,X,X,X,X,X,X,,
    
    `;

    let changes = CellFactory.create(values, 13, 12);

    service.applyChanges(changes);

    let canvas  = <HTMLCanvasElement> document.getElementById('grid');

    if (!canvas)
        console.log("oops no canvas ");

    let ctx : CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (ctx) {
        ctx.fillStyle = "#515151";
        let c: CanvasRenderingContext2D = ctx;
        drawChanges(c, changes);

        setTimeout(() => {
            setInterval(() => {
                changes = service.tick();
                drawChanges(c, changes);
            }, 200);            
        }, 2000);
   }
});
