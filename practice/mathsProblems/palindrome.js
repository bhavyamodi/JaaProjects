//Time complexity : O(n) where n is the number if digits present in number

let number = 12345432

console.log(isPalindrome(number))

function isPalindrome(number){
    let reverse = 0
    let temp = number

    while(temp != 0){
        let leftDigit = temp % 10
        reverse = reverse*10 + leftDigit
        temp = Math.floor(temp/10)
    }
    return (reverse == number)
}