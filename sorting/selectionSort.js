arr = [5, 8, 7, 6, 2, 1,-1,-23,-21,-12];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[i]){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    console.log('iteration number '+arr);
  }
  console.log('sorted array '+arr)