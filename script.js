// NAV HAM
function toggleNavHam() {
    document.querySelector('.nav-links-wrapper').classList.toggle('is-open');
}
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.nav-links-wrapper');
    const ham = document.querySelector('.header-nav-ham');

    if (!wrapper.contains(e.target) && !ham.contains(e.target)) {
        wrapper.classList.remove('is-open');
    }
});

// links menu navbar
function toggleMenu(button) {
const nav = button.closest('nav');
const item = button.closest('li');
const isExpanded = button.getAttribute('aria-expanded') === 'true';

// close other menus
nav.querySelectorAll('.nav-link-button[aria-haspopup="true"]').forEach(btn => {
    if (btn !== button) {
    btn.setAttribute('aria-expanded', 'false');
    btn.closest('li').classList.remove('is-open');
    }
});

// toggle current menu
button.setAttribute('aria-expanded', String(!isExpanded));
item.classList.toggle('is-open', !isExpanded);
}

// remove keyboard-opened menu when another item is hovered
document.querySelectorAll('.header-nav-links > li').forEach(item => {
item.addEventListener('mouseenter', () => {
    const nav = item.closest('nav');

    nav.querySelectorAll('.nav-link-button[aria-haspopup="true"]').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    btn.closest('li').classList.remove('is-open');
    });
});
});

// close menus when focus leaves nav
document.addEventListener('focusin', (event) => {
const nav = event.target.closest('nav[aria-label="Primary navigation"]');
if (!nav) return;

nav.querySelectorAll('.nav-link-button[aria-haspopup="true"]').forEach(button => {
    const item = button.closest('li');
    const menu = item.querySelector('ul');

    if (!button.contains(event.target) && !menu.contains(event.target)) {
    button.setAttribute('aria-expanded', 'false');
    item.classList.remove('is-open');
    }
});
});

// close on Escape
document.addEventListener('keydown', (event) => {
if (event.key !== 'Escape') return;

const nav = document.querySelector('nav[aria-label="Primary navigation"]');
if (!nav) return;

const openButton = nav.querySelector('.nav-link-button[aria-expanded="true"]');
if (openButton) {
    openButton.setAttribute('aria-expanded', 'false');
    openButton.closest('li').classList.remove('is-open');
    openButton.focus();
}
});


// OVERLAY
// adding event listener to close dialog if clicked outside
const dialog = document.getElementById("features-overlay");
dialog.addEventListener("click", (event) => {
const rect = dialog.getBoundingClientRect();

const clickedInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.bottom &&
    rect.left <= event.clientX &&
    event.clientX <= rect.right;

if (!clickedInDialog) {
    dialog.close();
}
});
// open dialog
function onFeaturesOverlay() {
document.getElementById("features-overlay").showModal();
}
// close dialog
function offFeaturesOverlay() {
document.getElementById("features-overlay").close();
}

// calculate max height of the footer-nav:
function setFooterNavHeight () {
    if (window.innerWidth > 1120) {
    const list = document.querySelector('.footer-nav-list');
    const maxHeight = Math.max(...[...list.children].map(el => el.offsetHeight));
    list.style.height = maxHeight + 'px';
    }
}

window.addEventListener('load', () => {
setFooterNavHeight();
})

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
    setFooterNavHeight()
    }, 300);
});