import { Component, HostListener, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { User } from './lila-govinda.interfaces'

@Component({
  selector: 'app-lila-govinda',
  templateUrl: './lila-govinda.component.html',
  styleUrls: ['./lila-govinda.component.scss']
})

export class LilaGovindaComponent implements OnInit {

  // variavel de mock de banco de dados que ainda nao existe
  public dataBase: Array<User> = [];

  // objeto de toggles para abrir e fechar coisas
  public toggle = {
    gender: {
      male: false,
      female: false,
      other: false,
    },
    signUpPopUp: false,
  }

  public user: User = new User();

  // view child serve para fazer leitura de uma tag. voce declara uma diretiva de nome na tag e faz a leitura aqui entre parentenses
  @ViewChild('male') maleCheckBox;
  @ViewChild('female') femaleCheckBox;
  @ViewChild('other') otherCheckBox;

  constructor() { }

  ngOnInit() {
    console.log('-->: ', 'Oi LILA');
  }

  ngOnDestroy() {
    console.log('-->: ', 'tchau Lila');
  }


  private clearForm(): void {
    this.user.firstName = undefined;
    this.user.lastName = undefined;
    this.user.email = undefined;
    this.user.password = undefined;
    this.user.birthday = undefined;
    this.user.gender.male = false;
    this.user.gender.female = false;
    this.user.gender.other = false;
    this.user.gender.otherDescription = undefined;
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
      this.toggle.gender.other = false;
    };

    resetGender();

    if (isChecked.male) {
      this.user.gender.male = true;
    }
    else if (isChecked.female) {
      this.user.gender.female = true;
    }
    else if (isChecked.other) {
      this.toggle.gender.other = true;
      this.user.gender.other = true;
    }

  }

  // private checkError(): boolean {

  // }

  public create( user: User ): void {

    // if (this.checkError()) return;

    this.dataBase.push({...user});

    this.clearForm();

    this.toggle.signUpPopUp = false;
  }
}
