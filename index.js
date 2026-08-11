const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
        console.log('Hamburger clicked');
        console.log('Before - hamMenu active:', hamMenu.classList.contains('active'));
        console.log('Before - menu active:', offScreenMenu.classList.contains('active'));
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        console.log('After - hamMenu active:', hamMenu.classList.contains('active'));
        console.log('After - menu active:', offScreenMenu.classList.contains('active'));
    });
} else {
    console.error('Elements not found - hamMenu:', hamMenu, 'offScreenMenu:', offScreenMenu);
}



const scrollElements = document.querySelectorAll('.animate-on-scroll');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, {
    threshold: 0.15
});

scrollElements.forEach(el => {
    const delay = el.dataset.delay || '0s';
    el.style.setProperty('--delay', delay);
    scrollObserver.observe(el);
});
