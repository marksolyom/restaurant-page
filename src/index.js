import { homeLoad } from './HomeLoad';
import { menuLoad } from './MenuLoad';
import { contactLoad } from './ContactLoad';

const baseLoad = (() => {
    const content = document.querySelector('#content');
    const nav = document.createElement('div');
    nav.classList.add('navigation');
    content.appendChild(nav);

    const navHome = document.createElement('div');
    navHome.textContent = 'Home';
    navHome.classList.add('navigation-item');
    nav.appendChild(navHome);
    navHome.addEventListener('click', homeLoad);

    const navMenu = document.createElement('div');
    navMenu.textContent = 'Menu';
    navMenu.classList.add('navigation-item');
    nav.appendChild(navMenu);
    navMenu.addEventListener('click', menuLoad);

    const navContact = document.createElement('div');
    navContact.textContent = 'Contact';
    navContact.classList.add('navigation-item');
    nav.appendChild(navContact);
    navContact.addEventListener('click', contactLoad);

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);
    homeLoad();
})();