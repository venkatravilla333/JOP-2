

var button = document.getElementById('btn')

console.log(button)

function btnClick() {
  console.log('button clicked')
}

button.addEventListener('click', btnClick)