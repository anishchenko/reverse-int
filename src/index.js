module.exports = function reverse (n) {
  const numStr = String(Math.abs(n));
  let num = '';

  for(let i = numStr.length - 1; i >= 0; i--) {
    num += numStr[i];
  }
  return num;
}
