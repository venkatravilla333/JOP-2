

// console.log(window.localStorage)
// console.log(window.sessionStorage)



var storeBtn = document.getElementById('store')


function storeBtnFun() {
  
localStorage.setItem('name', 'kohli')
localStorage.setItem('age', 40)
sessionStorage.setItem('name', 'kohli')
sessionStorage.setItem('age', 40)
  
}

storeBtn.addEventListener('click', storeBtnFun)

var getBtn = document.getElementById('get')

var parent = document.getElementById('parent')

function getBtnFun() {
  console.log(localStorage.getItem('name'))
  console.log(localStorage.getItem('age'))
  var name = localStorage.getItem('name')
  var age = localStorage.getItem('age')
  var para = document.createElement('p')
  para.textContent = `Name: ${name}, Age: ${age}`
  console.log(para)
  parent.appendChild(para)
}

getBtn.addEventListener('click', getBtnFun)


var removeBtn = document.getElementById('remove')

function removeBtnFun() {
  // localStorage.removeItem('name')
  // localStorage.removeItem('age')
  // localStorage.clear()
}

removeBtn.addEventListener('click', removeBtnFun)

