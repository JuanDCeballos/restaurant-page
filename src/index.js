import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

export const content = document.querySelector('#content');
const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');
const subTitle = document.querySelector('.subTitle');
const tabLinks = document.querySelectorAll('.link');
const subTitleText = document.querySelector('.subTitle');

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

export const tabLinksArr = Array.from(tabLinks);

export let activeLink;

export function checkActiveLink(arr) {
  arr.some((link) =>
    link.classList.contains('active') ? (activeLink = link) : false
  );
}

tabLinksArr.forEach((link) => {
  link.addEventListener('click', (e) => {
    checkActiveLink(tabLinksArr);
    activeLink.classList.remove('active');
    e.target.classList.add('active');
    activeLink = e.target;
  });
});

subTitleText.addEventListener('click', () => {
  activeLink.classList.remove('active');
  activeLink = tabLinksArr[0].classList.add('active');
});
