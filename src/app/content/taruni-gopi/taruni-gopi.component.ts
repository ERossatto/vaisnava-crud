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

  errorMsg = {
    hasSpiritualName: '',
    hasSocialName: '',
    hasCity: '',
    hasState: '',
    hasCountry: '',
    hasPhone: '',
    hasEmail: '',
    hasDateOfBirth: '',
    hasDateOfInitiation: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  checkError() {
    const hasSpiritualName = !!this.devotee.spiritualName;
    const hasSocialName = !!this.devotee.socialName;
    const hasCity = !!this.devotee.adress.city;
    const hasState = !!this.devotee.adress.state;
    const hasCountry = !!this.devotee.adress.country;
    const hasPhone = !!this.devotee.contact.phone;
    const hasEmail = !!this.devotee.contact.email;
    const hasDateOfBirth = !!this.devotee.dateOfBirth;
    const hasDateOfInitiation = !!this.devotee.dateOfInitiation;

    if (hasSpiritualName == false) this.errorMsg.hasSpiritualName = '* (required)';
    else this.errorMsg.hasSpiritualName = '';

    if (hasSocialName == false) this.errorMsg.hasSocialName = '* (required)';
    else this.errorMsg.hasSocialName = '';

    if (hasCity == false) this.errorMsg.hasCity = '* (required)';
    else this.errorMsg.hasCity = '';

    if (hasState == false) this.errorMsg.hasState = '* (required)';
    else this.errorMsg.hasState = '';

    if (hasCountry == false) this.errorMsg.hasCountry = '* (required)';
    else this.errorMsg.hasCountry = '';

    if (hasPhone == false) this.errorMsg.hasPhone = '* (required)';
    else this.errorMsg.hasPhone = '';

    if (hasEmail == false) this.errorMsg.hasEmail = '* (required)';
    else this.errorMsg.hasEmail = '';

    if (hasDateOfBirth == false) this.errorMsg.hasDateOfBirth = '* (required)';
    else this.errorMsg.hasDateOfBirth = '';

    if (hasDateOfInitiation == false) this.errorMsg.hasDateOfInitiation = '* (required)';
    else this.errorMsg.hasDateOfInitiation = '';

    const out = (
      hasSpiritualName &&
      hasSocialName &&
      hasCity &&
      hasState &&
      hasCountry &&
      hasPhone &&
      hasEmail &&
      hasDateOfBirth &&
      hasDateOfInitiation
    );

    return !out;
  }

  createRegister( devotee ) {
    if (this.checkError()) return;

    const parsedDevotee = JSON.parse(JSON.stringify(devotee));

    this.dataBase.push(parsedDevotee);

    this.toggle.createRegister = false;
    this.toggle.registerConfirmation = true;

    this.devoteeReset();
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

  openUpdatePopup(item, index) {
    this.toggle.updateRegister = true;

    this.itemToUpdate.item = item;
    this.itemToUpdate.index = index;
  }

  updateRegister() {
    this.dataBase[this.itemToUpdate.index] = this.itemToUpdate.item;

    this.toggle.updateRegister = false;
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
