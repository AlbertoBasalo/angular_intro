import { Component } from "@angular/core";

@Component({
  selector: "app-agencies-new",
  template: `
    <h2>➕ Create a new agency record</h2>
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="range" />
      <input type="text" placeholder="status" />
    </form>
  `,
  styles: [],
})
export class AgenciesNewPage {}
