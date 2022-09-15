import { Injectable } from "@angular/core";
import { Agency } from "src/app/models/agency.interface";
import { DataService } from "src/app/services/data.service";
import { HelperService } from "src/app/services/helper.service";

@Injectable({
  providedIn: "root",
})
export class AgenciesNewService {
  constructor(private data: DataService, private helper: HelperService) {}

  saveAgency(formValue: Omit<Agency, "id">) {
    const id = this.helper.createId(formValue.name);
    const agency: Agency = { id, ...formValue };
    this.data.postAgency(agency);
  }
}
