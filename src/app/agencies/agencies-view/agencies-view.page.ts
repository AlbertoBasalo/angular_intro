import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Agency } from "src/app/models/agency.interface";
import { DataService } from "src/app/services/data.service";
import { HelperService } from "src/app/services/helper.service";

@Component({
  selector: "app-agencies-view",
  template: `
    <article>
      <h2>{{ agency?.name }}</h2>
      <pre> {{ agency | json }} </pre>
    </article>
  `,
  styles: [],
})
export class AgenciesViewPage implements OnInit {
  agencyId = "";
  agency: Agency | undefined;

  constructor(
    private route: ActivatedRoute,
    private helper: HelperService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.agencyId = this.helper.getIdFromRoute(this.route);
    this.agency = this.data.getAgencyById(this.agencyId);
  }
}
