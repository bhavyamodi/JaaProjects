let number = 44721;

console.log(revCoding(number));

function revCoding(n, m) {
  let sum = 0,
    i = 1;

  // looping from i = 1 to number
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}
