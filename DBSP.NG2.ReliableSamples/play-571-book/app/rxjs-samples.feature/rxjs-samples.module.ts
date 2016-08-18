import { NgModule }                  from "@angular/core";

import { routing } from "./rxjs-samples.routing";
import { RxJSSamplesHomeComponent }  from "./rxjs-samples-home.component"

@NgModule({
  imports: [routing],
  declarations: [RxJSSamplesHomeComponent ]
})
export class RxjsSamplesModule { }
