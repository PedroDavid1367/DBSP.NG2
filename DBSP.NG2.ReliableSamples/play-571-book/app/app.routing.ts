import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "trips", loadChildren: "./app/trips.feature/trips.module" },
  { path: "rxjs-samples", loadChildren: "./app/rxjs-samples.feature/rxjs-samples.module" }
];

export const routing = RouterModule.forRoot(routes);


