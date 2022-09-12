import UI from './modules/class/UI.js';

const form = document.getElementById('popupPres');
const addBtn = document.getElementById('addPresBtn');
const closeBtn = form.querySelector('#closeX');
const urlParams = new URLSearchParams(window.location.search);
const petId = urlParams.get('petId');

addBtn.addEventListener('click', () => {
  form.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  form.style.display = 'none';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (await UI.addPres(form, petId)) {
    window.location.reload();
  }
});
