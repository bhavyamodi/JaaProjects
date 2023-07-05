let number = 125
console.log(factorial(number))
console.log(recursiveFactorial(number))


//time complexity : O(n)
//space complexity : O(n)

function recursiveFactorial(number){
    if(number === 0){
        return 1
    }
    return (number  * factorial(number - 1))
}


//time complexity : O(n)
//space complexity : O(1)

function factorial(number){
    let result = 1
    for(let i =2 ; i<= number ; i ++){
        result = result * i
    }
    return result
}
