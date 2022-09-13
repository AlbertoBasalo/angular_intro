import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesPage } from './agencies.page';


@NgModule({
  declarations: [
    AgenciesPage
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule
  ]
})
export class AgenciesModule { }
