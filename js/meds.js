import { MedsService } from './modules/class/App.js';
import UI from './modules/class/UI.js';

const outputSection = document.getElementById('outputTable');

flow();

// function on page load
async function flow() {
  const allPets = await MedsService.getMeds();
  // outputSection.innerHTML = '';
  UI.showMedsCards(allPets, outputSection);
}
