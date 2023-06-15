arr = [5, 4, 3, 6, 2, 1,-1,-23,-21,-12];

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]){
          [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
      }
  }
  // console.log('iteration number '+i);
  // console.log('array '+arr)
}
console.log(arr)
