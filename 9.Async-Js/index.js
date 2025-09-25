

// console.log('one')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 4000)

// console.log('two')

// setTimeout(() => {
//   console.log('Timer-2')
// }, 1000)

// console.log('four')

// Promise.resolve().then(() => console.log('Pr1')).then(() => console.log('pr2'))

// setTimeout(() => {
//   console.log('Timer-3')
// }, 0)

// console.log('three')

//callback function

// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // var data = 'Data from DB'
//     var data = num*num
//     displayData(data)
//   }, 4000)
// }
// fetchData(2, function displayData(data1) {
//   console.log(data1)
//   fetchData(data1, function displayData(data2){
//     console.log(data2)
//      fetchData(data2, function displayData(data3){
//        console.log(data3)
//           fetchData(data3, function displayData(data4){
//             console.log(data4)
//         })
//      })
//    })
// })


// displayData()

function fetchData(num) {
 return new Promise((res, rej) => {
    setTimeout(() => {
    // var data = 'Data from db'
    //  res('data from db')?
     res(num*num)
    }, 4000)
  })
}

fetchData(2).then((data1)=>{
  console.log(data1)
 return fetchData(data1)
}).then((data2) => {
  console.log(data2)
 return fetchData(data2)
}).then((data3) => {
  console.log(data3)
 return fetchData(data3)
}).then((data4) => {
  console.log(data4)
})




// displayData()

