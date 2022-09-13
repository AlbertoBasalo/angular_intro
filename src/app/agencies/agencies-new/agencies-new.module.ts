import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesNewRoutingModule } from './agencies-new-routing.module';
import { AgenciesNewPage } from './agencies-new.page';


@NgModule({
  declarations: [
    AgenciesNewPage
  ],
  imports: [
    CommonModule,
    AgenciesNewRoutingModule
  ]
})
export class AgenciesNewModule { }
