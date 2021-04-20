import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-govinda-das',
  templateUrl: './govinda-das.component.html',
  styleUrls: ['./govinda-das.component.scss']
})
export class GovindaDasComponent implements OnInit {

  dataBase = [];

  toggle = {
    create: false,
    update: false,
  }

  pokemon = {
    name: undefined,
    atk: undefined,
    def: undefined,
    element: undefined,
  };

  itemToUpdate = {
    index: undefined,
    item: undefined,
  }

  constructor() { }

  ngOnInit(): void {
  }

  create() {
    this.dataBase.push( Object.assign( {}, this.pokemon ) );

    this.clearForm();

    this.toggle.create = false;
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
  }

  clearForm() {
    this.pokemon.name = undefined;
    this.pokemon.atk = undefined;
    this.pokemon.def = undefined;
    this.pokemon.element = undefined;
  }

  teste() {
    console.log('nosso database: ', this.dataBase);
  }

}
