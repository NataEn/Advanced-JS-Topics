function swapKeyVal(obj) {
  const swapedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    swapedObj[value] = key;
  }
  return swapedObj;
}
