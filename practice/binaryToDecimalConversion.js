let number = 11
binaryToDecimal(number)

function binaryToDecimal(number){
    let decimalNumber = 0;
    let length = number.toString().length
    while(number>0){
        let currentLenght = number.toString().length
        let rightmost = number%10;
        // Removing the rightmost digit from the number
        number = Math.floor(number/10);

        decimalNumber = decimalNumber + (rightmost * Math.pow(2, (length - currentLenght)))

    }
    console.log(decimalNumber)
}