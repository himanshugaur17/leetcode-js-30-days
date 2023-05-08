function valueOfThisDependsUponTheFunctionCaller() {
    console.log(this)
}

obj1 = { "name": "Himanshu", "age": 23 }
obj2 = { "name": "Gaur", "age": 24 }
data = 10
obj1.myFunc = valueOfThisDependsUponTheFunctionCaller
obj2.myFunc = valueOfThisDependsUponTheFunctionCaller

//valueOfThisDependsUponTheFunctionCaller() since the caller is undefined or null, hence substituion of this happens which makes it globalThis
// obj1.myFunc() // caller is obj1, hence this=obj1
// obj2.myFunc() // caller is obj2, hence this=obj2
//console.log(this) prints empty object {}