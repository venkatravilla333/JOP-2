

// var obj1 = {}
// var obj2 = {}

// console.log(obj1)
// console.log(obj2)
// var parentObj = Object.getPrototypeOf(obj1)
// var parentObj = obj1.__proto__
// var parentObj = Object.prototype
// console.log(parentObj)

// console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2))


// var arr1 = []
// var arr2 = []

// console.log(arr1)

// var arrayBase = Object.getPrototypeOf(arr1)
// console.log(arrayBase)

// var objectBase = Object.getPrototypeOf(arrayBase)
// console.log(objectBase)

// console.log(Object.getPrototypeOf(arr1) === Object.getPrototypeOf(arr2))



// function test() {
  
// }

// var obj1 = new test()
// var obj2 = new test()

// console.log(obj1)
// console.log(obj2)

// var testBase = Object.getPrototypeOf(obj1)
// console.log(testBase)

// console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2))

// var objectBase = Object.getPrototypeOf(testBase)
// console.log(objectBase)



// var obj = { name: 'sachin', age: 40 }

// console.log(obj.name)
// console.log(obj.age)


// console.log(Object.getPrototypeOf(obj))

// console.log(obj.toString())

// var arr = [1, 2, 3]

// arr.push(4)

// console.log(Object.getPrototypeOf(arr))

// console.log()


var obj = {
  name: 'sachin',
  age: 40,
  go: function(){
    console.log('go')
    this.play()
  }
}

console.log(obj)

var objectBase = Object.getPrototypeOf(obj)


Object.prototype.play = function () {
  console.log('play')
  // this.go()
}
// console.log(Object.getOwnPropertyDescriptor(objectBase, 'toString'))
// console.log(Object.getOwnPropertyDescriptor(objectBase, 'play'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'age'))


// for (var key in obj) {
//   console.log(key)
// }

// console.log(Object.keys(obj))

// Object.defineProperty(obj, 'age', {
//   writable: true,
//   enumerable: false,
//   configurable: true
// })

// obj.age = 80
// delete obj.age

// console.log(Object.keys(obj))

// console.log(obj)

// obj.play()
// obj.go()

// console.log(Object.keys(obj))