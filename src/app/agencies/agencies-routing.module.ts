import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgenciesPage } from "./agencies.page";

const routes: Routes = [{ path: "", component: AgenciesPage }, { path: 'new', loadChildren: () => import('./agencies-new/agencies-new.module').then(m => m.AgenciesNewModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
