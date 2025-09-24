

var element = document.getElementById('current')

console.log(element)

element.style.background = 'red'

//parent

var parent = element.parentElement
console.log(parent)
parent.style.background = 'yellow'

//siblings

var preSib = element.previousElementSibling

console.log(preSib)
preSib.style.background = 'green'

var nextSib = element.nextElementSibling

console.log(nextSib)
nextSib.style.background = 'green'

//childs

// var firstChild = element.firstElementChild

// console.log(firstChild)
// firstChild.style.background = 'black'
// firstChild.style.color = 'white'

// var lastChild = element.lastElementChild

// console.log(lastChild)
// lastChild.style.background = 'blue'
// lastChild.style.color = 'white'

var allChilds = element.children


// allChilds[0].style.background = 'blue'
// allChilds[0].style.color = 'white'
// allChilds[1].style.background = 'blue'
// allChilds[1].style.color = 'white'
// allChilds[2].style.background = 'blue'
// allChilds[2].style.color = 'white'

// for (var value of allChilds) {
//   value.style.background = 'black'
//   value.style.color = 'white'
// }