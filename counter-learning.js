function testBlockNotCreatingScope(n) {
    var x = 10
    var x = 4
    console.log(x)
}

testBlockNotCreatingScope(3)
testBlockNotCreatingScope(13)