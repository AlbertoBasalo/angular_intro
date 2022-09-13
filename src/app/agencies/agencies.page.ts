import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { data } from "../data.repository";
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
  agencies = data.agencies;

  constructor(private router: Router) {}

  onNewClick = () => this.router.navigate(["agencies", "new"]);
}
