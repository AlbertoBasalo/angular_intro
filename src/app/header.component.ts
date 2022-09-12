import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <h1>{{ title | uppercase }}</h1>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  title = "Astro Bookings";
}
