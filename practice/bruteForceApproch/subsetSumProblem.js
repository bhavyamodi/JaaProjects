function subset_sum(list, startingIndex, sum) {
  console.log(list.length);
  if (sum == 0) return true;
  if (list.length - startingIndex == 1) {
    if (list[0] == sum) return true;
    else return false;
  }

  let result_1 = subset_sum(list, startingIndex + 1, sum - list[startingIndex]);
  console.log("result_1" + result_1);

  let result_2 = subset_sum(list, startingIndex + 1, sum);
  console.log("result_2" + result_2);

  return result_1 | result_2;
}

let arr = [2, 5, 6, 99];
let sum = 99;
let startingIndex = 0;

console.log(subset_sum(arr, startingIndex, sum));
