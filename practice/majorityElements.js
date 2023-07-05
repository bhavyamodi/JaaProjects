let a = [1,2,2,3,3]

console.log(majorityElements(a, a.length))

function majorityElements(a, size){
    if(size == 0){
        return -1
    }
    if(size == 1){
        return a[0]
    }

    let object = new Object()
    a.forEach(element => {
        if(object.hasOwnProperty(element)){
            object[element] += 1
        }else{
            object[element] = 1
        }
    });

    if(Object.values(object).every((v) => v === 1)){
        return -1
    }

    let majorityElement = (Object.keys(object).reduce(function(a, b){ 
        return object[a] > object[b] ? a : b 
    }));

    if(object[majorityElement] >= (size/2)){
        return majorityElement
    }
    return -1
}