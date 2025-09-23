

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

// var name = 'sachin'
// var age = 40

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age ) //old
// console.log(`Hi this is ${name} My age is ${age}`) //new

//string object


var msg = 'Hi You how are You'
// console.log(msg)

// console.log(msg.length)

// console.log(msg.trim().length)
// console.log(msg.trimStart().length)
// console.log(msg.trimEnd().length)

// console.log(msg.slice())
// console.log(msg.slice(0))
// console.log(msg.slice(0, 2))
// console.log(msg.slice(-3))
// console.log(msg.substring())
// console.log(msg.substring(0))
// console.log(msg.substring(0, 2))
// console.log(msg.substring(-3))

// console.log(msg.charAt(1))
// console.log(msg.charCodeAt(1))

// console.log(msg.toUpperCase())
// console.log(msg.toLowerCase())

// console.log(msg.concat(' sachin'))

// var res = msg.split(' ')
// console.log(res, typeof res)

// var msg = 'hello'
// console.log(msg.padStart(9, 'hi'))
// console.log(msg.padEnd(9, 3))

// console.log(msg.replace('You', 'me'))
// console.log(msg.replaceAll('You', 'me'))

// console.log(msg.indexOf('You'))
// console.log(msg.indexOf('bye'))
// console.log(msg.lastIndexOf('You'))
// console.log(msg.lastIndexOf('bye'))
// console.log(msg.includes('You'))
// console.log(msg.includes('bye'))
// console.log(msg.startsWith('Hi'))
// console.log(msg.startsWith('bye'))
// console.log(msg.endsWith('You'))
// console.log(msg.endsWith('bye'))


// console.log(this)


// function test() {
//   console.log(this)
// }
// test()


// var person = {
//   name: 'sachin',
//   outer1: function() {
//     // console.log(this)
//     var inner1 =  ()=> {
//       // console.log(this)
//     }
//     inner1()
//     // inner1.call(this)
//     // inner1.apply(this)
//     // inner1.bind(this)()
//     var inner2 = ()=> {
//       // console.log(this)
//     }
//     inner2()
//   },
//   outer2: ()=> {
//     // console.log(this)
//      var inner1 = function() {
//       console.log(this)
//     }
//     inner1.call(person)
//     var inner2 = ()=> {
//       console.log(this)
//     }
//     inner2.call(person)
//   }
  
// }

// person.outer1()
// person.outer2()


function test() {
  console.log(this)
  this.name = 'sachin';
  this.outer1 = function () {
    console.log(this)
    var inner1 = () =>{
      console.log(this)
    }
    inner1()
    var inner2 = ()=> {
      console.log(this)
    }
    inner2()

  };
  this.outer2 = ()=> {
    console.log(this)
     var inner1 = function () {
      console.log(this)
    }
    inner1.call(person)
    var inner2 = ()=> {
      console.log(this)
    }
    inner2()
    
  }
    
}

var person = new test()
person.outer1()
person.outer2()


// class test{
//   constructor() {
//     console.log(this)
//     this.outer1 = function () {
//       console.log(this)
//       var inner1 = function () {
//         console.log(this)
//       }
//       inner1()
//       var inner2 =  ()=> {
//         console.log(this)
//       }
//       inner2()
//     }
//     this.outer2 = ()=> {
//       console.log(this)
//        var inner1 = function () {
//         console.log(this)
//       }
//       inner1()
//       var inner2 =  ()=> {
//         console.log(this)
//       }
//       inner2()
//     }
//   }
// }

// var person = new test()

// person.outer1()
// person.outer2()

// var obj = {
//   name: 'sachin',
//   age: 40
// }

// var test = (a,b,c)=> {
//   console.log(this)
//   console.log(a,b,c)
// }
// test(1,2,3)
// test.call(obj, 1,2,3)
// test.apply(obj, [1,2,3])
// test.bind(obj)(1,2,3)

