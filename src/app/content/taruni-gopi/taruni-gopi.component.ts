import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taruni-gopi',
  templateUrl: './taruni-gopi.component.html',
  styleUrls: ['./taruni-gopi.component.scss']
})
export class TaruniGopiComponent implements OnInit {

  dataBase = [];

  toggleOpenCreateRegister = false;
  toggleOpenShowRegisters = false;
  toggleOpenRegisterConfirmation = false;
  toggleOpenDeleteConfirmation = false;

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

  constructor() { }

  ngOnInit(): void {
  }

  createRegister () {
    this.toggleOpenCreateRegister = false;
    this.toggleOpenRegisterConfirmation = true;

    this.dataBase.push({...this.devotee});
  }

  updateRegister() {
  }

  deleteRegister( index ) {
    this.toggleOpenDeleteConfirmation = false;

    this.dataBase.splice( index, 1 );
  }
}
