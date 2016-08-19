import { Component }          from "@angular/core";
import { HeroListComponent }  from "./hero-list.component";

@Component({
  selector: 'http-using-observables-home',
  template: `
  The Http using Observables component
  <br />
  <br />
  <hero-list></hero-list>
  `,
  directives: [HeroListComponent]
})
export class HttpUsingObservablesHomeComponent {

}

