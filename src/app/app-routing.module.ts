import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutPage } from "./about/about.page";
import { HomePage } from "./home/home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "about",
    component: AboutPage,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
