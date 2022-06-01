let black = document.getElementById('black')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let green = document.getElementById('green')

black.addEventListener('click',selectColor)
red.addEventListener('click',selectColor)
blue.addEventListener('click',selectColor)
green.addEventListener('click',selectColor)

function selectColor(event) {
    unselectColor()
    event.target.classList.add('selected')
}

function unselectColor() {
    black.classList.remove('selected')
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
}

function setPixels() {
    let pixel = document.getElementsByClassName('pixel')
    for (let i = 0; i<pixel.length; i += 1) {
        pixel[i].addEventListener('click',colorize)
    }
}

function colorize (event) {
    let color = document.getElementsByClassName('selected')
    event.target.style.backgroundColor = color[0].style.backgroundColor
}

let clearButton = document.getElementById('clear-board')
clearButton.addEventListener('click',clearBoard)

function clearBoard() {
    let pixel = document.getElementsByClassName('pixel')
    for (let i = 0; i<pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white'
    }
}

let setBoardButton = document.getElementById('generate-board')
let input = document.getElementById('board-size')
let pixelBoard = document.getElementById('pixel-board')

setBoardButton.addEventListener('click',setBoard)

function setBoard (){
    if (input.value == '') {
        window.alert('Board inválido!')
    }
    else {
        while (pixelBoard.firstChild) {
            pixelBoard.removeChild(pixelBoard.lastChild);
        }
        if (input.value < 5) {
            input.value = 5
        }
        if (input.value > 50) {
            input.value = 50
        }
        pixelBoard.style.height = input.value*40 + input.value*2 + 'px'
        pixelBoard.style.width = input.value*40 + input.value*2 + 'px'
        for (let i = 0; i < input.value**2; i += 1) {
            let div = document.createElement('div')
            div.className = 'pixel'
            pixelBoard.appendChild(div)
        }
        setPixels()
    }
}

let colorArray = ['red','blue','green','aqua','violet','brown','yellow']
red.style.backgroundColor = colorArray[Math.floor(Math.random() * 7)]
colorArray.splice(colorArray.indexOf(red.style.backgroundColor),1)
blue.style.backgroundColor = colorArray[Math.floor(Math.random() * 6)]
colorArray.splice(colorArray.indexOf(blue.style.backgroundColor),1)
green.style.backgroundColor = colorArray[Math.floor(Math.random() * 5)]
black.style.backgroundColor = 'black'

window.onload = function() {
    setPixels()
  }