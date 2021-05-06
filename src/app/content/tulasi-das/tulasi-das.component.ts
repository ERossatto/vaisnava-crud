import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tulasi-das',
  templateUrl: './tulasi-das.component.html',
  styleUrls: ['./tulasi-das.component.scss']
})
export class TulasiDasComponent implements OnInit {

  dataBase = [];

  toggle = {
    create: false,
    update: false,
    read: false,
  };

  doctor = {
    name: undefined,
    crm: undefined,
    specialization: undefined,
    email: undefined,
    phone: undefined,
  };

  itemToUpdate = {
    index: undefined,
    item: undefined,
  };

  constructor() { }

  ngOnInit() {
  }

  create( doctor ) {
    this.dataBase.push( {...doctor} );

    this.clearForm();

    this.toggle.create = false;

    console.log( this.dataBase );
  }

  clearForm() {
    this.doctor.name = undefined;
    this.doctor.crm = undefined;
    this.doctor.specialization = undefined;
    this.doctor.email = undefined;
    this.doctor.phone = undefined;
  }

  update() {
    this.dataBase[this.itemToUpdate.index] = this.itemToUpdate.item;

    this.toggle.update = false;
  }

    openUpdatePopup( item, index ) {
    this.toggle.update = true;

    this.itemToUpdate.item = item;
    this.itemToUpdate.index = index;
  }

  delete( index ) {
    this.dataBase.splice( index, 1 );

    if ( !this.dataBase.length ) this.toggle.read = false;
  }
}