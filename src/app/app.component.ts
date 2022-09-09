import { Component } from "@angular/core";
import { data } from "./data";

@Component({
  selector: "app-root",
  template: `
    <header>
      <h1>{{ title | uppercase }}</h1>
    </header>
    <main>
      <article>
        <h3>We work with {{ agencies.length }} agencies</h3>
        <ul>
          <li *ngFor="let agency of agencies">
            <span [ngClass]="agency.status | lowercase">{{ agency.name }}</span>
            <!-- <span *ngIf="agency.range==='Interplanetary'"> 🪐 </span>-->
            <!-- <span *ngIf="agency.range === 'Orbital'">🌍</span>-->
            <span *ngIf="agency.range === 'Interplanetary'; else orbitalIcon">
              🪐
            </span>
            <ng-template #orbitalIcon><span>🌍</span></ng-template>
          </li>
        </ul>
      </article>
      <article>
        <h3>Offering {{ getTripsCounter() }} trips</h3>
        <ul>
          <li *ngFor="let trip of trips">
            <span [ngClass]="getClassForStatus(trip.status)">
              {{ trip.destination }}
            </span>
            <span>💸 {{ trip.flightPrice | currency }}</span>
            <span>⤴️ {{ trip.startDate | date: "yyyy-MMM-dd" }}</span>
            <span>⤵️ {{ trip.endDate | date: "yyyy-MMM-dd" }}</span>
            <span [ngClass]="getClassForPlaces(trip.places)">
              🧑🏼‍🚀 {{ trip.places }}
            </span>
            <ng-container
              *ngIf="trip.kind === 'WithStay'; then withStay; else tripOnly"
            ></ng-container>
            <ng-template #withStay>🧳</ng-template>
            <ng-template #tripOnly>🛰️</ng-template>
          </li>
        </ul>
      </article>
      <button (click)="reload()">♻️ Reload</button>
      <aside *ngIf="isReloading">Reloading... please wait. ⌛</aside>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <h6>{{ title }}</h6>
      <p>
        <i>{{ subtitle | lowercase }}</i>
      </p>
      <a [href]="authorUrl">{{ author }}</a>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "Astro Bookings";
  subtitle = "Welcome on board";
  agencies = data.agencies;
  trips = data.trips;
  isReloading = false;
  author = "Alberto Basalo";
  authorUrl = "https://twitter.com/albertobasalo";

  getTripsCounter() {
    return this.trips.length;
  }
  reload(): void {
    this.isReloading = true;
    console.log("♻️ Reloading...");
  }
  getClassForStatus(status: string): string {
    if (status === "Confirmed") {
      return "green";
    } else {
      return "orange";
    }
  }
  getClassForPlaces(places: number) {
    if (places === 0) return "sold-out";
    if (places < 8) return "few-places";
    return "";
  }
}
