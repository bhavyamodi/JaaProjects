arr = [22,323,34,45,456,35545,232,35545,56,23,4545,35545]
var temp = arr[0]

for(var i = 1; i < arr.length; i ++){
    if(arr[i] > temp){
        temp = arr[i]
    }
}
console.log(temp)