export default class Card {
  constructor(obj) {
    this.obj = obj;
  }

  createPet() {
    // <div class="card">
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    // <h3>Levis</h3>
    const h3El = document.createElement('h3');
    h3El.textContent = this.obj.name;
    // <p>2001-12-25</p>
    const dateEl = document.createElement('p');
    const date = new Date(this.obj.dob);
    dateEl.textContent = date.toLocaleDateString();
    // <p>pertas@petras.lt</p>
    const emailEl = document.createElement('p');
    emailEl.textContent = this.obj.client_email;
    // <button>VIEW LOG</button>
    const btnView = document.createElement('button');
    btnView.textContent = 'VIEW LOG';
    btnView.className = 'viewBtn';
    btnView.dataset.id = this.obj.id;
    // <button>DELETE</button>
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'DELETE';
    btnDelete.className = 'deleteBtn';
    btnDelete.dataset.id = this.obj.id;
    // btnDelete.addEventListener('click', () => {
    //   deleteCard(this.pet.id);
    // });
    // </div>
    cardEl.append(h3El, dateEl, emailEl, btnView, btnDelete);
    return cardEl;
  }

  createMed() {
    const tableRow = document.createElement('tr');
    const column1 = document.createElement('td');
    column1.textContent = this.obj.id;
    const column2 = document.createElement('td');
    column2.textContent = this.obj.name;
    column2.className = 'w30';
    const column3 = document.createElement('td');
    column3.textContent = this.obj.description;
    tableRow.append(column1, column2, column3);
    return tableRow;
  }

  createLog() {
    const tableRow = document.createElement('tr');
    const column1 = document.createElement('td');
    column1.textContent = this.obj.description;
    const column2 = document.createElement('td');
    column2.textContent = this.obj.status;
    tableRow.append(column1, column2);
    return tableRow;
  }

  createPres() {
    // <div class="card">
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    // <h3>Levis</h3>
    const h3El = document.createElement('h3');
    h3El.textContent = this.obj.medication;
    // <p>2001-12-25</p>
    const dateEl = document.createElement('p');
    const date = new Date(this.obj.isued);
    dateEl.textContent = date.toLocaleDateString();
    // <p>pertas@petras.lt</p>
    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = this.obj.description;

    cardEl.append(h3El, dateEl, descriptionEl);
    return cardEl;
  }
}
