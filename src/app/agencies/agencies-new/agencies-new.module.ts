import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { AgenciesNewRoutingModule } from "./agencies-new-routing.module";
import { AgenciesNewPage } from "./agencies-new.page";

@NgModule({
  declarations: [AgenciesNewPage],
  imports: [CommonModule, AgenciesNewRoutingModule, SharedModule],
})
export class AgenciesNewModule {}
