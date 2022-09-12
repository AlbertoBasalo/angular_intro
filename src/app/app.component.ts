import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <main>
      <app-home></app-home>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {}
