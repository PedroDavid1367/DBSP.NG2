import { Routes, RouterModule }      from "@angular/router";
import { RxJSSamplesHomeComponent }  from "./rxjs-samples-home.component";

export const routes: Routes = [
  { path: "rxjs-samples", component: RxJSSamplesHomeComponent }
];

export const routing = RouterModule.forChild(routes);