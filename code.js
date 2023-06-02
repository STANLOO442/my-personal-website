/*=== toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    SpeechRecognitionResult.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*======= remove toggle icon navbar when clicked navbar link (scroll) =========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*=== scroll reveal ===*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*====== image slideer =====*/
let img = document.getElementById('imgs');

let slides = ['./images/photo2.jpg', './images/photo5.jpg', './images/photo1.jpg', './images/photo6.jpg', './images/photo3.jpg'];

let start = 0;

function slider() {
    if(start < slides.length) {
        start = start + 1;
    }
    else {
        start = 1;
    }
    img.innerHTML = "<img src="+slides[start-1]+">";
}
setInterval(slider,2000);