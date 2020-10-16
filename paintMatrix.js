const input = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 4, 4],
  [1, 2, 3, 4, 4, 3]
];

function paint(x, y, color) {
  const horizontalLength = input[0].length - 1;
  const verticalLength = input.length - 1;

  const num = input[x][y];

  function grid(i, j) {
    const hasExceededSides = i < 0 || i > horizontalLength;
    const hasExceededTops = j < 0 || j > verticalLength;
    const hasExceededBoundries = hasExceededTops || hasExceededSides;

    if (hasExceededBoundries || input[i][j] !== num) {
      return;
    }

    if (input[i][j] === num) {
      input[i][j] = color;
    }
    grid(i + 1, j);
    grid(i - 1, j);
    grid(i, j + 1);
    grid(i, j - 1);
  }

  grid(x, y);
}

paint(3, 3, 10, input);
input.forEach((row) => {
  console.log(row.join(`   `));
});
