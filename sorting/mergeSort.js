arr = [55,14,33,27,10,35,19,44,42]

var lb = 0 
var ub = arr.length - 1
mergeSort(arr, lb, ub)
console.log(arr)

function mergeSort(arr, lb, ub){
    if(lb < ub){
        var mid = Math.floor((lb + ub) / 2)
        mergeSort(arr, lb, mid)
        mergeSort(arr, mid + 1, ub)
        merge(arr, lb, mid, ub)
    }
}

function merge(arr, lb, mid, ub){
    console.log('left bound: '+lb+' mid: '+mid+' upper bound:'+ub)

    var leftArr = arr.slice(lb, mid + 1)
    var rightArr = arr.slice(mid + 1, ub + 1)
    console.log('left: '+leftArr+' Right :'+rightArr)

    let i = 0;
    let j = 0; 
    let k = lb; 

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
    console.log('arr: '+arr)

}
