// function  missingNumber(array,n){
    // time complexity is nlogn
//         array = array.sort(function(a, b){return a-b}) 
//         for(var i = 1; i <= n; i ++){
//             console.log('i '+i+' arr[i]' +array[i - 1])
//             if(i !== array[i - 1]){
//                 return i
//             }
//         }
// }

// var number = missingNumber([6,1,2,8,3,9,7,10,5], 10)
// console.log(number)

let myArr = [2,3,1,7,6,4,5]
console.log(missingNumber(myArr, myArr.length + 1))

function missingNumber(myArr, n){
    // time complexity is n^2
    // while(n > 0){
    //    if(myArr.includes(n)){
    //        n -= 1;
    //    }else{
    //        return n
    //    }
    // }
    // return -1


    // time complexity is n
    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
        sum += myArr[i];
    }
    
    let expectedSum = (n * (n + 1)) / 2;
    return (expectedSum - sum);
}