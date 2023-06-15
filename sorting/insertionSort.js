// arr = [5, 7,2,-2,4,6,9,1,-4,-11,-12]
arr = [1,5,7,2,3,6]

for(var i = 0; i < arr.length; i ++){
    var key = arr[i]
    var j = i-1
    while (j >= 0 && arr[j] > key){
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        j = j - 1
    }
    console.log('key '+key+ ' j '+j+ ' ')
    console.log('iteration : '+i+' arr : '+arr)
}
