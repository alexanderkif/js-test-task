
export default class KnightMoves {
    constructor(value) {
        const boardCols = 'ABCDEFGH';
        const boardRows = '12345678';
        const moves = [[-1, -2], [-2, -1], [-2, 1], [1, -2], [-1, 2], [2, -1], [1, 2], [2, 1]];
        const result = [];
        const col = boardCols.indexOf(value.slice(0, 1).toUpperCase());
        const row = boardRows.indexOf(value.slice(1, 2));
        moves.forEach((move) => {
            const newCol = move[0] + col;
            const newRow = move[1] + row;
            if (newCol > -1 && newCol < 8 && newRow > -1 && newRow < 8) {
                result.push(boardCols.charAt(newCol) + boardRows.charAt(newRow));
            }
        });
        return result;
    }
}
