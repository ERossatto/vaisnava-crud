import { Component, OnInit } from '@angular/core';

import { Toggle } from 'app/shared/helpers/switches.interface';
import { ItemToUpdate, Pokemon } from './govinda-das.interfaces';

import { CrudService } from 'app/shared/services/crud.service';

@Component({
  selector: 'app-govinda-das',
  templateUrl: './govinda-das.component.html',
  styleUrls: ['./govinda-das.component.scss']
})
export class GovindaDasComponent implements OnInit {

  public dataBase: Array<Pokemon> = [];

  public toggle = {
    create: new Toggle(),
    update: new Toggle(),
  };

  public pokemon: Pokemon = new Pokemon();

  public itemToUpdate: ItemToUpdate = new ItemToUpdate();

  public shakeTest: boolean = false;

  public errorMsg = {
    hasntName: '',
    hasntAtk: '',
    hasntDef: '',
    hasntElement: ''
  };

  constructor(
    private _crudService: CrudService<Pokemon>,
  ) { }

  ngOnInit() {
  }

  private clearForm(): void {
    this.pokemon.name = undefined;
    this.pokemon.atk = undefined;
    this.pokemon.def = undefined;
    this.pokemon.element = undefined;
  }

  private checkError(): boolean {

    const hasntName: boolean = !this.pokemon.name;
    const hasntAtk: boolean = !this.pokemon.atk;
    const hasntDef: boolean = !this.pokemon.def;
    const hasntElement: boolean = !this.pokemon.element;

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

  public create( pokemon: Pokemon ): void {
    if (this.checkError()) return;

    this._crudService.create(pokemon);

    this.clearForm();

    this.toggle.create.hide();
  }

  public read(): Array<Pokemon> {
    return this._crudService.read();
  }

  public update(): void {
    this._crudService.update(this.itemToUpdate.index, this.itemToUpdate.item);

    this.toggle.update.hide();
  }

  public openUpdatePopup( item: Pokemon, index: number ): void {
    this.toggle.update.show();

    this.itemToUpdate.item = item;
    this.itemToUpdate.index = index;
  }

  public delete( index: number ): void {
    this._crudService.delete(index);
  }

  teste() {
    this.shakeTest = !this.shakeTest;
  }

}
