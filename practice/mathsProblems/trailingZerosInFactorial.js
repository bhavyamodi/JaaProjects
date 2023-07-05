let number = 125;

countZerosInFactorial(number);
countZeros(number)

//Naive Method
//time complexity = O(n*m)

function countZerosInFactorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  let zeros = 0;
  while (result % 10 == 0) {
    zeros++;
    result = Math.floor(result / 10);
  }
  console.log(zeros);
}

//Optimised Approch
// Time Complexity : O(log n)
function countZeros(number) {
  let result = 0;
  for (let i = 5; i <= number; i = i * 5) {
      result = result + Math.floor(number / i)
  }
  console.log(result)
}
