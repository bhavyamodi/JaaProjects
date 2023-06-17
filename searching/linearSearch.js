//sequential search
//the list or array is traversed sequentially and every element is checked.

arr = [1,3,5,7,9,12,13,14,18,25];
n = 25

for(var i =0 ; i < arr.length; i ++){
    if(arr[i] == n){
        console.log('element '+n+' found at index : '+i);
    }
}