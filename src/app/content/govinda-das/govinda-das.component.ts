import { Component, OnInit } from '@angular/core';
import { Toggle } from 'app/shared/helpers/switches.interface';
import { IItemToUpdate, IPokemon } from './govinda-das.interfaces';

@Component({
  selector: 'app-govinda-das',
  templateUrl: './govinda-das.component.html',
  styleUrls: ['./govinda-das.component.scss']
})
export class GovindaDasComponent implements OnInit {

  public dataBase: Array<IPokemon> = [];

  public toggle = {
    create: new Toggle(),
    update: new Toggle(),
  };

  public pokemon: IPokemon;

  public itemToUpdate: IItemToUpdate;

  public shakeTest: boolean = false;

  public errorMsg = {
    hasntName: '',
    hasntAtk: '',
    hasntDef: '',
    hasntElement: ''
  };

  constructor() { }

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

  public create(): void {
    if (this.checkError()) return;

    this.dataBase.push( {...this.pokemon} );

    this.clearForm();

    this.toggle.create.hide();
  }

  public update(): void {
    this.dataBase[this.itemToUpdate.index] = this.itemToUpdate.item;

    this.toggle.update.hide();
  }

  public openUpdatePopup( item: IPokemon, index: number ): void {
    this.toggle.update.show();

    this.itemToUpdate.item = item;
    this.itemToUpdate.index = index;
  }

  public delete( index: number ): void {
    this.dataBase.splice( index, 1 );
  }

  teste() {
    this.shakeTest = !this.shakeTest;
  }

}
