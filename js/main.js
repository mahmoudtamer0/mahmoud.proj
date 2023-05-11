let skills = document.querySelector('.skills')
let spans = document.querySelectorAll('.skills span')

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 200) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    } else if (window.scrollY > 11570.400390625) {
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
    if (window.scrollY >= secs.offsetTop) {
        if (!started) {
            nums.forEach((number) => startcount(number))
        }
        started = true;
    }
};
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
let secs = document.querySelector('.stats')
let started = false

function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 200 / goal)
}
let artic_btn = document.getElementById('artic_btn')
let gallery_btn = document.getElementById('gallery_btn')
let feat_btn = document.getElementById('feat_btn')
let skills_btn = document.getElementById('skills_btn')
let articles = document.querySelector('.articles')
let gallery = document.querySelector('.gallery')
let features = document.querySelector('.features')
let testi = document.querySelector('.testi')
let team = document.querySelector('.team')
let works = document.querySelector('.works')
let arrow_btn = document.querySelector('.arrow-btn i')
arrow_btn.style.display = ('none');
arrow_btn.onclick = function () {
    scroll({
        top: 0,
    })
}

window.onscroll = function () {
    if (scrollY > 400) {
        arrow_btn.style.display = ('block')
    } else {
        arrow_btn.style.display = ('none')
    }
}