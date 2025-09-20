

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

class test{
  constructor(name, age, city) {
    console.log(this)
    this.name = name;
    this.age = age;
    this.city = city;
    this.play = () => {
      console.log('play')
    }
  }
}

var person1 = new test('sachin', 40, 'mumbai')
var person2 = new test('kohli', 35, 'delhi')
var person3 = new test('dhoni', 38, 'ranchi')
console.log(person1)
console.log(person2)
console.log(person3)
// console.log(res, typeof test)


