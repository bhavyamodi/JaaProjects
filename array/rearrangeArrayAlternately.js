arr = [1, 2, 3, 4, 5];
let i = 0;
let newArr = [];
console.log(rearrange(arr, arr.length));
function rearrange(arr, n) {
  let first = 0;
  let last = n - 1;
  let i = 0
  temp = [...arr]

  while(first <= last){
      if(i % 2 == 0){
          arr[i] = temp[last]
          last -= 1

      }else{
          arr[i] = temp[first]
          first += 1
      }
      i++
  }

  console.log(arr)

}
