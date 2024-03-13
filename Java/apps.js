let menuCicle = document.querySelector('.menu-circle')
let menu = document.querySelector('')
menuCicle.onclick = function() {
    menu.classList.toggle('active')
}

let F1 = document.getElementById('F1')
let F2 = document.getElementById('F2')
let F3 = document.getElementById('F3')
let F4 = document.getElementById('F4')

let f1Img = document.querySelector('.f1-img')
let f2Img = document.querySelector('.f2-img')
let f3Img = document.querySelector('.f3-img')
let f4Img = document.querySelector('.f4-img')

let iconPosition = document.querySelector('.icon-position')

function f1 () {
    iconPosition.style = 'top: 33%;'
    F1.style = 'color: white;'
    F2.style = 'unset;'
    F3.style = 'unset;'
    F4.style = 'unset;'

    f1Img.style = 'unset;'
    f2Img.style = 'unset;'
    f3Img.style = 'unset;'
    f4Img.style = 'unset;'
}

function f2 () {
    iconPosition.style = 'top: 50%;'
    F1.style = 'color: #666666;'
    F2.style = 'color: white;'
    F3.style = 'unset;'
    F4.style = 'unset;'

    f1Img.style = 'opacity: 0;'
    f2Img.style = 'top: 50%; left: 50%; filter: blur(0px); opacity: 1;'
    f3Img.style = 'unset;'
    f4Img.style = 'unset;'
}

function f3() {
    iconPosition.style = 'top: 97%;'
    F1.style = 'color: #666666;'
    F2.style = 'unset;'
    F3.style = 'color: white;'
    F4.style = 'unset;'

    f1Img.style = 'opacity: 0;'
    f2Img.style = 'opacity: 0;'
    f3Img.style = 'top: 50%; left: 50%; filter: blur(0px); opacity: 1;'
    f4Img.style = 'unset;'
}

function f4() {
    iconPosition.style = 'top: 50%;'
    F1.style = 'color: #666666;'
    F2.style = 'unset;'
    F3.style = 'unset;'
    F4.style = 'color: white;'

    f1Img.style = 'opacity: 0;'
    f2Img.style = 'opacity: 0;'
    f3Img.style = 'opacity: 0;'
    f4Img.style = 'top: 50%; left: 50%; filter: blur(0px); opacity: 1;'
}

function fBack() {
    iconPosition.style = 'unset'
    F1.style = 'unset;'
    F2.style = 'unset'
    F3.style = 'unset'
    F4.style = 'unset'

    f1Img.style = 'unset'
    f2Img.style = 'unset'
    f3Img.style = 'unset'
    f4Img.style = 'unset'
}