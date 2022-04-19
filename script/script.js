window.addEventListener("resize", resizeEvent)

document.addEventListener("DOMContentLoaded", function(event) {
    let scrollPosition = localStorage.getItem('scrollPostion')
    if (scrollPosition) window.scrollTo(0, scrollPosition)
})

const delay = ms => new Promise(res => setTimeout(res, ms));

window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.scrollY)
}

const dropdown_element = document.getElementById('dropdown')
let dropdown_flag = true

function resizeEvent() {
    let width = window.innerWidth

    if (width >= 650) {
        dropdown_flag = true
        dropdown_element.style.display = 'none'
    }
}

function dropdown() {
    if (dropdown_flag) {
        dropdown_element.style.display = 'flex'
        dropdown_flag = !dropdown_flag
    } else {
        dropdown_element.style.display = 'none'
        dropdown_flag = !dropdown_flag
    }
}

window.addEventListener('scroll', scrollEvent)

const topbtn = document.getElementById('topBtn')

let fade_flag = 0
async function scrollEvent() {
    let current_scroll_position = window.scrollY
    const anchor = document.getElementById('section2')
    let anchor_element = anchor.getBoundingClientRect()

    if (anchor_element.top < 5) {
        topbtn.style.display = 'flex'
        if (fade_flag == 0) {
            for (let i = 0; i < 50; i++) {
                await delay(5)
                topbtn.style.opacity = i * 0.02
            }
        }
        fade_flag = 1
    } else {
        if (fade_flag == 1) {
            for (let j = 50; j > 0; j--) {
                await delay(5)
                topbtn.style.opacity = j * 0.02
            }
        }
        topbtn.style.display = 'none'
        fade_flag = 0
    }
}

function scrollToTop() {
    window.scrollTo(0, 0)
}