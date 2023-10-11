export const winningCombinations = [
  // horizontals
  { indexes: [0, 1, 2], class: "squareWinner" },
  { indexes: [3, 4, 5], class: "squareWinner" },
  { indexes: [6, 7, 8], class: "squareWinner" },

  // verticals
  { indexes: [0, 3, 6], class: "squareWinner" },
  { indexes: [1, 4, 7], class: "squareWinner" },
  { indexes: [2, 5, 8], class: "squareWinner" },

  //diagonals
  { indexes: [0, 4, 8], class: "squareWinner" },
  { indexes: [2, 4, 6], class: "squareWinner" },
];
