import UI from './modules/class/UI.js';

const form = document.getElementById('popup');
const addBtn = document.getElementById('addBtn');
const closeBtn = document.getElementById('closeX');

addBtn.addEventListener('click', () => {
  form.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  form.style.display = 'none';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (await UI.addPet(form)) {
    window.location.reload();
  }
});
