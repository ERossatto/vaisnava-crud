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
  };

  pokemon = {
    name: undefined,
    atk: undefined,
    def: undefined,
    element: undefined,
  };

  itemToUpdate = {
    index: undefined,
    item: undefined,
  };

  shakeTest = false;

  errorMsg = {
    hasntName: '',
    hasntAtk: '',
    hasntDef: '',
    hasntElement: ''
  };

  constructor() { }

  ngOnInit() {
  }

  checkError() {

    const hasntName = !this.pokemon.name;
    const hasntAtk = !this.pokemon.atk;
    const hasntDef = !this.pokemon.def;
    const hasntElement = !this.pokemon.element;

    if (hasntName) this.errorMsg.hasntName = 'O pokemon precisa ter um nome treinador!';
    else this.errorMsg.hasntName = '';

    if (hasntAtk) this.errorMsg.hasntAtk = 'O pokemon precisa ter ataque treinador!';
    else this.errorMsg.hasntAtk = '';

    if (hasntDef) this.errorMsg.hasntDef = 'O pokemon precisa ter defesa treinador!';
    else this.errorMsg.hasntDef = '';

    if (hasntElement) this.errorMsg.hasntElement = 'O pokemon precisa ter um elemento treinador!';
    else this.errorMsg.hasntElement = '';

    const out = (
      hasntName ||
      hasntAtk ||
      hasntDef ||
      hasntElement
    );

    return out;
  }

  create() {
    if (this.checkError()) return;

    this.dataBase.push( {...this.pokemon} );

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
    this.shakeTest = !this.shakeTest;
  }

}
