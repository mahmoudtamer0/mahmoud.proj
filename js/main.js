let skills = document.querySelector('.skills')
let spans = document.querySelectorAll('.the span')
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

let countdat = new Date("Dec 31, 2023 12:59:59").getTime()
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countdat - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);
    document.getElementById('days').innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000)

let nums = document.querySelectorAll('.stats .number')
let secSkills = document.querySelector('.skills')
let started = false
window.onscroll = function () {
    if (window.scrollY >= secSkills.offsetTop) {
        if (!started) {
            nums.forEach((number) => startcount(number))
        }
        started = true;
    }
}

function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 200 / goal)
}