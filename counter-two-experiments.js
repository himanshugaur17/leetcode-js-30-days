data = 10
console.log(this.data)
console.log(data)
const updateDataWithoutArrow = function (data) {
    console.log(this.data) /*This should give NaN*/
    const data1 = data;
    console.log(this.data1) /*print whatever passed */
}
console.log(this.data) /*should print 10*/
const updateDataWithArrow = (data) => {
    console.log(this.data) /*This should give 10*/
    this.data = data;
    console.log(this.data) /*print whatever passed */
}

console.log(this.data) /* print the value updated by arrow function */

// updateDataWithoutArrow(9)
updateDataWithArrow(11)