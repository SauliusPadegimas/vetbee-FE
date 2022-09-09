import { PetsService } from './modules/class/App.js';
import UI from './modules/class/UI.js';

const outputSection = document.getElementById('output');

flow();

// listens to clicks on output section buttons
outputSection.addEventListener('click', async (event) => {
  const button = event.target;
  // DELETE button
  if (button.className === 'deleteBtn') {
    if (UI.deletePetCard(button)) {
      setTimeout(flow, 1000);
    }
  }
  // VIEW LOG button
  if (button.className === 'viewBtn') {
    window.location = `./logs.html?petId=${button.dataset.id}`;
  }
});

// function on page load
async function flow() {
  const allPets = await PetsService.getPets();
  console.log('allPets ===', allPets);
  outputSection.innerHTML = '';
  UI.showPetsCards(allPets, outputSection);
}
