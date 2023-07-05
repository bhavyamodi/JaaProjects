//Time complexity : O(n) where n is the number if digits present in number

let number = 13456
countDigit(number)

function countDigit(number){
    let result = 0
    while(number > 0){
        number = Math.floor(number / 10)
        result ++
    }
    console.log(result)
}