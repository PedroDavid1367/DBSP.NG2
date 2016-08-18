import { NgModule }            from "@angular/core";

import { routing }  from "./trips.routing";
import { TripsHomeComponent }  from "./trips-home.component"

@NgModule({
  imports: [routing],
  declarations: [TripsHomeComponent]
})
export class TripsModule { }
