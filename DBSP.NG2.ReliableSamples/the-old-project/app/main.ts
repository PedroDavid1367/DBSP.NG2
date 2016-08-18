// The next 2 lines might be in the vendro.ts file
import "materializecss";
import "angular2-materialize";

//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {enableProdMode} from '@angular/core';
//import {HTTP_PROVIDERS} from '@angular/http';
//import {AppComponent} from './app.component';
//import { FlightSearchComponent} from './flight-search/flight-search.component';
//import { APP_PROVIDERS} from './app.providers';
//import { APP_ROUTER_PROVIDERS} from './app.routes';

//var providers = [
//  APP_PROVIDERS,
//  APP_ROUTER_PROVIDERS,
//  HTTP_PROVIDERS
//];

//bootstrap(AppComponent, providers);




// The browser platform with a compiler
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// The app module
import { AppModule } from "./app.module";

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);