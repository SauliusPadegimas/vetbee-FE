import UI from './modules/class/UI.js';

const form = document.getElementById('popupLogs');
const addBtn = document.getElementById('addLogBtn');
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
  if (await UI.addLog(petId, form)) {
    window.location.reload();
  }
});
