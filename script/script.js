window.addEventListener("resize", resizeEvent)

document.addEventListener("DOMContentLoaded", function(event) {
    let scrollPosition = localStorage.getItem('scrollPostion')
    if (scrollPosition) window.scrollTo(0, scrollPosition)
})

window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.scrollY)
}


let dropdown_flag = true

function resizeEvent() {
    let width = window.innerWidth

    if (width >= 650) {
        dropdown_flag = true
        document.getElementById('dropdown').style.display = 'none'
    }
}

function dropdown() {
    if (dropdown_flag) {
        document.getElementById('dropdown').style.display = 'flex'
        dropdown_flag = !dropdown_flag
    } else {
        document.getElementById('dropdown').style.display = 'none'
        dropdown_flag = !dropdown_flag
    }
}