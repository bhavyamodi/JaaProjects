const arr = [7, 6, 10, 5, 9, 2, 1, 15, 7];
const sortedArr = quickSort(arr, 0, arr.length - 1);
console.log(sortedArr);

function quickSort(arr, lb, ub) {
  if (lb < ub) {
    loc = partition(arr, lb, ub);
    // console.log('loc : '+loc)
    quickSort(arr, lb, loc - 1);
    quickSort(arr, loc + 1, ub);
  }
  return arr;
}

function partition(arr, start, end){
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start; 
  for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
      }
  }
  
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
  return pivotIndex;``
};
