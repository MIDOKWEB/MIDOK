//const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener("resize", function() {
    if (window.innerWidth >= 650) {
        dropdown_flag = true
        dropdown_element.style.display = 'none'
    }
})

document.addEventListener("DOMContentLoaded", function() {
    let scrollPosition = localStorage.getItem('scrollPostion')
    if (scrollPosition) window.scrollTo(0, scrollPosition)
})

window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.scrollY)
}

const dropdown_element = document.getElementById('dropdown')
let dropdown_flag = true

function dropdown() {
    if (dropdown_flag) {
        dropdown_element.style.display = 'flex'
        dropdown_flag = !dropdown_flag
    } else {
        dropdown_element.style.display = 'none'
        dropdown_flag = !dropdown_flag
    }
}

const scrollButton = document.querySelector('.topBtn')
window.addEventListener('scroll', function() {
    const anchor = document.getElementById('section2')
    let anchor_element = anchor.getBoundingClientRect()
    if (window.innerWidth > 650) {
        scrollButton.classList.toggle("active", anchor_element.top < 5)
    } else {
        scrollButton.classList.toggle("active", anchor_element.top < 800)
    }
})

function scrollToTop() {
    window.scrollTo(0, 0)
}