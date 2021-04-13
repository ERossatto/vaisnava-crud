import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GovindaDasComponent } from './govinda-das/govinda-das.component';
import { HomeComponent } from './home/home.component';
import { TulasiDasComponent } from './tulasi-das/tulasi-das.component';
import { TaruniGopiComponent } from './taruni-gopi/taruni-gopi.component';
import { LilaGovindaComponent } from './lila-govinda/lila-govinda.component';

@NgModule({
  declarations: [
    HomeComponent,
    GovindaDasComponent,
    TulasiDasComponent,
    TaruniGopiComponent,
    LilaGovindaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    GovindaDasComponent,
    TulasiDasComponent,
    TaruniGopiComponent,
    LilaGovindaComponent,
  ]
})
export class ContentModule { }
