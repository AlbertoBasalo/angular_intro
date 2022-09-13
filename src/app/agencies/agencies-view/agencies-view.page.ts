import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-agencies-view",
  template: `
    <article>
      <h2>{{ agencyId }}</h2>
      <p>Agency data coming soon... 🔭</p>
    </article>
  `,
  styles: [],
})
export class AgenciesViewPage implements OnInit {
  agencyId = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.agencyId = this.route.snapshot.paramMap.get("id") || "";
  }
}
