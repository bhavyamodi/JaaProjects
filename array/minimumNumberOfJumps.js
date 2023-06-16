//time complexity : O(n)

arr = [1];
N = arr.length;

console.log(maxSubarraySum(arr, N));

function maxSubarraySum(arr, n) {
  if (n <= 1) {
    return 0;
  }

  let jumps = 1;
  let currentJumpIndex = arr[0];
  let farthestIndex = arr[0];

  for (let i = 1; i < n; i++) {
    if (i > farthestIndex) {
      return -1;
    }

    if (i > currentJumpIndex) {
      jumps++;
      currentJumpIndex = farthestIndex;
    }

    farthestIndex = Math.max(farthestIndex, i + arr[i]);
  }

  return jumps;
}
