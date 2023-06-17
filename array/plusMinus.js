function plusMinus(arr) {
    let N = arr.length
    let noOfPositive = 0
    let noOfNegative = 0
    let noOfZeros = 0

    for(var i = 0; i < N; i++){
        if(arr[i] < 0){
            noOfNegative += 1;
        }else if(arr[i] > 0){
            noOfPositive += 1;
        }else{
            noOfZeros += 1;
        }
    }

    console.log((noOfPositive / N).toFixed(6))
    console.log((noOfNegative / N).toFixed(6))
    console.log((noOfZeros / N).toFixed(6))
}

arr = [1,1,0,-1,-1]
plusMinus(arr)