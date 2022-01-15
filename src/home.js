import './styles.css';
import grilledImage from '../images/Grilled.png';

function home() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('homeContainer');

  const menu = document.createElement('div');

  const restaurantName = document.createElement('h3');
  restaurantName.classList.add('restaurantName');
  restaurantName.textContent = 'Stakehouse';

  menu.appendChild(restaurantName);

  const heroHome = document.createElement('div');
  heroHome.classList.add('heroHome');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleContainer');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'A Premium And Authentic Steakhouse';

  const button = document.createElement('button');
  button.classList.add('cta');
  button.textContent = 'Order now';

  titleContainer.appendChild(title);
  titleContainer.appendChild(button);

  heroHome.appendChild(titleContainer);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');
  const image = document.createElement('img');
  image.classList.add('img');
  image.src = grilledImage;

  imageContainer.appendChild(image);
  heroHome.appendChild(imageContainer);

  homeContainer.appendChild(menu);
  homeContainer.appendChild(heroHome);
  return homeContainer;
}
export { home };
