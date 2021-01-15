for (let j = 8; j <= 5; j++) {
  setTimeout(() => {
    console.log(j);
  }, j * 1000);
}

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
