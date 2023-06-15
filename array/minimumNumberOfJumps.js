//time complexity : O(n)

arr = [1,3,5,8,9,2,6,7,6,8,9]
N = arr.length

console.log(maxSubarraySum(arr,N))

function maxSubarraySum(arr, N){
    var jumps = 0
    var sizeRemaining = N
    console.log('sizeRemaining '+sizeRemaining)


    while(jumps < N){
        if(arr[jumps] == 0){
            return -1
        }

        
        console.log(jumps)
        ++jumps
        sizeRemaining = sizeRemaining - 1 ;
        console.log('sizeRemaining '+sizeRemaining)

    }
    

    return -1
}