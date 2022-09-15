import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Agency } from "../models/agency.interface";
import { ApiService } from "../services/api.service";
@Component({
  selector: "app-agencies",
  template: `
    <article>
      <button (click)="onNewClick()">➕ Add new Agency</button>
      <ul>
        <li *ngFor="let agency of agencies">
          <a [routerLink]="agency.id">{{ agency.name }}</a>
        </li>
      </ul>
    </article>
  `,
  styles: [],
})
export class AgenciesPage {
  // agencies = this.data.getAgencies();
  agencies: Agency[] = [];

  constructor(private router: Router, private api: ApiService) {
    api.getAgencies$().subscribe({ next: (body) => (this.agencies = body) });
  }

  onNewClick = () => this.router.navigate(["agencies", "new"]);
}
