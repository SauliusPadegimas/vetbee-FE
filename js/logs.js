import { LogsService } from './modules/class/App.js';

flow();

async function flow() {
  const urlParams = new URLSearchParams(window.location.search);
  const petId = urlParams.get('petId');
  const allLogs = await LogsService.getLogs(petId);
  console.log('allLogs ===', allLogs);
}
