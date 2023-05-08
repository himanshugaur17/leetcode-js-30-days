var createCounter = function (init) {
    value = 10
    const objWithThreeFunctions = {
        increment: function (x) {
            console.log(arguments)
            this.value++;
            return this.value
        },
        decrement: () => {
            console.log(arguments)
            this.value-- // this referring to the lexical env, the arrow function don't
            return this.value
        },
        reset: function () {
            this.value = this.initialValue
            return this.value
        },
        value: init,
        initialValue: init
    }
    return objWithThreeFunctions
};

var counter = createCounter(5);
console.log(counter.decrement());
console.log(counter.increment(8));
console.log(counter.increment(8));
console.log(counter.reset());