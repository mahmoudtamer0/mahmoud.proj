let skills = document.querySelector('.skills')
let spans = document.querySelectorAll('.skills span')

// window.onscroll = function {
//     if (window.scrollY >= skills.offsetTop - 200) {
//         spans.forEach((span) => {
//             span.style.width = span.dataset.width
//         })
//     } else if (window.scrollY > 11570.400390625) {
//         spans.forEach((span) => {
//             span.style.width = 0;
//         })
//     }
//     if (window.scrollY >= secs.offsetTop) {
//         if (!started) {
//             nums.forEach((number) => startcount(number))
//         }
//         started = true;
//     }
// };
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

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 200 && window.scrollY < 7110.39990234375) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    } else if (window.scrollY > 7110.39990234375) {
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

    if (window.scrollY >= 745.5999755859375 && window.scrollY < 1792) {
        artic_btn.classList.add('activ')
    } else if (window.scrollY >= 2956 && window.scrollY < 3869.600097656255) {
        feat_btn.classList.add('activ')
    } else if (window.scrollY >= gallery.offsetTop && window.scrollY < 2855.199951171875) {
        gallery_btn.classList.add('activ')
    } else if (window.scrollY >= skills.offsetTop - 200 && window.scrollY < 7110.39990234375) {
        skills_btn.classList.add('activ')
    } else {
        artic_btn.classList.remove('activ')
        feat_btn.classList.remove('activ')
        gallery_btn.classList.remove('activ')
        skills_btn.classList.remove('activ')
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
}