let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin: 'top'});
sr.reveal('.hero-img', {delay:400, origin: 'right'});
sr.reveal('.hero-packimg', {delay:400, origin: 'right'});
sr.reveal('.hero-packs', {delay:400, origin: 'right'});
sr.reveal('.icons', {delay:600, origin: 'left'});
sr.reveal('.carousel-container', {delay:200, origin: 'left'});
sr.reveal('.changelog-container', {delay:200, origin: 'right'});
sr.reveal('.recognition-header', {delay:200, origin: 'left'});
sr.reveal('.recognition-text', {delay:300, origin: 'left'});