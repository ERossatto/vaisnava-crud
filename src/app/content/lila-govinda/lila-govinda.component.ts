import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser, IGender } from './lila-govinda.interfaces'

@Component({
  selector: 'app-lila-govinda',
  templateUrl: './lila-govinda.component.html',
  styleUrls: ['./lila-govinda.component.scss']
})

export class LilaGovindaComponent implements OnInit {

  public dataBase: Array<IUser> = [];

  public toggle = {
    male: false,
    female: false,
    otherGender: false,
    signUpPopUp: false,
  }

  public user: IUser = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    birthday: undefined,
  }

  public gender: IGender = {
    male: false,
    female: false,
    other: false,
    otherDescription: undefined
  }

  @ViewChild('male') maleCheckBox;
  @ViewChild('female') femaleCheckBox;
  @ViewChild('other') otherCheckBox;

  constructor() { }

  ngOnInit() {
  }

  private clearForm(): void {
    this.user.firstName = undefined;
    this.user.lastName = undefined;
    this.user.email = undefined;
    this.user.password = undefined;
    this.user.birthday = undefined;
    this.gender.male = false;
    this.gender.female = false;
    this.gender.other = false;
    this.gender.otherDescription = undefined;
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

  // private checkError(): boolean {

  // }

  public create(): void {
    // if (this.checkError()) return;

    this.dataBase.push({...this.user});

    this.clearForm();

    this.toggle.signUpPopUp = false;
  }


}
