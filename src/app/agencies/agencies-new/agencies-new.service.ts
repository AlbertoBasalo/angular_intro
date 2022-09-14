import { Injectable } from "@angular/core";
import { Agency } from "src/app/models/agency.interface";
import { DataService } from "src/app/services/data.service";

@Injectable({
  providedIn: "root",
})
export class AgenciesNewService {
  constructor(private data: DataService) {}

  saveAgency(formValue: Omit<Agency, "id">) {
    const id = this.createAgencyId(formValue.name);
    const agency = { id, ...formValue };
    this.data.postAgency(agency);
  }

  createAgencyId(name: string = ""): string {
    return name.toLowerCase().replace(" ", "-");
  }
}
