export class GridModel
{
    public height: number;
    public width: number;

    public state:boolean [][];

    constructor(height: number, width: number) {
        this.height = height;
        this.width  = width;

        this.state = [];
    }

    setValue(x: number, y: number, value: boolean) {

        if (x >= this.width || y >= this.height)
            throw `Outside of grid boundary. Grid size[${this.width},${this.height}] but trying to set [${x},${y}]`;

        // JIT initialisation
        if (!this.state[x])
            this.state[x] = [];

        this.state[x][y] = value;
    }

    getValue(x: number, y: number) : boolean {
        // Guard conditions here

        // If not yet initialised it is acceptable to return false, 
        // thereby not having to intialise the whole grid to false values
        // when intialised.
        if (!this.state || !this.state[x])
            return false;

        const result = this.state[x][y];

        // Same, if not initialised then default to false.
        if (!result)
            return false;

        return result;
    }
}