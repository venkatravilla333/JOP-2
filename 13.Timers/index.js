

// console.log(window)

var timer = setTimeout(() => {
  console.log('time out')
}, 4000)


var clearBtn = document.getElementById('clear')

function clearBtnFun() {
  clearTimeout(timer)
}

clearBtn.addEventListener('click', clearBtnFun)

var intervalTimer = setInterval(() => {
  console.log('interval timer')
}, 4000)


var intervalBtn = document.getElementById('interval')

function intervalBtnFun() {
  clearInterval(intervalTimer)
}

intervalBtn.addEventListener('click', intervalBtnFun)