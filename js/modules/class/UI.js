/* eslint-disable no-param-reassign */
import { LogsService, PetsService, PressService } from './App.js';
import Card from './Html.js';

export default class UI {
  static showPetsCards(arr, dest) {
    arr.forEach((pet) => {
      const card = new Card(pet);
      dest.append(card.createPet());
    });
  }

  static showMedsCards(arr, dest) {
    arr.forEach((med) => {
      const card = new Card(med);
      dest.append(card.createMed());
    });
  }

  static showPresCards(arr, dest) {
    let name = '';
    arr.forEach((pres) => {
      const card = new Card(pres);
      dest.append(card.createPres());
      name = pres.client;
    });
    return name;
  }

  static showLogs(arr, dest) {
    let name = '';
    arr.forEach((log) => {
      const card = new Card(log);
      dest.append(card.createLog());
      name = log.name;
    });
    return name;
  }

  static async deletePetCard(target) {
    target.parentElement.style.backgroundColor = 'coral';
    const succ = await PetsService.delete(target.dataset.id);
    return succ;
  }

  static async addPet(form) {
    const dob = form.dateIn.value;
    const name = form.nameIn.value;
    const email = form.emailIn.value;
    const petObj = {
      name,
      dob,
      email,
    };
    const succ = await PetsService.create(petObj);
    console.log('succ ===', succ);
    return succ;
  }

  static async addLog(petId, form) {
    const description = form.descriptionIn.value;
    const status = form.statusIn.value;
    const petObj = {
      petId,
      description,
      status,
    };
    const succ = await LogsService.create(petObj);
    console.log('succ ===', succ);
    return succ;
  }

  static async addPres(form, petId) {
    const medication = form.medicationIn.value;
    console.log('medication ===', medication);
    const comment = form.commentIn.value;
    console.log('comment ===', comment);
    const presObj = {
      medication,
      comment,
    };
    const succ = await PressService.create(petId, presObj);
    console.log('succ ===', succ);
    return succ;
  }
}
