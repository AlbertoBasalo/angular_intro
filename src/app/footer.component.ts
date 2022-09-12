import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <h6>{{ title }}</h6>
      <p [style]="subtitleStyle">{{ subtitle | lowercase }}</p>
      <a [href]="authorUrl">{{ author }}</a>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  title = "Astro Bookings";
  subtitle = "Welcome on board";
  subtitleStyle = "font-style: italic";
  author = "Alberto Basalo";
  authorUrl = "https://twitter.com/albertobasalo";
}
