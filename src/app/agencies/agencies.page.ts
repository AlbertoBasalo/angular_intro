import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";
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
  agencies = this.data.getAgencies();

  constructor(private router: Router, private data: DataService) {}

  onNewClick = () => this.router.navigate(["agencies", "new"]);
}
