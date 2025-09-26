

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

// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//     // var data = 'Data from db'
//     //  res('data from db')?
//      res(num*num)
//     }, 4000)
//   })
// }

// fetchData(2).then((data1)=>{
//   console.log(data1)
//  return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//  return fetchData(data2)
// }).then((data3) => {
//   console.log(data3)
//  return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })

//async await (es-6)


// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // res('data from db')
//       res(num*num)
//     }, 4000)
//   })
// }



// async function displayData() {
//  var data1 = await fetchData(2)
//   console.log(data1)
//   var data2 = await fetchData(data1)
//   console.log(data2)
//   var data3 = await fetchData(data2)
//   console.log(data3)
//   var data4 = await fetchData(data3)
//   console.log(data4)
// }

// displayData()

// var pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('PR1')
//   }, 1000)
// })
// var pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('PR2')
//   }, 4000)
// })
// var pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('PR3')
//   }, 2000)
// })

// Promise.all([pr1, pr2, pr3]).then((res)=>{console.log(res)})
// Promise.allSettled([pr1, pr2, pr3]).then((res)=>{console.log(res)})
// Promise.race([pr1, pr2, pr3]).then((res)=>{console.log(res)})
// Promise.any([pr1, pr2, pr3]).then((res)=>{console.log(res)})



// console.log(window)

//API CALLS

var getBtn = document.getElementById('getdata')
var parent = document.getElementById('parent')

function getDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    // console.log(res)
   return res.json()
  }).then((data) => {
    console.log(data)
    data.forEach((obj) => {
      var para = document.createElement('p')
      console.log(para)
      para.textContent = obj.title
      parent.appendChild(para)
    })
  }).catch((err) => {
    console.log(err)
  })
}

getBtn.addEventListener('click', getDataFun)

//send data

var newData = {
  userId: 200,
  title: 'OG',
  body: 'My body'
}

var sendBtn = document.getElementById('senddata')

function sendBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(newData)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

sendBtn.addEventListener('click', sendBtnFun)

//update request

var updateBtn = document.getElementById('updatedata')

function updateBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(newData)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

updateBtn.addEventListener('click', updateBtnFun)

//delete request

var deleteBtn = document.getElementById('deletedata')


function deleteBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/50', {
    method: 'DELETE'
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}

deleteBtn.addEventListener('click', deleteBtnFun)





