import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";

/* App Root */
import { AppComponent }   from "./app.component";

/* Feature Modules */
import { HomeModule }     from "./home.feature/home.module";

//import { RxjsSamplesModule }  from "./rxjs-samples.feature/rxjs-samples.module";
//import { TripsModule }  from "./trips.feature/trips.module";

import { routing }        from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    //RxjsSamplesModule,
    //TripsModule,
    routing
  ],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
