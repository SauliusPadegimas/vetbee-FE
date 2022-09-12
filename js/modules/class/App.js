/* eslint-disable comma-dangle */
/* eslint-disable max-classes-per-file */
class App {
  static baseUrl = 'http://localhost:3000/api/v1';

  static async getAll(url) {
    try {
      const resp = await fetch(`${App.baseUrl}${url}`);
      if (!resp.ok) {
        throw new Error(
          `fetch fail: ${resp.status} ${resp.statusText} trying to fetch ${resp.url}`
        );
      }
      const dataInJs = await resp.json();
      return dataInJs;
    } catch (error) {
      console.warn('klaida http ', error.message);
      console.warn('error.stack ', error.stack);
      return error;
    }
  }

  static async send(url, method = 'POST', data = []) {
    try {
      const resp = await fetch(`${App.baseUrl}${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const answer = await resp.json();
      console.log('answer from server ===', answer);
      if (!resp.ok) {
        throw new Error(
          `fetch fail: ${resp.status} ${resp.statusText} trying to fetch ${resp.url}`
        );
      }
      return true;
    } catch (error) {
      console.warn('klaida http ', error.message);
      console.warn('error.stack ', error.stack);
      return false;
    }
  }
}

export class PetsService extends App {
  static getPets() {
    return App.getAll('/pets');
  }

  static delete(id) {
    return App.send(`/pets/${id}`, 'DELETE');
  }

  static create(newPetObj) {
    return App.send('/pets', 'POST', newPetObj);
  }
}
export class MedsService extends App {
  static getMeds() {
    return App.getAll('/medications');
  }
}

export class LogsService extends App {
  static getLogs(id) {
    return App.getAll(`/logs/${id}`);
  }

  static delete(id) {
    return App.send(`/logs/${id}`, 'DELETE');
  }

  static create(newLogObj) {
    return App.send(`/logs`, 'POST', newLogObj);
  }
}
export class PressService extends App {
  static getPres(id) {
    return App.getAll(`/prescriptions/${id}`);
  }

  static delete(id) {
    return App.send(`/prescriptions/${id}`, 'DELETE');
  }

  static create(id, newPresObj) {
    return App.send(`/prescriptions/${id}`, 'POST', newPresObj);
  }
}
