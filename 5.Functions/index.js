

//define

//declaration

// function test() {
  
// }
// test()

//expression

// var x = function test() {
  
// }
// var y = function () {
  
// }
// var x = ()=>{
  
// }



//params vs arguments vs default param (ES-6)

// function test(a = 10, b, c) {
//   console.log(a, b, c)
  
// }

// test(null, 2, 3)


// function test() {
// console.log(arguments, typeof arguments)
// console.log(Array.isArray(arguments))
// // console.log(arguments[0])
// // console.log(arguments[1])
// // console.log(arguments[2])
// // console.log(arguments[3])
//   // console.log(arguments[4])
//   var sum = 0
//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)
// }
// test(1, 2, 3, 4, 5)


// function test(...rest) {
  
//   console.log(rest)
  // console.log(rest[0])
  // console.log(rest[1])
  // console.log(rest[2])
  // console.log(rest[3])
  // console.log(rest[4])
//   var sum = 0
//   for (var value of rest) {
//     // console.log(value)
//     sum +=value
//   }
//   console.log(sum)
// }
// test(1, 2, 3, 4, 5)


// var a = 1

// let b = 2

// const c = 3

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {
//   var d = 4
//   let e = 5
//   const f = 6
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
//   if (true) {
//     var g = 7
//     let h = 8
//     const i = 9
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }
//   console.log(g)
//   // console.log(h)
//   // console.log(i)
  
// }
// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)

// // test()

// {
//   var x = 100
//   console.log(x)
// }
// test()
// console.log(x)


//hoisting
// console.log(a)
// let a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { value: 20 }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// // console.log(h)
// h()
// let h = function named() {
//   console.log('named')
// }
// console.log(h)
// h()

// console.log(i)
// var i  = function () {
//   console.log('ananymous')
// }
// console.log(i)

// console.log(j)
// var j  =  ()=> {
//   console.log('arrow')
// }
// console.log(j)


// console.log(declare)
// declare()
// function declare() {
//   console.log('declare')
// }
// console.log(declare)
// declare()


//var vs let vs const

//redeclaration

// var a = 10
// console.log(a)
// let a = 10
// console.log(a)
// const a = 10
// console.log(a)
// let a = 20
// console.log(a)

//re-asssignment

// var a = 10
// let a = 10
// const a = 10
// console.log(a)
// a= 20
// console.log(a)

//initization

// var a

// console.log(a)
// a = 10
// // let a
// // const a  = 10

// console.log(a)


// var x = 1

// console.log(x)
// function test() {
//   console.log(x)
//   // x = 10
//   let x = 10
//   console.log(x)
// }
// console.log(x)
// test()

// console.log(x)
// {
//   let x = 10
// }
// console.log(x)

//closure

// function outer() {
//   var x = 100
//   var y = 100
//   function inner() {
//     console.log(x)
//     // var x = 200
//   }
//   inner()
// }

//  outer()

// inner()

//IIFE (ES-5)

// (function test() {
//   var a = 10
//   console.log(a)
// })()
// console.log(a)


//without currying

// function test(a, b, c){
//   console.log(a + b + c)
  
// }
// test(1, 2, 3)


//with currying

// function fun1(a) {
//   return function fun2(b) {
//     return function fun3(c) {
//       console.log(a + b + c)
      
//     }
//   }
// }

// fun1(1)(2)(3)

// without curry

// function calDis(price, dis) {
//   var disAmount = price * dis
//   console.log(disAmount)
// }

// calDis(1000, .1)
// calDis(1000, .2)
// calDis(1000, .3)
// calDis(1000, .4)
// calDis(1000, .5)

//with curry

//first class function

// var x = function test(cb) {
//   return function inner(){}
// }
// x(()=>{})


// heigher order function?



// function hof(cb) {
//   // cb()
//   return function inner() {
    
//   }
// }
// // hof(function cb(){})
// var inner = hof()
// inner()


// function pure(a,b,c) {
//   console.log(a + b + c)
  
// }
// pure(1, 2, 3)

// function impure(a,b,c) {
//   var d = Math.random()* 10
//   console.log(a + b + c + d)
  
  
// }
// impure(1, 2, 3)


// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);



































