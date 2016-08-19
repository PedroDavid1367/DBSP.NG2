import { Component }                from '@angular/core';
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";
import { HeroListComponent }        from "./hero-list.component";
import { DbspNoteCategoryListComponent } from "./dbsp-note-category-list.component";

@Component({
  selector: "notes-home",
  template: `
  <dbsp-note-category-list></dbsp-note-category-list>
  <hero-list></hero-list>
  `,
  directives: [HeroListComponent, DbspNoteCategoryListComponent]
})
export class NotesHomeComponent {
  
}
