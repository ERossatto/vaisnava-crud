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
    registerList: false,
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
  }

  itemToDelete = {
    index: undefined,
    item: undefined,
  };

  constructor() { }

  ngOnInit(): void {
  }

  createRegister () {
    this.dataBase.push({...this.devotee});
    this.toggle.createRegister = false;
    this.toggle.registerConfirmation = true;

    // resetar as variaveis
  }

  updateRegister() {
  }

  confirmDelete( item, index ) {
    this.toggle.deleteConfirmation = true;
    
    this.itemToDelete.item = item;
    this.itemToDelete.index = index;
  }

  deleteRegister( index ) {
    this.dataBase.splice( index, 1 );
    this.toggle.deleteConfirmation = false;
  }
}
