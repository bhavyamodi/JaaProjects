arr = [1,2,3,4,5]
var lb = 0
var ub = arr.length - 1

while(lb < ub){
    [arr[lb], arr[ub]] = [arr[ub], arr[lb]]
    lb = lb + 1
    ub = ub - 1
}
console.log(arr)




