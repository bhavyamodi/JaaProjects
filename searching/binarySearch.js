//Interval Search
//searching in sorted data-structures
//target the center of the search structure and divide the search space in half.

arr = [1,2,3,4,6,7,9,12,14,15,17,19,23,25,27]
n = 23

const result = searchIndex(arr, 0, arr.length)
console.log('element '+n+' found at index : '+result);

function searchIndex(arra,lb,ub){
    var mid = Math.floor((lb + ub) / 2)

    if(arra[mid] == n){
        return mid
    }
    if(n < arra[mid]){
        return searchIndex(arra, lb, mid)
    }else{
        return searchIndex(arra, mid, ub)
    }
}