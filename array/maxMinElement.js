arr = [2,3,4,6,-4,-3,-2,34,59,34,56,33,56,36]
findMaxMin(arr)
function findMaxMin(arr){
    var min = arr[0]
    var max = arr[0]
    for(var i =1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }

        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log('min : '+min+' max : '+max)
}