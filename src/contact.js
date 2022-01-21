import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function contact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactContainer');

  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('contactTitle');
  contactTitle.textContent = 'Contact us!';

  const phoneNumber = document.createElement('p');
  phoneNumber.innerHTML =
    '<i class="fas fa-phone-alt"></i> ' + '+57-311-450-9301';

  const mail = document.createElement('p');
  mail.innerHTML =
    '<i class="far fa-envelope"></i> ' + 'fakE-mail@steakhouse.com';

  const place = document.createElement('P');
  place.innerHTML =
    '<i class="fas fa-map-marker-alt"></i> ' +
    '1194 Dean St, Brooklyn, NY 11216, EE. UU. ';

  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(phoneNumber);
  contactContainer.appendChild(mail);
  contactContainer.appendChild(place);

  return contactContainer;
}
export { contact };
