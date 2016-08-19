import { NgModule }                       from "@angular/core";
import { CommonModule }                   from "@angular/common";

import { routing }                        from "./notes.routing";
import { NotesHomeComponent }             from "./notes-home.component"
import { HeroListComponent }              from "./hero-list.component";
import { DbspNoteCategoryListComponent }  from "./dbsp-note-category-list.component"; 
import { DbspNoteCategoryComponent }      from "./dbsp-note-category.component";
import { DbspNoteComponent }              from "./dbsp-note.component";

import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    NotesHomeComponent,
    HeroListComponent,
    DbspNoteCategoryListComponent,
    DbspNoteCategoryComponent,
    DbspNoteComponent
  ],
  providers: [
    OidcTokenManagerService
  ]
})
export class NotesModule { }
