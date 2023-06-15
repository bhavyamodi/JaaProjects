var givenNumber = 267876543213456787654;
var result = evenOdd(givenNumber);
console.log(result);

function evenOdd(number){
    return number % 2 == 0 ? 'even' : 'odd';
}