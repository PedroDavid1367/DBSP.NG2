import { Routes, RouterModule }  from "@angular/router";
import { AppHomeComponent }      from "./app-home.component";

export const routes: Routes = [
  { path: "home", component: AppHomeComponent }
];

export const routing = RouterModule.forChild(routes);
