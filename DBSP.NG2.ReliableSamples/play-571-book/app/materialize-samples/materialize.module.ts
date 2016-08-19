import { NgModule }                  from "@angular/core";
import { CommonModule }              from "@angular/common";

import { routing }                   from "./materialize.routing";
import { MaterializeHomeComponent }  from "./materialize-home.component"

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [MaterializeHomeComponent]
})
export class MaterializeModule { }
