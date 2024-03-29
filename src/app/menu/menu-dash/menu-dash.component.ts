import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.scss']
})
export class MenuDashComponent implements OnInit {

  @Input() toggle: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  private _collapseMenu(): void {
    this.toggle = false;
    this.onClose.emit();
  }

  public handleOption(): void {
    this._collapseMenu();
  }

}
