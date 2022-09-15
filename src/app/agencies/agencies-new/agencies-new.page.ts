import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Agency } from "src/app/models/agency.interface";
import { AgenciesNewService } from "./agencies-new.service";

@Component({
  selector: "app-agencies-new",
  template: `
    <h2>➕ Create a new agency record</h2>
    <form [formGroup]="formGroup">
      <div>
        <label for="name">Agency name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          formControlName="name"
        />
      </div>
      <div>
        <label for="range">Operation Range</label>
        <input
          id="range"
          name="range"
          type="text"
          placeholder="range"
          formControlName="range"
        />
      </div>
      <div>
        <label for="status">Agency name</label>
        <input
          id="status"
          name="status"
          type="text"
          placeholder="status"
          formControlName="status"
        />
      </div>
      <button (click)="onSave()">➕ Save Agency</button>
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
    this.agenciesNew.saveAgency(formValue).subscribe({
      next: (body) => console.log("Agency posted: ", body),
    });
  }
}
