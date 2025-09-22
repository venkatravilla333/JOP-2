

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }
// var person2 = {
//   name: 'kohli',
//   age: 35,
//   city: 'delhi',
//   play: function () {
//     console.log('play')
//   }
// }

// function Test(name, age , city) {
//   console.log(this)
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.play = () => {
//     console.log('play')
//   }

// }
// var person1 = new Test('sachin', 40, 'mumbai')
// var person2 = new Test('kohli', 35, 'delhi')
// var person3 = new Test('dhoni', 38, 'ranchi')
// console.log(person1)
// console.log(person2)
// console.log(person3)

//ES-6

// class test{
//   constructor(name, age, city) {
//     console.log(this)
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.play = () => {
//       console.log('play')
//     }
//   }
// }

// var person1 = new test('sachin', 40, 'mumbai')
// var person2 = new test('kohli', 35, 'delhi')
// var person3 = new test('dhoni', 38, 'ranchi')
// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(res, typeof test)


//Object manipulation
// console.log(person)

// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person)
// //access

// console.log(person.name)
// console.log(person['age'])

// //add new properties

// person.color = 'red'
// console.log(person)

// //update existing properties

// person.age = 30
// person.color = 'yellow'
// console.log(person)

// // delete properties

// delete person.color
// delete person.play
// console.log(person)

//How to loop object


// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person)
// //without using loop

// // console.log(person.name)
// // console.log(person.age)
// // console.log(person.city)
// // person.play()

// // with using loop

// // for (var keys in person) {
// //   console.log(keys, person[keys])
// // }

// var keys = Object.keys(person)
// var values = Object.values(person)
// var entries = Object.entries(person)
// console.log(keys)
// console.log(values)
// console.log(entries)

//Copy or clone


//primitives

// var a = 10

// var b = a
// b = 20
// console.log(a)
// console.log(b)

//  reference

var originalObject = {
  name: 'sachin',
  address: { road: 101 },
  play: function () {
    console.log('play')
  }
}
// import lodash from 'lodash'
// var lodash = require('lodash')
// var copiedObject = originalObject //normal copy
// var copiedObject = JSON.parse(JSON.stringify(originalObject)) //deep copy
// var copiedObject =  lodash.cloneDeep(originalObject)//deep copy
// var copiedObject = Object.assign({}, originalObject)//shallow copy
// var copiedObject = {...originalObject} //shallow copy

// copiedObject.name = 'kohli'
// copiedObject.address.road = 201

// console.log(originalObject)
// console.log(copiedObject)

// console.log(window.Math)
// console.log(window.Math.min(10, 5, 2))
// console.log(window.Math.max(10, 5, 2))
// console.log(window.Math.ceil(10.7))
// console.log(window.Math.ceil(10.1))
// console.log(window.Math.floor(10.1))
// console.log(window.Math.floor(10.7))
// console.log(window.Math.round(10.5))
// console.log(window.Math.round(10.4))
// console.log(window.Math.random()*100)
// console.log(window.Math.sqrt(25))
// console.log(window.Math.pow(3,3))


// var now = new Date()
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getDay())
// console.log(now.setFullYear(2047))
// console.log(now.setHours(20))
// console.log(now)

// var date1 = new Date(2040, 0, 20, 8, 10, 20)
// var date1 = new Date('2047 sep 20 20:20:20')
// console.log(date1)
// console.log(date1.getFullYear())
// date1.setFullYear(2050)
// console.log(date1.getFullYear())

//Template Strings

var name = 'sachin'
var age = 40

console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age ) //old
console.log(`Hi this is ${name} My age is ${age}`) //new

