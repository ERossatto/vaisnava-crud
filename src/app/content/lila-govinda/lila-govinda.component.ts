import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lila-govinda',
  templateUrl: './lila-govinda.component.html',
  styleUrls: ['./lila-govinda.component.scss']
})
export class LilaGovindaComponent implements OnInit {

  // variaveis aqui
  toggleSignUpPopUp = false;
  toggleOtherGender = false;

  dataBase = [];

  // mockDataBase = ['um', 'dois', ' tres', 'quatro', 'cinco', 'seis'];

  user = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    birthday: undefined,
    gender: undefined,
  }

  constructor() { }

  ngOnInit() {
  }

  // metodos (funções) aqui

  userSignUp() {
  this.toggleSignUpPopUp = false;
  
  this.dataBase.push({...this.user});
  }

  formSubmit() {
    console.log(this.dataBase)
  }

}
