import { NgModule }            from "@angular/core";
import { CommonModule }        from "@angular/common";

import { routing }             from "./notes.routing";
import { NotesHomeComponent }  from "./notes-home.component"

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [NotesHomeComponent]
})
export class NotesModule { }
