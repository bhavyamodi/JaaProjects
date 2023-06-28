let n = 0
console.log(fibonacciSeries(n))
console.log(printFibonacciSeries(n))

function fibonacciSeries(n){
    if(n <= 1){
        return n
    }

    return fibonacciSeries(n-1) + fibonacciSeries(n-2)
}

function printFibonacciSeries(n){
    let a = 0
    let b = 1
    let result = [b]
    let c
    if(n == 0){
        return [1]
    }
    for (let i = 1; i <= n; i++) {
        c = a + b
        a = b
        b = c 
        result.push(b)
    }
    return result
}
