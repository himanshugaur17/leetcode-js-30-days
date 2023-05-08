const createCounter = function (n) {
    x = 0
    nestedfunction = function () {
        return n + x++
    }
    return nestedfunction
}
nestedfunc = createCounter(10)
console.log(nestedfunc())
nestedfunc = createCounter(1)
console.log(nestedfunc())