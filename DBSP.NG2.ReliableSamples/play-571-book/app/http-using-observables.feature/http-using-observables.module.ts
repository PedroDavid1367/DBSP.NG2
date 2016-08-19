import { NgModule }                           from "@angular/core";
import { CommonModule }                       from "@angular/common";

import { routing }                            from "./http-using-observables.routing";
import { HttpUsingObservablesHomeComponent }  from "./http-using-observables-home.component"

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HttpUsingObservablesHomeComponent]
})
export class HttpUsingObservablesModule { }
