function miniMaxSum(arr) {
    const sum = arr.reduce((a, b) => a + b)
    console.log(sum)
    var size = arr.length
    var minSum = sum - arr[0]
    var maxSum = sum - arr[0]
    var currentSum = 0

    for(var i = 1;i < size; i++){
        currentSum = sum - arr[i] 
        
        if(currentSum < minSum){
            minSum = currentSum
        }

        if(currentSum > maxSum){
            maxSum = currentSum
        }
    }
    console.log(minSum +' ' +maxSum)


}

arr = [1,3,5,7,9]
miniMaxSum(arr)