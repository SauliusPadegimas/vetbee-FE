/* eslint-disable no-param-reassign */
import { PetsService } from './App.js';
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

  static async deletePetCard(target) {
    target.parentElement.style.backgroundColor = 'coral';
    const succ = await PetsService.delete(target.dataset.id);
    return succ;
  }
}
