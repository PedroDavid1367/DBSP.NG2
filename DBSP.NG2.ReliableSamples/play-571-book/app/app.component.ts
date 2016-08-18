import { Component } from "@angular/core";

@Component({
  selector: 'app',
  template: `
  Ok, let's refactor this thing >< <br />
  <nav>
    <a routerLink="trips" routerLinkActive="active">Trips</a>
    <a routerLink="rxjs-samples" routerLinkActive="active">RxJS Samples</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
