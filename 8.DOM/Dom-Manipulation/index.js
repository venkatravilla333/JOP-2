
var data = 'Data from db'

var para = document.createElement('p')
console.log(para)

para.innerText = data

var body = document.getElementById('parent')

// body.appendChild(para)

var h4 = document.createElement('h4')

console.log(h4)
var newData = 'This is heaading 4'
h4.textContent = newData



var addBtn = document.getElementById('add')

function addBtnFun() {
  body.appendChild(para)
  body.insertBefore(h4, para)
}

addBtn.addEventListener('click', addBtnFun)


var h1 = document.createElement('h1')

h1.textContent = 'This is heading one'

var updateBtn = document.getElementById('update')
console.log(updateBtn)


function updateBtnFun() {
  body.replaceChild(h1, h4)
  
}

updateBtn.addEventListener('click', updateBtnFun)

var removeBtn = document.getElementById('remove')

function removeBtnFun() {
  // h1.remove()
  body.removeChild(h4)
}

removeBtn.addEventListener('click', removeBtnFun)