

// var obj = {}

// console.log(obj)

// var myMap = new Map()

// console.log(myMap)


var obj = {
  name: 'sachin',
  age: 40
}

console.log(obj)

var myMap = new Map([['name', 'sachin'], ['age', 40]])

console.log(myMap)


obj.color = 'red'

console.log(obj)

myMap.set('color', 'red')
console.log(myMap)

console.log(obj.name)
console.log(myMap.get('name'))


console.log(obj.hasOwnProperty('age'))
console.log(myMap.has('age'))

// delete obj.name

// console.log(obj)

// myMap.delete('name')
// console.log(myMap)

// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     delete obj[key];
//   }
// }

// console.log(obj)

// myMap.clear()

// console.log(myMap)


// console.log(Object.keys(obj).length)

// console.log(myMap.size)


// for (var keys in obj) {
//   console.log(keys, obj[keys])
// }

// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())


// var res = new Map(Object.entries(obj))

// console.log(res)

// console.log(Object.fromEntries(res))


// var {name, age, color} = obj

// console.log(name)
// console.log(age)
// console.log(color)

// var [name, age, color] = myMap

// console.log(name)
// console.log(age)
// console.log(color)


// var myMap = new Map()
var myWM = new WeakMap()

var obj = {name: 'sachin'}

myWM.set(obj, 'hello how are you')

console.log(myWM)

console.log(myWM.get(obj))

// obj = null

// console.log(myWM)

// myWM.delete(obj)
// console.log(myWM)

// console.log(myWM.has(obj))



var arr = [1, 2, 3, 4, 5, 3]

console.log(arr)

var mySet = new Set([1,2,3,4,5,3])


// console.log(mySet)

// mySet.add(6)
// console.log(mySet[0])

// var myArr = [...mySet]

// console.log(myArr)

console.log(mySet)

