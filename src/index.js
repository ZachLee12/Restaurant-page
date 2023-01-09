import loadHomePage from "./home.js";
import loadMenu from "./menu.js";
import loadAboutUs from "./about.js";
import BackgroundImage from './assets/images/background.jpg'
import './style.css';
import './reset.css';

document.body.style.backgroundImage = `url(${BackgroundImage})`;

//IIFE
(function setFavicons(favicon) {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);
})('./assets/images/favicon.png')

function setNavIndicator(navElement) {
    navElement.style.borderBottom = '2px solid white'
}
function removeNavIndicators(...args) {
    args.forEach((element) => {
        element.style.borderBottom = 'none'
    })
}

const homepageNav = document.querySelector('.homepage')
const menuNav = document.querySelector('.menu')
const aboutUsNav = document.querySelector('.about-us')

homepageNav.addEventListener('click', () => {
    loadHomePage();
    setNavIndicator(homepageNav)
    removeNavIndicators(menuNav, aboutUsNav)
});

menuNav.addEventListener('click', () => {
    loadMenu();
    setNavIndicator(menuNav)
    removeNavIndicators(homepageNav, aboutUsNav)
})

aboutUsNav.addEventListener('click', () => {
    loadAboutUs();
    setNavIndicator(aboutUsNav)
    removeNavIndicators(menuNav, homepageNav)
})

const initializeWebsite = (() => {
    loadHomePage();
    setNavIndicator(homepageNav)
    // loadMenu();
    // loadAboutUs();
})();