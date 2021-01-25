const sampleMaze = [
  "##############",
  "#           #",
  "*           #",
  "#            #",
  "#       /   #",
  "##############",
];

function exit_from_maze(board) {
  // hadjime!
  return {
    position: [0, 0],
    distance: 0,
  };
}

function explode(x) {
  const sum = x[0] + x[1];
  let times = 0;
  const newArr = [];

  if (typeof sum === "number") {
    times = sum;
  } else if (typeof x[0] === "number" || typeof x[1] === "number") {
    times = typeof x[0] === "number" ? x[0] : x[1];
  }

  for (let i = 0; i < times; i++) {
    newArr.push(x);
  }

  if (newArr.length) {
    return newArr;
  } else {
    return "Void!";
  }
}
explode(["a", 3]);
