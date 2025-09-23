

var arr = [1, 2, 3, 4, 5]

// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


//add

// arr.unshift(0)
// arr.push(6)
// arr.splice(0, 0, 'hi')
// arr.splice(arr.length, 0, 'hi')
// console.log(arr)
// console.log(arr)
// arr.shift()
// arr.pop()
// arr.splice(2, 1)
// console.log(arr)

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = arr1

// arr2 = []
// arr2.length = 0
// arr2.splice(0, arr2.length)

// console.log(arr1)
// console.log(arr2)

//how to find

// var arr = [1, 2, 3, 4, 5, 2]
// console.log(arr)


//primitives

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

// //reference

// var arr = [{ course: "react" }, { course: 'html' }, { course: 'react' }]

// console.log(arr.find((obj) => {
//   return obj.course === 'react'
// }))

// console.log(arr.findIndex((obj) => {
//   return obj.course === 'css'
// }))

// console.log(arr.findLastIndex((obj) => {
//   return obj.course === 'css'
// }))



//arrays merging

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12]
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// var combinedArr = arr1.concat(arr2, arr3) //es-5
// var combinedArr = [...arr1, ...arr2, ...arr3] //es-6

// console.log(combinedArr)


//loop

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

//without loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for (var value of arr) {
//   console.log(value)
// }
// for (var i = 0; i < arr.length; i++) {
//   console.log(i, arr[i])
// }

// for (var index in arr) {
//   console.log(index, arr[index])
// }

// var res = arr.forEach((value) => {
//   return value*100
  
// })
// console.log(res)

// var res = arr.map((value) => {
//   return value*100
// })

// console.log(res)

// var arr = [1, 2, 3, 4, 5]

// var arr = [{name: 'sachin',age: 40}, {name: 'kohli', age: 35}, {name: 'gill', age: 23}]
// console.log(arr)

// var filteredArr = arr.filter((obj) => {
//   return obj.age > 25
// })

// console.log(filteredArr)


// var originalArr = ['sachin', { road: 101 }, () => { }]

// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr))//deep copy
// var copiedArr = originalArr.slice()//shallow copy es-5
// var copiedArr = Object.assign([], originalArr)//shallow copy es-5
// var copiedArr = [...originalArr]//shallow copy es-6

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)

//How to convert array into string

// var arr = [1, 2, 3, 4, 5]
// console.log(arr, typeof arr)

// var res = arr.join()
// console.log(res, typeof res)

// var newres = res.split()
// console.log(newres, typeof newres)




//how to remove duplicates from array

// var arr = [1, 2, 3, 2, 4, 5, 2]
// console.log(arr)

// var uniqueArr =  [...new Set(arr)]
// console.log(uniqueArr)

// var uniqueArr = []

// function findUniquevalue(arr) {
//   console.log(arr)
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//       uniqueArr.push(value)
//     }
//   }
// }

// findUniquevalue(arr)

// console.log(uniqueArr)

















