import { LogsService, PressService } from './modules/class/App.js';
import UI from './modules/class/UI.js';
const outputPres = document.getElementById('output');
const outputLogs = document.getElementById('outputLogs');
const titleEl = document.getElementById('title');

flow();

async function flow() {
  const urlParams = new URLSearchParams(window.location.search);
  const petId = urlParams.get('petId');
  const allLogs = await LogsService.getLogs(petId);
  console.log('allLogs ===', allLogs);
  const allPres = await PressService.getPres(petId);
  outputPres.innerHTML = '';
  if (allPres.length) {
    const client = UI.showPresCards(allPres, outputPres);
    titleEl.textContent = `${client} Health Card`;
  } else {
    outputPres.innerHTML = 'no prescriptions';
  }
  if (allLogs.length) {
    const client = UI.showLogs(allLogs, outputLogs);
    titleEl.textContent = `${client} Health Card`;
  } else outputLogs.textContent = 'no logs';
}
