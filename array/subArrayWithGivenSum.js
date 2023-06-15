function subarraySum(arr, n, s)
{
  if(s == 0){
    return [-1]
}
  var lb = 0;
  var ub = 0;
  var sum = 0;
  var i = 0;
  

  while (i <= n) {
    // console.log('sum '+sum+ ' lb '+lb+' ub '+ub);
    if (sum == s ) {
      return [lb + 1, ub ];
    } else if (sum < s) {
      console.log('sum new less'+sum);
      sum = arr[i] + sum;
      ub = ub + 1;
      i++;
    } else {
      console.log('sum '+sum+ ' lb '+lb+' ub '+ub);
      sum = sum - arr[lb]
      console.log('sum new greater'+sum);
      lb = lb + 1;
      if(lb > ub){
        ub = ub + 1
        i++
      }
    }
  }
  return [-1];
}

var summ = subarraySum([135 ,101, 170, 125, 79 ,159, 163, 65, 106, 146, 82, 28 ,162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48 ,127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12 ,123, 134], 42, 0);
console.log(summ)