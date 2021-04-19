import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taruni-gopi',
  templateUrl: './taruni-gopi.component.html',
  styleUrls: ['./taruni-gopi.component.scss']
})
export class TaruniGopiComponent implements OnInit {

  toggleOpenCreateRegister = false;
  toggleOpenShowRegisters = false;

  constructor() { }

  ngOnInit(): void {
  }

  createRegister () {
    alert('Haribol!')
    this.toggleOpenCreateRegister = false;
  }

  showRegisters() {

  }
}
