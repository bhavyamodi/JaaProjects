let arr = [4,0,2,1,3]
arrange(arr, arr.length)
console.log(arr)

function arrange(arr, n) {
    if(n <= 1){
        return arr
    }
  for (let i = 0; i < n; i++) {
    let temp = arr[arr[i]] % n;
    arr[i] += temp * n;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(arr[i] / n);
  }
}
