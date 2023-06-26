class Solution {
  binarysearch(arr, n, k) {
    let low = 0;
    let high = n - 1;

    while (low < high) {
        console.log('low ' + low)
        console.log('high ' +high)
        let mid = ((high + low) / 2) | 0;
      if (arr[mid] == k) {
        return mid;
      } else if (arr[mid] < k) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
}

let solution = new Solution();
arr = [1, 2, 3, 4, 5];
n = 4;
let result = solution.binarysearch(arr, arr.length, n);

console.log(result);
