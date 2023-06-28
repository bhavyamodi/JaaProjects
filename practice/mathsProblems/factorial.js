let number = 5
let factorialSum = 1
console.log(factorial(number, factorialSum))

function factorial(number, factorialSum){
    factorialSum = factorialSum * number
    if(number === 1){
        return factorialSum
    }
    return (factorial(number - 1, factorialSum))
}