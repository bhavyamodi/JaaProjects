let number = 51;
let result = [];
decimalToBinary(number, result);

result = Number(result.join(""));
console.log(result);

function decimalToBinary(number, result) {
  let element = number % 2 == 0 ? 0 : 1;
  // arr.unshift(number) : insert at starting of array
  result.unshift(element);
  if (number == 1) {
    return result;
  }
  if (element == 1) {
    number = number - 1;
  }
  let remainder = number / 2;
  decimalToBinary(remainder, result);
  return result;
}
