import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taruni-gopi',
  templateUrl: './taruni-gopi.component.html',
  styleUrls: ['./taruni-gopi.component.scss']
})
export class TaruniGopiComponent implements OnInit {

  dataBase = [];

  toggle = {
    createRegister: false,
    registerConfirmation: false,
    readRegister: false,
    updateRegister: false,
    updateConfirmation: false,
    deleteConfirmation: false,
  };

  devotee = {
    spiritualName: undefined,
    socialName: undefined,
    adress: {
      city: undefined,
      state: undefined,
      country: undefined,
    },
    contact: {
      phone: undefined,
      email: undefined,
    },
    dateOfBirth: undefined,
    dateOfInitiation: undefined,
  };

  itemToUpdate = {
    item: undefined,
    index: undefined,
  };

  itemToDelete = {
    index: undefined,
  };

  constructor() { }

  ngOnInit(): void {
  }

  devoteeReset() {
    this.devotee.spiritualName = undefined;
    this.devotee.socialName = undefined;
    this.devotee.adress.city = undefined;
    this.devotee.adress.state = undefined;
    this.devotee.adress.country = undefined;
    this.devotee.contact.phone = undefined;
    this.devotee.contact.email = undefined;
    this.devotee.dateOfBirth = undefined;
    this.devotee.dateOfInitiation = undefined;
  }

  createRegister( devotee ) {

    const parsedDevotee = JSON.parse(JSON.stringify(devotee));

    this.dataBase.push(parsedDevotee);

    this.toggle.registerConfirmation = true;

    this.devoteeReset();
  }

  openUpdatePopup(item, index) {
    this.toggle.updateRegister = true;

    this.itemToUpdate.item = item;
    this.itemToUpdate.index = index;
  }

  updateRegister() {
    this.dataBase[this.itemToUpdate.index] = this.itemToUpdate.item;

    this.toggle.updateConfirmation = true;
  }

  confirmDelete( index ) {
    this.toggle.deleteConfirmation = true;
    this.itemToDelete.index = index;
  }

  deleteRegister( index ) {
    this.dataBase.splice( index, 1 );
    this.toggle.deleteConfirmation = false;
  }
}
