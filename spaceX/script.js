const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
 
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)


function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }

    console.log(scrollPos);

}
function countUp() {
counters.forEach((counter) => {
   counter.innerText = '0';

const updateCounter = () => {
    // get count target
    const target = +counter.getAttribute('data-target');
// get current counter value
const c = +counter.innerText;

// create an increment
const increment = target / 100;

// if counter is less than the target, add increment
if (c < target) {
    // round up and set counter value
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(updateCounter, 75);
} else {
    counter.innerText = target;
}
    
};
updateCounter();
});
}

countUp();

function reset() {
    counters.forEach((counter) => (counter.InnerHTML = 
    '0'));
}