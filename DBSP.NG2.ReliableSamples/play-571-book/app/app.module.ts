import { NgModule }            from "@angular/core";
import { BrowserModule }       from "@angular/platform-browser";
//import { CommonModule }        from "@angular/common";
import { HttpModule }          from "@angular/http";
import { APP_PROVIDERS }       from "./app.providers";

/* App Root */
import { AppComponent }        from "./app.component";

/* Feature Modules */
import { HomeModule }          from "./home.feature/home.module";
import { RxjsSamplesModule }   from "./rxjs-samples.feature/rxjs-samples.module";
import { TripsModule }         from "./trips.feature/trips.module";
import { NotesModule }         from "./notes.feature/notes.module";
import { MaterializeModule }   from "./materialize-samples/materialize.module";
import { HttpUsingObservablesModule }  from "./http-using-observables.feature/http-using-observables.module";

import { routing }             from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    //CommonModule,
    HttpModule,
    HomeModule,
    RxjsSamplesModule,
    TripsModule,
    NotesModule,
    MaterializeModule,
    HttpUsingObservablesModule,
    routing
  ],
  providers: [
    APP_PROVIDERS
  ],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
