/* ---- NAVIGATION BAR FUNCTION ---- */
// toggles the nav menu's class to make it responsive when u click the button
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){ // normal state
      menuBtn.className += " responsive"; // make it responsive
    } else {
      menuBtn.className = "nav-menu"; // back to normal state
    }
}

/* ---- ADD SHADOW ON NAV BAR WHILE SCROLLING ---- */
// adds a shadow to header when u scroll, yubs
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"; // slight shadow
        navHeader.style.height = "70px"; // shrink height a bit
        navHeader.style.lineHeight = "70px"; // match height
    } else {
        navHeader.style.boxShadow = "none"; // remove shadow
        navHeader.style.height = "90px"; // back to original height
        navHeader.style.lineHeight = "90px"; // reset line height
    }
}

/* ---- TYPING EFFECT ---- */
// this does the cool typewriter effect u see on the page
var typingEffect = new Typed(".typedText", {
    strings: ["Striving", "Impacting", "Perfecting"], // words that rotate
    loop: true, // it repeats forever... or till the page is closed
    typeSpeed: 100, // speed of typing
    backSpeed: 80, // speed of erasing
    backDelay: 2000 // pause before deleting
});

/* ---- SCROLL REVEAL ANIMATION ---- */
// animations that show up when scrolling down
const sr = ScrollReveal({
    origin: 'top', // reveals stuff from the top
    distance: '80px', // how far it "moves" while appearing
    duration: 2000, // how long the animation takes
    reset: true // repeats the animation when u scroll again
});

// reveal elements in the home section
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

// reveal project boxes with a gap between each
sr.reveal('.project-box', { interval: 200 });

// top headers, coz why not
sr.reveal('.top-header', {});

/* ---- LEFT & RIGHT SCROLL REVEAL ---- */
// about and contact sections slide in from left
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

// skills and form stuff slides in from right
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ---- CHANGE ACTIVE LINK ---- */
// highlights the current section in the navbar
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50, // offset for better accuracy
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);
