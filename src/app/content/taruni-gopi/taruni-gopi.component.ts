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
  };

  constructor() { }

  ngOnInit(): void {
  }

  //devoteeReset() {
  //  this.devotee.spiritualName = undefined;
  //  this.devotee.socialName = undefined;
  //  this.devotee.adress.city = undefined;
  //  this.devotee.adress.state = undefined;
  //  this.devotee.adress.country = undefined;
  //  this.devotee.contact.phone = undefined;
  //  this.devotee.contact.email = undefined;
  //  this.devotee.dateOfBirth = undefined;
  //  this.devotee.dateOfInitiation = undefined;
  //}

  createRegister() {
    this.dataBase.push({...this.devotee});
    this.toggle.createRegister = false;
    this.toggle.registerConfirmation = true;

    //this.devoteeReset()   
  }

  updateRegister() {
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
