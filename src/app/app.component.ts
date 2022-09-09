import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <article>
        <h3>We work with several agencies</h3>
      </article>
      <article>
        <h3>Offering several trips</h3>
      </article>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <h6>{{ title }}</h6>
      <p>Welcome on board</p>
      <a href="https://twitter.com/albertobasalo">Alberto Basalo</a>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "Astro Bookings";
}
