let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
var result = merge(arr1, arr2, arr1.length, arr2.length);
console.log(arr1);
console.log(arr2);

function merge(arr1, arr2, n, m) {
  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      // Swap arr1[i] and arr2[j]
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]]
      left--;
      right++;
    } else {
      break;
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  
}
