import { NgModule }          from "@angular/core";

import { routing }  from "./home.routing";
import { AppHomeComponent }  from "./app-home.component"

@NgModule({
  imports: [routing],
  declarations: [AppHomeComponent]
})
export class HomeModule { }
