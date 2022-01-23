import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

export const content = document.querySelector('#content');
const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');
const subTitle = document.querySelector('.subTitle');
const tabLinks = document.querySelectorAll('.link');

content.appendChild(home());

subTitle.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(home());
});

homeTab.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(home());
});

menuTab.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menu());
});

contactTab.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contact());
});

const tabLinksArr = Array.from(tabLinks);

let activeLink;
tabLinksArr.some((link) =>
  link.classList.contains('active') ? (activeLink = link) : false
);

tabLinksArr.forEach((link) => {
  link.addEventListener('click', (e) => {
    activeLink.classList.remove('active');
    e.target.classList.add('active');
    activeLink = e.target;
  });
});
