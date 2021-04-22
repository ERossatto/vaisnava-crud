import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lila-govinda',
  templateUrl: './lila-govinda.component.html',
  styleUrls: ['./lila-govinda.component.scss']
})
export class LilaGovindaComponent implements OnInit {

  // variaveis aqui

  dataBase = [];

  mockDataBase = ['um', 'dois', ' tres', 'quatro', 'cinco', 'seis'];

  toggle = {
    register: false,
    othersDescription: false
  }

  constructor() { }

  ngOnInit() {
  }

  // metodos aqui



}
