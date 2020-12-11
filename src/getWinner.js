/**
 * Make an array with all values equal to null
 * @param length length of the created array
 */
function makeEmptyArray(length) {
  return Array(length).fill(null);
}
/**
 * Takes a list of cells and return the owner of 4 consecutive cells.
 * @param cells
 */
function getOwnerOf4(cells) {
  const [owner, length] = cells.reduce(
    ([previousCell, length], cell) =>
      length >= 4
        ? // if we have an owner, just pass it along
          [previousCell, length + 1]
        : cell && cell === previousCell
        ? // if we dont but cells matches, pass along and increment
          [previousCell, length + 1]
        : cell
        ? // if cells don't match but cells isn't null, start at 1
          [cell, 1]
        : // if cells don't match but cells and cell is null, start at 0
          [cell, 0],
    [null, 0]
  );
  return length >= 4 ? owner : null;
}
/**
 * Extract all the diagonals from a board.
 * @param board
 */
function getDiagonals(board) {
  const rowsLength = board.length;
  const topLeftDiags = [];
  const botLeftDiags = [];
  const topRightDiags = [];
  const botRightDiags = [];
  for (let y = 0; y < rowsLength; y++) {
    const topLeftDiag = [];
    const topRightDiag = [];
    const botLeftDiag = [];
    const botRightDiag = [];
    for (let x = 0; x <= y; x++) {
      topLeftDiag.push(board[y - x][x]);
      topRightDiag.push(board[y - x][rowsLength - x]);
      botLeftDiag.push(board[rowsLength - y - 1 + x][x]);
      botRightDiag.push(board[rowsLength - y - 1 + x][rowsLength - x]);
    }
    topLeftDiags.push(topLeftDiag);
    topRightDiags.push(topRightDiag);
    botLeftDiags.push(botLeftDiag);
    botRightDiags.push(botRightDiag);
  }
  return [...topLeftDiags, ...botLeftDiags, ...topRightDiags, ...botRightDiags];
}
/**
 * Extract all the columns from a board.
 * This basically flips the board (`board[y][x]` becomes `board[x][y]`).
 * @param board
 */
function getColumns(board) {
  return makeEmptyArray(board[0].length).map((_, y) =>
    makeEmptyArray(board.length).map((_, x) => board[x][y])
  );
}
/**
 * Get the winnner of a board, if there is one.
 * @param board
 */
export function getWinner(board) {
  const rows = board;
  const columns = getColumns(board);
  // diagonals smaller than 4 can't determine a winner so we remove them
  const diagonals = getDiagonals(board).filter(cells => cells.length >= 4);
  return [...rows, ...columns, ...diagonals].reduce(
    (winner, cells) => winner || getOwnerOf4(cells),
    null
  );
}

export default getWinner;
