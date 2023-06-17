//time complexity : O(n)

arr = [-2,1,-3,4,-1,2,1,-5,4]
N = arr.length
console.log(maxSubarraySum(arr,N))

function maxSubarraySum(arr, N){
    let sum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < N; i++) {
        console.log('current sum '+currentSum+ ' current elem '+arr[i])
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        if(sum < currentSum){
            sum = currentSum
        }
    }
    return (sum)
} 