export class Piece {
    constructor(name) {
        this.name = name;
        this.path = `../imgs/${name}.png`;
    }
    name: string;
    path: string;
}
