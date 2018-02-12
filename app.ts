
// typescript now supports fixes across an entire file, automatica insertion of this.

export class Square {
    constructor(
        public readonly width: number,
        public readonly height: number
    ){}

        
    public area() {

        return width * height;

    }
}
