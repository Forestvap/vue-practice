import {chunkify, flatten} from '../utils';
import { Game, BoardCursor, Board } from '../store/core/index';

export type State = Game;

export const createGame = (values: number[]): Game => {
 // Covert each number into an object
  const indexed =
    values
      .map(value => value !== 0 ? value: null)
      .map(value => ({ value, locked: !!value }));

 // Chunk the values into rows of 9
  const rows = chunkify(9, indexed).map((partialCells, row) => {

    // console.log(`partialCells:`, partialCells,  `row: ${row}`);
    return partialCells.map((cell, col) => ({
        ...cell,
        ...BoardCursor.of(row, col).toCellLocation()
      })
    );
  });

  const cells = flatten(rows);
  console.log('cells', cells)
  const board: Board = {
    cells,
    cursor: BoardCursor.of()
  };

 // Flatten the rows
  return {
    board,
    get cells() {
      return board.cells;
    },
    get cursor() {
      return board.cursor;
    }
  };
};
