import { menu } from './menu';
import './styles.css';
import grilledImage from '../images/Grilled.png';

function home() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('homeContainer');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleContainer');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML =
    "A premium and authentic  <span class='colorWord'>Steakhouse</span>";
  const button = document.createElement('button');
  button.classList.add('cta');
  button.textContent = 'Order now';

  button.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(menu());
  });

  titleContainer.appendChild(title);
  titleContainer.appendChild(button);

  homeContainer.appendChild(titleContainer);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');
  const image = document.createElement('img');
  image.classList.add('img');
  image.src = grilledImage;

  imageContainer.appendChild(image);
  homeContainer.appendChild(imageContainer);

  return homeContainer;
}
export { home };
