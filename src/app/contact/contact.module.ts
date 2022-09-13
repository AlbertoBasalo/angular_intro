import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactPage } from "./contact.page";

@NgModule({
  declarations: [ContactPage],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
