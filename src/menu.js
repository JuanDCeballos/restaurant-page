import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './styles.css';

function menu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');

  // FIRST CARD
  const card = document.createElement('div');
  card.classList.add('card');

  // const pe = document.createElement('i');
  // pe.innerHTML = '<i class="fas fa-user"></i>';
  // card.appendChild(pe);

  const cardTitleContainer = document.createElement('div');
  cardTitleContainer.classList.add('cardTitleContainer');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('cardTitleText');
  cardTitle.textContent = 'Grilled potatoes';
  cardTitleContainer.appendChild(cardTitle);

  const cardDescriptionContainer = document.createElement('div');
  cardDescriptionContainer.classList.add('cardDescriptionContainer');

  const cardDescription = document.createElement('p');
  cardDescription.textContent = 'Some description here';
  cardDescriptionContainer.appendChild(cardDescription);

  const cardButtonContainer = document.createElement('div');
  cardButtonContainer.classList.add('cardButtonContainer');

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('price');
  cardPrice.textContent = '$ 8';

  cardButtonContainer.appendChild(cardPrice);

  const cardButton = document.createElement('button');
  cardButton.classList.add('cta', 'cta-card');
  cardButton.textContent = 'Order now';
  cardButtonContainer.appendChild(cardButton);

  card.appendChild(cardTitleContainer);
  card.appendChild(cardDescriptionContainer);
  card.appendChild(cardButtonContainer);

  menuContainer.appendChild(card);
  // END FIRST CARD

  // SECOND CARD
  const card1 = document.createElement('div');
  card1.classList.add('card');

  const card1TitleContainer = document.createElement('div');
  card1TitleContainer.classList.add('cardTitleContainer');

  const card1Title = document.createElement('h3');
  card1Title.classList.add('cardTitleText');
  card1Title.textContent = 'Grilled chicken wings';
  card1TitleContainer.appendChild(card1Title);

  const card1DescriptionContainer = document.createElement('div');
  card1DescriptionContainer.classList.add('cardDescriptionContainer');

  const card1Description = document.createElement('p');
  card1Description.textContent = 'Some description here';
  card1DescriptionContainer.appendChild(card1Description);

  const card1ButtonContainer = document.createElement('div');
  card1ButtonContainer.classList.add('cardButtonContainer');

  const card1Price = document.createElement('p');
  card1Price.classList.add('price');
  card1Price.textContent = '$ 8';

  card1ButtonContainer.appendChild(card1Price);

  const card1Button = document.createElement('button');
  card1Button.classList.add('cta', 'cta-card');
  card1Button.textContent = 'Order now';
  card1ButtonContainer.appendChild(card1Button);

  card1.appendChild(card1TitleContainer);
  card1.appendChild(card1DescriptionContainer);
  card1.appendChild(card1ButtonContainer);

  menuContainer.appendChild(card1);
  // END SECOND CARD

  // THIRD CARD
  const card2 = document.createElement('div');
  card2.classList.add('card');

  const card2TitleContainer = document.createElement('div');
  card2TitleContainer.classList.add('cardTitleContainer');

  const card2Title = document.createElement('h3');
  card2Title.classList.add('cardTitleText');
  card2Title.textContent = 'Grilled corn';
  card2TitleContainer.appendChild(card2Title);

  const card2DescriptionContainer = document.createElement('div');
  card2DescriptionContainer.classList.add('cardDescriptionContainer');

  const card2Description = document.createElement('p');
  card2Description.textContent = 'Some description here';
  card2DescriptionContainer.appendChild(card2Description);

  const card2ButtonContainer = document.createElement('div');
  card2ButtonContainer.classList.add('cardButtonContainer');

  const card2Price = document.createElement('p');
  card2Price.classList.add('price');
  card2Price.textContent = '$ 8';

  card2ButtonContainer.appendChild(card2Price);

  const card2Button = document.createElement('button');
  card2Button.classList.add('cta', 'cta-card');
  card2Button.textContent = 'Order now';
  card2ButtonContainer.appendChild(card2Button);

  card2.appendChild(card2TitleContainer);
  card2.appendChild(card2DescriptionContainer);
  card2.appendChild(card2ButtonContainer);

  menuContainer.appendChild(card2);
  // END THIRD CARD

  // FOURTH CARD
  const card3 = document.createElement('div');
  card3.classList.add('card');

  const card3TitleContainer = document.createElement('div');
  card3TitleContainer.classList.add('cardTitleContainer');

  const card3Title = document.createElement('h3');
  card3Title.classList.add('cardTitleText');
  card3Title.textContent = 'Grilled burger';
  card3TitleContainer.appendChild(card3Title);

  const card3DescriptionContainer = document.createElement('div');
  card3DescriptionContainer.classList.add('cardDescriptionContainer');

  const card3Description = document.createElement('p');
  card3Description.textContent = 'Some description here';
  card3DescriptionContainer.appendChild(card3Description);

  const card3ButtonContainer = document.createElement('div');
  card3ButtonContainer.classList.add('cardButtonContainer');

  const card3Price = document.createElement('p');
  card3Price.classList.add('price');
  card3Price.textContent = '$ 8';

  card3ButtonContainer.appendChild(card3Price);

  const card3Button = document.createElement('button');
  card3Button.classList.add('cta', 'cta-card');
  card3Button.textContent = 'Order now';
  card3ButtonContainer.appendChild(card3Button);

  card3.appendChild(card3TitleContainer);
  card3.appendChild(card3DescriptionContainer);
  card3.appendChild(card3ButtonContainer);

  menuContainer.appendChild(card3);
  // END FOURTH CARD

  // FIFTH CARD
  const card4 = document.createElement('div');
  card4.classList.add('card');

  const card4TitleContainer = document.createElement('div');
  card4TitleContainer.classList.add('cardTitleContainer');

  const card4Title = document.createElement('h3');
  card4Title.classList.add('cardTitleText');
  card4Title.textContent = 'Grilled pizza';
  card4TitleContainer.appendChild(card4Title);

  const card4DescriptionContainer = document.createElement('div');
  card4DescriptionContainer.classList.add('cardDescriptionContainer');

  const card4Description = document.createElement('p');
  card4Description.textContent = 'Some description here';
  card4DescriptionContainer.appendChild(card4Description);

  const card4ButtonContainer = document.createElement('div');
  card4ButtonContainer.classList.add('cardButtonContainer');

  const card4Price = document.createElement('p');
  card4Price.classList.add('price');
  card4Price.textContent = '$ 8';

  card4ButtonContainer.appendChild(card4Price);

  const card4Button = document.createElement('button');
  card4Button.classList.add('cta', 'cta-card');
  card4Button.textContent = 'Order now';
  card4ButtonContainer.appendChild(card4Button);

  card4.appendChild(card4TitleContainer);
  card4.appendChild(card4DescriptionContainer);
  card4.appendChild(card4ButtonContainer);

  menuContainer.appendChild(card4);
  // END FIFTH CARD

  // SIXTH CARD
  const card5 = document.createElement('div');
  card5.classList.add('card');

  const card5TitleContainer = document.createElement('div');
  card5TitleContainer.classList.add('cardTitleContainer');

  const card5Title = document.createElement('h3');
  card5Title.classList.add('cardTitleText');
  card5Title.textContent = 'Grilled salmon';
  card5TitleContainer.appendChild(card5Title);

  const card5DescriptionContainer = document.createElement('div');
  card5DescriptionContainer.classList.add('cardDescriptionContainer');

  const card5Description = document.createElement('p');
  card5Description.textContent = 'Some description here';
  card5DescriptionContainer.appendChild(card5Description);

  const card5ButtonContainer = document.createElement('div');
  card5ButtonContainer.classList.add('cardButtonContainer');

  const card5Price = document.createElement('p');
  card5Price.classList.add('price');
  card5Price.textContent = '$ 8';

  card5ButtonContainer.appendChild(card5Price);

  const card5Button = document.createElement('button');
  card5Button.classList.add('cta', 'cta-card');
  card5Button.textContent = 'Order now';
  card5ButtonContainer.appendChild(card5Button);

  card5.appendChild(card5TitleContainer);
  card5.appendChild(card5DescriptionContainer);
  card5.appendChild(card5ButtonContainer);

  menuContainer.appendChild(card5);
  // END SIXTH CARD

  return menuContainer;
}
export { menu };
