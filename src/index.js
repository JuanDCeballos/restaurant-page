import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

const content = document.querySelector('#content');
const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

content.appendChild(home());

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
