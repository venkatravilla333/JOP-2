

// function test1() {
//   return 100
//   return 200
// }
// console.log(test1())

function* test2() {

  try { 
    console.log('hi')
    yield 100
    
  }
  finally {
    yield 200
    yield 300
  }
}
var genObj = test2()
// console.log(genObj)
// console.log(genObj.next())
// console.log(genObj.return())
// console.log(genObj.next())

// for (var value of genObj) {
//   console.log(value)
// }