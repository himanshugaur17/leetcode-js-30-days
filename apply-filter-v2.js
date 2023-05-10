var filter = function (arr, fn) {
    return arr.filter((value, index) => fn(value, index))
};

var filterUsingForEach = function (arr, fn) {
    let arrNew = []
    arr.forEach((value, index) => {
        if (fn(value, index) == true)
            arrNew.push(value);
    })
    return arrNew
}

var filterUsingReduce = function (arr, fn) {
    return arr.reduce((newArray, value, index) => {
        if (fn(value, index))
            newArray.push(value);
        return newArray
    }, [])
}