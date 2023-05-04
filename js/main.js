let skills = document.querySelector('.skills')
let spans = document.querySelectorAll('.skills span')
window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 200) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    } else {
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
}