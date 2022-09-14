import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Agency } from "src/app/models/agency.interface";
import { AgenciesNewService } from "./agencies-new.service";

@Component({
  selector: "app-agencies-new",
  template: `
    <h2>➕ Create a new agency record</h2>
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="range" />
      <input type="text" placeholder="status" />
    </form>
  `,
  styles: [],
})
export class AgenciesNewPage {
  formGroup = this.formBuilder.nonNullable.group({
    name: "",
    range: "Orbital",
    status: "Pending",
  });
  constructor(
    private formBuilder: FormBuilder,
    private agenciesNew: AgenciesNewService
  ) {}

  onSave() {
    const formValue: Omit<Agency, "id"> = this.formGroup.getRawValue();
    this.agenciesNew.saveAgency(formValue);
  }
}
