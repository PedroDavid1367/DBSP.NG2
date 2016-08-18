import { Routes, RouterModule }      from "@angular/router";
import { RxJSSamplesHomeComponent }  from "./rxjs-samples-home.component";

export const routes: Routes = [
  { path: "", redirectTo: "rxjs-sample", pathMatch: "full" },
  { path: "rxjs-sample", component: RxJSSamplesHomeComponent }
];

export const routing = RouterModule.forChild(routes);