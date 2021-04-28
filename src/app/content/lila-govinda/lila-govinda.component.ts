import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lila-govinda',
  templateUrl: './lila-govinda.component.html',
  styleUrls: ['./lila-govinda.component.scss']
})
export class LilaGovindaComponent implements OnInit {

  // variaveis aqui
  // toggleSignUpPopUp = false;
  // toggleOtherGender = false;

  dataBase = [];

  // mockDataBase = ['um', 'dois', ' tres', 'quatro', 'cinco', 'seis'];

  toggle = {
    male: false,
    female: false,
    otherGender: false,
    signUpPopUp: false,
  }

  user = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    birthday: undefined,
    gender: {
      male: false,
      female: false,
      other: false,
      otherDescription: undefined
    },
  }

  @ViewChild('male') maleCheckBox;
  @ViewChild('female') femaleCheckBox;
  @ViewChild('other') otherCheckBox;

  constructor() { }

  ngOnInit() {
  }

  // metodos (funções) aqui

  userSignUp( user ) {
    this.dataBase.push({...user});

    this.toggle.signUpPopUp = false;

    // chama a resetUser() aqui
  }

  resetUser() {
    // resetar todas os atributos de user (quem comecou undefined volta undefined quem comecou false volta false)
  }

  teste() {
    console.log(this.dataBase)
  }

  fetchSelectedGender() {

    const isChecked = {
      male: this.maleCheckBox.nativeElement.checked,
      female: this.femaleCheckBox.nativeElement.checked,
      other: this.otherCheckBox.nativeElement.checked,
    };

    const resetGender = () => {
      this.user.gender.male = false;
      this.user.gender.female = false;
      this.user.gender.other = false;
      this.user.gender.otherDescription = undefined;
      this.toggle.otherGender = false;
    };

    resetGender();

    if (isChecked.male) {
      this.user.gender.male = true;
    }
    else if (isChecked.female) {
      this.user.gender.female = true;
    }
    else if (isChecked.other) {
      this.toggle.otherGender = true;
      this.user.gender.other = true;
    }

  }

}
